import {useState} from 'react';
// import {AccountDetails} from '../api/account/accountApi.types';
import {topUpAccount} from '../api/account/accountApi';

export function useTransactions() {
    const [isFetching, setFetching] = useState(false);
    // setFetching(false); // todo temp

    async function sendTopUp(accountNo: string, amount: number): Promise<boolean> {
        return (await topUpAccount(accountNo, amount)) !== null;
    }

    return {isFetching, sendTopUp};
}
