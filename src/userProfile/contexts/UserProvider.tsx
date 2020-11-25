import React, {createContext, useContext, useState} from 'react';
import {getUser} from '../api/user/userApi';
import {User} from './userContext.types';
import {useInit} from '../../common/hooks/useInit';

const UserContext = createContext<User | null>(null);

export const useUser = () => useContext(UserContext);

export const UserProvider: React.FC = ({children}) => {
    const [user, setUser] = useState<User | null>(null);
    const [isFetching, setFetching] = useState(false);
    async function fetchUser(): Promise<boolean> {
        setFetching(true);
        const fetchedUser = await getUser();
        if (fetchedUser !== null) {
            console.log(fetchedUser);
            setUser(fetchedUser);
            return true;
        }
        return false;
    }

    useInit(fetchUser);
    // const user = await getUser();
    return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};
