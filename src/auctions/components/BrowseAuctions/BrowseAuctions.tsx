import * as React from 'react';
import {Stack, Select} from '@chakra-ui/react';
import {Auction} from '../../api/auctionsAPI.types';
import {Card} from '../../../common/components/Card';
import {AuctionItem} from './AuctionItem/AuctionItem';

interface Props {
    auctions: Auction[];
}

export const BrowseAuctions: React.FC<Props> = ({auctions}) => {
    return (
        <Stack m={3} align={'center'}>
            <Card maxWidth={'500px'} width={'full'}>
                <Select></Select>
            </Card>

            {auctions.map(auction => (
                <AuctionItem auction={auction} />
            ))}
        </Stack>
    );
};
