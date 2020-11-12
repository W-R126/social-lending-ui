import {CreateAuctionFormData} from './CreateAuctionView.types';
import {FormikErrors} from 'formik';

export const validate = (values: CreateAuctionFormData) => {
    const errors: FormikErrors<CreateAuctionFormData> = {};

    if (!values.loanAmount || values.loanAmount <= 0) {
        errors.loanAmount = 'Loan amount must be greater than 0.';
    }

    if (!values.numberOfInstallments || values.numberOfInstallments <= 0) {
        errors.numberOfInstallments = 'Number of installments must be greater than 0.';
    }

    if (!values.endDate) {
        // TODO: Validate endDate > current date
        errors.endDate = 'Please specify the end date for the auction.';
    }

    return errors;
};
