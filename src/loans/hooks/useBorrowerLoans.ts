import {useState} from 'react';
import {LoanWithRedundantData} from '../api/loansAPI.types';
import {getMyLoans} from '../api/borrower/loansAPI';

export function useBorrowerLoans() {
    const [loans, setLoans] = useState<LoanWithRedundantData[]>([]);
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
