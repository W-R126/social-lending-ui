import * as React from 'react';
import {Loan} from '../../api/loansAPI.types';
import {BrowseLoansItem} from './BrowseLoansItem';
import {Stack} from '@chakra-ui/react';

/**
 * Parameter definitions for {@link BrowseLoans}
 */
interface Props {
    /**
     * Loans which will be displayed using {@link BrowseLoansItem}
     * components
     */
    loans: Loan[];
}

/**
 * List of loan items. This component, with
 * loans prop will be rendered inside {@link BorrowerLoanView}
 * @param loans
 * @constructor
 */
export const BrowseLoans: React.FC<Props> = ({loans}) => {
    return (
        <Stack m={3} align={'center'}>
            {loans.map(loan => (
                <BrowseLoansItem key={loan.id} loan={loan} />
            ))}
        </Stack>
    );
};
