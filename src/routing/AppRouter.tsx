/**
 * File with routing configuration
 * @packageDocumentation
 */
import React from 'react';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import {Routes} from './routes';
import {RegisterView} from '../authentication/views/RegisterView';
import {getBaseName} from './AppRouter.helpers';
import {PageNotFound} from './components/PageNotFound';
import {LoginView} from '../authentication/views/LoginView';
import {RestrictedRoute} from './components/RestrictedRoute';
import {useAuth} from '../authentication/context/AuthProvider';
import {BrowseAuctionsView} from '../auctions/views/BrowseAuctionsView';
import {DrawerMenu} from '../common/components/DrawerMenu';
import {CreateAuctionView} from '../auctions/views/CreateAuctionView';
import {BrowseMyAuctionsView} from '../auctions/views/BrowseMyAuctionsView';
import {MyAuctionDetailsView} from '../auctions/views/MyAuctionDetailsView';
import {BrowseMyOffersView} from '../auctions/views/BrowseMyOffersView';
import {CreateOfferView} from '../auctions/views/CreateOfferView';
import {HistoryView} from '../userProfile/views/HistoryView/HistoryView';
import {AccountView} from '../userProfile/views/AccountView/AccountView';
import {BorrowerLoanView} from '../loans/views/BorrowerLoanView';
import {BorrowerLoanHistoryView} from '../loans/views/BorrowerLoanHistoryView';
import {LenderLoanView} from '../loans/views/LenderLoanView';
import {UserProvider} from '../userProfile/contexts/UserProvider';

/**
 * Routing implementation for whole app. Uses useAuth hook in order to check whether user
 * has privileges to access certain resource. The requested url is formatted using getBaseName
 * @constructor
 */
export const AppRouter: React.FC = () => {
    const basename = getBaseName();
    const {isAuthenticated} = useAuth();

    return (
        <BrowserRouter basename={basename}>
            <DrawerMenu />
            <Switch>
                <Route path={'/'} exact>
                    <Redirect to={isAuthenticated ? Routes.AUCTIONS : Routes.LOGIN} />
                </Route>
                <Route path={Routes.LOGIN}>{isAuthenticated ? <Redirect to={Routes.AUCTIONS} /> : <LoginView />}</Route>
                <Route path={Routes.REGISTER}>{isAuthenticated ? <Redirect to={Routes.AUCTIONS} /> : <RegisterView />}</Route>

                <RestrictedRoute path={Routes.AUCTION_CREATE_OFFER}>
                    <CreateOfferView />
                </RestrictedRoute>

                <RestrictedRoute path={Routes.AUCTIONS}>
                    <BrowseAuctionsView />
                </RestrictedRoute>

                <RestrictedRoute path={Routes.MY_AUCTION_DETAILS}>
                    <MyAuctionDetailsView />
                </RestrictedRoute>

                <RestrictedRoute path={Routes.MY_AUCTIONS}>
                    <BrowseMyAuctionsView />
                </RestrictedRoute>

                <RestrictedRoute path={Routes.CREATE_AUCTION}>
                    <CreateAuctionView />
                </RestrictedRoute>

                <RestrictedRoute path={Routes.MY_OFFERS}>
                    <BrowseMyOffersView />
                </RestrictedRoute>

                <RestrictedRoute path={Routes.ACCOUNT}>
                    <AccountView />
                </RestrictedRoute>

                <RestrictedRoute path={Routes.HISTORY}>
                    <UserProvider>
                        <HistoryView />
                    </UserProvider>
                </RestrictedRoute>

                <RestrictedRoute path={Routes.BORROWER_LOANS_DETAILS}>
                    <BorrowerLoanHistoryView />
                </RestrictedRoute>

                <RestrictedRoute path={Routes.BORROWER_LOANS}>
                    <BorrowerLoanView />
                </RestrictedRoute>

                <RestrictedRoute path={Routes.LENDER_LOANS}>
                    <LenderLoanView />
                </RestrictedRoute>

                <Route>
                    <PageNotFound />
                </Route>
            </Switch>
        </BrowserRouter>
    );
};
