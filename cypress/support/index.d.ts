/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable {
        registerUser(username: string, password: string): Chainable<Element>;

        login(username: string, password: string): Chainable<Element>;

        logout(): Chainable<Element>;

        createNewAuction(
            username: string,
            password: string,
            description: string,
            endDate: string,
            loanAmount: number,
            numberOfInstallments: number,
        ): Chainable<Element>;
    }
}
