import React from 'react';
import {Link as RouterLink} from 'react-router-dom';
import {routerLinkStyle} from './AppLink.styles';

/**
 * Parameter definitions
 */
interface Props {
    /**
     * Destination path for RouterLink
     */
    to: string;
}

/**
 * Styled Link component
 * @param to
 * @param children
 * @constructor
 */
export const AppLink: React.FC<Props> = ({to, children}) => {
    return (
        <RouterLink className={routerLinkStyle} to={to}>
            {children}
        </RouterLink>
    );
};
