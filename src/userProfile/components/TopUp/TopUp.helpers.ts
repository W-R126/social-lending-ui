import {FormikErrors} from 'formik';
import {TopUpData} from './TopUp.types';

/**
 * Validation for top up form
 * @param values
 */

export const validate = (values: TopUpData) => {
    const errors: FormikErrors<TopUpData> = {};

    if (!values.amount || values.amount <= 0) {
        errors.amount = 'amount must be greater than 0.';
    }

    return errors;
};
