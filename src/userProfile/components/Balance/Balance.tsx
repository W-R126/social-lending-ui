import React from 'react';
import {Heading, Text, Flex, Grid, Button, Box, GridItem, useClipboard} from '@chakra-ui/react';
import {useUser} from '../../contexts/UserProvider';

export const Balance: React.FC = () => {
    const [accountNo, setAccountNo] = React.useState('');
    const {hasCopied, onCopy} = useClipboard(accountNo);
    const userContext = useUser();
    const balance = userContext?.balance;
    return <Heading>£10000</Heading>;
};
