import React from 'react';
import {Flex, Heading, Image} from '@chakra-ui/react';
import {AppLink} from '../AppLink';
import {MainBox} from './PageNotFound.styles';

/**
 * Component rendered when url path is not found
 * @constructor
 * @returns PageNotFound component
 */
export const PageNotFound: React.FC = () => {
    return (
        <Flex className={MainBox}>
            <Image width={['60%', '50%', '40%', '30%']} src={'svg/404.svg'} />
            <Heading mb={4} color={'gray.600'}>
                Looks like you're lost :(
            </Heading>
            <AppLink to={'/'}>Perhaps you'd like to go home?</AppLink>
        </Flex>
    );
};
