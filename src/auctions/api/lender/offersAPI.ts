import axios from 'axios';
import {Offer, OfferDTO} from '../offersAPI.types';

/**
 * Performs GET offers request to api
 * @returns list of {@link Offer}
 */
export function getOffers(): Promise<Offer[] | null> {
    return axios
        .get('api/lender/offers')
        .then(response => response.data)
        .catch(() => null);
}

/**
 * Performs POST offer request to api
 * @param offer offer info object ({@link OfferDTO}
 * @returns info about created offer in {@link Offer} object
 */
export function postOffer(offer: OfferDTO): Promise<Offer | null> {
    return axios
        .post('api/lender/offers', offer)
        .then(response => response.data)
        .catch(() => null);
}

/**
 * Performs DELETE offer request to api.
 *
 * @param offerId id of offer that will be deleted
 * @returns true if deletion was successful, false otherwise
 */
export function deleteOffer(offerId: number): Promise<boolean> {
    return axios
        .delete(`api/lender/offers/${offerId}`)
        .then(response => response.status === 200)
        .catch(() => false);
}
