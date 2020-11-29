import * as React from 'react';
import {Offer} from '../../api/offersAPI.types';
import {Table} from '../../../common/components/Table';
import {TableColumns} from './BrowseOffers.constants';
import {Auction} from '../../api/auctionsAPI.types';
import {AuctionInfo} from '../AuctionInfo';
import {useHistory} from 'react-router-dom';
import {Skeleton} from '@chakra-ui/react';

interface Props {
    offers: Offer[];
    auction: Auction | undefined;
    auctionId: number | null;
}

export const BrowseOffers: React.FC<Props> = ({offers, auction, auctionId}) => {
    const history = useHistory();
    return (
        <>
            <Skeleton isLoaded={auction !== undefined}>{auction && <AuctionInfo auction={auction} />}</Skeleton>

            <Table data={offers} columns={TableColumns(auctionId!, history)} />
        </>
    );
};
