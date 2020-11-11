import * as React from 'react';
import {BrowseAuctions} from '../components/BrowseAuctions';
import {Box} from '@chakra-ui/core';
import {mockAuctions} from './BrowseAuctionsView.helpers';

export const BrowseAuctionsView: React.FC = () => {
    return (
        <Box>
            <BrowseAuctions auctions={mockAuctions(100)} />
        </Box>
    );
};
