import * as React from 'react';
import {useLenderOffers} from '../../hooks/useLenderOffers';
import {useInit} from '../../../common/hooks/useInit';
import {Flex, Skeleton} from '@chakra-ui/react';
import {BrowseOffers} from '../../components/BrowseOffers';

export const BrowseMyOffersView: React.FC = () => {
    const {isFetching, offers, fetchOffers} = useLenderOffers();
    useInit(fetchOffers);

    return (
        <>
            <Flex flexDir="column">
                <Skeleton isLoaded={!isFetching}>
                    <BrowseOffers offers={offers} />
                </Skeleton>
            </Flex>
        </>
    );
};
