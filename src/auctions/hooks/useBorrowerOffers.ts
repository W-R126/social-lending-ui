import {Offer} from '../api/offersAPI.types';
import {useState} from 'react';
import {getOffers} from '../api/borrower/offersAPI';

export function useBorrowerOffers(auctionId: number | null) {
    const [offers, setOffers] = useState<Offer[]>([]);
    const [isFetching, setFetching] = useState(false);

    async function fetchOffers(): Promise<boolean> {
        setFetching(true);

        if (auctionId) {
            const offers = await getOffers(auctionId);
            if (offers !== null) {
                setOffers(offers);
                setFetching(false);
                return true;
            }
        }
        setFetching(false);
        return false;
    }

    return {isFetching, offers, fetchOffers};
}
