import * as React from 'react';
import {Box} from '@chakra-ui/react';
import {Table} from '../Table';
import {TableColumns} from './BrowseAuctions.constants';
import {Auction} from '../../api/auctionsAPI.types';
import {HandleRowClick} from './BrowseAuctions.helpers';
import {useHistory} from 'react-router';

interface Props {
    auctions: Auction[];
}

export const BrowseAuctions: React.FC<Props> = ({auctions}) => {
    const history = useHistory();

    return (
        <Box>
            <Table data={auctions} columns={TableColumns} onRowClick={row => HandleRowClick(row, history)} />
        </Box>
    );
};
