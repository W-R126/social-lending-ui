import {useState} from 'react';
import {topUpAccount, withdrawFromAccount} from '../api/userApi';

export function useTransactions() {
    const [isFetching /*,setFetching*/] = useState(false);
    // setFetching(false); // todo temp

    async function sendTopUp(amount: number): Promise<boolean> {
        return await topUpAccount(amount);
    }

    async function sendWithdrawal(amount: number): Promise<boolean> {
        return await withdrawFromAccount(amount);
    }

    return {isFetching, sendTopUp, sendWithdrawal};
}
