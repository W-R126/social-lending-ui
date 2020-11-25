/**
 * Definition of url navigation paths
 */
export enum Routes {
    /**
     * Standard login form
     */
    LOGIN = '/login',
    /**
     * Register form with payment method selection and
     * configuration
     */
    REGISTER = '/register',
    /**
     * Main page for authenticated user. Lists all auctions
     * started by other users. User can decide whether he
     * wants to make offer or create his own auction.
     *
     * @remark
     * He can access other routes using Drawer menu
     */
    AUCTIONS = '/auctions',
    /**
     * Creat offer form which gives user ability to create
     * offer for certain auction with his own parameters.
     * This offer will be added to MyOffers view
     */
    AUCTION_CREATE_OFFER = '/auctions/:auctionId/new-offer',
    /**
     * Lists all auctions created by user using CreateAuction form
     */
    MY_AUCTIONS = '/my-auctions',
    /**
     * Using See detail button from MyAuctions view user is able to
     * see details of his auction and view offers from other users.
     */
    MY_AUCTION_DETAILS = '/my-auctions/:auctionId',
    /**
     * Form which gives user possibility to create his own
     * auction
     */
    CREATE_AUCTION = '/new-auction',
    /**
     * Lists all offers create by certain user.
     */
    MY_OFFERS = '/my-offers',
    ACCOUNT = '/user-profile',
    TRANSFER = '/transfer',
    HISTORY = '/history',
}
