import {InstallmentStatus} from '../../api/loansAPI.types';

/**
 * Sets color of {@link StatusBadge}.
 * Depending on status, color is adjusted accordingly
 * @param status
 */
export const getColorScheme = (status: InstallmentStatus) => {
    switch (status) {
        case InstallmentStatus.PENDING:
            return 'purple';
        case InstallmentStatus.MISSED:
            return 'red';
        case InstallmentStatus.PAID:
            return 'green';
        default:
            return 'grey';
    }
};
