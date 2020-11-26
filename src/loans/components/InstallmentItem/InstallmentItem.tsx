import * as React from 'react';
import {Installment} from '../../api/loansAPI.types';
import {Card} from '../../../common/components/Card';
import {Flex, Stack, Stat, StatHelpText, Text} from '@chakra-ui/react';
import {formatDate} from '../../../auctions/components/BrowseAuctions/AuctionItem/AuctionItem.helpers';
import {CURRENCY} from '../../../common/constants';
import {StatusBadge} from '../StatusBadge';

interface Props {
    installment: Installment;
}

export const InstallmentItem: React.FC<Props> = ({installment}) => {
    return (
        <Card maxWidth={'500px'} width={'full'}>
            <Stack direction={'column'}>
                <Flex justify={'space-between'}>
                    <StatusBadge status={installment.status} />
                    <Flex alignItems={'flex-end'}>
                        <Text as="span" fontSize={'sm'} color={'gray.500'} lineHeight={1.4}>
                            {CURRENCY}
                        </Text>
                        <Text fontSize={'3xl'} lineHeight={1} ml={1}>
                            {installment.total}
                        </Text>
                    </Flex>
                </Flex>
                <Flex justify={'space-between'} align={'flex-end'}>
                    <Flex justifyContent={'flex-start'}>
                        <Stat>
                            <StatHelpText mb={0}>
                                {CURRENCY}
                                {installment.fine} fine
                            </StatHelpText>
                            <StatHelpText mb={0}>Due {formatDate(installment.due)}</StatHelpText>
                        </Stat>
                    </Flex>
                    <Flex justifyContent={'flex-end'}>
                        <Stat>
                            <StatHelpText mb={0}>
                                {CURRENCY}
                                {installment.amount} amount
                            </StatHelpText>
                            <StatHelpText mb={0}>
                                {CURRENCY}
                                {installment.interest} interest
                            </StatHelpText>
                        </Stat>
                    </Flex>
                </Flex>
            </Stack>
        </Card>
    );
};
