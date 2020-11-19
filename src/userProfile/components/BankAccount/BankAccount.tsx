import React from 'react';
import {Card} from '../../../common/components/Card';
import {Heading, Text, Flex} from '@chakra-ui/react';
import {LinkCard} from '../../../common/components/LinkCard';
import {HistoryIcon, TransferIcon} from '../../../common/components/DrawerMenu/DrawerMenu.icons';
import {Routes} from '../../../routing/routes';
import {Grid, Box} from '@chakra-ui/react';

export const BankAccount: React.FC = () => {
    return (
        <Flex justify={'center'}>
            <Card m={4} width={'full'} maxWidth={'800px'}>
                <Text align={'left'}>Available Balance:</Text>

                <Heading align={'left'}>£10000</Heading>

                <Text alighn={'right'} fontSize="xs">
                    12345SOMEACCOUNTNUMBER678910
                </Text>
            </Card>
        </Flex>
    );
};
