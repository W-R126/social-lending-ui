import axios from 'axios';
import {Auction} from '../auctionsAPI.types';

const auctionsUrl = 'api/lender/auctions';

export function getAuctions(): Promise<Auction[] | null> {
    return axios
        .get(auctionsUrl)
        .then(response => response.data)
        .catch(() => null);
}
