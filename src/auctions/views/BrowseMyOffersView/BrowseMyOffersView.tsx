import * as React from 'react';
import {useLenderOffers} from '../../hooks/useLenderOffers';
import {useInit} from '../../../common/hooks/useInit';
import {Flex, Skeleton} from '@chakra-ui/react';

export const BrowseMyOffersView: React.FC = () => {
    const {offers, isFetching, fetchOffers} = useLenderOffers();
    useInit(fetchOffers);

    return (
        <Skeleton isLoaded={!isFetching}>
            {offers.map(offer => (
                <div>{offer}</div>
            ))}
        </Skeleton>
    );
};
