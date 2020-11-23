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
    const fetchUser = async () => {
        return await getUser();
    };

    const user = fetchUser();

    useInit(fetchUser);

    return <UserContext.Provider value={null}>{children}</UserContext.Provider>;
};
