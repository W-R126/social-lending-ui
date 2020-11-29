/**
 * File with routing configuration
 * @packageDocumentation
 */
import React, {Suspense} from 'react';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import {Routes} from './routes';
import {useAuth} from '../authentication/context/AuthProvider';
import {getBaseName} from './AppRouter.helpers';

const RegisterView = React.lazy(() => import('../authentication/views/RegisterView/RegisterView'));
const PageNotFound = React.lazy(() => import('./components/PageNotFound/PageNotFound'));
const LoginView = React.lazy(() => import('../authentication/views/LoginView/LoginView'));
const RestrictedRoute = React.lazy(() => import('./components/RestrictedRoute/RestrictedRoute'));
const BrowseAuctionsView = React.lazy(() => import('../auctions/views/BrowseAuctionsView/BrowseAuctionsView'));
const DrawerMenu = React.lazy(() => import('../common/components/DrawerMenu/DrawerMenu'));
const CreateAuctionView = React.lazy(() => import('../auctions/views/CreateAuctionView/CreateAuctionView'));
const BrowseMyAuctionsView = React.lazy(() => import('../auctions/views/BrowseMyAuctionsView/BrowseMyAuctionsView'));
const MyAuctionDetailsView = React.lazy(() => import('../auctions/views/MyAuctionDetailsView/MyAuctionDetailsView'));
const BrowseMyOffersView = React.lazy(() => import('../auctions/views/BrowseMyOffersView/BrowseMyOffersView'));
const CreateOfferView = React.lazy(() => import('../auctions/views/CreateOfferView/CreateOfferView'));
const HistoryView = React.lazy(() => import('../userProfile/views/HistoryView/HistoryView'));
const AccountView = React.lazy(() => import('../userProfile/views/AccountView/AccountView'));
const BorrowerLoanView = React.lazy(() => import('../loans/views/BorrowerLoanView/BorrowerLoanView'));
const BorrowerLoanHistoryView = React.lazy(() => import('../loans/views/BorrowerLoanHistoryView/BorrowerLoanHistoryView'));
const LenderLoanView = React.lazy(() => import('../loans/views/LenderLoanView/LenderLoanView'));
const UserProvider = React.lazy(() => import('../userProfile/contexts/UserProvider'));

/**
 * Routing implementation for whole app. Uses useAuth hook in order to check whether user
 * has privileges to access certain resource. The requested url is formatted using getBaseName
 * @constructor
 */
export const AppRouter: React.FC = () => {
    const basename = getBaseName();
    const {isAuthenticated} = useAuth();

    return (
        <Suspense fallback={<></>}>
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
        </Suspense>
    );
};
