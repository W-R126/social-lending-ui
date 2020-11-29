import * as React from 'react';
import {
    Box,
    Button,
    Stack,
    Stat,
    StatHelpText,
    Flex,
    Text,
    Divider,
    Accordion,
    AccordionButton,
    AccordionItem,
    AccordionIcon,
    AccordionPanel,
} from '@chakra-ui/react';
import {Auction} from '../../../api/auctionsAPI.types';
import {Card} from '../../../../common/components/Card';
import {formatDate} from './AuctionItem.helpers';
import {CURRENCY} from '../../../../common/constants';

/**
 * Parameter definition
 */
interface Props {
    /**
     * Auction object to be displayed
     */
    auction: Auction;
    /**
     * Function triggered on "details" button click
     * @param auction
     */
    onOpenDetails: (auction: Auction) => void;
    /**
     * Title of button to be rendered
     */
    buttonTitle: string;
}

/**
 * Shows basic information about auction created by
 * borrower. Rendered in {@link BrowseAuctions}
 * @param buttonTitle
 * @param auction
 * @param onOpenDetails
 * @constructor
 */
export const AuctionItem: React.FC<Props> = ({buttonTitle, auction, onOpenDetails}) => {
    return (
        <Card key={auction.id} maxWidth={'500px'} width={'full'}>
            <Stack direction={'column'}>
                <Flex justify={'flex-end'} align={'flex-end'}>
                    <Text fontSize={'sm'} color={'gray.500'} lineHeight={1.4} mr={1}>
                        {CURRENCY}
                    </Text>
                    <Text fontSize={'3xl'} lineHeight={1}>
                        {auction.loanAmount.toFixed(2)}
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
                <Divider />
                <Accordion allowToggle>
                    <AccordionItem>
                        <AccordionButton _expanded={{color: 'gray.500'}}>
                            <Box flex="1" textAlign="left">
                                Show description
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel pb={2}>
                            <Text mb={0}>{auction.description}</Text>
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </Stack>
        </Card>
    );
};
