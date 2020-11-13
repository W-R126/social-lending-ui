import {useEffect, useState} from 'react';
import {Auction, AuctionDTO} from '../api/auctionsAPI.types';
import {createAuction, getAuctions} from '../api/borrower/auctionsAPI';
import {getOffers} from '../api/borrower/offersAPI';
import {Offer} from '../api/offersAPI.types';

export function useBorrower() {
    const [borrowerAuctions, setBorrowerAuctions] = useState<Auction[] | null>(null);
    const [borrowerOffers, setBorrowerOffers] = useState<Offer[] | null>(null);
    const [postedAuction, setPostedAuction] = useState<Auction | null>(null);
    const [areBorrowerAuctionsFetching, setAreBorrowerAuctionsFetching] = useState<boolean>(false);
    const [areBorrowerOffersFetching, setAreBorrowerOffersFetching] = useState<boolean>(false);

    useEffect(() => {
        setAreBorrowerAuctionsFetching(true);
        getAuctions()
            .then(auctions => {
                setAreBorrowerAuctionsFetching(false);
                setBorrowerAuctions(auctions);
            })
            .catch(err => console.log(err));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const fetchBorrowerAuctions = () => {
        setAreBorrowerAuctionsFetching(true);
        getAuctions()
            .then(auctions => {
                setAreBorrowerAuctionsFetching(false);
                setBorrowerAuctions(auctions);
            })
            .catch(err => console.log(err));
    };

    const createNewBorrowerAuction = (auction: AuctionDTO) => {
        setAreBorrowerAuctionsFetching(true);
        createAuction(auction)
            .then(auction => {
                setAreBorrowerAuctionsFetching(false);
                setPostedAuction(auction);
            })
            .catch(err => console.log(err));
    };

    const getBorrowerOffers = (auction_id: number) => {
        setAreBorrowerOffersFetching(true);
        getOffers(auction_id)
            .then(offers => {
                setAreBorrowerOffersFetching(false);
                setBorrowerOffers(offers);
            })
            .catch(err => console.log(err));
    };

    return {
        borrowerAuctions,
        borrowerOffers,
        fetchBorrowerAuctions,
        postedAuction,
        areBorrowerAuctionsFetching,
        areBorrowerOffersFetching,
        createNewBorrowerAuction,
        getBorrowerOffers,
    };
}
