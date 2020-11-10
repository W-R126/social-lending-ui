import {createContext, useContext} from 'react';

interface AuthContext {
    isAuthenticated: boolean;
    token: string | null;
    login: () => void;
    logout: () => void;
}

export const AuthContext = createContext<AuthContext>({
    isAuthenticated: false,
    token: null,
    login: () => {},
    logout: () => {},
});

export const useAuth = () => useContext(AuthContext);
