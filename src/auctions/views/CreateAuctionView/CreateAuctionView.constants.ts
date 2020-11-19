import {CreateAuctionFormData} from './CreateAuctionView.types';
import {getTomorrow} from '../../../common/helpers/getTomorrow';

export const initialFormValues: CreateAuctionFormData = {
    endDate: getTomorrow(),
    loanAmount: 300,
    numberOfInstallments: 12,
};
