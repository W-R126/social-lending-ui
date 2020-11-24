export interface RegisterFormData {
    username: string;
    password: string;
    confirmPassword: string;
    cvc: string | number;
    expiry: string;
    name: string;
    cardNumber: string | number;
}
