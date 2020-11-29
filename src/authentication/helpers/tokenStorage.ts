/**
 * Stores token in local storage
 * @param token
 */
export function storeToken(token: string | null) {
    if (token === null) {
        localStorage.removeItem('JWT');
    } else {
        localStorage.setItem('JWT', token);
    }
}

/**
 * Tries to retrieve token from local storage
 * @returns JWT or null if does not exist
 */
export function retrieveToken(): string | null {
    return localStorage.getItem('JWT');
}
