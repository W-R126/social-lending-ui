import axios from 'axios';
import {Auction, AuctionDTO} from '../auctionsAPI.types';

const auctionsUrl = 'api/borrower/auctions';

export function getAuctions(): Promise<Auction[] | null> {
    return axios
        .get(auctionsUrl)
        .then(response => response.data)
        .catch(() => null);
}

export function postAuction(auction: AuctionDTO): Promise<Auction | null> {
    return axios
        .post(auctionsUrl, auction)
        .then(response => response.data)
        .catch(() => null);
}
