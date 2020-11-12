export interface Auction {
    beginDate: string;
    endDate: string;
    id: number;
    loanAmount: number;
    numberOfInstallments: number;
}

export interface AuctionDTO {
    endDate: string;
    loanAmount: number;
    numberOfInstallments: number;
}
