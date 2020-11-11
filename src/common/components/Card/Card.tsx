import React from 'react';
import {Box, BoxProps} from '@chakra-ui/core';

export const Card: React.FC<BoxProps> = ({children, ...rest}) => {
    return (
        <Box p={4} shadow={'md'} borderWidth={'1px'} rounded={'md'} {...rest}>
            {children}
        </Box>
    );
};
