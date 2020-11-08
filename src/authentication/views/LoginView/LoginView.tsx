import React from 'react';
import {LoginForm} from '../../components/LoginForm';
import {Box, Flex, Link, Text} from '@chakra-ui/core';
import {Link as RouterLink} from 'react-router-dom';
import {Routes} from '../../../routing/routes';

export const LoginView: React.FC = () => {
    return (
        <Flex width={'full'} py={12} align={'center'} justifyContent={'center'} direction={'column'}>
            <LoginForm />
            <Box my={6} p={2} borderWidth={1} borderRadius={8} boxShadow={'lg'}>
                <Text display={'inline'}>Are you new here? </Text>
                <Link>
                    <RouterLink to={Routes.REGISTER}>Register!</RouterLink>
                </Link>
            </Box>
        </Flex>
    );
};
