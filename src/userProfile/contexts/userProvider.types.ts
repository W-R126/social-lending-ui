import {UserDto} from '../api/userApi.types';

/**
 * Type for user context
 */
export interface UserContextType {
    user: UserDto | null;
    isFetching: boolean;
}
