export interface AuctionInfo {
    valueOfLoan: number;
    deadline: Date;
    offers: Offer[];
}

export interface Offer {
    valueOfLoan: number;
}
