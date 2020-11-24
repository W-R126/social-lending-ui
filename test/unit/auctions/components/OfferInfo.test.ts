import {Auction} from '../../../../src/auctions/api/auctionsAPI.types';
import {calculateProfit} from '../../../../src/auctions/components/OfferInfo/OfferInfo.helpers';

describe('OfferInfo.helpers.ts -> calculateProfit', () => {
    test.each([
        [{loanAmount: 100, numberOfInstallments: 12} as Auction, 0, 0],
        [{loanAmount: 100, numberOfInstallments: 12} as Auction, 0.12, 12],
        [{loanAmount: 100, numberOfInstallments: 1} as Auction, 0.12, 1],
    ])('should calculate profit correctly', (auction: Auction, interest: number, profit: number) => {
        expect(calculateProfit(auction, interest)).toBe(profit.toFixed(2));
    });
});
