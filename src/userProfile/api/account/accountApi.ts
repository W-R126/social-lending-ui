import axios from 'axios';
import {AccountDetails} from './accountApi.types';
import {BASE_URL} from './accountApi.constants';

const instance = axios.create({
    baseURL: BASE_URL,
    headers: {
        Authorization: `Basic ZXhhbXBsZTpleGFtcGxl`,
    },
    //    auth: {
    //        username: 'example',
    //        password: 'example'
    //    }
});

export function getAccountDetails(accountNo: string): Promise<AccountDetails | null> {
    return instance
        .get('/accounts/' + accountNo)
        .then(response => response.data)
        .catch(() => null);
}

export function topUpAccount(accountNo: string, amount: number): Promise<boolean> {
    return instance
        .post('/payments', {accountNumber: accountNo, amount: amount}, {headers: {Authorization: `Basic ZXhhbXBsZTpleGFtcGxl`}})
        .then(response => {
            console.log(response);
            return true;
        })
        .catch(() => false);
}

export function withdrawFromAccount(accountNo: string, amount: number): Promise<boolean> {
    return instance
        .post('/withdrawals', {accountNumber: accountNo, amount: amount})
        .then(() => true)
        .catch(() => false);
}
