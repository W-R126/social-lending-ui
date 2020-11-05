import React from 'react';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import {Routes} from './routes';
import {RegisterView} from '../authentication/views/RegisterView/RegisterView';
import {getBaseName} from './AppRouter.helpers';
import {PageNotFound} from './components/PageNotFound';

export const AppRouter: React.FC = () => {
    const basename = getBaseName();

    return (
        <BrowserRouter basename={basename}>
            <Switch>
                <Route path={'/'} exact>
                    <Redirect to={Routes.REGISTER} />
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
