import * as React from 'react';
import {Card} from '../../../common/components/Card';
import {Button, Flex, Stack, Stat, StatHelpText, Text, useDisclosure} from '@chakra-ui/react';
import {StatusBadge} from '../StatusBadge';
import {CURRENCY} from '../../../common/constants';
import {Loan} from '../../api/loansAPI.types';
import {getCurrentInstallment, onPayInstallment} from './BrowseLoans.helpers';
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
}

/**
 * Loan item which will be displayed in the
 * {@link BrowseLoans} component as a list.
 * Shortly describes the most recent not paid
 * installment and makes ability to pay for it
 *
 * After pushing see details button, user is redirected
 * to {@link BorrowerLoanHistoryView}
 *
 * When Pay installment is pressed, after prompt,
 * installment is being paid
 * @param loan
 * @constructor
 */
export const BrowseLoansItem: React.FC<ItemProps> = ({loan}) => {
    const history = useHistory();
    const {isOpen, onOpen, onClose} = useDisclosure();
    const currentInstallment = getCurrentInstallment(loan.installments);

    const handleOpenDetails = () => {
        history.push(Routes.BORROWER_LOANS_DETAILS.replace(':loanId', loan.id.toString()));
    };
    const handleConsent = (id: number) => {
        onPayInstallment(id);
        onClose();
    };

    return (
        <Card maxWidth={'500px'} width={'full'}>
            <Stack direction={'column'}>
                {!!currentInstallment ? (
                    <>
                        <Flex justify={'space-between'}>
                            <StatusBadge status={currentInstallment.status} />
                            <Flex alignItems={'flex-end'}>
                                <Text as="span" fontSize={'sm'} color={'gray.500'} lineHeight={1.4}>
                                    {CURRENCY}
                                </Text>
                                <Text fontSize={'3xl'} lineHeight={1} ml={1}>
                                    {currentInstallment.total}
                                </Text>
                            </Flex>
                        </Flex>
                        <Flex justify={'flex-start'} align={'flex-end'}>
                            <Stat>
                                <StatHelpText mb={0}>
                                    {CURRENCY}
                                    {currentInstallment.fine} fine
                                </StatHelpText>
                                <StatHelpText mb={0}>
                                    {CURRENCY}
                                    {currentInstallment.left} left
                                </StatHelpText>
                                <StatHelpText mb={0}>Due {formatDate(currentInstallment.due)}</StatHelpText>
                            </Stat>
                            <Flex flexDir={'column'} justifyContent={'space-between'}>
                                <Button mb={2} colorScheme={'teal'} onClick={handleOpenDetails}>
                                    See details
                                </Button>
                                <Button disabled={currentInstallment.status === 'PAID'} colorScheme={'teal'} onClick={onOpen}>
                                    Pay installment
                                </Button>
                                <AreYouSureAlert
                                    isOpen={isOpen}
                                    onClose={onClose}
                                    onConsent={() => handleConsent(loan.id)}
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
