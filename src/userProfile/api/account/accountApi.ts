import axios from 'axios';
import {AccountDetails} from './accountApi.types';
import {BASE_URL} from './accountApi.constants';

export function getAccountDetails(accountNo: string): Promise<AccountDetails | null> {
    return axios
        .get('/accounts/' + accountNo)
        .then(response => response.data)
        .catch(() => null);
}

export function topUpAccount(amount: number): Promise<boolean> {
    return axios
        .post(BASE_URL + '/deposit', {amount: amount})
        .then(response => {
            console.log(response);
            return true;
        })
        .catch(() => false);
}

export function withdrawFromAccount(amount: number): Promise<boolean> {
    return axios
        .post('/withdrawals', {amount: amount})
        .then(() => true)
        .catch(() => false);
}
