import * as React from 'react';
import {Button, Stack, Stat, StatHelpText, Flex, Text} from '@chakra-ui/react';
import {Auction} from '../../../api/auctionsAPI.types';
import {Card} from '../../../../common/components/Card';
import {formatDate} from './AuctionItem.helpers';

interface Props {
    auction: Auction;
    onOpenDetails: (auction: Auction) => void;
    buttonTitle: string;
}

export const AuctionItem: React.FC<Props> = ({buttonTitle, auction, onOpenDetails}) => {
    return (
        <Card key={auction.id} maxWidth={'500px'} width={'full'}>
            <Stack direction={'column'}>
                <Flex justify={'flex-end'} align={'flex-end'}>
                    <Text fontSize={'sm'} color={'gray.500'} lineHeight={1.4} mr={1}>
                        $
                    </Text>
                    <Text fontSize={'3xl'} lineHeight={1}>
                        {auction.loanAmount}
                    </Text>
                </Flex>
                <Flex justify={'flex-end'} align={'flex-end'}>
                    <Stat>
                        <StatHelpText mb={0}>{auction.numberOfInstallments} installments</StatHelpText>
                        <StatHelpText mb={0}>
                            {formatDate(auction.beginDate)} - {formatDate(auction.endDate)}
                        </StatHelpText>
                    </Stat>
                    <Button colorScheme={'teal'} onClick={() => onOpenDetails(auction)}>
                        {buttonTitle}
                    </Button>
                </Flex>
            </Stack>
        </Card>
    );
};
