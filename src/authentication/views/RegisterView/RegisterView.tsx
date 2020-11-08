import React from 'react';
import {Box, Flex, Link, Text} from '@chakra-ui/core';
import {Link as RouterLink} from 'react-router-dom';
import {Routes} from '../../../routing/routes';
import {RegisterForm} from '../../components/RegisterForm';

export const RegisterView: React.FC = () => {
    return (
        <Flex width={'full'} py={12} align={'center'} justifyContent={'center'} direction={'column'}>
            <RegisterForm />
            <Box my={6} p={2} borderWidth={1} borderRadius={8} boxShadow={'lg'}>
                <Text display={'inline'}>Already have account? </Text>
                <Link>
                    <RouterLink to={Routes.LOGIN}>Login!</RouterLink>
                </Link>
            </Box>
        </Flex>
    );
};
