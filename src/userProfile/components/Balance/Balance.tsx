import React from 'react';
import {Heading, Text, Flex, Grid, Button, Box, GridItem, useClipboard} from '@chakra-ui/react';
import {useUser} from '../../contexts/UserProvider';

export const Balance: React.FC = () => {
    const userContext = useUser();
    const balance = userContext?.balance;
    return <Heading>£{balance}</Heading>;
};
