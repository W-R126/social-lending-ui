import * as React from 'react';
import {Badge} from '@chakra-ui/react';
import {getColorScheme} from './StatusBadge.helper';
import {InstallmentStatus} from '../../api/loansAPI.types';

/**
 * Parameter definitions
 */
interface Props {
    /**
     * Status to be shown on badge.
     * It is used in order to determine
     * color of this badge using
     * {@link getColorScheme} function.
     *
     * This status is also shown as text in
     * given badge
     */
    status: InstallmentStatus;
}

/**
 * Generates status badge with appropriate
 * color and text
 * @param status
 * @constructor
 */
export const StatusBadge: React.FC<Props> = ({status}) => {
    return (
        <Badge mb={4} colorScheme={getColorScheme(status)} maxHeight={5} name={'statusBadge'}>
            {status}
        </Badge>
    );
};
