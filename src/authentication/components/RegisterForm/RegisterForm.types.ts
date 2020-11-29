/**
 * Data required for creating a new user
 */
export interface RegisterFormData {
    username: string;
    password: string;
    confirmPassword: string;
    cvc: string | number;
    expiry: string;
    name: string;
    cardNumber: string | number;
}

export type CardFocus = 'number' | 'cvc' | 'expiry' | 'name' | undefined;
