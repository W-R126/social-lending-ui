import * as React from 'react';
import {Flex} from '@chakra-ui/react';
import {BankAccount} from '../../components/BankAccount/BankAccount';

export const UserProfileView: React.FC = () => {
    return (
        <Flex flexDir="column">
            <BankAccount />
        </Flex>
    );
};
