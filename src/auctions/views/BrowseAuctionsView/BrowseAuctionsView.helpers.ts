import {AuctionInfo} from '../../components/BrowseAuctions/BrowseAuctions.types';

export const mockAuctions = (howMany: number): AuctionInfo[] =>
    [...Array(howMany)].map(() => ({
        valueOfLoan: Math.floor(Math.random() * 10000000) / 100,
        deadline: new Date(+new Date() - Math.floor(Math.random() * 10000000000)),
        offers: [...Array(Math.floor(Math.random() * 100))].map(() => ({valueOfLoan: Math.floor(Math.random() * 10000000) / 100})),
    }));
