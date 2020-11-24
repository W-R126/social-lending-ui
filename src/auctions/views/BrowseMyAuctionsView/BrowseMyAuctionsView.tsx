import * as React from 'react';
import {BrowseAuctions} from '../../components/BrowseAuctions';
import {Flex, Heading, Image, Skeleton, Stack} from '@chakra-ui/react';
import {useUserAuctions} from '../../hooks/useUserAuctions';
import {useInit} from '../../../common/hooks/useInit';
import {useHistory} from 'react-router-dom';
import {Auction} from '../../api/auctionsAPI.types';
import {Routes} from '../../../routing/routes';

export const BrowseMyAuctionsView: React.FC = () => {
    const {isFetching, auctions, fetchAuctions} = useUserAuctions();
    useInit(fetchAuctions);
    const history = useHistory();

    const handleOpenDetails = (auction: Auction) => {
        history.push(Routes.MY_AUCTION_DETAILS.replace(':auctionId', auction.id.toString()));
    };

    return (
        <Flex flexDir="column">
            <Skeleton isLoaded={!isFetching}>
                {auctions.length !== 0 ? (
                    <BrowseAuctions buttonTitle={'See details'} auctions={auctions} onOpenDetails={handleOpenDetails} />
                ) : (
                    <Stack mt={8} direction={'column'} justify={'center'} align={'center'}>
                        <Image width={['60%', '50%', '40%', '30%']} src={'svg/empty.svg'} />
                        <Heading color={'gray.400'}>Looks like there aren't any auctions here yet :(</Heading>
                    </Stack>
                )}
            </Skeleton>
        </Flex>
    );
};
