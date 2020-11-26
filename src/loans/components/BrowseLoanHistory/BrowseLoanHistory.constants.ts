import {InstallmentStatus} from '../../api/loansAPI.types';

export const initialState = {[InstallmentStatus.PAID]: true, [InstallmentStatus.PENDING]: true, [InstallmentStatus.MISSED]: true};

export interface InitialStateType {
    [InstallmentStatus.PAID]: boolean;
    [InstallmentStatus.PENDING]: boolean;
    [InstallmentStatus.MISSED]: boolean;
}
