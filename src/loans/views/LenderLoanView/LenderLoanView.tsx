import React from 'react';
import {useLenderLoans} from '../../hooks/useLenderLoans';
import {useInit} from '../../../common/hooks/useInit';
import {Skeleton, Stack} from '@chakra-ui/react';
import {EmptyPage} from '../../../common/components/EmptyPage';
import {GivenLoanInfo} from '../../components/GivenLoanInfo';

const LenderLoanView: React.FC = () => {
    const {loans, fetchLoans, isFetching} = useLenderLoans();
    useInit(fetchLoans);

    return (
        <Skeleton isLoaded={!isFetching}>
            <Stack m={3} align={'center'}>
                {loans.length !== 0 ? (
                    loans.map(loan => <GivenLoanInfo key={loan.id} loan={loan} />)
                ) : (
                    <EmptyPage text={'You have no ongoing investments yet :('} />
                )}
            </Stack>
        </Skeleton>
    );
};

export default LenderLoanView;
