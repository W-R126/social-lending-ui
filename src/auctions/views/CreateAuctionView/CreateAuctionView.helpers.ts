import {CreateAuctionFormData} from './CreateAuctionView.types';
import {FormikErrors} from 'formik';
import {LoginFormData} from '../../../authentication/components/LoginForm/LoginForm.types';

export const validate = (values: CreateAuctionFormData) => {
    const errors: FormikErrors<LoginFormData> = {};

    if (!values.password) {
        errors.password = 'Username error, lol';
    }

    return errors;
};
