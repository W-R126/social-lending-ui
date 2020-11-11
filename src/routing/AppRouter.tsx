import React from 'react';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import {Routes} from './routes';
import {RegisterView} from '../authentication/views/RegisterView';
import {getBaseName} from './AppRouter.helpers';
import {PageNotFound} from './components/PageNotFound';
import {LoginView} from '../authentication/views/LoginView';
import {RestrictedRoute} from './components/RestrictedRoute/RestrictedRoute';
import {useAuth} from '../authentication/context/AuthProvider';

export const AppRouter: React.FC = () => {
    const basename = getBaseName();
    const {isAuthenticated} = useAuth();

    return (
        <BrowserRouter basename={basename}>
            <Switch>
                <Route path={'/'} exact>
                    <Redirect to={Routes.LOGIN} />
                </Route>
                <Route path={Routes.LOGIN}>{isAuthenticated ? <Redirect to={'/secret'} /> : <LoginView />}</Route>
                <Route path={Routes.REGISTER}>{isAuthenticated ? <Redirect to={'/secret'} /> : <RegisterView />}</Route>
                <RestrictedRoute path={'/secret'}>
                    <div>SECRET CONTENT</div>
                </RestrictedRoute>
                <Route>
                    <PageNotFound />
                </Route>
            </Switch>
        </BrowserRouter>
    );
};
