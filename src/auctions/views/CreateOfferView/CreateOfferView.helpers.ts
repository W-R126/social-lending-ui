import {OfferDTO} from '../../api/offersAPI.types';
import {FormikErrors} from 'formik/dist/types';

/**
 * Validation of data provided in {@link CreateOfferView}
 * @param values
 */
export const validate = (values: OfferDTO) => {
    const errors: FormikErrors<OfferDTO> = {};

    if (!values.proposedAnnualPercentageRate || values.proposedAnnualPercentageRate <= 0) {
        errors.proposedAnnualPercentageRate = 'Annual percentage rate should be grater than 0.';
    }
};
