import * as React from 'react';
import {Flex, SimpleGrid, Box} from '@chakra-ui/react';
import {BankAccount} from '../../components/BankAccount/BankAccount';
import {UserProvider} from '../../contexts/UserProvider';
import {TopUp} from '../../components/TopUp/TopUp';
import {Transfer} from '../../components/Transfer/Transfer';
export const AccountView: React.FC = () => {
    return (
        <Flex flexDir="column">
            <UserProvider>
                <SimpleGrid minChildWidth={'340px'}>
                    <Box>
                        <BankAccount />
                    </Box>
                    <Box>
                        <TopUp />
                    </Box>
                    <Box>
                        <Transfer />
                    </Box>
                </SimpleGrid>
            </UserProvider>
        </Flex>
    );
};
