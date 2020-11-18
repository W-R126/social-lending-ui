import * as React from 'react';
import {Stack, Stat, StatNumber, StatHelpText, Button} from '@chakra-ui/react';
import {Auction} from '../../api/auctionsAPI.types';
import {Card} from '../../../common/components/Card';

interface Props {
    auctions: Auction[];
}

export const BrowseAuctions: React.FC<Props> = ({auctions}) => {
    return (
        <Stack m={3} align={'center'}>
            {auctions.map(auction => {
                return (
                    <Card key={auction.id} maxWidth={'500px'} width={'full'}>
                        <Stack direction={'row'} align={'center'}>
                            <Stat>
                                <StatNumber>${auction.loanAmount}</StatNumber>
                                <StatHelpText mb={0}>
                                    {auction.beginDate} - {auction.endDate}
                                </StatHelpText>
                            </Stat>
                            <Button colorScheme={'teal'}>See details</Button>
                        </Stack>
                    </Card>
                );
            })}
        </Stack>
    );
};
