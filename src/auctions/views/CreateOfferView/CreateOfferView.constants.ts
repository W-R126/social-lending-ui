import {OfferDTO} from '../../api/offersAPI.types';

export const initialFormValues: OfferDTO = {
    proposedAnnualPercentageRate: 5.5,
    auctionId: 1,
};

export const dialogText = (percentageRate: number) =>
    `Are you sure you want to create offer with ${percentageRate} % annual percentage rate?`;
