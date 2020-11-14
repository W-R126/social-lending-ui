import * as React from 'react';
import {BrowseAuctions} from '../../components/BrowseAuctions';
import {Flex, Skeleton} from '@chakra-ui/react';
import {useAuctions} from '../../hooks/useAuctions';
import {useInit} from '../../../common/hooks/useInit';

export const BrowseAuctionsView: React.FC = () => {
    const {isFetching, auctions, fetchAuctions} = useAuctions();
    useInit(fetchAuctions);

    return (
        <Flex flexDir="column">
            <Skeleton isLoaded={!isFetching}>
                <BrowseAuctions auctions={auctions} />
            </Skeleton>
        </Flex>
    );
};
