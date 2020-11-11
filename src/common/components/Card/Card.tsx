import React from 'react';
import {Box} from '@chakra-ui/core';

export const Card: React.FC = ({children, ...rest}) => {
    return (
        <Box p={4} shadow={'md'} borderWidth={'1px'} rounded={'md'} {...rest}>
            {children}
        </Box>
    );
};
