export interface Auction {
    beginDate: number;
    endDate: number;
    id: number;
    loanAmount: number;
    numberOfInstallments: number;
}

export interface AuctionDTO {
    endDate: string;
    loanAmount: number;
    numberOfInstallments: number;
}
