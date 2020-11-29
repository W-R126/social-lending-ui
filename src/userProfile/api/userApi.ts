import axios from 'axios';
import {UserDto} from './userApi.types';

/**
 * get all the authenticated user related data
 */
export function getUser(): Promise<UserDto | null> {
    return axios
        .get('api/user/me')
        .then(response => response.data)
        .catch(() => null);
}

/**
 * send a top up account request for the authenticated user
 * @param amount
 */
export function topUpAccount(amount: number): Promise<boolean> {
    return axios
        .post('api/user/bank/deposit?amount=' + amount)
        .then(response => {
            console.log(response);
            return true;
        })
        .catch(() => false);
}

/**
 * send an external withdrawal request for the authenticated user. Also used to simulate external transfer
 * @param amount
 */
export function withdrawFromAccount(amount: number): Promise<boolean> {
    return axios
        .post('api/user/bank/withdraw?amount=' + amount)
        .then(() => true)
        .catch(() => false);
}
