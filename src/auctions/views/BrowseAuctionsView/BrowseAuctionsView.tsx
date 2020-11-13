import * as React from 'react';
import {useEffect, useState} from 'react';
import {BrowseAuctions} from '../../components/BrowseAuctions';
import {Box, Flex, Skeleton} from '@chakra-ui/core';
import {useLender} from '../../hooks/useLender';
import {ProfileSwitcher} from '../../components/ProfileSwitcher/ProfileSwitcher';
import {ProfileState} from '../../components/ProfileSwitcher/ProfileSwitcher.types';
import {Auction} from '../../api/auctionsAPI.types';
import {useBorrower} from '../../hooks/useBorrower';

export const BrowseAuctionsView: React.FC = () => {
    const {lenderAuctions} = useLender();
    const {borrowerAuctions} = useBorrower();
    const [currentProfile, setCurrentProfile] = useState<ProfileState>(ProfileState.LENDER);
    const [auctionsToDisplay, setAuctionsToDisplay] = useState<Auction[] | null>(null);

    useEffect(() => {
        if (ProfileState.LENDER === currentProfile) {
            setAuctionsToDisplay(lenderAuctions);
        } else {
            setAuctionsToDisplay(borrowerAuctions);
        }
    }, [currentProfile, setAuctionsToDisplay, borrowerAuctions, lenderAuctions]);

    return (
        <Flex flexDir="column">
            <Flex justify="center" m={8}>
                <ProfileSwitcher currentProfile={currentProfile} setCurrentProfile={setCurrentProfile} />
            </Flex>
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
