import * as React from 'react';
import {useLenderOffers} from '../../hooks/useLenderOffers';
import {useInit} from '../../../common/hooks/useInit';
import {Skeleton, Stack} from '@chakra-ui/react';
import {OfferInfo} from '../../components/OfferInfo';
import {Offer} from '../../api/offersAPI.types';

export const BrowseMyOffersView: React.FC = () => {
    const {offers, isFetching, fetchOffers, cancelOffer} = useLenderOffers();
    useInit(fetchOffers);

    const handleDeleteOffer = async (offer: Offer) => {
        await cancelOffer(offer);
        await fetchOffers();
    };

    return (
        <Skeleton isLoaded={!isFetching}>
            <Stack m={3} align={'center'}>
                {offers.map(offer => (
                    <OfferInfo key={offer.id} offer={offer} onDelete={handleDeleteOffer} />
                ))}
            </Stack>
        </Skeleton>
    );
};
