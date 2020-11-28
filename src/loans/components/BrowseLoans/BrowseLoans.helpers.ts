import {Installment, Loan} from '../../api/loansAPI.types';

/**
 * Gets current installment. It takes first installment
 * that does not have status PAID. All installments are
 * in chronological order so it takes the ones that
 * user not yet fulfilled.
 *
 * If all installments was being paid by user, then
 * it takes last one
 *
 * Used to select latest one at {@link BorrowerLoanView} page and
 * allow user to pay for installment without entering {@link BorrowerLoanHistoryView}
 * @param installments
 */
export const getCurrentInstallment = (installments: Installment[]): Installment | undefined => {
    const currentInstallment = installments.find(installment => installment.status !== 'PAID');
    if (currentInstallment === undefined) {
        return installments.slice(-1)[0];
    } else {
        return currentInstallment;
    }
};

export const sortLoans = (loans: Loan[]) => {
    return loans.sort((a, b) => b.amountLeft - a.amountLeft);
};
