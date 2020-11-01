import React, {ReactChildren} from 'react';
import {ColorModeProvider, CSSReset, ThemeProvider} from '@chakra-ui/core';
import {light} from './light';

export const AppTheme: React.FC = ({children}) => {
    return (
        <ThemeProvider theme={light}>
            <CSSReset />
            <ColorModeProvider>{children}</ColorModeProvider>
        </ThemeProvider>
    );
};
