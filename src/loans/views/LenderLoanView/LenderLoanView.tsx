import React from 'react';
import {useLenderLoans} from '../../hooks/useLenderLoans';
import {useInit} from '../../../common/hooks/useInit';
import {Skeleton, Stack} from '@chakra-ui/react';
import {OfferInfo} from '../../../auctions/components/OfferInfo';
import {EmptyPage} from '../../../common/components/EmptyPage';
import {LoanInfo} from '../../components/LoanInfo';

export const LenderLoanView: React.FC = () => {
    const {loans, fetchLoans, isFetching} = useLenderLoans();
    useInit(fetchLoans);

    return (
        <Skeleton isLoaded={!isFetching}>
            <Stack m={3} align={'center'}>
                {loans.length !== 0 ? (
                    loans.map(loan => <LoanInfo key={loan.id} loan={loan} />)
                ) : (
                    <EmptyPage text={'You have no ongoing investments yet :('} />
                )}
            </Stack>
        </Skeleton>
    );
};
