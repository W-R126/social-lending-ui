export interface AccountDetails {
    name: string;
    number: string;
    transactions: Transaction[];
    accountBalance: number;
}

interface Transaction {
    id: number;
    type: string;
    amount: number;
    referenceId: string;
    timestamp: string;
}

export interface ExternalTransaction {
    accountNumber: string;
    amount: number;
}
