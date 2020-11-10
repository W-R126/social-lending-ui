export function storeToken(token: string | null) {
    if (token === null) {
        localStorage.removeItem('JWT');
    } else {
        localStorage.setItem('JWT', token);
    }
}

export function retrieveToken(): string | null {
    return localStorage.getItem('JWT');
}
