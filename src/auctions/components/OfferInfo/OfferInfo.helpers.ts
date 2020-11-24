import {Auction} from '../../api/auctionsAPI.types';

export function calculateProfit(auction: Auction, interest: number) {
    return (auction.loanAmount * (interest / 12 + 1) - auction.loanAmount).toFixed(2);
}
