import {useState} from 'react';
// import {AccountDetails} from '../api/account/accountApi.types';
import {topUpAccount, withdrawFromAccount} from '../api/account/accountApi';

export function useTransactions() {
    const [isFetching /*,setFetching*/] = useState(false);
    // setFetching(false); // todo temp

    async function sendTopUp(amount: number): Promise<boolean> {
        return (await topUpAccount(amount)) !== null;
    }

    async function sendWithdrawal(amount: number): Promise<boolean> {
        return await withdrawFromAccount(amount);
    }

    return {isFetching, sendTopUp, sendWithdrawal};
}
