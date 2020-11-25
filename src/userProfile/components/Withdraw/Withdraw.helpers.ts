import {FormikErrors} from 'formik';
import {WithdrawData} from './Withdraw.types';

export const validate = (values: WithdrawData) => {
    const errors: FormikErrors<WithdrawData> = {};

    if (!values.amount || values.amount <= 0) {
        errors.amount = 'Withdraw amount must be greater than 0.';
    }

    return errors;
};
