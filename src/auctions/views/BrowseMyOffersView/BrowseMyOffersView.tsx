import * as React from 'react';
import {useLenderOffers} from '../../hooks/useLenderOffers';
import {useInit} from '../../../common/hooks/useInit';
import {Skeleton, Stack} from '@chakra-ui/react';
import {OfferInfo} from '../../components/OfferInfo';
import {Offer} from '../../api/offersAPI.types';
import {EmptyPage} from '../../../common/components/EmptyPage';

const BrowseMyOffersView: React.FC = () => {
    const {offers, isFetching, fetchOffers, cancelOffer} = useLenderOffers();
    useInit(fetchOffers);

    const handleDeleteOffer = async (offer: Offer) => {
        await cancelOffer(offer);
        await fetchOffers();
    };

    return (
        <Skeleton isLoaded={!isFetching}>
            <Stack m={3} align={'center'}>
                {offers.length !== 0 ? (
                    offers.map(offer => <OfferInfo key={offer.id} offer={offer} onDelete={handleDeleteOffer} />)
                ) : (
                    <EmptyPage text={"Looks like there aren't any offers here yet :("} />
                )}
            </Stack>
        </Skeleton>
    );
};

export default BrowseMyOffersView;
