import React, {useState} from 'react';
import {Card} from '../../../common/components/Card';
import {Alert, AlertIcon, Button, Flex, FormControl, FormErrorMessage, FormLabel, Heading, Input} from '@chakra-ui/core';
import {Formik, FormikHelpers} from 'formik';
import {initialFormValues} from './CreateAuctionView.constants';
import {validate} from './CreateAuctionView.helpers';
import {LoginFormData} from '../../../authentication/components/LoginForm/LoginForm.types';

export const CreateAuctionView: React.FC = () => {
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = (values: LoginFormData, {setSubmitting}: FormikHelpers<LoginFormData>) => {
        setError('ERROR: throw the computer out of the window!');
        setSubmitting(false);
    };

    return (
        <Flex justify={'center'}>
            <Card m={4} width={'full'} maxWidth={'800px'}>
                <Heading>Create New Auction</Heading>
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
            </Card>
        </Flex>
    );
};
