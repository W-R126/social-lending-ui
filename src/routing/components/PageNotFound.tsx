import React from 'react';
import {Box, Link, Text} from '@chakra-ui/core';
import {Link as RouterLink} from 'react-router-dom';

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

            <Link>
                <RouterLink to={'/'}>Perhaps you'd like to go home?</RouterLink>
            </Link>
        </Box>
    );
};
