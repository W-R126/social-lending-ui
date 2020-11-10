import React from 'react';
import {Box, Button, FormControl, FormErrorMessage, FormLabel, Heading, Input} from '@chakra-ui/core';
import {Formik, FormikHelpers} from 'formik';
import {initialFormValues} from './LoginForm.constants';
import {validate} from './LoginForm.helpers';
import {useAuth} from '../../context/authContext';
import {LoginFormData} from './LoginForm.types';

export const LoginForm: React.FC = () => {
    const {login} = useAuth();

    const handleSubmit = (values: LoginFormData, {setSubmitting}: FormikHelpers<LoginFormData>) => {
        login();
        setSubmitting(false);
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
                                        type={'email'}
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
                                    onClick={handleSubmit}
                                >
                                    Sign In
                                </Button>
                            </form>
                        );
                    }}
                </Formik>
            </Box>
        </Box>
    );
};
