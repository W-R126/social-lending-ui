import axios from 'axios';
import {Auction, AuctionDTO} from '../auctionsAPI.types';

export function getAuctions(): Promise<Auction[] | null> {
    return axios
        .get('api/borrower/auctions')
        .then(response => response.data)
        .catch(() => null);
}

export function createAuction(auction: AuctionDTO): Promise<Auction | null> {
    return axios
        .post('api/borrower/auctions', auction)
        .then(response => response.data)
        .catch(() => null);
}
