import * as React from 'react';
import {
    Alert,
    AlertIcon,
    Box,
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
import {useState} from 'react';
import {TopUpData} from './TopUp.types';
import {initialFormValues} from './TopUp.constants';
import {useTransactions} from '../../hooks/useTransactions';
import {CardNumber} from '../CardNumber/CardNumber';
import {textBottomPaddingStyle} from '../../common/common.styles';
import {CURRENCY} from '../../../common/constants';
import {leave2DecimalPlaces} from '../../../common/helpers/leave2DecimalPlaces';
import {validateFormAmount} from '../../common/common.helpers';

/**
 * Component responsible for topping up the account.
 * @constructor
 */

export const TopUp: React.FC = () => {
    const [error, setError] = useState<string | null>(null);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    const {sendTopUp} = useTransactions();
    const handleSubmit = (values: TopUpData, {setSubmitting}: FormikHelpers<TopUpData>) => {
        const amountToSend = leave2DecimalPlaces(values.amount);
        sendTopUp(amountToSend).then(success => {
            if (success) {
                setSuccessMessage(`${CURRENCY}${amountToSend} will be added to your account`);
                setError(null);
            } else {
                setError('Failed to top up, please try again later.');
                setSuccessMessage(null);
            }
        });
        setSubmitting(false);
    };

    return (
        <Card>
            <Box w={'100%'}>
                <Heading size={'md'} className={textBottomPaddingStyle}>
                    Top Up
                </Heading>
                <CardNumber />
            </Box>

            <Box w={'100%'}>
                <Formik initialValues={initialFormValues} validate={validateFormAmount} onSubmit={handleSubmit}>
                    {props => {
                        const {values, touched, errors, isSubmitting, isValid, handleChange, handleBlur, handleSubmit} = props;

                        return (
                            <form onSubmit={handleSubmit}>
                                <FormControl isInvalid={!!(errors.amount && touched.amount)}>
                                    <FormLabel>Top up from your card</FormLabel>
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

                                <Button
                                    width={'full'}
                                    mt={4}
                                    type={'submit'}
                                    isDisabled={isSubmitting || !isValid}
                                    isLoading={isSubmitting}
                                >
                                    Top Up
                                </Button>
                                {error !== null && (
                                    <Alert mt={3} status={'error'}>
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
            </Box>
        </Card>
    );
};
