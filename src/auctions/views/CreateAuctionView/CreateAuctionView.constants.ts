import {CreateAuctionFormData} from './CreateAuctionView.types';
import {getTomorrow} from '../../../common/helpers/getTomorrow';

/**
 * Default values for auction creation form
 */
export const initialFormValues: CreateAuctionFormData = {
    endDate: getTomorrow(),
    loanAmount: 300,
    numberOfInstallments: 12,
    description: '',
};
