import axios from 'axios';

/**
 * Makes POST request to api in order to get the JWT
 *
 * @param username
 * @param password
 * @returns JWT or null if auth failed
 */
export function signin(username: string, password: string): Promise<string | null> {
    return axios
        .post('api/user/signin', {
            username,
            password,
        })
        .then(response => response.data)
        .catch(() => null);
}

/**
 * Makes POST request to api in order to register a new user
 *
 * @param username
 * @param password
 * @param cvc
 * @param expiry
 * @param name
 * @param cardNumber
 * @returns user info upon success or null otherwise
 */
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
