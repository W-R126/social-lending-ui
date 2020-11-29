import {topUpAccount, withdrawFromAccount} from '../api/userApi';

/**
 * Hook for transfer related api calls
 */
export function useTransactions() {
    async function sendTopUp(amount: number): Promise<boolean> {
        return await topUpAccount(amount);
    }

    async function sendWithdrawal(amount: number): Promise<boolean> {
        return await withdrawFromAccount(amount);
    }

    return {sendTopUp, sendWithdrawal};
}
