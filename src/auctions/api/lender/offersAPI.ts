import axios from 'axios';
import {Offer, OfferDTO} from '../offersAPI.types';

export function getOffers(): Promise<Offer[] | null> {
    return axios
        .get('api/lender/offers')
        .then(response => response.data)
        .catch(() => null);
}

export function postOffer(offer: OfferDTO): Promise<Offer | null> {
    return axios
        .post('api/lender/offers', offer)
        .then(response => response.data)
        .catch(() => null);
}

export function deleteOffer(offerId: number): Promise<boolean> {
    return axios
        .delete(`api/lender/offers/${offerId}`)
        .then(response => response.status == 200)
        .catch(() => false);
}
