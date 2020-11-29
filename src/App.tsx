import React from 'react';
import {ChakraProvider} from '@chakra-ui/react';
import {AppRouter} from './routing/AppRouter';
import {AuthProvider} from './authentication/context/AuthProvider';
import {Helmet} from 'react-helmet';

export const App = () => {
    return (
        <ChakraProvider>
            <AuthProvider>
                <Helmet>
                    <title>Lend tree</title>
                    <meta id="meta=description" name="description" content="Lend and borrow money with ease" />
                </Helmet>
                <AppRouter />
            </AuthProvider>
        </ChakraProvider>
    );
};
