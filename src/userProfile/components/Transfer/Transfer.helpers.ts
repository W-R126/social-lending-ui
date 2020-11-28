import {newTransferData} from './Transfer.types';
import {FormikErrors} from 'formik';

/**
 * Validation for transfer form
 * @param values
 */
export const validate = (values: newTransferData) => {
    const errors: FormikErrors<newTransferData> = {};

    if (!values.amount || values.amount <= 0) {
        errors.amount = 'Transfer amount must be greater than 0.';
    }

    if (!values.toAccount || values.toAccount.length < 10 || values.toAccount.length > 50) {
        errors.toAccount = 'Please enter a valid account number';
    }

    return errors;
};
