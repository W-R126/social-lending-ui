/// <reference types="cypress" />
/// <reference types="../../cypress/support" />
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
        cy.get('[data-cy="description"]')
            .clear()
            .blur();
        cy.contains('Loan amount must be greater than 0');
        cy.contains('Number of installments must be greater than 0');
        cy.contains('Description should be at least 5 characters long');
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
        const description = uuidv4() + uuidv4();

        cy.get('[name="loanAmount"]').type((loanAmount as unknown) as string);
        cy.get('[name="numberOfInstallments"]').type((numberOfInstallments as unknown) as string);
        cy.get('[data-cy="description"]').type(description);
        cy.get('[type="submit"]').click();
        cy.contains(loanAmount);
        cy.contains(numberOfInstallments);
        cy.get('button')
            .contains('Show description')
            .click();
        cy.contains(description);
        cy.get('[type="button"]')
            .contains('See details')
            .should('be.visible')
            .click();
        cy.contains(loanAmount);
        cy.contains(numberOfInstallments);
        cy.contains(description);
    });
    it('should show auction created by other user', () => {
        const loanAmount = Math.round(Math.random() * 100000) / 100;
        const numberOfInstallments = Math.round(Math.random() * 120);
        const description = uuidv4() + uuidv4();
        const endDate = '12/12/9999 12:12';
        const username1 = uuidv4();
        const password1 = uuidv4();
        const username2 = uuidv4();
        const password2 = uuidv4();

        cy.registerUser(username1, password1);
        cy.login(username1, password1);
        cy.createNewAuction(description, endDate, loanAmount, numberOfInstallments);
        cy.logout();
        cy.registerUser(username2, password2);
        cy.login(username2, password2);
        cy.visit('/');
        cy.contains(loanAmount);
        cy.contains(numberOfInstallments);
        cy.get('button')
            .contains('Show description')
            .click();
        cy.contains(description);
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
