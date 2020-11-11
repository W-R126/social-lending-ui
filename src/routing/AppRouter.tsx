import React from 'react';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import {Routes} from './routes';
import {RegisterView} from '../authentication/views/RegisterView';
import {getBaseName} from './AppRouter.helpers';
import {PageNotFound} from './components/PageNotFound';
import {LoginView} from '../authentication/views/LoginView';
import {RestrictedRoute} from './components/RestrictedRoute/RestrictedRoute';
import {useAuth} from '../authentication/context/AuthProvider';
import {BrowseAuctionsView} from '../auctions/views/BrowseAuctionsView';
import {DrawerMenu} from '../common/components/DrawerMenu';

export const AppRouter: React.FC = () => {
    const basename = getBaseName();
    const {isAuthenticated} = useAuth();

    return (
        <BrowserRouter basename={basename}>
            <DrawerMenu />
            <Switch>
                <Route path={'/'} exact>
                    <Redirect to={Routes.LOGIN} />
                </Route>
                <Route path={Routes.LOGIN}>{isAuthenticated ? <Redirect to={Routes.AUCTIONS} /> : <LoginView />}</Route>
                <Route path={Routes.REGISTER}>{isAuthenticated ? <Redirect to={Routes.AUCTIONS} /> : <RegisterView />}</Route>
                <Route path={Routes.LOGIN}>{isAuthenticated ? <Redirect to={Routes.AUCTIONS} /> : <LoginView />}</Route>
                <Route path={Routes.REGISTER}>{isAuthenticated ? <Redirect to={Routes.AUCTIONS} /> : <RegisterView />}</Route>
                <RestrictedRoute path={Routes.AUCTIONS}>
                    <BrowseAuctionsView />
                </RestrictedRoute>
                <Route>
                    <PageNotFound />
                </Route>
            </Switch>
        </BrowserRouter>
    );
};
