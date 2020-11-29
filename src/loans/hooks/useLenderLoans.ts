import {useState} from 'react';
import {Loan} from '../api/loansAPI.types';
import {getGivenLoans} from '../api/lender/loansAPI';

export function useLenderLoans() {
    const [loans, setLoans] = useState<Loan[]>([]);
    const [isFetching, setFetching] = useState(false);

    async function fetchLoans(): Promise<boolean> {
        setFetching(true);
        const loans = await getGivenLoans();
        setFetching(false);

        if (loans !== null && loans.length > 0) {
            setLoans(loans);
            return true;
        }

        return false;
    }

    return {loans, isFetching, fetchLoans};
}
