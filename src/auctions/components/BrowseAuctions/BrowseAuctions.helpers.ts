import {AuctionInfo, Offer} from './BrowseAuctions.types';

export const getLowestBid = (data: Offer[]) => data.sort((a, b) => (a.valueOfLoan > b.valueOfLoan ? 1 : -1))[0];

export const prepareData = (auctions: AuctionInfo[]) =>
    auctions.map(auction => ({...auction, offers: auction.offers.length, lowestBid: getLowestBid(auction.offers)?.valueOfLoan}));
