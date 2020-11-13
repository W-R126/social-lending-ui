import * as React from 'react';
import {useEffect, useState} from 'react';
import {BrowseAuctions} from '../../components/BrowseAuctions';
import {Box, Flex, Skeleton} from '@chakra-ui/core';
import {useLender} from '../../hooks/useLender';
import {Auction} from '../../api/auctionsAPI.types';
import {useBorrower} from '../../hooks/useBorrower';

export const BrowseMyAuctionsView: React.FC = () => {
    const {lenderAuctions} = useLender();
    const {borrowerAuctions} = useBorrower();
    const [auctionsToDisplay, setAuctionsToDisplay] = useState<Auction[] | null>(null);

    useEffect(() => {
        setAuctionsToDisplay(borrowerAuctions);
    }, [setAuctionsToDisplay, borrowerAuctions, lenderAuctions]);

    return (
        <Flex flexDir="column">
            {auctionsToDisplay ? (
                <Box>
                    <BrowseAuctions auctions={auctionsToDisplay} />
                </Box>
            ) : (
                <Skeleton>
                    <Box width="100%" minH="1000px" />
                </Skeleton>
            )}
        </Flex>
    );
};
