import * as React from 'react';
import {Offer} from '../../api/offersAPI.types';
import {Table} from '../Table';
import {TableColumns} from './BrowseOffers.constants';
import {Auction} from '../../api/auctionsAPI.types';
import {AuctionInfo} from '../AuctionInfo';
import {useHistory} from 'react-router-dom';

interface Props {
    offers: Offer[];
    auction: Auction | undefined;
    auctionId: number | null;
}

export const BrowseOffers: React.FC<Props> = ({offers, auction, auctionId}) => {
    const history = useHistory();
    return (
        <>
            <AuctionInfo auction={auction} auctionId={auctionId} />

            <Table data={offers} columns={TableColumns(auctionId!, history)} />
        </>
    );
};
