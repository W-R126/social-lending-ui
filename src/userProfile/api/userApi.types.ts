export interface User {
    account: string | null;
    balance: number | null;
    cardNumber: number | null;
    cvc: number | null;
    expiry: string | null;
    name: string | null;
    transactions: Transaction[];
    username: string | null;
}

export interface Transaction {
    id: number;
    type: string;
    amount: number;
    referenceId: string;
    timestamp: string;
}
