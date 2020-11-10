import React, {useState} from 'react';
import {AuthContext} from './authContext';
import {retrieveToken, storeToken} from '../helpers/tokenStorage';

export const AuthProvider: React.FC = ({children}) => {
    const [token, setToken] = useState<string | null>(retrieveToken());

    const login = () => {
        const token = 'JWT';

        setToken(token);
        storeToken(token);
    };

    const logout = () => {
        const token = null;

        setToken(token);
        storeToken(token);
    };

    return (
        <AuthContext.Provider
            value={{
                isAuthenticated: token != null,
                token,
                login,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
