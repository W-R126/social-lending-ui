import axios from 'axios';

export function signin(username: string, password: string): Promise<string | null> {
    return axios
        .post('api/user/signin', {
            username,
            password,
        })
        .then(response => response.data)
        .catch(() => null);
}

export function signup(
    username: string,
    password: string,
    cvc: number,
    expiry: string,
    name: string,
    cardNumber: number,
): Promise<string | null> {
    return axios
        .post('api/user/signup', {
            username,
            password,
            cvc,
            expiry,
            name,
            cardNumber,
        })
        .then(response => response.data)
        .catch(() => null);
}
