import {useState} from 'react';
import {Auction} from '../api/auctionsAPI.types';
import {getAuctions} from '../api/lender/auctionsAPI';

export function useAuctions() {
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

    return {isFetching, auctions, fetchAuctions};
}
