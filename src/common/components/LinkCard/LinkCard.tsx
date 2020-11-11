import React from 'react';
import {Icon, Text} from '@chakra-ui/core';
import {Card} from '../Card';
import {useRouteMatch, useHistory} from 'react-router-dom';
import * as styles from './LinkCard.styles';

interface Props {
    icon: string;
    path: string;
}

export const LinkCard: React.FC<Props> = ({icon, path, children, ...rest}) => {
    const match = useRouteMatch(path);
    const history = useHistory();

    const navigate = () => {
        if (match === null) {
            history.push(path);
        }
    };

    return (
        <Card
            className={match === null ? styles.card : ''}
            backgroundColor={match !== null ? '#dde3f9' : '#ffffffff'}
            onClick={navigate}
            {...rest}
        >
            <Icon name={icon} size={'24px'} />
            <Text ml={2} display={'inline'}>
                {children}
            </Text>
        </Card>
    );
};
