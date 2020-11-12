import {CreateAuctionFormData} from './CreateAuctionView.types';

export const initialFormValues: CreateAuctionFormData = {
    endDate: new Date(),
    loanAmount: 300,
    numberOfInstallments: 12,
};
