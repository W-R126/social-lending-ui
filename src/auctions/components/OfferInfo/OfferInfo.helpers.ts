import {Auction} from '../../api/auctionsAPI.types';

/**
 * Calculates profit for lender from this auction
 * @param auction
 * @param interest floating point number of annual percentage rate
 */
export function calculateProfit(auction: Auction, interest: number) {
    return (auction.loanAmount * (interest / 12) * auction.numberOfInstallments).toFixed(2);
}
