import * as React from 'react';
import {Flex, Heading, Stat, StatLabel, StatNumber} from '@chakra-ui/react';
import {CURRENCY} from '../../../common/constants';
import {LoanWithRedundantData} from '../../api/loansAPI.types';
import {Card} from '../../../common/components/Card';
import {formatInterest} from './LoanInfo.helpers';

interface Props {
    loan: LoanWithRedundantData | undefined;
}

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
                            {loan?.takenAmount ?? ''}
                        </StatNumber>
                    </Stat>
                </Flex>
            </Flex>
        </Card>
    );
};
