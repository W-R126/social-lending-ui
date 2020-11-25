import {useState} from 'react';
import {AccountDetails} from '../api/account/accountApi.types';
import {getAccountDetails, topUpAccount} from '../api/account/accountApi';

export function useTransactions() {
    const [isFetching, setFetching] = useState(false);

    async function topUp(accountNo: string, amount: number): Promise<boolean> {
        return (await topUpAccount(accountNo, amount)) !== null;
    }

    return {isFetching, topUp};
}
