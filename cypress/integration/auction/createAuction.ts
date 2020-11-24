/// <reference types="cypress" />
import {v4 as uuidv4} from 'uuid';

const username = uuidv4();
const password = uuidv4();

context('Create auction', () => {
    beforeEach(() => {
        cy.login(username, password);
        goToCreateAuction();
    });

    before(() => {
        cy.registerUser(username, password);
    });

    after(() => {
        cy.logout();
    });

    it('should redirect to create auction view on menu click', () => {
        cy.contains('Create New Auction');
    });

    it('should show error when no data provided', () => {
        cy.get('[name="loanAmount"]').clear();
        cy.get('[name="numberOfInstallments"]')
            .clear()
            .blur();
        cy.contains('Loan amount must be greater than 0');
        cy.contains('Number of installments must be greater than 0');
        cy.get('[type="submit"]').should('be.disabled');
    });

    it('should show error when too many installments provided', () => {
        cy.get('[name="numberOfInstallments"]')
            .type('20000')
            .blur();
        cy.contains('Minimum price for each installment should be at least $5!');
    });

    it('should create new auction', () => {
        const loanAmount = Math.round(Math.random() * 100000) / 100;
        const numberOfInstallments = Math.round(Math.random() * 120);

        cy.get('[name="loanAmount"]').type((loanAmount as unknown) as string);
        cy.get('[name="numberOfInstallments"]').type((numberOfInstallments as unknown) as string);
        cy.get('[type="submit"]').click();
        cy.contains(loanAmount);
        cy.contains(numberOfInstallments);
    });
});

const goToCreateAuction = () => {
    cy.visit(Cypress.env('authenticatedHomepage'));
    cy.get('[aria-label="Open Drawer"]').click();
    cy.get('p')
        .contains('Create Auction')
        .click();
    cy.get('[aria-label="Close"]').click();
};
