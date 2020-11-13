import * as React from 'react';
import {Box} from '@chakra-ui/core';
import {Table} from '../Table';
import {TableColumns} from './BrowseAuctions.constants';
import {Auction} from '../../api/auctionsAPI.types';

interface Props {
    auctions: Auction[];
}
export const BrowseAuctions: React.FC<Props> = ({auctions}) => {
    return (
        <Box>
            <Table data={auctions} columns={TableColumns} />
        </Box>
    );
};
