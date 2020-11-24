import React, {useState} from 'react';
import {
    Alert,
    AlertIcon,
    Box,
    Button,
    Flex,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Grid,
    GridItem,
    Heading,
    Input,
} from '@chakra-ui/react';
import {Formik, FormikHelpers} from 'formik';
import {initialFormValues} from './RegisterForm.constants';
import {validate} from './RegisterForm.helpers';
import {RegisterFormData} from './RegisterForm.types';
import {signup} from '../../api/authAPI';
import {useAuth} from '../../context/AuthProvider';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';

export const RegisterForm: React.FC = () => {
    const {login} = useAuth();
    const [error, setError] = useState<string | null>(null);
    const [cardFocus, setCardFocus] = useState<'number' | 'cvc' | 'expiry' | 'name' | undefined>('number');

    const handleCardFocus = (e: any) => {
        setCardFocus(e.target.name);
    };

    const handleSubmit = (values: RegisterFormData, {setSubmitting}: FormikHelpers<RegisterFormData>) => {
        signup(values.username, values.password, Number(values.cvc), values.expiry.toString(), values.name, Number(values.cardNumber))
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
                                <Flex mt={4} justifyContent={'center'}>
                                    <Heading size={'md'}>Payment details</Heading>
                                </Flex>
                                <FormControl mt={4} isInvalid={!!(errors.cardNumber && touched.cardNumber)}>
                                    <FormLabel>Card number</FormLabel>
                                    <Input
                                        type={'tel'}
                                        placeholder={'**** **** **** ****'}
                                        name={'cardNumber'}
                                        value={values.cardNumber}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        onFocus={handleCardFocus}
                                    />
                                    <FormErrorMessage>{errors.cardNumber}</FormErrorMessage>
                                </FormControl>
                                <FormControl mt={4} isInvalid={!!(errors.name && touched.name)}>
                                    <FormLabel>Name</FormLabel>
                                    <Input
                                        type={'text'}
                                        placeholder={'First and family names'}
                                        name={'name'}
                                        value={values.name}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        onFocus={handleCardFocus}
                                    />
                                    <FormErrorMessage>{errors.name}</FormErrorMessage>
                                </FormControl>
                                <Grid mt={4} mb={4} templateColumns={'repeat(3, 1fr)'} gap={4}>
                                    <GridItem colSpan={2}>
                                        <FormControl isInvalid={!!(errors.expiry && touched.expiry)}>
                                            <FormLabel>Expiry date</FormLabel>
                                            <Input
                                                type={'text'}
                                                placeholder={'**/**'}
                                                name={'expiry'}
                                                value={values.expiry}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                onFocus={handleCardFocus}
                                            />
                                            <FormErrorMessage>{errors.expiry}</FormErrorMessage>
                                        </FormControl>
                                    </GridItem>
                                    <GridItem>
                                        <FormControl isInvalid={!!(errors.cvc && touched.cvc)}>
                                            <FormLabel>CVC</FormLabel>
                                            <Input
                                                type={'password'}
                                                placeholder={'***'}
                                                name={'cvc'}
                                                value={values.cvc}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                onFocus={handleCardFocus}
                                            />
                                            <FormErrorMessage>{errors.cvc}</FormErrorMessage>
                                        </FormControl>
                                    </GridItem>
                                </Grid>
                                <Cards
                                    cvc={values.cvc}
                                    expiry={values.expiry}
                                    name={values.name}
                                    number={values.cardNumber}
                                    focused={cardFocus}
                                />
                                <Button
                                    width={'full'}
                                    mt={4}
                                    type={'submit'}
                                    isDisabled={isSubmitting || !isValid}
                                    isLoading={isSubmitting}
                                    onClick={() => handleSubmit()}
                                    onFocus={handleCardFocus}
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
