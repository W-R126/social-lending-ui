/**
 * Used to select method for sorting
 * auction list
 */
export enum OrderBy {
    /**
     * No sorting
     */
    DEFAULT,
    /**
     * By largest loan amount
     */
    LARGEST_LOAN_AMOUNT,
    /**
     * By smallest loan amount
     */
    SMALLEST_LOAN_AMOUNT,
    /**
     * Auctions with smallest number of
     * installments first
     */
    FEWEST_NUMBER_OF_INSTALLMENTS,
    /**
     * Auctions with biggest number of
     * installments first
     */
    BIGGEST_NUMBER_OF_INSTALLMENTS,
    /**
     * Newest auctions first
     * Default sorting method
     */
    NEWEST,
    /**
     * Oldest auctions first
     */
    OLDEST,
    /**
     * Auctions with shortest time to live first
     */
    CLOSING_SOONEST,
}
