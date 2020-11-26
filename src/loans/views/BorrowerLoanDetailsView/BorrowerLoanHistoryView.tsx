import * as React from 'react';
import {BrowseLoanHistory} from '../../components/BrowseLoanHistory';
import {useParams} from 'react-router';
import {Flex, Skeleton} from '@chakra-ui/react';
import {useBorrowerLoans} from '../../hooks/useBorrowerLoans';
import {useInit} from '../../../common/hooks/useInit';

export const BorrowerLoanHistoryView: React.FC = () => {
    const {loanId} = useParams();
    const {loans, isFetching, fetchLoans} = useBorrowerLoans();
    useInit(fetchLoans);

    const loan = loans.find(loan => loan.id === Number(loanId));
    return (
        <Flex flexDir="column">
            <Skeleton isLoaded={!isFetching}>
                <BrowseLoanHistory loan={loan} installments={loan?.installments ?? []} />
            </Skeleton>
        </Flex>
    );
};
