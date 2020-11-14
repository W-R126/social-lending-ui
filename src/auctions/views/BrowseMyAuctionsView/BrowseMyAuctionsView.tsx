import * as React from 'react';
import {BrowseAuctions} from '../../components/BrowseAuctions';
import {Flex, Skeleton} from '@chakra-ui/core';
import {useUserAuctions} from '../../hooks/useUserAuctions';
import {useInit} from '../../../common/hooks/useInit';

export const BrowseMyAuctionsView: React.FC = () => {
    const {isFetching, auctions, fetchAuctions} = useUserAuctions();
    useInit(fetchAuctions);

    return (
        <Flex flexDir="column">
            <Skeleton isLoaded={!isFetching}>
                <BrowseAuctions auctions={auctions} />
            </Skeleton>
        </Flex>
    );
};
