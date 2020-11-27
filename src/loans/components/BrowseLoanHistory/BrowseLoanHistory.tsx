import * as React from 'react';
import {useState} from 'react';
import {Installment, Loan} from '../../api/loansAPI.types';
import {InstallmentItem} from '../InstallmentItem';
import {Stack} from '@chakra-ui/react';
import {LoanInfo} from '../LoanInfo';
import {BadgeFilter} from '../BadgeFilter';
import {initialState, InitialStateType} from './BrowseLoanHistory.constants';
import {handleFilterInstallments} from './BrowseLoanHistory.helpers';

/**
 * Parameter definitions
 */
interface Props {
    /**
     *  Loan info which will be displayed
     *  in upper section of page. Can
     *  be undefined (waiting for api response for ex.)
     */
    loan: Loan | undefined;
    /**
     * Installments list from this loan. It could be
     * joined with {@link loan} attribute, but in that
     * way it is more readable, and
     * empty installments case is handled
     */
    installments: Installment[];
}

/**
 * Loan history component which shows info about past
 * and present installments and loan itself.
 * Moreover it allows user to filter installments
 * by its {@link InstallmentStatus}
 * @param installments
 * @param loan
 * @constructor
 */
export const BrowseLoanHistory: React.FC<Props> = ({installments, loan}) => {
    const [checkedItems, setCheckedItems] = useState<InitialStateType>(initialState);

    const handleApplyFilter = (state: InitialStateType) => {
        setCheckedItems(state);
    };

    const filteredInstallments = handleFilterInstallments(installments, checkedItems);

    return (
        <Stack m={3} align={'center'}>
            <LoanInfo loan={loan} />
            <BadgeFilter applyFilter={handleApplyFilter} currentState={checkedItems} />
            {filteredInstallments.map(installment => (
                <InstallmentItem key={installment.index} installment={installment} />
            ))}
        </Stack>
    );
};
