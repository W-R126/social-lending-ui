import * as React from 'react';
import {Stack, Select, InputGroup, InputLeftAddon} from '@chakra-ui/react';
import {Auction} from '../../api/auctionsAPI.types';
import {Card} from '../../../common/components/Card';
import {AuctionItem} from './AuctionItem/AuctionItem';
import {SyntheticEvent, useState} from 'react';
import {OrderBy} from './BrowseAuctions.types';
import {orderAuctions} from './BrowseAuctions.helpers';

interface Props {
    auctions: Auction[];
}

export const BrowseAuctions: React.FC<Props> = ({auctions}) => {
    const [order, setOrder] = useState(OrderBy.DEFAULT);

    const handleOrderChange = (event: SyntheticEvent) => {
        const select = event.target as any;
        setOrder(select.value);
    };

    const sortedAuctions = orderAuctions(auctions, order);

    return (
        <Stack m={3} align={'center'}>
            <Card maxWidth={'500px'} width={'full'}>
                <InputGroup>
                    <InputLeftAddon>Order by</InputLeftAddon>
                    <Select borderLeftRadius={0} value={order} onChange={handleOrderChange}>
                        <option value={OrderBy.DEFAULT}>Default</option>
                        <option value={OrderBy.SMALLEST_LOAN_AMOUNT}>Smallest loan amount</option>
                        <option value={OrderBy.LARGEST_LOAN_AMOUNT}>Largest loan amount</option>
                        <option value={OrderBy.FEWEST_NUMBER_OF_INSTALLMENTS}>Fewest installments</option>
                        <option value={OrderBy.BIGGEST_NUMBER_OF_INSTALLMENTS}>Most installments</option>
                        <option value={OrderBy.NEWEST}>Newest</option>
                        <option value={OrderBy.OLDEST}>Oldest</option>
                        <option value={OrderBy.CLOSING_SOONEST}>Closing soonest</option>
                    </Select>
                </InputGroup>
            </Card>

            {sortedAuctions.map(auction => (
                <AuctionItem key={auction.id} auction={auction} />
            ))}
        </Stack>
    );
};
