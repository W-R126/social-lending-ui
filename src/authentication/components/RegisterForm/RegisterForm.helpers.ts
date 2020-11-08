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
        errors.confirmPassword = 'Password is required!';
    }

    if (values.confirmPassword !== values.password) {
        errors.confirmPassword = 'Confirm password does not match with password';
    }

    if (values.password.length < 8) {
        errors.password = 'Password should have at least 8 characters';
    }

    return errors;
};
