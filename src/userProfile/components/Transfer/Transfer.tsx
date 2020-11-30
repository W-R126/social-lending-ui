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
import {ExternalTransferData} from './Transfer.types';
import {useState} from 'react';
import {boxStyle, textBottomPaddingStyle} from '../../common/common.styles';
import {useTransactions} from '../../hooks/useTransactions';
import {CURRENCY} from '../../../common/constants';
import {leave2DecimalPlaces} from '../../../common/helpers/leave2DecimalPlaces';

/**
 * Component responsible for user transfers
 * @constructor
 */
export const Transfer: React.FC = () => {
    const [error, setError] = useState<string | null>(null);
    const {sendWithdrawal} = useTransactions();
    const [successMessage, setSuccessMessage] = useState<string | null>(null);

    const handleSubmit = (values: ExternalTransferData, {setSubmitting}: FormikHelpers<ExternalTransferData>) => {
        const amountToSend = leave2DecimalPlaces(values.amount);
        sendWithdrawal(amountToSend).then(success => {
            if (success) {
                setSuccessMessage(`${CURRENCY}${amountToSend} will be transferred`);
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
            <Heading size={'md'} className={textBottomPaddingStyle}>
                External Transfer
            </Heading>
            <Formik initialValues={initialFormValues} validate={validate} onSubmit={handleSubmit}>
                {props => {
                    const {values, touched, errors, isSubmitting, isValid, handleChange, handleBlur, handleSubmit} = props;

                    return (
                        <form onSubmit={handleSubmit}>
                            <FormControl isInvalid={!!(errors.amount && touched.amount)}>
                                <FormLabel>Transfer Amount</FormLabel>
                                <InputGroup>
                                    <InputLeftElement color="gray.300" fontSize="1.2em" children={CURRENCY} />
                                    <Input
                                        type={'number'}
                                        placeholder={'amount'}
                                        name={'amount'}
                                        value={values.amount}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        data-cy={'transferAmountInput'}
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
                                        data-cy={'transferAddressInput'}
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
