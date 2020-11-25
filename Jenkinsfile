pipeline {
    agent {
        docker {
            image 'fintech/base-agent'
            args '--network host -e DOCKER_HOST=tcp://localhost:2375'
        }
    }
    options {
        ansiColor('xterm')
        timestamps()
    }
    environment {
        CI = 'true'
    }
    stages {
        stage('Build') {
            agent {
                docker {
                    image 'node:12.16.1-stretch-slim'
                    reuseNode true
                }
            }
            steps {
                sh 'echo "registry=https://nexus.fintechchallenge.pl/repository/npm" >> ~/.npmrc'
                sh 'yarn'
                sh 'yarn build'
            }
        }
        stage('Test') {
            agent {
                docker {
                    image 'node:12.16.1-stretch-slim'
                    reuseNode true
                }
            }
            steps {
                sh 'yarn test'
            }
        }
        stage('Test e2e') {
            agent {
                docker {
                    image 'cypress/base:10'
                    reuseNode true
                }
            }
            steps {
                sh "yarn run cypress install"
                sh "yarn run cy:verify"
                sh "yarn run e2e"
            }
        }
        stage('Sonar') {
            when { branch 'master' }
            agent {
                docker {
                    image 'fintech/sonar-agent'
                    reuseNode true
                }
            }
            steps {
                withSonarQubeEnv('SonarQube') {
                    script {
                        sh "sonar-scanner"
                    }
                }
            }
        }
        stage('Docker push') {
            when { branch 'master' }
            agent {
                docker {
                    image 'fintech/base-agent'
                    reuseNode true
                    args '--network host -e DOCKER_HOST=tcp://localhost:2375'
                }
            }
            steps {
                script {
                    docker.withRegistry("https://metis-team-docker-registry.fintechchallenge.pl/v2/", 'docker-push-user') {
                        def build = docker.build("metis-team/social-lending", '-f ./docker/Dockerfile .')
                        def commitHash = sh(
                            script: 'git rev-parse HEAD',
                            returnStdout: true
                        )
                        build.push(commitHash)
                        build.push("latest")
                    }
                }
            }
        }
        stage('Deploy Sit') {
            when { branch 'master' }
            agent {
                docker {
                    image 'fintech/kubernetes-agent'
                    reuseNode true
                }
            }
            steps {
                script {
                    withCredentials([file(credentialsId: 'kubeconfig-sit', variable: 'KUBECONFIG')]) {
                        sh "kubectl apply -f ./kubernetes-sit.yaml"
                        sh "kubectl rollout restart deployment social-lending"
                        sh "kubectl rollout status deployment social-lending --timeout=5m"
                    }
                }
            }
        }
        stage('Deploy Uat') {
            when { branch 'master' }
            agent {
                docker {
                    image 'fintech/kubernetes-agent'
                    reuseNode true
                }
            }
            steps {
                script {
                    withCredentials([file(credentialsId: 'kubeconfig-uat', variable: 'KUBECONFIG')]) {
                        sh "kubectl apply -f ./kubernetes-uat.yaml"
                        sh "kubectl rollout restart deployment social-lending"
                        sh "kubectl rollout status deployment social-lending --timeout=5m"
                    }
                }
            }
        }
    }
}