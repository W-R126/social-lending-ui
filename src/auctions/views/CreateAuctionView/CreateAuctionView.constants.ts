import {CreateAuctionFormData} from './CreateAuctionView.types';
import {getTomorrow} from '../../../common/helpers/getTomorrow';

export const initialFormValues: CreateAuctionFormData = {
    endDate: getTomorrow(),
    loanAmount: 300,
    numberOfInstallments: 12,
};

export const dateFormat = 'dd/MM/yyyy HH:mm';
