import * as React from 'react';
import {Offer} from '../../api/offersAPI.types';
import {Table} from '../Table';
import {TableColumns} from './BrowseOffers.constants';
import {Auction} from '../../api/auctionsAPI.types';
import {AuctionInfo} from '../AuctionInfo';

interface Props {
    offers: Offer[];
    auction: Auction | undefined;
    auctionId: number | null;
}

export const BrowseOffers: React.FC<Props> = ({offers, auction, auctionId}) => {
    return (
        <>
            <AuctionInfo auction={auction} auctionId={auctionId} />

            <Table data={offers} columns={TableColumns} />
        </>
    );
};
