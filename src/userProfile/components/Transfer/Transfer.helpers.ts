import {ExternalTransferData} from './Transfer.types';
import {FormikErrors} from 'formik';
import {isAtLeastMinFunds} from '../../../common/helpers/isAtLeastMinFunds';

/**
 * Validation for transfer form
 * @param values
 */
export const validate = (values: ExternalTransferData) => {
    const errors: FormikErrors<ExternalTransferData> = {};

    if (!isAtLeastMinFunds(values.amount)) {
        errors.amount = 'Transfer amount must be at least 0.01';
    }

    if (!values.toAccount || values.toAccount.length < 10 || values.toAccount.length > 50) {
        errors.toAccount = 'Please enter a valid account number';
    }

    return errors;
};
