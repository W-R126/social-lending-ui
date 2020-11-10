import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import {useAuth} from '../../../authentication/context/authContext';
import {Routes} from '../../routes';

interface Props {
    path: string;
}

export const RestrictedRoute: React.FC<Props> = ({path, children}) => {
    const {isAuthenticated} = useAuth();

    return <Route path={path}>{isAuthenticated ? children : <Redirect to={Routes.LOGIN} />}</Route>;
};
