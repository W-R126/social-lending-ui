import {Auction} from '../../api/auctionsAPI.types';

export function calculateProfit(auction: Auction, interest: number) {
    return (auction.loanAmount * (interest / 12) * auction.numberOfInstallments).toFixed(2);
}
