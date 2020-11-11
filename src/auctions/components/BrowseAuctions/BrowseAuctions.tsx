import * as React from 'react';
import {AuctionInfo} from './BrowseAuctions.types';
import {Box} from '@chakra-ui/core';
import {Table} from '../Table/Table';
import {TableColumns} from './BrowseAuctions.constants';
import {prepareData} from './BrowseAuctions.helpers';

interface Props {
    auctions: AuctionInfo[];
}

export const BrowseAuctions: React.FC<Props> = ({auctions}) => {
    return (
        <Box>
            <Table data={prepareData(auctions)} columns={TableColumns} />
        </Box>
    );
};
