import React from 'react';
import {CSSReset, theme, ThemeProvider} from '@chakra-ui/core';

const icons = {
    auctions: {
        path: (
            <path d="M299 24c-15 1-26 4-33 9l-97 52-54 73c-12 18-4 52 32 30l39-51c50-43 151-23 103 62-24 50-13 74 17 84l14-46c24-54 69-64 67-107l107 8-1-112-194-2zm-54 104c-18-1-35 7-47 17l-39 51c11 9 21 4 32-6 13 6 22-3 30-23 4-14 9-23 24-39zm-80 96h-1c-3 0-7 4-10 12s-3 19-1 32c3 12 8 22 13 28 6 7 11 8 14 8 3-1 7-4 10-12 2-8 3-20 1-32-3-12-8-22-13-29-5-5-10-7-13-7zm83 106c-8 1-18 3-28 8-11 5-19 13-24 20s-5 12-4 15c2 3 6 6 15 6 8 1 19-1 30-7 11-5 20-13 25-20s5-12 3-15c-1-3-5-6-14-6h-3zm-98 96l-13 2c-8 3-13 7-15 12-1 6 0 12 6 19s16 13 28 17c11 3 23 3 32 1 8-3 13-7 15-13 1-5 0-11-6-18s-15-14-27-17l-20-3z" />
        ),
        viewBox: '0 0 512 512',
    },
};

const customTheme = {
    ...theme,
    icons: {
        ...theme.icons,
        ...icons,
    },
};

export const AppTheme: React.FC = ({children}) => {
    return (
        <ThemeProvider theme={customTheme}>
            <CSSReset />
            {children}
        </ThemeProvider>
    );
};
