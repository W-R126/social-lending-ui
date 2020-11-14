import React from 'react';
import {Box, Text} from '@chakra-ui/react';
import {AppLink} from '../AppLink';
import {MainBox} from './PageNotFound.styles';

export const PageNotFound: React.FC = () => {
    return (
        <Box className={MainBox}>
            <Text>Looks like you're lost :(</Text>

            <AppLink to={'/'}>Perhaps you'd like to go home?</AppLink>
        </Box>
    );
};
