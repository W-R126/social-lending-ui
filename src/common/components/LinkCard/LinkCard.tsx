import React from 'react';
import {Icon, Text} from '@chakra-ui/core';
import {Card} from '../Card';
import {useRouteMatch} from 'react-router-dom';

interface Props {
    icon: string;
    path: string;
}

export const LinkCard: React.FC<Props> = ({icon, path, children, ...rest}) => {
    const match = useRouteMatch(path);

    return (
        <Card {...rest}>
            <Icon name={icon} size={'24px'} />
            <Text ml={2} display={'inline'}>
                {match !== null && <div>MATCH</div>}
                {children}
            </Text>
        </Card>
    );
};
