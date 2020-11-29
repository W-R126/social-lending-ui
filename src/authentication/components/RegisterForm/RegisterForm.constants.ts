import {RegisterFormData} from './RegisterForm.types';

/**
 * Default values for the form
 */
export const initialFormValues: RegisterFormData = {
    username: '',
    password: '',
    confirmPassword: '',
    cvc: '',
    expiry: '',
    name: '',
    cardNumber: '',
};
