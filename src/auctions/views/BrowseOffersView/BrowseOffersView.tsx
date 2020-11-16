import * as React from 'react';
import {BrowseOffers} from '../../components/BrowseOffers';
import {useBorrowerOffers} from '../../hooks/useBorrowerOffers';
import {useLocation} from 'react-router';
import {useInit} from '../../../common/hooks/useInit';
import {Flex, Skeleton} from '@chakra-ui/react';

export const BrowseOffersView: React.FC = () => {
    const query = new URLSearchParams(useLocation().search);
    const auctionId = query.get('auctionId') as number | null;

    const {isFetching, offers, fetchOffers} = useBorrowerOffers(auctionId);
    useInit(fetchOffers);
    return (
        <Flex flexDir="column">
            <Skeleton isLoaded={!isFetching}>
                <BrowseOffers offers={offers} />
            </Skeleton>
        </Flex>
    );
};
