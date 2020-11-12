import {Auction} from './auctionsAPI.types';

export interface Offer {
    annualPercentageRate: number;
    auction: Auction;
    date: string;
    id: number;
}

export interface OfferDTO {
    auctionId: number;
    proposedAnnualPercentageRate: number;
}
