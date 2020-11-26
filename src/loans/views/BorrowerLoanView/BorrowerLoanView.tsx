import * as React from 'react';
import {Flex, Skeleton} from '@chakra-ui/react';
import {BrowseLoans} from '../../components/BrowseLoans';
import {useBorrowerLoans} from '../../hooks/useBorrowerLoans';
import {useInit} from '../../../common/hooks/useInit';

export const BorrowerLoanView: React.FC = () => {
    const {loans, fetchLoans, isFetching} = useBorrowerLoans();
    useInit(fetchLoans);

    return (
        <Flex flexDir="column">
            <Skeleton isLoaded={!isFetching}>
                <BrowseLoans loans={loans} />
            </Skeleton>
        </Flex>
    );
};
