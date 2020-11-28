/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable {
        registerUser(username: string, password: string): Chainable<Element>;

        login(username: string, password: string): Chainable<Element>;

        logout(): Chainable<Element>;

        createNewAuction(description: string, endDate: string, loanAmount: number, numberOfInstallments: number): Chainable<Element>;

        submitOffer(proposedAnnualPercentageRate: number): Chainable<Element>;

        withdraw(amount: number): Chainable<Element>;

        deposit(amount: number): Chainable<Element>;
    }
}
