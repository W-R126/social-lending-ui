import React from 'react';
import {Heading} from '@chakra-ui/react';
import {useUser} from '../../contexts/UserProvider';

export const Balance: React.FC = () => {
    const userContext = useUser();
    const balance = userContext?.balance;
    return <Heading>${balance}</Heading>;
};
