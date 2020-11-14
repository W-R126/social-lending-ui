import React, {ReactElement} from 'react';
import {Stack, Text} from '@chakra-ui/react';
import {Card} from '../Card';
import {useRouteMatch, useHistory} from 'react-router-dom';
import * as styles from './LinkCard.styles';

interface Props {
    icon: ReactElement;
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
            p={2}
            cursor={'pointer'}
            className={match === null ? styles.card : ''}
            backgroundColor={match !== null ? '#dde3f9' : '#ffffffff'}
            onClick={navigate}
            {...rest}
        >
            <Stack direction={'row'} align={'center'}>
                {icon}
                <Text>{children}</Text>
            </Stack>
        </Card>
    );
};
