import React, {useState} from 'react';
import {retrieveToken, storeToken} from '../helpers/tokenStorage';
import {createContext, useContext} from 'react';
import {signin} from '../api/authAPI';
import axios from 'axios';

interface Context {
    isAuthenticated: boolean;
    token: string | null;
    login: (username: string, password: string) => Promise<boolean>;
    logout: () => Promise<boolean>;
}

const AuthContext = createContext<Context>({
    isAuthenticated: false,
    token: null,
    login: async () => false,
    logout: async () => false,
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC = ({children}) => {
    const storedToken = retrieveToken();
    const [token, setToken] = useState<string | null>(storedToken);

    const setAxiosToken = (token: string | null) => {
        if (token !== null) {
            axios.defaults.headers['Authorization'] = `Bearer ${token}`;
        } else {
            axios.defaults.headers['Authorization'] = null;
        }
    };

    setAxiosToken(storedToken);

    const login = async (username: string, password: string) => {
        const token = await signin(username, password);

        storeToken(token);
        setToken(token);

        if (token !== null) {
            setAxiosToken(token);
        } else {
            setAxiosToken(null);
        }

        return token !== null;
    };

    const logout = async () => {
        if (token === null) {
            return false;
        }

        setAxiosToken(null);
        setToken(null);
        storeToken(null);
        return true;
    };

    axios.interceptors.response.use(
        value => value,
        error => {
            if (error.response && error.response.status) {
                if (error.response.status === 403) {
                    logout();
                }
            }
            return Promise.reject(error);
        },
    );

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
