/// <reference types="cypress" />
import {v4 as uuidv4} from 'uuid';

context('Router', () => {
    it('should redirect user from main page to login page, when not logged in', () => {
        cy.visit('/');
        cy.url().should('include', '/login');
    });
    it('should redirect user from random url to login page, when not logged in', () => {
        cy.visit(`/${Cypress.env('authenticatedHomepage')}`);
        cy.url().should('include', '/login');
    });
    it('should show 404 when wrong address is provided', () => {
        cy.visit(`/${uuidv4()}`);
        cy.contains("Looks like you're lost :(");
    });
});
