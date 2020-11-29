import React, {useEffect} from 'react';
import {Heading, Text, Grid, Button, Box, useClipboard, Skeleton} from '@chakra-ui/react';
import {useUser} from '../../contexts/UserProvider';
import {Balance} from '../Balance/Balance';
import {Card} from '../../../common/components/Card';
import {LinkCard} from '../../../common/components/LinkCard';
import {HistoryIcon} from '../../../common/components/DrawerMenu/DrawerMenu.icons';
import {Routes} from '../../../routing/routes';
import {boxStyle, textBottomPaddingStyle, textTopPaddingStyle} from '../../common/common.styles';

/**
 * Component responsible for displaying user information related to their bank account. Depends on useUser Context.
 * @constructor
 */
export const BankAccount: React.FC = () => {
    const userContext = useUser();
    const isFetching = userContext?.isFetching;
    const user = userContext?.user;
    const account = user?.account;
    const name = user?.name;
    const [accountNo, setAccountNo] = React.useState('');
    const {hasCopied, onCopy} = useClipboard(accountNo);
    useEffect(() => {
        if (account) {
            setAccountNo(account);
        }
    }, [account]);

    return (
        <Card className={boxStyle}>
            <Skeleton isLoaded={!isFetching}>
                <Heading size={'md'} className={textBottomPaddingStyle}>
                    {name}
                </Heading>
                <Text>Balance: </Text>
                <Balance />
                <Text paddingTop={'10px'}> Account Number: </Text>
                <Text fontSize="md">{accountNo}</Text>

                <Button onClick={onCopy} size={'md'}>
                    {hasCopied ? 'Copied' : 'Copy'}
                </Button>
                <Grid templateColumns="repeat(2, 1fr)" gap={6}>
                    <Box className={textTopPaddingStyle}>
                        <LinkCard icon={<HistoryIcon boxSize={'48px'} />} path={Routes.HISTORY}>
                            History
                        </LinkCard>
                    </Box>
                </Grid>
            </Skeleton>
        </Card>
    );
};
