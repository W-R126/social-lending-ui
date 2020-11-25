/**
 * Restricted route file
 * @packageDocumentation
 */
import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import {useAuth} from '../../../authentication/context/AuthProvider';
import {Routes} from '../../routes';

/**
 * Parameter definitions
 */
interface Props {
    /**
     * Path request from authenticated user
     */
    path: string;
}

/**
 * RestrictedRoute component. If user is authenticated then redirects to desired
 * page, otherwise redirects to Login page
 * @param path
 * @param children
 * @returns RestrictedRoute route component
 */
export const RestrictedRoute: React.FC<Props> = ({path, children}) => {
    const {isAuthenticated} = useAuth();
    return <Route path={path}>{isAuthenticated ? children : <Redirect to={Routes.LOGIN} />}</Route>;
};
