import React from 'react';
import {ChakraProvider} from '@chakra-ui/react';
import {AppRouter} from './routing/AppRouter';
import {AuthProvider} from './authentication/context/AuthProvider';

export const App = () => {
    return (
        <ChakraProvider>
            <AuthProvider>
                <AppRouter />
            </AuthProvider>
        </ChakraProvider>
    );
};
