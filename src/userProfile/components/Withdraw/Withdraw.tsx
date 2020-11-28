import React, {useState} from 'react';
import {
    Button,
    Text,
    Heading,
    FormControl,
    FormLabel,
    InputGroup,
    InputLeftElement,
    Input,
    FormErrorMessage,
    Alert,
    AlertIcon,
    Box,
} from '@chakra-ui/react';
import {Card} from '../../../common/components/Card';
//import {useUser} from '../../contexts/UserProvider';
import {Formik, FormikHelpers} from 'formik';
import {initialFormValues} from './Withdraw.constants';
import {validate} from './Withdraw.helpers';
import {WithdrawData} from './Withdraw.types';
import {boxStyle} from '../../views/AccountView/AccountView.styles';
import {CardEnding} from '../CardEnding';
import {useTransactions} from '../../hooks/useTransactions';

export const Withdraw: React.FC = () => {
    const [error, setError] = useState<string | null>(null);
    const {sendWithdrawal} = useTransactions();
    const [successMessage, setSuccessMessage] = useState<string | null>(null);

    const handleSubmit = (values: WithdrawData, {setSubmitting}: FormikHelpers<WithdrawData>) => {
        sendWithdrawal(values.amount).then(success => {
            if (success) {
                setSuccessMessage(`$${values.amount} will be sent to your card`);
                setError(null);
            } else {
                setError('Failed to send funds to your card, please ensure you have enough funds');
                setSuccessMessage(null);
            }
        });
        setSubmitting(false);
    };
    return (
        <Card>
            <Heading size={'md'}>Withdraw to your card</Heading>
            <br />
            <CardEnding />

            <Formik initialValues={initialFormValues} validate={validate} onSubmit={handleSubmit}>
                {props => {
                    const {values, touched, errors, isSubmitting, isValid, handleChange, handleBlur, handleSubmit} = props;

                    return (
                        <form onSubmit={handleSubmit}>
                            <FormControl isInvalid={!!(errors.amount && touched.amount)}>
                                <FormLabel>Withdraw to your card</FormLabel>
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

                            <Button
                                width={'full'}
                                mt={4}
                                type={'submit'}
                                isDisabled={isSubmitting || !isValid}
                                isLoading={isSubmitting}
                                onClick={() => handleSubmit()}
                            >
                                Withdraw
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
