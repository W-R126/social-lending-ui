import {Auction} from '../../../../src/auctions/api/auctionsAPI.types';
import {orderAuctions} from '../../../../src/auctions/components/BrowseAuctions/BrowseAuctions.helpers';
import {OrderBy} from '../../../../src/auctions/components/BrowseAuctions/BrowseAuctions.types';

const auctions: Auction[] = [
    {
        id: 1,
        loanAmount: 103,
        numberOfInstallments: 7,
        beginDate: 1,
        endDate: 51,
        description: '',
        offers: [],
    },
    {
        id: 2,
        loanAmount: 102,
        numberOfInstallments: 6,
        beginDate: 3,
        endDate: 52,
        description: '',
        offers: [],
    },
    {
        id: 3,
        loanAmount: 101,
        numberOfInstallments: 5,
        beginDate: 2,
        endDate: 54,
        description: '',
        offers: [],
    },
    {
        id: 4,
        loanAmount: 100,
        numberOfInstallments: 8,
        beginDate: 4,
        endDate: 53,
        description: '',
        offers: [],
    },
];

describe('BrowseAuctions.helpers.ts -> orderAuctions', () => {
    it('orders correctly by largest loan amount', () => {
        const sorted = orderAuctions(auctions, OrderBy.LARGEST_LOAN_AMOUNT).map(x => x.id);
        expect(sorted).toEqual([1, 2, 3, 4]);
    });

    it('orders correctly by smallest loan amount', () => {
        const sorted = orderAuctions(auctions, OrderBy.SMALLEST_LOAN_AMOUNT).map(x => x.id);
        expect(sorted).toEqual([4, 3, 2, 1]);
    });

    it('orders correctly by most installments', () => {
        const sorted = orderAuctions(auctions, OrderBy.BIGGEST_NUMBER_OF_INSTALLMENTS).map(x => x.id);
        expect(sorted).toEqual([4, 1, 2, 3]);
    });

    it('orders correctly by fewest installments', () => {
        const sorted = orderAuctions(auctions, OrderBy.FEWEST_NUMBER_OF_INSTALLMENTS).map(x => x.id);
        expect(sorted).toEqual([3, 2, 1, 4]);
    });

    it('orders correctly by newest', () => {
        const sorted = orderAuctions(auctions, OrderBy.NEWEST).map(x => x.id);
        expect(sorted).toEqual([4, 2, 3, 1]);
    });

    it('orders correctly by oldest', () => {
        const sorted = orderAuctions(auctions, OrderBy.OLDEST).map(x => x.id);
        expect(sorted).toEqual([1, 3, 2, 4]);
    });

    it('orders correctly by closing soonest', () => {
        const sorted = orderAuctions(auctions, OrderBy.CLOSING_SOONEST).map(x => x.id);
        expect(sorted).toEqual([1, 2, 4, 3]);
    });

    it("default doesn't change order", () => {
        const sorted = orderAuctions(auctions, OrderBy.DEFAULT).map(x => x.id);
        expect(sorted).toEqual([1, 2, 3, 4]);
    });
});
