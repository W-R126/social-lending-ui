import {useState} from 'react';
import {Auction, AuctionDTO} from '../api/auctionsAPI.types';
import {getAuctions, postAuction} from '../api/borrower/auctionsAPI';

export function useUserAuctions() {
    const [auctions, setAuctions] = useState<Auction[]>([]);
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

    async function createAuction(auction: AuctionDTO): Promise<boolean> {
        return (await postAuction(auction)) !== null;
    }

    return {isFetching, auctions, fetchAuctions, createAuction};
}
