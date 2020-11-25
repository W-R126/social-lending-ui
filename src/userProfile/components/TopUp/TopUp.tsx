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
import {useState} from 'react';
import {TopUpData} from './TopUp.types';
import {initialFormValues} from './TopUp.constants';
import {validate} from './TopUp.helpers';
import {useTransactions} from '../../hooks/useTransactions';
import {useUser} from '../../contexts/UserProvider';

export const TopUp: React.FC = () => {
    const [error, setError] = useState<string | null>(null);
    const {sendTopUp} = useTransactions();
    const accountNo = useUser()?.account;
    const handleSubmit = (values: TopUpData, {setSubmitting}: FormikHelpers<TopUpData>) => {
        console.log(values);
        if (accountNo) {
            sendTopUp(accountNo, values.amount).then(success => {
                if (success) {
                    console.log('nice one');
                } else {
                    setError('Failed to top up, please try again later.');
                }
            });
        }
        setSubmitting(false);
    };

    return (
        <Card>
            <Heading size={'md'}> Top Up </Heading>
            <Formik initialValues={initialFormValues} validate={validate} onSubmit={handleSubmit}>
                {props => {
                    const {values, touched, errors, isSubmitting, isValid, handleChange, handleBlur, handleSubmit} = props;

                    return (
                        <form onSubmit={handleSubmit}>
                            <FormControl isInvalid={!!(errors.amount && touched.amount)}>
                                <FormLabel>Top up from your card</FormLabel>
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
                                Top Up
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
    );
};
