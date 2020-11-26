import {Installment} from '../../api/loansAPI.types';
import {format} from 'date-fns';
import {dateFormat} from '../InstallmentItem/InstallmentItem.constants';

export const getCurrentInstallment = (installments: Installment[]): Installment | undefined => {
    const currentInstallment = installments.find(installment => installment.status !== 'PAID');
    if (currentInstallment === undefined) {
        return installments.slice(-1)[0];
    } else {
        return currentInstallment;
    }
};

export const onPayInstallment = (installmentId: number) => {
    console.log({installmentId: installmentId});
};

export function formatDate(date: number) {
    return format(new Date(date), dateFormat);
}
