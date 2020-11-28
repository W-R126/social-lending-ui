import React from 'react';
import {Heading, Skeleton} from '@chakra-ui/react';
import {useUser} from '../../contexts/UserProvider';

export const Balance: React.FC = () => {
    const userContext = useUser();
    const isFetching = userContext?.isFetching;
    const balance = userContext?.user?.balance;
    return (
        <Skeleton isLoaded={!isFetching}>
            <Heading>${balance}</Heading>
        </Skeleton>
    );
};
