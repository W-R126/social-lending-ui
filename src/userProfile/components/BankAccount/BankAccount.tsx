import React from 'react';
import {Card} from '../../../common/components/Card';
import {Heading, Text, Flex} from '@chakra-ui/react';
import {LinkCard} from '../../../common/components/LinkCard';
import {HistoryIcon, TransferIcon} from './BankAccount.icons';
import {Routes} from '../../../routing/routes';
import {Grid, Box} from '@chakra-ui/react';

export const BankAccount: React.FC = () => {
    return (
        <Flex justify={'left'}>
            <Card m={4} width={'full'} maxWidth={'800px'}>
                <Text fontSize="xs">12345SOMEACCOUNTNUMBER678910</Text>

                <Text align={'right'}>Available Balance:</Text>

                <Heading align={'right'}>£10000</Heading>

                <Grid templateColumns="repeat(2, 1fr)" gap={6}>
                    <Box>
                        <LinkCard
                            icon={<HistoryIcon boxSize="48px" />}
                            path={Routes.USER_PROFILE /*TODO: change to transfer path when ready*/}
                        >
                            History
                        </LinkCard>
                    </Box>
                    <Box>
                        <LinkCard
                            icon={<TransferIcon boxSize="48px" />}
                            path={Routes.USER_PROFILE /*TODO: change to transfer path when ready*/}
                        >
                            Transfer
                        </LinkCard>
                    </Box>
                </Grid>
            </Card>
        </Flex>
    );
};
