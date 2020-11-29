import React, {createContext, useContext, useState} from 'react';
import {getUser} from '../api/userApi';
import {UserDto} from '../api/userApi.types';
import {useInit} from '../../common/hooks/useInit';
import {UserContextType} from './userProvider.types';

/**
 * User data context with provider to be used across components that need to display user data
 */

const UserContext = createContext<UserContextType | null>(null);

export const useUser = () => useContext(UserContext);

export const UserProvider: React.FC = ({children}) => {
    const [user, setUser] = useState<UserDto | null>(null);
    const [isFetching, setFetching] = useState(false);
    async function fetchUser(): Promise<boolean> {
        setFetching(true);
        const fetchedUser = await getUser();
        if (fetchedUser !== null) {
            setUser(fetchedUser);
            setFetching(false);
            return true;
        }
        setFetching(false);
        return false;
    }
    useInit(fetchUser);
    return <UserContext.Provider value={{user, isFetching}}>{children}</UserContext.Provider>;
};
