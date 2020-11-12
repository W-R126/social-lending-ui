import {Offer, OfferDTO} from '../api/offersAPI.types';
import {useEffect, useState} from 'react';
import {Auction} from '../api/auctionsAPI.types';
import {getAuctions} from '../api/lender/auctionsAPI';
import {createOffer, getOffers} from '../api/lender/offersAPI';

export function useLender() {
    const [postedOffer, setPostedOffer] = useState<Offer | null>(null);
    const [lenderAuctions, setLenderAuctions] = useState<Auction[] | null>(null);
    const [lenderOffers, setLenderOffers] = useState<Offer[] | null>(null);
    const [areLenderAuctionsFetching, setAreLenderAuctionsFetching] = useState<boolean>(false);
    const [areLenderOffersFetching, setAreLenderOffersFetching] = useState<boolean>(false);

    useEffect(() => {
        setAreLenderAuctionsFetching(true);
        getAuctions()
            .then(auctions => {
                setLenderAuctions(auctions);
                setAreLenderAuctionsFetching(false);
            })
            .catch(err => console.log(err));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        setAreLenderOffersFetching(true);
        getOffers()
            .then(offers => {
                setLenderOffers(offers);
                setAreLenderOffersFetching(false);
            })
            .catch(err => console.log(err));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const createNewOffer = (offer: OfferDTO) => {
        setAreLenderOffersFetching(true);
        createOffer(offer)
            .then(offer => setPostedOffer(offer))
            .catch(err => console.log(err));
    };

    const fetchAuctions = () => {
        if (!areLenderAuctionsFetching) {
            setAreLenderAuctionsFetching(true);
            getAuctions()
                .then(auctions => {
                    setLenderAuctions(auctions);
                    setAreLenderAuctionsFetching(false);
                })
                .catch(err => console.log(err));
        }
    };

    const fetchOffers = () => {
        if (!areLenderOffersFetching) {
            setAreLenderOffersFetching(true);
            getOffers()
                .then(offers => {
                    setLenderOffers(offers);
                    setAreLenderOffersFetching(false);
                })
                .catch(err => console.log(err));
        }
    };

    return {
        postedOffer,
        createNewOffer,
        lenderOffers,
        lenderAuctions,
        isOfferFetching: areLenderOffersFetching,
        isAuctionFetching: areLenderAuctionsFetching,
        fetchAuctions,
        fetchOffers,
    };
}
