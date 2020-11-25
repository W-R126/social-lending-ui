import React, {useEffect, useState} from 'react';
import {
    Button,
    Flex,
    Text,
    useClipboard,
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
import {useUser} from '../../contexts/UserProvider';
import {Formik, FormikHelpers} from 'formik';
import {initialFormValues} from './TopUp.constants';
import {validate} from './TopUp.helpers';
import {TopUpData} from './TopUp.types';
import {cardWidth} from '../../common/common.constants';
import {useTransactions} from '../../hooks/useTransactions';

export const TopUp: React.FC = () => {
    const user = useUser();
    const account = user?.account;
    const [accountNo, setAccountNo] = React.useState('');
    const {hasCopied, onCopy} = useClipboard(accountNo);
    const [error, setError] = useState<string | null>(null);
    useEffect(() => {
        if (account) {
            setAccountNo(account);
        }
    });

    const {topUp} = useTransactions();

    const handleSubmit = (values: TopUpData, {setSubmitting}: FormikHelpers<TopUpData>) => {
        topUp(accountNo, values.amount).then(success => {
            if (success) {
                console.log(success);
                console.log('topped up');
            } else {
                setError('Something went wrong, please try again later');
            }
        });
        setSubmitting(false);
    };

    return (
        <Card>
            <Heading size={'md'}>Top up your account</Heading>
            <Text> Account Number: </Text>
            <Text fontSize="md">{accountNo}</Text>

            <Button onClick={onCopy} width={'full'}>
                {hasCopied ? 'Copied' : 'Copy'}
            </Button>
            <Formik initialValues={initialFormValues} validate={validate} onSubmit={handleSubmit}>
                {props => {
                    const {values, touched, errors, isSubmitting, isValid, handleChange, handleBlur, handleSubmit, setFieldValue} = props;

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
