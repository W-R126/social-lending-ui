import axios from 'axios';
import {User} from './userApi.types';

export function getUser(): Promise<User | null> {
    return axios
        .get('api/user/me')
        .then(response => response.data)
        .catch(() => null);
}

export function topUpAccount(amount: number): Promise<boolean> {
    return axios
        .post('api/user/bank/deposit?amount=' + amount)
        .then(response => {
            console.log(response);
            return true;
        })
        .catch(() => false);
}

export function withdrawFromAccount(amount: number): Promise<boolean> {
    return axios
        .post('api/user/bank/withdraw?amount=' + amount)
        .then(() => true)
        .catch(() => false);
}
