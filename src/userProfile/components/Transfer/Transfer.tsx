import * as React from 'react';
import {
    Alert,
    AlertIcon,
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Heading,
    Input,
    InputGroup,
    InputLeftElement,
} from '@chakra-ui/react';
import {Card} from '../../../common/components/Card';
import {Formik, FormikHelpers} from 'formik';
import {initialFormValues} from './Transfer.constants';
import {validate} from './Transfer.helpers';
import {newTransferData} from './Transfer.types';
import {useState} from 'react';
import {boxStyle} from '../../views/AccountView/AccountView.styles';
import {useTransactions} from '../../hooks/useTransactions';

export const Transfer: React.FC = () => {
    const [error, setError] = useState<string | null>(null);
    const {sendWithdrawal} = useTransactions();
    const [successMessage, setSuccessMessage] = useState<string | null>(null);

    const handleSubmit = (values: newTransferData, {setSubmitting}: FormikHelpers<newTransferData>) => {
        sendWithdrawal(values.amount).then(success => {
            if (success) {
                setSuccessMessage(`$${values.amount} will be transferred`);
                setError(null);
            } else {
                setError('Failed to transfer, please ensure you have enough funds');
                setSuccessMessage(null);
            }
        });
        setSubmitting(false);
    };

    return (
        <Card className={boxStyle}>
            <Heading size={'md'}> External Transfer </Heading>
            <br />
            <Formik initialValues={initialFormValues} validate={validate} onSubmit={handleSubmit}>
                {props => {
                    const {values, touched, errors, isSubmitting, isValid, handleChange, handleBlur, handleSubmit} = props;

                    return (
                        <form onSubmit={handleSubmit}>
                            <FormControl isInvalid={!!(errors.amount && touched.amount)}>
                                <FormLabel>Transfer Amount</FormLabel>
                                <InputGroup>
                                    <InputLeftElement color="gray.300" fontSize="1.2em" children="$" />
                                    <Input
                                        type={'number'}
                                        placeholder={'amount'}
                                        name={'amount'}
                                        value={values.amount}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                </InputGroup>
                                <FormErrorMessage>{errors.amount}</FormErrorMessage>
                            </FormControl>

                            <FormControl mt={3} isInvalid={!!(errors.toAccount && touched.toAccount)}>
                                <FormLabel>Destination Address</FormLabel>
                                <InputGroup>
                                    <Input
                                        type={'string'}
                                        placeholder={'ex. 0000-0000-0000-0000'}
                                        name={'toAccount'}
                                        value={values.toAccount}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                </InputGroup>
                                <FormErrorMessage>{errors.toAccount}</FormErrorMessage>
                            </FormControl>

                            <Button width={'full'} mt={4} type={'submit'} isDisabled={isSubmitting || !isValid} isLoading={isSubmitting}>
                                Send Transfer
                            </Button>
                            {error !== null && (
                                <Alert mt={3} status="error">
                                    <AlertIcon />
                                    {error}
                                </Alert>
                            )}
                            {successMessage !== null && (
                                <Alert mt={3} status={'success'}>
                                    <AlertIcon />
                                    {successMessage}
                                </Alert>
                            )}
                        </form>
                    );
                }}
            </Formik>
        </Card>
    );
};
