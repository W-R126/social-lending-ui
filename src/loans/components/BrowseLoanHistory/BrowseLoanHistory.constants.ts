import {InstallmentStatus} from '../../api/loansAPI.types';

/**
 * Initial state that will be injected into {@link BadgeFilter} component
 *
 * Represented by object which keys are {@link InstallmentStatus}
 * entries and values are all true (all checkboxes are triggered on
 * by default)
 */
export const initialState: InitialStateType = {
    [InstallmentStatus.PAID]: true,
    [InstallmentStatus.PENDING]: true,
    [InstallmentStatus.MISSED]: true,
};

/**
 * Type of initial state of checkboxes. Principles of working are
 * described in {@link initialState} variable
 */
export interface InitialStateType {
    [InstallmentStatus.PAID]: boolean;
    [InstallmentStatus.PENDING]: boolean;
    [InstallmentStatus.MISSED]: boolean;
}
