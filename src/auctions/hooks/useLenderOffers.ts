import {Offer, OfferDTO} from '../api/offersAPI.types';
import {useState} from 'react';
import {deleteOffer, getOffers, postOffer} from '../api/lender/offersAPI';

/**
 * Hook used for fetching offers created by lender.
 * Also it allows creation and deletion of specified offer
 * @returns
 * isFetching - fetching indicator,
 * offers - fetched offers,
 * fetchOffers - fetches all offers,
 * createOffer - creates offer with specified data,
 * cancelOffer - deletes offer with specified data
 */
export function useLenderOffers() {
    const [offers, setOffers] = useState<Offer[]>([]);
    const [isFetching, setFetching] = useState(false);

    async function fetchOffers(): Promise<boolean> {
        setFetching(true);
        const offers = await getOffers();
        setFetching(false);

        if (offers !== null) {
            setOffers(offers);
            return true;
        }
        return false;
    }

    async function createOffer(offer: OfferDTO): Promise<boolean> {
        return (await postOffer(offer)) !== null;
    }

    async function cancelOffer(offer: Offer): Promise<boolean> {
        return await deleteOffer(offer.id);
    }

    return {isFetching, offers, fetchOffers, createOffer, cancelOffer};
}
