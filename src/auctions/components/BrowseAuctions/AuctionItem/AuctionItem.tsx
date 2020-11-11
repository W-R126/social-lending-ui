import * as React from 'react';
import {Box} from '@chakra-ui/core';
import {AuctionInfo} from '../BrowseAuctions.types';

interface Props {
    auction: AuctionInfo;
}

export const AuctionItem: React.FC<Props> = ({auction}) => {
    return <Box>Auction item</Box>;
};
