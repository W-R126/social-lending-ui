import * as React from 'react';
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
    Input,
    InputGroup,
    InputLeftElement,
} from '@chakra-ui/react';
import {Card} from '../../../common/components/Card';
import {Formik, FormikHelpers} from 'formik';
import {initialFormValues} from './TransferView.constants';
import {validate} from './TransferView.helpers';
import {newTransferData} from './TransferViewTypes';
import {DatePicker} from '../../../common/components/DatePicker/DatePicker';
import {useState} from 'react';

export const TransferView: React.FC = () => {
    const [error, setError] = useState<string | null>(null);
    const handleSubmit = (values: newTransferData, {setSubmitting}: FormikHelpers<newTransferData>) => {
        console.log(values);
        setSubmitting(false);
        setError(null); // todo: this is temp to avoid build error
    };

    return (
        <Flex justify={'center'}>
            <Card m={4} width={'full'} maxWidth={'800px'}>
                <Heading> Transfer </Heading>
                <Formik initialValues={initialFormValues} validate={validate} onSubmit={handleSubmit}>
                    {props => {
                        const {
                            values,
                            touched,
                            errors,
                            isSubmitting,
                            isValid,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            setFieldValue,
                        } = props;

                        return (
                            <form onSubmit={handleSubmit}>
                                <FormControl isInvalid={!!(errors.transferAmount && touched.transferAmount)}>
                                    <FormLabel>Transfer Amount</FormLabel>
                                    <InputGroup>
                                        <InputLeftElement color="gray.300" fontSize="1.2em" children="$" />
                                        <Input
                                            type={'number'}
                                            placeholder={'transfer amount'}
                                            name={'transferAmount'}
                                            value={values.transferAmount}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                    </InputGroup>
                                    <FormErrorMessage>{errors.transferAmount}</FormErrorMessage>
                                </FormControl>

                                <FormControl mt={3} isInvalid={!!(errors.toAccount && touched.toAccount)}>
                                    <FormLabel>Destination Address</FormLabel>
                                    <InputGroup>
                                        <Input
                                            type={'string'}
                                            placeholder={'ex. 3fa85f64-5717-4562-b3fc-2c963f66afa6'}
                                            name={'toAccount'}
                                            value={values.toAccount}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                    </InputGroup>
                                    <FormErrorMessage>{errors.toAccount}</FormErrorMessage>
                                </FormControl>

                                <FormControl mt={3}>
                                    <FormLabel>transfer date</FormLabel>
                                    <DatePicker
                                        name={'transferDate'}
                                        value={values.transferDate}
                                        onChange={setFieldValue}
                                        showPopperArrow={true}
                                    />
                                </FormControl>

                                <Button
                                    width={'full'}
                                    mt={4}
                                    type={'submit'}
                                    isDisabled={isSubmitting || !isValid}
                                    isLoading={isSubmitting}
                                    onClick={() => handleSubmit()}
                                >
                                    Send Transfer
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
