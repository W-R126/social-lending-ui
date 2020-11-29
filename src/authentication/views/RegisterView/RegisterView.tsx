import React from 'react';
import {Box, Flex, Text} from '@chakra-ui/react';
import {Routes} from '../../../routing/routes';
import {RegisterForm} from '../../components/RegisterForm';
import {AppLink} from '../../../routing/components/AppLink';

/**
 * Register view which allows to sign up or transition to the login view.
 * @constructor
 */
export const RegisterView: React.FC = () => {
    return (
        <Flex width={'full'} p={4} align={'center'} justifyContent={'center'} direction={'column'}>
            <RegisterForm />
            <Box width={'full'} maxWidth={500} my={6} p={2} borderWidth={1} borderRadius={8} boxShadow={'lg'}>
                <Text display={'inline'}>Already have account? </Text>
                <AppLink to={Routes.LOGIN}>Login!</AppLink>
            </Box>
        </Flex>
    );
};
