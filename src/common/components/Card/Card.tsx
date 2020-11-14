import React from 'react';
import {Box, BoxProps} from '@chakra-ui/react';

export const Card: React.FC<BoxProps> = ({children, ...rest}) => {
    return (
        <Box p={rest.p ?? 6} shadow={'md'} borderWidth={'1px'} rounded={'md'} {...rest}>
            {children}
        </Box>
    );
};
