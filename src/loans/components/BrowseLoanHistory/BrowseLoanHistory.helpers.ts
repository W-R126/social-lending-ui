import {Installment} from '../../api/loansAPI.types';
import {InitialStateType} from './BrowseLoanHistory.constants';

/**
 * Filters installments using state object of type {@link InitialStateType}.
 * It takes status of current element, then takes it as a key
 * and checks if corresponding state entry is true (checkbox is triggered on)
 * @param installments
 * @param state
 */
export const handleFilterInstallments = (installments: Installment[], state: InitialStateType) => {
    return installments.filter(item => (state as any)[item.status]);
};
