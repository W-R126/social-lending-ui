import React, {useState} from 'react';
import {Card} from '../../../common/components/Card';
import {
    Alert,
    AlertIcon,
    Button,
    Flex,
    FormControl,
    FormErrorMessage,
    FormHelperText,
    FormLabel,
    Heading,
    Icon,
    Input,
    InputGroup,
    InputLeftElement,
    InputRightElement,
} from '@chakra-ui/core';
import {Formik, FormikHelpers} from 'formik';
import {initialFormValues} from './CreateAuctionView.constants';
import {validate} from './CreateAuctionView.helpers';
import {CreateAuctionFormData} from './CreateAuctionView.types';
import {DatePicker} from '../../../common/components/DatePicker/DatePicker';

export const CreateAuctionView: React.FC = () => {
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = (values: CreateAuctionFormData, {setSubmitting}: FormikHelpers<CreateAuctionFormData>) => {
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
                                <FormControl isInvalid={!!(errors.loanAmount && touched.loanAmount)}>
                                    <FormLabel>Loan amount</FormLabel>
                                    <InputGroup>
                                        <InputLeftElement color="gray.300" fontSize="1.2em" children="$" />
                                        <Input
                                            type={'number'}
                                            placeholder={'loan amount'}
                                            name={'loanAmount'}
                                            value={values.loanAmount}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        {!errors.loanAmount && <InputRightElement children={<Icon name="check" color="green.500" />} />}
                                    </InputGroup>
                                    <FormErrorMessage>{errors.loanAmount}</FormErrorMessage>
                                </FormControl>

                                <FormControl mt={3} isInvalid={!!(errors.numberOfInstallments && touched.numberOfInstallments)}>
                                    <FormLabel>Target number of installments</FormLabel>
                                    <InputGroup>
                                        <Input
                                            type={'number'}
                                            placeholder={'target number of installments'}
                                            name={'numberOfInstallments'}
                                            value={values.numberOfInstallments}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        {!errors.numberOfInstallments && (
                                            <InputRightElement children={<Icon name="check" color="green.500" />} />
                                        )}
                                    </InputGroup>
                                    <FormErrorMessage>{errors.numberOfInstallments}</FormErrorMessage>
                                </FormControl>

                                <FormControl>
                                    <FormLabel htmlFor="published-date">Published Date</FormLabel>
                                    <DatePicker
                                        id="published-date"
                                        selectedDate={values.endDate}
                                        onChange={handleChange}
                                        showPopperArrow={true}
                                    />
                                    <FormHelperText>Date this widget was published</FormHelperText>
                                </FormControl>

                                <Button
                                    width={'full'}
                                    mt={4}
                                    type={'submit'}
                                    isDisabled={isSubmitting || !isValid}
                                    isLoading={isSubmitting}
                                    onClick={handleSubmit}
                                >
                                    Create Auction
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
