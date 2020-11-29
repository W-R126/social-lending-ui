import {OfferDTO} from '../../api/offersAPI.types';

/**
 * Default data set for create offer form
 */
export const initialFormValues: OfferDTO = {
    proposedAnnualPercentageRate: 5.5,
    auctionId: 1,
};

/**
 * Text displayed when lender creates new offer for
 * certain auction. Used as warning
 * @param percentageRate percentage rate set by user
 */
export const dialogText = (percentageRate: number) =>
    `Are you sure you want to create offer with ${percentageRate} % annual percentage rate?`;
