import {useState} from 'react';
import {AccountDetails} from '../api/accountApi.types';
import {getAccountDetails} from '../api/userApi';

export function useAccountDetails(accountNo: string | null) {
    const [accountDetails, setAccountDetails] = useState<AccountDetails | null>(null);
    const [isFetching, setFetching] = useState(false);

    async function fetchAccountDetails(): Promise<boolean> {
        setFetching(true);

        if (accountNo) {
            const accountDetails = await getAccountDetails(accountNo);
            if (accountDetails !== null) {
                setAccountDetails(accountDetails);
                setFetching(false);
                return true;
            }
        }
        setFetching(false);
        return false;
    }
    return {isFetching, accountDetails, fetchAccountDetails};
}
