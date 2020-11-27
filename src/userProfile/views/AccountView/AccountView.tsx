import * as React from 'react';
import {Flex, SimpleGrid, Box} from '@chakra-ui/react';
import {BankAccount} from '../../components/BankAccount/BankAccount';
import {UserProvider} from '../../contexts/UserProvider';
import {TopUp} from '../../components/TopUp/TopUp';
import {Transfer} from '../../components/Transfer/Transfer';
import {Withdraw} from '../../components/Withdraw/Withdraw';
import {containerStyle} from './AccountView.styles';

export const AccountView: React.FC = () => {
    return (
        <Flex flexDir="column" className={containerStyle}>
            <UserProvider>
                <SimpleGrid spacing={22} columns={[1, null, 2]}>
                    <Box>
                        <BankAccount />
                    </Box>
                    <Box>
                        <Transfer />
                    </Box>
                    <Box>
                        <TopUp />
                    </Box>
                    <Box>
                        <Withdraw />
                    </Box>
                </SimpleGrid>
            </UserProvider>
        </Flex>
    );
};
