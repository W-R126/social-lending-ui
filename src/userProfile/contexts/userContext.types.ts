export interface User {
    username: string | null;
    account: string | null;
    cardNumber: number | null;
    name: string | null;
    cvc: number | null;
    expiry: string | null;
    balance: number | null;
    transactions: Transaction[];
}

export interface Transaction {
    id: number;
    type: string;
    amount: number;
    referenceId: string;
    timestamp: string;
}
