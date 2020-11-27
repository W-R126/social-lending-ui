import * as React from 'react';
import {BrowseAuctions} from '../../components/BrowseAuctions';
import {Flex, Skeleton} from '@chakra-ui/react';
import {useUserAuctions} from '../../hooks/useUserAuctions';
import {useInit} from '../../../common/hooks/useInit';
import {useHistory} from 'react-router-dom';
import {Auction} from '../../api/auctionsAPI.types';
import {Routes} from '../../../routing/routes';
import {EmptyPage} from '../../../common/components/EmptyPage';

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
                    <EmptyPage text={"Looks like there aren't any auctions here yet :("} />
                )}
            </Skeleton>
        </Flex>
    );
};
