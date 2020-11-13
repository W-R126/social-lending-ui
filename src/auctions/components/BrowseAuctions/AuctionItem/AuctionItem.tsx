import * as React from 'react';
import {Box} from '@chakra-ui/core';
import {Auction} from '../../../api/auctionsAPI.types';

interface Props {
    auction: Auction;
}

export const AuctionItem: React.FC<Props> = ({auction}) => {
    return (
        <Box>
            {auction.beginDate} {auction.endDate} {auction.loanAmount} {auction.numberOfInstallments}
        </Box>
    );
};
