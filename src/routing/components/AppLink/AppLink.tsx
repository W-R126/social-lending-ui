import React from 'react';
import {Link as RouterLink} from 'react-router-dom';
import {routerLinkStyle} from './AppLink.styles';

interface Props {
    to: string;
}

export const AppLink: React.FC<Props> = ({to, children}) => {
    return (
        <RouterLink className={routerLinkStyle} to={to}>
            {children}
        </RouterLink>
    );
};
