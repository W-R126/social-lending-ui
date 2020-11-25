import axios from 'axios';
import {AccountDetails} from './accountApi.types';
import {BASE_URL} from './accountApi.constants';

const instance = axios.create({
    baseURL: BASE_URL,
    headers: '',
});

export function getAccountDetails(accountNo: string): Promise<AccountDetails | null> {
    return axios
        .get(BASE_URL + '/accounts/' + accountNo)
        .then(response => response.data)
        .catch(() => null);
}

export function topUpAccount(accountNo: string, amount: number): Promise<boolean> {
    return axios
        .post(BASE_URL + '/payments', {accountNumber: accountNo, amount: amount})
        .then(response => {
            console.log(response);
            return true;
        })
        .catch(() => false);
}
