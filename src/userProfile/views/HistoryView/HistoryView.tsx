import * as React from 'react';
import {Flex, Heading, Skeleton} from '@chakra-ui/react';
import {Table} from '../../../auctions/components/Table';
import {useUser} from '../../contexts/UserProvider';
import {TableColumns} from './HistoryView.constants';

export const HistoryView: React.FC = () => {
    const userContext = useUser();
    const transactions = userContext?.user?.transactions;
    const isFetching = userContext?.isFetching;
    return (
        <Flex flexDir="column">
            <Skeleton isLoaded={!isFetching}>
                <Heading size={'m'} align={'center'}>
                    Transaction History
                </Heading>
                <Table data={transactions ?? []} columns={TableColumns} />
            </Skeleton>
        </Flex>
    );
};
