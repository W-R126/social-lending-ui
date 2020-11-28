import * as React from 'react';
import {Flex} from '@chakra-ui/react';
import {Table} from '../../../auctions/components/Table';
import {useUser} from '../../contexts/UserProvider';
import {mockTransactions, TableColumns} from './HistoryView.constants';

export const HistoryView: React.FC = () => {
    const transactions = useUser()?.transactions;
    return (
        <Flex flexDir="column">
            History Here
            <Table data={mockTransactions} columns={TableColumns()} />
        </Flex>
    );
};
