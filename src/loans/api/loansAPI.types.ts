export interface Loan {
    acceptedInterest: number;
    borrower: string;
    id: number;
    installments: Installment[];
    lender: string;
    startDate: string;
    takenAmount: number;
}

export interface LoanWithRedundantData {
    acceptedInterest: number;
    borrower: UserInfo;
    id: number;
    installments: Installment[];
    lender: UserInfo;
    startDate: number;
    takenAmount: number;
}

export interface UserInfo {
    account: string;
    balance: number;
    id: number;
    username: string;
    password: string;
    roles: string[];
}

export interface Installment {
    id: number;
    index: number;
    due: number;
    amount: number;
    interest: number;
    fine: number;
    total: number;
    left: number;
    status: InstallmentStatus;
}

export enum InstallmentStatus {
    PENDING = 'PENDING',
    PAID = 'PAID',
    MISSED = 'MISSED',
}
