import {Loan} from '../../api/loansAPI.types';

export const borrowerLoanHistoryViewHelpers = (loan: Loan | undefined) => {
    return (loan?.installments ?? []).sort((a, b) => a.due - b.due);
};
