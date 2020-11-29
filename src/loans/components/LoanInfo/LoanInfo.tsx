import * as React from 'react';
import {Flex, Heading, Stat, StatLabel, StatNumber} from '@chakra-ui/react';
import {CURRENCY} from '../../../common/constants';
import {Loan} from '../../api/loansAPI.types';
import {Card} from '../../../common/components/Card';
import {formatInterest} from './LoanInfo.helpers';

/**
 * Parameter definitions
 */
interface Props {
    /**
     * Basic info about loan to be shown
     */
    loan: Loan | undefined;
}

/**
 * Info to be shown at the top of
 * {@link BrowseLoanHistory} component
 *
 * Contains basic info about ongoing loan
 * @param loan
 * @constructor
 */
export const LoanInfo: React.FC<Props> = ({loan}) => {
    return (
        <Card maxWidth={'500px'} width={'full'}>
            <Flex justifyContent={'center'} mb={5}>
                <Heading as={'h3'} size={'lg'}>
                    Loan No. {loan?.id ?? ''}
                </Heading>
            </Flex>
            <Flex justifyContent={'space-around'}>
                <Flex>
                    <Stat>
                        <StatLabel>Accepted interest</StatLabel>
                        <StatNumber>{formatInterest(loan?.acceptedInterest)}%</StatNumber>
                    </Stat>
                </Flex>
                <Flex>
                    <Stat>
                        <StatLabel>Taken amount</StatLabel>
                        <StatNumber>
                            {CURRENCY}
                            {loan?.takenAmount.toFixed(2) ?? ''}
                        </StatNumber>
                    </Stat>
                </Flex>
            </Flex>
        </Card>
    );
};
