import * as React from 'react';
import {useLenderOffers} from '../../hooks/useLenderOffers';
import {useInit} from '../../../common/hooks/useInit';
import {Skeleton, Stack, Stat, StatLabel, StatNumber, StatHelpText, StatGroup, IconButton, Box} from '@chakra-ui/react';
import {Card} from '../../../common/components/Card';
import {Delete, Trash} from 'react-feather';

export const BrowseMyOffersView: React.FC = () => {
    const {offers, isFetching, fetchOffers} = useLenderOffers();
    useInit(fetchOffers);

    return (
        <Skeleton isLoaded={!isFetching}>
            <Stack m={3} align={'center'}>
                {offers.map(offer => (
                    <Card maxWidth={'500px'} width={'full'}>
                        <StatGroup>
                            <Stat>
                                <StatLabel>Amount</StatLabel>
                                <StatNumber>${offer.auction.loanAmount.toFixed(2)}</StatNumber>
                            </Stat>

                            <Stat>
                                <StatLabel>Interest</StatLabel>
                                <StatNumber>{offer.annualPercentageRate.toFixed(2)}%</StatNumber>
                            </Stat>

                            <IconButton colorScheme={'red'} aria-label={'Delete offer'} icon={<Trash />} />
                        </StatGroup>
                    </Card>
                ))}
            </Stack>
        </Skeleton>
    );
};
