import {RegisterFormData} from './RegisterForm.types';
import {FormikErrors} from 'formik';

export const validate = (values: RegisterFormData) => {
    const errors: FormikErrors<RegisterFormData> = {};

    if (!values.username) {
        errors.username = 'Username is required!';
    }

    if (!values.password) {
        errors.password = 'Password is required!';
    }

    if (!values.confirmPassword) {
        errors.confirmPassword = 'Confirm password is required!';
    }

    if (values.confirmPassword !== values.password) {
        errors.confirmPassword = 'Confirm password does not match with password!';
    }

    if (values.password.length < 8) {
        errors.password = 'Password should have at least 8 characters!';
    }

    if (values.cardNumber.toString().length !== 16) {
        errors.cardNumber = 'Card number should consist of 16 digits';
    }

    if (/([A-Za-z]+) ([A-Za-z]+)/g.exec(values.name) === null) {
        errors.name = 'Provide first and family name';
    }

    const expiryValues: string[] = values.expiry.split('/');
    if (expiryValues.length !== 2 || Number(expiryValues[0]) < 1 || Number(expiryValues[0]) > 31 || Number(expiryValues[1]) < 0) {
        errors.expiry = 'Provide expiry date in format **/**';
    }

    const cvcCasted: number = Number(values.cvc);
    if (isNaN(cvcCasted) || cvcCasted < 0 || cvcCasted > 999) {
        errors.cvc = 'CVC should be between 000 and 999';
    }
    return errors;
};
