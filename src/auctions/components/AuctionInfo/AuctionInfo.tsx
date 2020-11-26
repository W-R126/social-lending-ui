import * as React from 'react';
import {Box, Flex, Heading, Skeleton, Stat, StatLabel, StatNumber, Text} from '@chakra-ui/react';
import {Auction} from '../../api/auctionsAPI.types';
import {CURRENCY} from '../../../common/constants';

interface Props {
    auction: Auction | undefined;
    auctionId: number | null;
}

export const AuctionInfo: React.FC<Props> = ({auction, auctionId}) => {
    return (
        <Skeleton isLoaded={!!auction}>
            <Box minHeight={120} mt={5} shadow={'sm'} borderRadius={'lg'}>
                <Flex justifyContent={'center'} mb={5}>
                    <Heading as={'h3'} size={'lg'}>
                        Auction No. {auctionId ?? ''}
                    </Heading>
                </Flex>
                <Flex justifyContent={'space-around'}>
                    <Flex>
                        <Stat>
                            <StatLabel>Number of installments</StatLabel>
                            <StatNumber>{auction?.numberOfInstallments}</StatNumber>
                        </Stat>
                    </Flex>
                    <Flex>
                        <Stat>
                            <StatLabel>Loan amount</StatLabel>
                            <StatNumber>
                                {CURRENCY}
                                {auction?.loanAmount}
                            </StatNumber>
                        </Stat>
                    </Flex>
                </Flex>
                <Flex alignItems={'center'} p={8} flexDir={'column'} flexWrap={'wrap'}>
                    <Text size={'lg'}>{auction?.description}</Text>
                </Flex>
            </Box>
        </Skeleton>
    );
};
