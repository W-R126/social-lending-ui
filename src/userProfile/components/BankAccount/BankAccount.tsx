import React from 'react';
import {Heading, Text, Flex, Grid, Button, Box, GridItem, useClipboard} from '@chakra-ui/react';
import {useUser} from '../../contexts/UserProvider';

export const BankAccount: React.FC = () => {
    const [accountNo, setAccountNo] = React.useState('3fa85f64-5717-4562-b3fc-2c963f66afa6');
    const {hasCopied, onCopy} = useClipboard(accountNo);
    const user = useUser();
    console.log(user);
    return (
        <Flex>
            <Grid templateColumns="repeat(4, 1fr)">
                <GridItem colSpan={4} w={'260px'}>
                    <Text fontSize="xs">{accountNo}</Text>
                </GridItem>

                <GridItem colSpan={4}>
                    <Button onClick={onCopy} size={'s'}>
                        {hasCopied ? 'Copied' : 'Copy'}
                    </Button>
                </GridItem>

                <GridItem colSpan={4}>
                    <br />
                    <Text>Available Balance:</Text>
                </GridItem>

                <GridItem colSpan={4}>
                    <Heading>£10000</Heading>
                </GridItem>
            </Grid>
        </Flex>
    );
};
