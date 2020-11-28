import {User} from '../api/userApi.types';

export interface UserContextType {
    user: User | null;
    isFetching: boolean;
}
