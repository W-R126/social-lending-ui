import axios from 'axios';
import {Auction} from '../auctionsAPI.types';

export function getAuctions(): Promise<Auction[] | null> {
    return axios
        .get('api/lender/auctions', {headers: {Authorization: `Bearer ${localStorage.getItem('JWT')}`}})
        .then(response => response.data)
        .catch(() => null);
}
