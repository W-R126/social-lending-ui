import * as React from 'react';
import {Flex, Skeleton} from '@chakra-ui/react';
import {BrowseLoans} from '../../components/BrowseLoans';
import {useBorrowerLoans} from '../../hooks/useBorrowerLoans';
import {useInit} from '../../../common/hooks/useInit';

/**
 * Entry point for loan list view.
 * Renders {@link BrowseLoans} with appropriate
 * props (loans data)
 * @constructor
 */
const BorrowerLoanView: React.FC = () => {
    const {loans, fetchLoans, isFetching, payInstallment, isPaymentFetching} = useBorrowerLoans();
    useInit(fetchLoans);

    return (
        <Flex flexDir="column">
            <Skeleton isLoaded={!isFetching}>
                <BrowseLoans loans={loans} payInstallment={payInstallment} isPaymentFetching={isPaymentFetching} />
            </Skeleton>
        </Flex>
    );
};

export default BorrowerLoanView;
