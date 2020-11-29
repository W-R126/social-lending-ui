import React, {useState} from 'react';
import {Alert, AlertIcon, Box, Button, FormControl, FormErrorMessage, FormLabel, Heading, Input} from '@chakra-ui/react';
import {Formik, FormikHelpers} from 'formik';
import {initialFormValues} from './LoginForm.constants';
import {validate} from './LoginForm.helpers';
import {LoginFormData} from './LoginForm.types';
import {useAuth} from '../../context/AuthProvider';

/**
 * Form for logging in via username and password
 */
export const LoginForm: React.FC = () => {
    const {login} = useAuth();
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = (values: LoginFormData, {setSubmitting}: FormikHelpers<LoginFormData>) => {
        login(values.username, values.password)
            .then(success => {
                if (!success) {
                    setError('Wrong username or password!');
                } else {
                    setError(null);
                }
            })
            .finally(() => setSubmitting(false));
    };

    return (
        <Box width={'full'} maxWidth={500} p={8} borderWidth={1} borderRadius={8} boxShadow={'lg'}>
            <Box textAlign={'center'}>
                <Heading>Welcome back</Heading>
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

                                <Button
                                    width={'full'}
                                    mt={4}
                                    type={'submit'}
                                    isDisabled={isSubmitting || !isValid}
                                    isLoading={isSubmitting}
                                    onClick={() => handleSubmit()}
                                >
                                    Sign In
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
