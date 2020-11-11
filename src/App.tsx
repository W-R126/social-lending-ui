import React from 'react';
import {AppTheme} from './AppTheme';
import {AppRouter} from './routing/AppRouter';
import {AuthProvider} from './authentication/context/AuthProvider';

export const App = () => {
    return (
        <AppTheme>
            <AuthProvider>
                <AppRouter />
            </AuthProvider>
        </AppTheme>
    );
};
