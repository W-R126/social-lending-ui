import * as React from 'react';
import {Card} from '../../../common/components/Card';
import {Button, Flex, Stack, Stat, StatHelpText, Text, useDisclosure, useToast} from '@chakra-ui/react';
import {StatusBadge} from '../StatusBadge';
import {CURRENCY} from '../../../common/constants';
import {Installment, InstallmentStatus, Loan} from '../../api/loansAPI.types';
import {getCurrentInstallment, sortInvestmentsById} from './BrowseLoans.helpers';
import {useHistory} from 'react-router';
import {Routes} from '../../../routing/routes';
import {AreYouSureAlert} from '../../../common/components/AreYouSureAlert';
import {formatDate} from '../../helpers/formatDate';
import {areYouSureText} from './BrowseLoansItem.constants';

/**
 * Parameter definitions for {@link BrowseLoansItem}
 */
interface ItemProps {
    /**
     * Loan info to be shown
     */
    loan: Loan;
    /**
     * Pay installment with specified data.
     * Makes call to hook which makes call to api
     * @param loanId id of loan in which installment is
     * @param amount value of installment which will be payed
     */
    payInstallment: (loanId: number, amount: number) => Promise<boolean>;
    /**
     * True if payment procedure is not finished,
     * false otherwise
     */
    isPaymentFetching: boolean;
}

/**
 * Loan item which will be displayed in the
 * {@link BrowseLoans} component as a list.
 * Shortly describes the most recent not paid
 * installment and makes ability to pay for it
 *
 * After pushing "see details" button, user is redirected
 * to {@link BorrowerLoanHistoryView}
 *
 * When "Pay installment" is pressed, after prompt,
 * installment is being paid
 *
 * When successful, then green toast is produced,
 * when failure, then red toast with appropriate
 * messages are displayed
 * @param loan
 * @param payInstallment
 * @param isPaymentFetching
 * @constructor
 */
export const BrowseLoansItem: React.FC<ItemProps> = ({loan, payInstallment, isPaymentFetching}) => {
    const history = useHistory();
    const {isOpen, onOpen, onClose} = useDisclosure();
    const toast = useToast();
    const currentInstallment = getCurrentInstallment(sortInvestmentsById(loan.installments));

    const handleOpenDetails = () => {
        history.push(Routes.BORROWER_LOANS_DETAILS.replace(':loanId', loan.id.toString()));
    };
    const handleConsent = async (installment: Installment, loanId: number) => {
        const isSuccessful = await payInstallment(loanId, installment.total);
        onClose();
        if (isSuccessful) {
            toast({
                title: 'Installment paid.',
                description: `${CURRENCY}${installment.total} was taken from your account`,
                status: 'success',
                duration: 4000,
                isClosable: true,
            });
        } else {
            toast({
                title: 'Installment payment failed.',
                description: 'Not enough funds on your account',
                status: 'error',
                duration: 4000,
                isClosable: true,
            });
        }
    };

    return (
        <Card maxWidth={'500px'} width={'full'}>
            <Stack direction={'column'}>
                {!!currentInstallment ? (
                    <>
                        <Flex justify={'space-between'}>
                            <StatusBadge status={currentInstallment.status} />
                            <Flex alignItems={'flex-end'} flexDir={'column'}>
                                <Text fontSize={'3xl'} lineHeight={1} ml={1} name="LoanLeft">
                                    {CURRENCY}
                                    {currentInstallment.status !== InstallmentStatus.PAID ? currentInstallment.left : 0}
                                </Text>
                                <Stat alignItems={'right'}>
                                    <StatHelpText mb={0} mt={1}>
                                        Amount of loan left
                                    </StatHelpText>
                                </Stat>
                            </Flex>
                        </Flex>
                        <Flex justify={'flex-start'} align={'flex-end'}>
                            <Stat>
                                {currentInstallment.status !== InstallmentStatus.PAID ? (
                                    <>
                                        <Text>Current installment</Text>
                                        <StatHelpText mb={0}>
                                            {CURRENCY}
                                            {currentInstallment.fine} fine
                                        </StatHelpText>
                                        <StatHelpText mb={0}>
                                            {CURRENCY}
                                            <Flex name="valueToPay" display={'inline'}>
                                                {currentInstallment.total}
                                            </Flex>{' '}
                                            value to pay
                                        </StatHelpText>
                                        <StatHelpText name="dueDate" mb={0}>
                                            Due {formatDate(currentInstallment.due)}
                                        </StatHelpText>
                                    </>
                                ) : (
                                    <></>
                                )}
                            </Stat>
                            <Flex flexDir={'column'} justifyContent={'space-between'}>
                                <Button mb={2} colorScheme={'teal'} onClick={handleOpenDetails}>
                                    See details
                                </Button>
                                <Button
                                    disabled={currentInstallment.status.toString() === InstallmentStatus.PAID}
                                    colorScheme={'teal'}
                                    onClick={onOpen}
                                >
                                    Pay installment
                                </Button>
                                <AreYouSureAlert
                                    isLoading={isPaymentFetching}
                                    isOpen={isOpen}
                                    onClose={onClose}
                                    onConsent={() => handleConsent(currentInstallment, loan.id)}
                                    dialogText={areYouSureText(currentInstallment.total)}
                                    title={'Pay installment'}
                                />
                            </Flex>
                        </Flex>
                    </>
                ) : (
                    <Flex justifyContent={'center'} alignItems={'center'}>
                        <Text>Wait till installment fetches</Text>
                    </Flex>
                )}
            </Stack>
        </Card>
    );
};
