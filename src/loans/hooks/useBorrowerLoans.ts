import {useState} from 'react';
import {Loan} from '../api/loansAPI.types';
import {getMyLoans} from '../api/borrower/loansAPI';

/**
 * Hook used for communicating with api module.
 * Fetches data and returns useful methods and parameters
 * @returns fetchLoans invokes loan fetching from api
 *
 * isFetching if true then some asynchronous action is not finished yet
 *
 * loans which is list of loan items
 */
export function useBorrowerLoans() {
    const [loans, setLoans] = useState<Loan[]>([]);
    const [isFetching, setFetching] = useState(false);

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

    return {loans, isFetching, fetchLoans};
}
