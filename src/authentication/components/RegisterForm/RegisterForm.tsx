import React, {useState} from 'react';
import {Alert, AlertIcon, Box, Button, FormControl, FormErrorMessage, FormLabel, Heading, Input} from '@chakra-ui/react';
import {Formik, FormikHelpers} from 'formik';
import {initialFormValues} from './RegisterForm.constants';
import {validate} from './RegisterForm.helpers';
import {RegisterFormData} from './RegisterForm.types';
import {signup} from '../../api/authAPI';
import {useAuth} from '../../context/AuthProvider';

export const RegisterForm: React.FC = () => {
    const {login} = useAuth();
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = (values: RegisterFormData, {setSubmitting}: FormikHelpers<RegisterFormData>) => {
        signup(values.username, values.password)
            .then(async success => {
                if (success) {
                    const result = await login(values.username, values.password);

                    if (!result) {
                        setError('Something went wrong. Please try again or try different username/password.');
                    }
                } else {
                    setError('User already exists!');
                }
            })
            .finally(() => setSubmitting(false));
    };

    return (
        <Box width={'full'} maxWidth={500} p={8} borderWidth={1} borderRadius={8} boxShadow={'lg'}>
            <Box textAlign={'center'}>
                <Heading>Register</Heading>
            </Box>

            <Box my={4} mb={0} textAlign={'left'}>
                <Formik initialValues={initialFormValues} validate={validate} onSubmit={handleSubmit}>
                    {props => {
                        const {values, touched, errors, isSubmitting, isValid, handleChange, handleBlur, handleSubmit} = props;

                        return (
                            <form onSubmit={handleSubmit}>
                                <FormControl isInvalid={!!(errors.username && touched.username)}>
                                    <FormLabel>Username</FormLabel>
                                    <Input
                                        type={'text'}
                                        placeholder={'username'}
                                        name={'username'}
                                        value={values.username}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    <FormErrorMessage>{errors.username}</FormErrorMessage>
                                </FormControl>

                                <FormControl mt={4} isInvalid={!!(errors.password && touched.password)}>
                                    <FormLabel>Password</FormLabel>
                                    <Input
                                        type={'password'}
                                        placeholder={'********'}
                                        name={'password'}
                                        value={values.password}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    <FormErrorMessage>{errors.password}</FormErrorMessage>
                                </FormControl>

                                <FormControl mt={4} isInvalid={!!(errors.confirmPassword && touched.confirmPassword)}>
                                    <FormLabel>Confirm password</FormLabel>
                                    <Input
                                        type={'password'}
                                        placeholder={'********'}
                                        name={'confirmPassword'}
                                        value={values.confirmPassword}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    <FormErrorMessage>{errors.confirmPassword}</FormErrorMessage>
                                </FormControl>

                                <Button
                                    width={'full'}
                                    mt={4}
                                    type={'submit'}
                                    isDisabled={isSubmitting || !isValid}
                                    isLoading={isSubmitting}
                                    onClick={() => handleSubmit()}
                                >
                                    Sign up
                                </Button>
                                {error !== null && (
                                    <Alert mt={3} status="error">
                                        <AlertIcon />
                                        {error}
                                    </Alert>
                                )}
                            </form>
                        );
                    }}
                </Formik>
            </Box>
        </Box>
    );
};
