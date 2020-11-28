import React from 'react';
import {Loan} from '../../api/loansAPI.types';
import {Card} from '../../../common/components/Card';
import {Heading, Divider, Stat, StatNumber, StatLabel, StatHelpText, StatGroup} from '@chakra-ui/react';
import {formatDate} from '../../helpers/formatDate';

interface Props {
    loan: Loan;
}

export const GivenLoanInfo: React.FC<Props> = ({loan}) => {
    return (
        <Card maxWidth={'500px'} width={'full'}>
            <Heading>{loan.borrower}</Heading>
            <Divider my={2} />
            <StatGroup>
                <Stat>
                    <StatLabel>Loan amount</StatLabel>
                    <StatNumber>${loan.takenAmount.toFixed(2)}</StatNumber>
                    <StatHelpText>Started {formatDate(loan.startDate)}</StatHelpText>
                </Stat>

                <Stat>
                    <StatLabel>Still due</StatLabel>
                    <StatNumber>${loan.amountLeft.toFixed(2)}</StatNumber>
                </Stat>

                <Stat>
                    <StatLabel>{loan.installments.length} installments</StatLabel>
                    <StatNumber>
                        {loan.installments.filter(i => i.status !== 'PENDING').length}/{loan.installments.length} PAID
                    </StatNumber>
                    <StatHelpText>Last installment is due {formatDate(loan.installments[loan.installments.length - 1].due)}</StatHelpText>
                </Stat>
            </StatGroup>
        </Card>
    );
};
