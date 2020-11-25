import React, {useEffect} from 'react';
import {Heading, Text, Grid, Button, Box, useClipboard} from '@chakra-ui/react';
import {useUser} from '../../contexts/UserProvider';
import {Balance} from '../Balance/Balance';
import {Card} from '../../../common/components/Card';
import {LinkCard} from '../../../common/components/LinkCard';
import {HistoryIcon} from '../../../common/components/DrawerMenu/DrawerMenu.icons';
import {Routes} from '../../../routing/routes';

export const BankAccount: React.FC = () => {
    const user = useUser();
    const account = user?.account;
    const userName = user?.name;
    const [accountNo, setAccountNo] = React.useState('');
    const {hasCopied, onCopy} = useClipboard(accountNo);
    useEffect(() => {
        if (account) {
            setAccountNo(account);
        }
    }, [account]);

    return (
        <Card>
            <Heading size={'md'}>{userName}</Heading>
            <Text>Balance: </Text>
            <Balance />
            <Text> Account Number: </Text>
            <Text fontSize="md">{accountNo}</Text>

            <Button onClick={onCopy} size={'md'}>
                {hasCopied ? 'Copied' : 'Copy'}
            </Button>
            <Grid templateColumns="repeat(2, 1fr)" gap={6}>
                <Box>
                    <LinkCard icon={<HistoryIcon boxSize={'48px'} />} path={Routes.HISTORY}>
                        History
                    </LinkCard>
                </Box>
            </Grid>
        </Card>
    );
};
