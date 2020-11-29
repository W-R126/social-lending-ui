import * as React from 'react';
import {Stack, Select, InputGroup, InputLeftAddon} from '@chakra-ui/react';
import {Auction} from '../../api/auctionsAPI.types';
import {Card} from '../../../common/components/Card';
import {AuctionItem} from './AuctionItem/AuctionItem';
import {SyntheticEvent, useState} from 'react';
import {OrderBy} from './BrowseAuctions.types';
import {orderAuctions} from './BrowseAuctions.helpers';

/**
 * Parameter definition
 */
interface Props {
    /**
     * Auction objects to be shown
     */
    auctions: Auction[];
    /**
     * Function that executes when "detail" button
     * is clicked
     * @param auction auction that will be used as parameter
     */
    onOpenDetails?: (auction: Auction) => void;
    /**
     * Text that will be displayed on "detail" button
     */
    buttonTitle: string;
}

/**
 * Shows list of auctions and additionally
 * provides sorting utility for this list
 * @param buttonTitle
 * @param auctions
 * @param onOpenDetails
 * @constructor
 */
export const BrowseAuctions: React.FC<Props> = ({buttonTitle, auctions, onOpenDetails}) => {
    const [order, setOrder] = useState(OrderBy.NEWEST);

    const handleOrderChange = (event: SyntheticEvent) => {
        // Suggest a better idea than this cast if possible
        const select = (event.target as unknown) as {value: OrderBy};
        setOrder(select.value);
    };

    const sortedAuctions = orderAuctions(auctions, order);

    const handleOpenDetails = (auction: Auction) => {
        if (onOpenDetails) {
            onOpenDetails(auction);
        }
    };

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
                <AuctionItem buttonTitle={buttonTitle} key={auction.id} auction={auction} onOpenDetails={handleOpenDetails} />
            ))}
        </Stack>
    );
};
