import React, {createContext, useContext, useEffect, useState} from 'react';
import {retrieveToken, storeToken} from '../../authentication/helpers/tokenStorage';
import axios from 'axios';
import {signin} from '../../authentication/api/authAPI';
import {getUser} from '../api/userApi';
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

    useInit(() => {
        fetchUser();
    });
    // const user = await getUser();
    return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};
