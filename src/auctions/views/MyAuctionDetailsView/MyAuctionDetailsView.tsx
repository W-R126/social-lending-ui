import * as React from 'react';
import {BrowseOffers} from '../../components/BrowseOffers';
import {useAuctionDetails} from '../../hooks/useAuctionDetails';
import {useParams} from 'react-router';
import {useInit} from '../../../common/hooks/useInit';
import {Flex, Skeleton} from '@chakra-ui/react';
import {useAuctions} from '../../hooks/useAuctions';

/**
 * Shows detailed informations about ongoing auction
 * and shows list of offers that was submitted
 * @constructor
 */
const MyAuctionDetailsView: React.FC = () => {
    const {auctionId} = useParams();
    const {fetchedAuction, fetchAuction} = useAuctions();
    const {isFetching, auction, fetchOffers} = useAuctionDetails(auctionId);

    useInit(fetchOffers);
    useInit(() => fetchAuction(auctionId ?? 1));

    return (
        <Flex flexDir="column">
            <Skeleton isLoaded={!isFetching}>
                <BrowseOffers offers={auction?.offers ?? []} auction={fetchedAuction} auctionId={auctionId} />
            </Skeleton>
        </Flex>
    );
};

export default MyAuctionDetailsView;
