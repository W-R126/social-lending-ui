import * as React from 'react';
import {Badge} from '@chakra-ui/react';
import {getColorScheme} from './StatusBadge.helper';
import {InstallmentStatus} from '../../api/loansAPI.types';

interface Props {
    status: InstallmentStatus;
}

export const StatusBadge: React.FC<Props> = ({status}) => {
    return (
        <Badge mb={4} colorScheme={getColorScheme(status)}>
            {status}
        </Badge>
    );
};
