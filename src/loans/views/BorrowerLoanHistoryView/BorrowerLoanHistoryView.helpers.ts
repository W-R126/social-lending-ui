import {Loan} from '../../api/loansAPI.types';

/**
 * Returns sorted installments from given loan.
 * Sorts in respect to due date ascending
 * @param loan
 */
export const borrowerLoanHistoryViewHelpers = (loan: Loan | undefined) => {
    return (loan?.installments ?? []).sort((a, b) => a.due - b.due);
};
