import * as React from 'react';
import {BrowseAuctions} from '../../components/BrowseAuctions';
import {Flex, Heading, Image, Skeleton, Stack} from '@chakra-ui/react';
import {useUserAuctions} from '../../hooks/useUserAuctions';
import {useInit} from '../../../common/hooks/useInit';

export const BrowseMyAuctionsView: React.FC = () => {
    const {isFetching, auctions, fetchAuctions} = useUserAuctions();
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
