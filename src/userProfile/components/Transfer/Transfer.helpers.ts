import {newTransferData} from './Transfer.types';
import {FormikErrors} from 'formik';

export const validate = (values: newTransferData) => {
    const errors: FormikErrors<newTransferData> = {};

    if (!values.transferAmount || values.transferAmount <= 0) {
        errors.transferAmount = 'Transfer amount must be greater than 0.';
    }

    if (!values.toAccount || values.toAccount.length < 10 || values.toAccount.length > 50) {
        // todo: verify what are the format specifications for account
        errors.toAccount = 'Please enter a valid account number';
    }

    return errors;
};
