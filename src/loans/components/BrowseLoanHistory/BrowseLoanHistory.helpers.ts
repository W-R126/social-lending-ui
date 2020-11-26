import {Installment} from '../../api/loansAPI.types';
import {InitialStateType} from './BrowseLoanHistory.constants';

export const handleFilterInstallments = (installments: Installment[], state: InitialStateType) => {
    return installments.filter(item => (state as any)[item.status]);
};
