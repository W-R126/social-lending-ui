import {useState} from 'react';
import {getAuction} from '../api/borrower/auctionsAPI';
import {Auction} from '../api/auctionsAPI.types';

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
