import * as React from 'react';
import {LoanWithRedundantData} from '../../api/loansAPI.types';
import {BrowseLoansItem} from './BrowseLoansItem';
import {Stack} from '@chakra-ui/react';

interface Props {
    loans: LoanWithRedundantData[];
}

export const BrowseLoans: React.FC<Props> = ({loans}) => {
    return (
        <Stack m={3} align={'center'}>
            {loans.map(loan => (
                <BrowseLoansItem key={loan.id} loan={loan} />
            ))}
        </Stack>
    );
};
