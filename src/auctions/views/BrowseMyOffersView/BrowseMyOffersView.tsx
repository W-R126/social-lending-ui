import * as React from 'react';
import {useLenderOffers} from '../../hooks/useLenderOffers';
import {useInit} from '../../../common/hooks/useInit';
import {Flex, Skeleton} from '@chakra-ui/react';

export const BrowseMyOffersView: React.FC = () => {
    const {isFetching, fetchOffers} = useLenderOffers();
    useInit(fetchOffers);

    return (
        <>
            <Flex flexDir="column">
                <Skeleton isLoaded={!isFetching}></Skeleton>
            </Flex>
        </>
    );
};
