import {newTransferData} from './TransferViewTypes';
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

    // transfer date can be empty, (it means sending tight away)

    return errors;
};
