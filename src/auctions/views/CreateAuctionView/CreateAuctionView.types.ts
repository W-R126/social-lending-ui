/**
 * Data which will be provided by user in
 * {@link CreateAuctionView} and, after validation
 * sent to api
 */
export interface CreateAuctionFormData {
    /**
     * End date for auction
     */
    endDate: Date;
    /**
     * Loan that borrower want to take
     */
    loanAmount: number;
    /**
     * Proposed by borrower, number of installments
     */
    numberOfInstallments: number;
    /**
     * Short description of auction
     */
    description: string;
}
