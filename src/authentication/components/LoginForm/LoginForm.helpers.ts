import {LoginFormData} from './LoginForm.types';
import {FormikErrors} from 'formik';

export const validate = (values: LoginFormData) => {
    const errors: FormikErrors<LoginFormData> = {};

    if (!values.username) {
        errors.username = 'Username is required!';
    }

    if (!values.password) {
        errors.password = 'Password is required!';
    }

    return errors;
};
