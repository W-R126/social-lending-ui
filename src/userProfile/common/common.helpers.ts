import {FormikErrors} from 'formik';
import {isAtLeastMinFunds} from '../../common/helpers/isAtLeastMinFunds';
import {TransferData} from './common.types';

/**
 * used to validate forms with one amount value
 * @param values
 */
export const validateFormAmount = (values: TransferData) => {
    const errors: FormikErrors<TransferData> = {};

    if (!isAtLeastMinFunds(values.amount)) {
        errors.amount = 'amount must be at least 0.01';
    }

    return errors;
};
