import React from 'react';
import {AppTheme} from './AppTheme';
import {AppRouter} from './routing/AppRouter';

export const App = () => {
    return (
        <AppTheme>
            <AppRouter />
        </AppTheme>
    );
};
