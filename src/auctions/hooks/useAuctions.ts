import {useState} from 'react';
import {Auction} from '../api/auctionsAPI.types';
import {getAuctions} from '../api/lender/auctionsAPI';
import {getAuction} from '../api/borrower/auctionsAPI';

/**
 * Hook used for fetching auction info for one or all auctions
 * @returns
 * auctions - fetched auctions,
 * isFetching - fetching indicator,
 * fetchAuctions- fetches all auctions,
 * fetchAuction -  fetches auction with specified id,
 * fetchedAuction - fetched auction with specified id
 */
export function useAuctions() {
    const [auctions, setAuctions] = useState<Auction[]>([]);
    const [fetchedAuction, setFetchedAuction] = useState<Auction>();
    const [isFetching, setFetching] = useState(false);

    async function fetchAuctions(): Promise<boolean> {
        setFetching(true);
        const auctions = await getAuctions();
        setFetching(false);

        if (auctions !== null) {
            setAuctions(auctions);
            return true;
        }

        return false;
    }

    async function fetchAuction(auctionId: number): Promise<boolean> {
        setFetching(true);
        const auction = await getAuction(auctionId);
        setFetching(false);

        if (auction !== null) {
            setFetchedAuction(auction);
            return true;
        }
        return false;
    }

    return {isFetching, auctions, fetchAuctions, fetchAuction, fetchedAuction};
}
