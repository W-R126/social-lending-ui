/**
 * Defines all the user data attributes
 */

export interface UserDto {
    account: string | null;
    balance: number | null;
    cardNumber: number | null;
    cvc: number | null;
    expiry: string | null;
    name: string | null;
    transactions: TransactionDto[];
    username: string | null;
}

export interface TransactionDto {
    id: number;
    type: string;
    amount: number;
    referenceId: string;
    timestamp: string;
}
