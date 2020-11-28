import React from 'react';
import {Text} from '@chakra-ui/react';
import {useUser} from '../contexts/UserProvider';

export const CardEnding: React.FC = () => {
    const cardNumber = useUser()?.cardNumber;

    return <Text>{cardNumber}</Text>;
};
