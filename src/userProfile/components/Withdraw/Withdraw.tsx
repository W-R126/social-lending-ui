import React, {useState} from 'react';
import {
    Button,
    Heading,
    FormControl,
    FormLabel,
    InputGroup,
    InputLeftElement,
    Input,
    FormErrorMessage,
    Alert,
    AlertIcon,
} from '@chakra-ui/react';
import {Card} from '../../../common/components/Card';
import {Formik, FormikHelpers} from 'formik';
import {initialFormValues} from './Withdraw.constants';
import {WithdrawData} from './Withdraw.types';
import {CardNumber} from '../CardNumber/CardNumber';
import {useTransactions} from '../../hooks/useTransactions';
import {textBottomPaddingStyle} from '../../common/common.styles';
import {CURRENCY} from '../../../common/constants';
import {leave2DecimalPlaces} from '../../../common/helpers/leave2DecimalPlaces';
import {validateFormAmount} from '../../common/common.helpers';

/**
 * Component responsible for withdrawing to the card.
 * @constructor
 */

export const Withdraw: React.FC = () => {
    const [error, setError] = useState<string | null>(null);
    const {sendWithdrawal} = useTransactions();
    const [successMessage, setSuccessMessage] = useState<string | null>(null);

    const handleSubmit = (values: WithdrawData, {setSubmitting}: FormikHelpers<WithdrawData>) => {
        const amountToSend = leave2DecimalPlaces(values.amount);
        sendWithdrawal(amountToSend).then(success => {
            if (success) {
                setSuccessMessage(`${CURRENCY}${amountToSend} will be sent to your card`);
                setError(null);
            } else {
                setError('Failed to send to your card, please ensure you have enough funds');
                setSuccessMessage(null);
            }
        });
        setSubmitting(false);
    };
    return (
        <Card>
            <Heading size={'md'} className={textBottomPaddingStyle}>
                Withdraw to your card
            </Heading>
            <CardNumber />

            <Formik initialValues={initialFormValues} validate={validateFormAmount} onSubmit={handleSubmit}>
                {props => {
                    const {values, touched, errors, isSubmitting, isValid, handleChange, handleBlur, handleSubmit} = props;

                    return (
                        <form onSubmit={handleSubmit}>
                            <FormControl isInvalid={!!(errors.amount && touched.amount)}>
                                <FormLabel>Withdraw to your card</FormLabel>
                                <InputGroup>
                                    <InputLeftElement color="gray.300" fontSize="1.2em" children={CURRENCY} />
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

                            <Button width={'full'} mt={4} type={'submit'} isDisabled={isSubmitting || !isValid} isLoading={isSubmitting}>
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
