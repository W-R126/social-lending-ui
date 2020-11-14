import * as React from 'react';
import {BrowseAuctions} from '../../components/BrowseAuctions';
import {Flex, Stack, Skeleton, Image, Heading} from '@chakra-ui/react';
import {useAuctions} from '../../hooks/useAuctions';
import {useInit} from '../../../common/hooks/useInit';

export const BrowseAuctionsView: React.FC = () => {
    const {isFetching, auctions, fetchAuctions} = useAuctions();
    useInit(fetchAuctions);

    return (
        <Flex flexDir="column">
            <Skeleton isLoaded={!isFetching}>
                {auctions.length !== 0 ? (
                    <BrowseAuctions auctions={auctions} />
                ) : (
                    <Stack direction={'column'} justify={'center'} align={'center'}>
                        <Image width={['60%', '50%', '40%', '30%']} src={'svg/empty.svg'} />
                        <Heading color={'gray.400'}>Looks like there aren't any auctions here yet :(</Heading>
                    </Stack>
                )}
            </Skeleton>
        </Flex>
    );
};
