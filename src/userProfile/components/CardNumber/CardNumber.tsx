import React from 'react';
import {Skeleton, Text} from '@chakra-ui/react';
import {useUser} from '../../contexts/UserProvider';

/**
 * Uses where needed to display the card number.
 * Depends on useUser context.
 * @constructor
 */
export const CardNumber: React.FC = () => {
    const userContext = useUser();
    const cardNumber = userContext?.user?.cardNumber;
    const isFetching = userContext?.isFetching;
    return (
        <Skeleton isLoaded={!isFetching}>
            <Text>{cardNumber}</Text>
        </Skeleton>
    );
};
