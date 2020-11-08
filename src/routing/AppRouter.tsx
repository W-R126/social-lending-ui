import React from 'react';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import {Routes} from './routes';
import {RegisterView} from '../authentication/views/RegisterView';
import {getBaseName} from './AppRouter.helpers';
import {PageNotFound} from './components/PageNotFound';
import {LoginView} from '../authentication/views/LoginView';

export const AppRouter: React.FC = () => {
    const basename = getBaseName();

    return (
        <BrowserRouter basename={basename}>
            <Switch>
                <Route path={'/'} exact>
                    <Redirect to={Routes.LOGIN} />
                </Route>
                <Route path={Routes.LOGIN}>
                    <LoginView />
                </Route>
                <Route path={Routes.REGISTER}>
                    <RegisterView />
                </Route>
                <Route>
                    <PageNotFound />
                </Route>
            </Switch>
        </BrowserRouter>
    );
};
