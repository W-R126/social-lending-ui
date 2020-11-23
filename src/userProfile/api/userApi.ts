import axios from 'axios';
import {User} from '../contexts/userContext.types';

export function getUser(): Promise<User | null> {
    return axios
        .get('api/user/me')
        .then(response => response.data)
        .catch(() => null);
}
