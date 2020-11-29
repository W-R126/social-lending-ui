import {useState} from 'react';
import {getAuction} from '../api/borrower/auctionsAPI';
import {Auction} from '../api/auctionsAPI.types';

/**
 * Hook used for fetching auction details
 * @param auctionId id of auction which details will be fetched
 * @returns
 * isFetching - fetching indicator,
 * auction - fetched auction,
 * fetchOffers - fetches auction with its offers
 */
export function useAuctionDetails(auctionId: number | null) {
    const [auction, setAuction] = useState<Auction | null>(null);
    const [isFetching, setFetching] = useState(false);

    async function fetchAuction(): Promise<boolean> {
        setFetching(true);

        if (auctionId) {
            const auction = await getAuction(auctionId);
            if (auction !== null) {
                setAuction(auction);
                setFetching(false);
                return true;
            }
        }
        setFetching(false);
        return false;
    }

    return {isFetching, auction, fetchOffers: fetchAuction};
}
