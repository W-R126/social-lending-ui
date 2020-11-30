/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable<Subject> {
        registerUser(username: string, password: string): Chainable<Element>;

        login(username: string, password: string): Chainable<Element>;

        logout(): Chainable<Element>;

        createNewAuction(description: string, endDate: string, loanAmount: number, numberOfInstallments: number): Chainable<Element>;

        submitOffer(proposedAnnualPercentageRate: number): Chainable<Element>;

        acceptOffer(): Chainable<Element>;

        withdraw(amount: number): Chainable<Element>;

        deposit(amount: number): Chainable<Element>;

        userInfo(): Chainable<User>;

        payNextInstallment(amount: number, loan_id: number): Chainable<Element>;

        getAllLoans(): Chainable<Element>;
    }
}

interface User {
    account: string | null;
    balance: number | null;
    cardNumber: number | null;
    cvc: number | null;
    expiry: string | null;
    name: string | null;
    transactions: Transaction[];
    username: string | null;
}

interface Transaction {
    id: number;
    type: string;
    amount: number;
    referenceId: string;
    timestamp: string;
}
