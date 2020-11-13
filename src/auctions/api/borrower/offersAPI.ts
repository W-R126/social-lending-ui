import axios from 'axios';
import {Offer} from '../offersAPI.types';

export function getOffers(auction_id: number): Promise<Offer[] | null> {
    return axios
        .get('api/borrower/offers', {
            headers: {Authorization: `Bearer ${localStorage.getItem('JWT')}`},
            params: {
                auction_id,
            },
        })
        .then(response => response.data)
        .catch(() => null);
}
