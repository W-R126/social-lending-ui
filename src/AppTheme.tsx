import React from 'react';
import {CSSReset, theme, ThemeProvider} from '@chakra-ui/core';

export const AppTheme: React.FC = ({children}) => {
    return (
        <ThemeProvider theme={theme}>
            <CSSReset />
            {children}
        </ThemeProvider>
    );
};
