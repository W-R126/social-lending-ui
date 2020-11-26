import {InstallmentStatus} from '../../api/loansAPI.types';

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
