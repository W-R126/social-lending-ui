import {CreateAuctionFormData} from './CreateAuctionView.types';
import {FormikErrors} from 'formik';

export const validate = (values: CreateAuctionFormData) => {
    const errors: FormikErrors<CreateAuctionFormData> = {};

    if (!values.loanAmount || values.loanAmount <= 0) {
        errors.loanAmount = 'Loan amount must be greater than 0';
    }

    if (!values.numberOfInstallments || values.numberOfInstallments <= 0) {
        errors.numberOfInstallments = 'Number of installments must be greater than 0';
    } else if (values.loanAmount / values.numberOfInstallments < 5) {
        errors.numberOfInstallments = 'Minimum price for each installment should be at least $5!';
    }

    if (!values.endDate) {
        // TODO: Validate endDate > current date
        errors.endDate = 'Please specify the end date for the auction.';
    }

    if (!values.description || values.description.length < 5) {
        errors.description = 'Description should be at least 5 characters long';
    }

    if (values.description.length > 250) {
        errors.description = 'Description should not exceed 250 characters';
    }
    return errors;
};
