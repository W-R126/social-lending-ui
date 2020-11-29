import axios from 'axios';
import {Auction} from '../auctionsAPI.types';

/**
 * Base address for requests
 */
const auctionsUrl = 'api/lender/auctions';

/**
 * Performs GET auction request to api
 * @returns list of {@link Auction}
 */
export function getAuctions(): Promise<Auction[] | null> {
    return axios
        .get(auctionsUrl)
        .then(response => response.data)
        .catch(() => null);
}
