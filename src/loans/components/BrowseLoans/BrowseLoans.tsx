import * as React from 'react';
import {Loan} from '../../api/loansAPI.types';
import {BrowseLoansItem} from './BrowseLoansItem';
import {Stack} from '@chakra-ui/react';
import {EmptyPage} from '../../../common/components/EmptyPage';

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
            {loans.length !== 0 ? (
                loans.map(loan => <BrowseLoansItem key={loan.id} loan={loan} />)
            ) : (
                <EmptyPage text={"Looks like there aren't any loans here yet :("} />
            )}
        </Stack>
    );
};
