import * as React from 'react';
import {Flex, SimpleGrid, Box} from '@chakra-ui/react';
import {BankAccount} from '../../components/BankAccount';
import UserProvider from '../../contexts/UserProvider';
import {TopUp} from '../../components/TopUp';
import {Transfer} from '../../components/Transfer/Transfer';
import {Withdraw} from '../../components/Withdraw';
import {containerStyle} from '../../common/common.styles';

/**
 * View for user account details and user account related actions.
 * @constructor
 */
const AccountView: React.FC = () => {
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

export default AccountView;
