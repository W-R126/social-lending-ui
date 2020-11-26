import * as React from 'react';
import {useState} from 'react';
import {Installment, LoanWithRedundantData} from '../../api/loansAPI.types';
import {InstallmentItem} from '../InstallmentItem';
import {Stack} from '@chakra-ui/react';
import {LoanInfo} from '../LoanInfo';
import {BadgeFilter} from '../BadgeFilter';
import {initialState, InitialStateType} from './BrowseLoanHistory.constants';
import {handleFilterInstallments} from './BrowseLoanHistory.helpers';

interface Props {
    loan: LoanWithRedundantData | undefined;
    installments: Installment[];
}

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
