import * as React from 'react';
import {BrowseAuctions} from '../../components/BrowseAuctions';
import {Flex, Skeleton} from '@chakra-ui/react';
import {useAuctions} from '../../hooks/useAuctions';
import {useInit} from '../../../common/hooks/useInit';
import {Auction} from '../../api/auctionsAPI.types';
import {Routes} from '../../../routing/routes';
import {useHistory} from 'react-router-dom';
import {EmptyPage} from '../../../common/components/EmptyPage';

export const BrowseAuctionsView: React.FC = () => {
    const {isFetching, auctions, fetchAuctions} = useAuctions();
    useInit(fetchAuctions);

    const history = useHistory();

    const handleOpenDetails = (auction: Auction) => {
        history.push(Routes.AUCTION_CREATE_OFFER.replace(':auctionId', auction.id.toString()));
    };

    return (
        <Flex flexDir="column">
            <Skeleton isLoaded={!isFetching}>
                {auctions.length !== 0 ? (
                    <BrowseAuctions buttonTitle={'Make offer'} auctions={auctions} onOpenDetails={handleOpenDetails} />
                ) : (
                    <EmptyPage text={"Looks like there aren't any auctions here yet :("} />
                )}
            </Skeleton>
        </Flex>
    );
};
