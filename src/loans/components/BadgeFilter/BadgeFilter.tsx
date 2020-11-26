import * as React from 'react';
import {Box, Checkbox, Flex} from '@chakra-ui/react';
import {StatusBadge} from '../StatusBadge';
import {Card} from '../../../common/components/Card';
import {InitialStateType} from '../BrowseLoanHistory/BrowseLoanHistory.constants';
import {InstallmentStatus} from '../../api/loansAPI.types';

interface Props {
    applyFilter: (state: InitialStateType) => void;
    currentState: InitialStateType;
}

export const BadgeFilter: React.FC<Props> = ({applyFilter, currentState}) => {
    return (
        <Card maxWidth={'500px'} width={'full'} padding={1}>
            <Flex justifyContent={'space-around'}>
                <Checkbox isChecked={currentState.PAID} onChange={() => applyFilter({...currentState, PAID: !currentState.PAID})}>
                    <Box mt={4}>
                        <StatusBadge status={InstallmentStatus.PAID} />
                    </Box>
                </Checkbox>
                <Checkbox isChecked={currentState.PENDING} onChange={() => applyFilter({...currentState, PENDING: !currentState.PENDING})}>
                    <Box mt={4}>
                        <StatusBadge status={InstallmentStatus.PENDING} />
                    </Box>
                </Checkbox>
                <Checkbox isChecked={currentState.MISSED} onChange={() => applyFilter({...currentState, MISSED: !currentState.MISSED})}>
                    <Box mt={4}>
                        <StatusBadge status={InstallmentStatus.MISSED} />
                    </Box>
                </Checkbox>
            </Flex>
        </Card>
    );
};
