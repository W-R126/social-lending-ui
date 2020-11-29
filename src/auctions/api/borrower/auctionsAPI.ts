import axios from 'axios';
import {Auction, AuctionDTO} from '../auctionsAPI.types';

/**
 * Base url used in api requests below
 */
const auctionsUrl = 'api/borrower/auctions';

/**
 * Performs GET auctions request
 * @returns list of {@link Auction} or null in case of
 * error
 */
export function getAuctions(): Promise<Auction[] | null> {
    return axios
        .get(auctionsUrl)
        .then(response => response.data)
        .catch(() => null);
}

/**
 * Performs GET auction request with id of auction as parameter
 * @param auctionId positive integer
 * @returns {@link Auction} object or null in case of error
 */
export function getAuction(auctionId: number): Promise<Auction | null> {
    return axios
        .get(auctionsUrl + '/' + auctionId)
        .then(response => response.data)
        .catch(() => null);
}

/**
 *  Performs POST operation of auction with provided {@link AuctionDTO}
 *  as payload
 * @param auction
 * @returns details about created auction in {@link Auction} object
 */
export function postAuction(auction: AuctionDTO): Promise<Auction | null> {
    return axios
        .post(auctionsUrl, auction)
        .then(response => response.data)
        .catch(() => null);
}
