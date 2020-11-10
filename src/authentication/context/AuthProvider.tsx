import React, {useState} from 'react';
import {retrieveToken, storeToken} from '../helpers/tokenStorage';
import {createContext, useContext} from 'react';

interface Context {
    isAuthenticated: boolean;
    token: string | null;
    login: () => void;
    logout: () => void;
}

const AuthContext = createContext<Context>({
    isAuthenticated: false,
    token: null,
    login: () => {},
    logout: () => {},
});

export const useAuth = () => useContext(AuthContext);

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
