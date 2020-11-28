import * as React from 'react';
import {Flex} from '@chakra-ui/react';
import {Table} from '../../../auctions/components/Table';
import {TableColumns} from '../../../auctions/components/BrowseOffers/BrowseOffers.constants';
import {useUser} from '../../contexts/UserProvider';

export const HistoryView: React.FC = () => {
    const transactions = useUser()?.transactions;
    return (
        <Flex flexDir="column">
            History Here
            {/*  <Table data={transactions} columns={null, null)} /> */}
        </Flex>
    );
};
