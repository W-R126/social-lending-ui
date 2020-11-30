import * as React from 'react';
import {Offer} from '../../api/offersAPI.types';
import {Table} from '../../../common/components/Table';
import {TableColumns} from './BrowseOffers.constants';
import {Auction} from '../../api/auctionsAPI.types';
import {AuctionInfo} from '../AuctionInfo';
import {useHistory} from 'react-router-dom';
import {Skeleton, useToast} from '@chakra-ui/react';

/**
 * Parameter definition
 */
interface Props {
    /**
     * Offers to be displayed
     */
    offers: Offer[];
    /**
     * Auction which info will be shown at top of page
     */
    auction: Auction | undefined;
    /**
     * Auction id used in offer table generation
     */
    auctionId: number | null;
}

/**
 * Shows basic info about auction and all offers
 * available for it
 * @param offers
 * @param auction
 * @param auctionId
 * @constructor
 */
export const BrowseOffers: React.FC<Props> = ({offers, auction, auctionId}) => {
    const history = useHistory();
    const toast = useToast();

    const onFail = () => {
        toast({
            title: 'Offer not accepted.',
            description: 'Seems like lender does not have enough money',
            status: 'error',
            duration: 4000,
            isClosable: true,
        });
    };

    return (
        <>
            <Skeleton isLoaded={auction !== undefined}>{auction && <AuctionInfo auction={auction} />}</Skeleton>

            <Table data={offers} columns={TableColumns(auctionId!, history, onFail)} />
        </>
    );
};
