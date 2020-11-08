import React from 'react';
import {Box, Text} from '@chakra-ui/core';
import {AppLink} from '../AppLink';

export const PageNotFound: React.FC = () => {
    return (
        <Box
            position={'fixed'}
            width={'100%'}
            height={'100%'}
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'center'}
            alignItems={'center'}
        >
            <Text>Looks like you're lost :(</Text>

            <AppLink to={'/'}>Perhaps you'd like to go home?</AppLink>
        </Box>
    );
};
