import {useState} from 'react';
import {Loan} from '../api/loansAPI.types';
import {getMyLoans, payNextInstallment} from '../api/borrower/loansAPI';

/**
 * Hook used for communicating with api module.
 * Fetches data and returns useful methods and parameters
 *
 * Returns:
 * fetchLoans - invokes loan fetching from api
 * isFetching - if true then some asynchronous action is not finished yet
 * loans - list of loan items
 * payInstallment - pays next installment
 * isPaymentFetching - fetching indicator for installment payment
 */
export function useBorrowerLoans() {
    const [loans, setLoans] = useState<Loan[]>([]);
    const [isFetching, setFetching] = useState(false);
    const [isPaymentFetching, setPaymentFetching] = useState(false);

    async function fetchLoans(): Promise<boolean> {
        setFetching(true);
        const loans = await getMyLoans();
        setFetching(false);

        if (loans !== null) {
            setLoans(loans);
            return true;
        }
        return false;
    }

    async function payInstallment(loanId: number, amount: number): Promise<boolean> {
        setPaymentFetching(true);
        const status = await payNextInstallment(loanId, amount);
        const loans = await getMyLoans();
        if (loans !== null) setLoans(loans);
        setPaymentFetching(false);

        return status === 200;
    }

    return {loans, isFetching, fetchLoans, payInstallment, isPaymentFetching};
}
