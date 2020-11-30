import {postTopUpAccount, postWithdrawFromAccount} from '../api/userApi';

/**
 * Hook for transfer related api calls
 */
export function useTransactions() {
    async function sendTopUp(amount: number): Promise<boolean> {
        return await postTopUpAccount(amount);
    }

    async function sendWithdrawal(amount: number): Promise<boolean> {
        return await postWithdrawFromAccount(amount);
    }

    return {sendTopUp, sendWithdrawal};
}
