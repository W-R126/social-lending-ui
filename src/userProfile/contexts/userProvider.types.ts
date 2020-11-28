import {User} from '../api/userApi.types';

/**
 * Type for user context
 */
export interface UserContextType {
    user: User | null;
    isFetching: boolean;
}
