import {OfferDTO} from '../../api/offersAPI.types';
import {FormikErrors} from 'formik/dist/types';

export const validate = (values: OfferDTO) => {
    const errors: FormikErrors<OfferDTO> = {};

    if (!values.proposedAnnualPercentageRate || values.proposedAnnualPercentageRate <= 0) {
        errors.proposedAnnualPercentageRate = 'Annual percentage rate should be grater than 0.';
    }
};
