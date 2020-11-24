import {Offer} from './offersAPI.types';

export interface Auction {
    beginDate: number;
    endDate: number;
    id: number;
    loanAmount: number;
    numberOfInstallments: number;
    description: string;
    offers: Offer[];
}

export interface AuctionDTO {
    endDate: string;
    loanAmount: number;
    numberOfInstallments: number;
    description: string;
}
