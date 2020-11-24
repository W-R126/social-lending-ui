/// <reference types="cypress" />
import {v4 as uuidv4} from 'uuid';

context('Login', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('should show error when wrong data is provided', () => {
        cy.get('[name="username"]').type(uuidv4());
        cy.get('[name="password"]').type(uuidv4());
        cy.get('button')
            .contains('Sign In')
            .click();
        cy.get('[role="alert"]').contains('Wrong username or password!');
    });

    it('should show error when empty field provided', () => {
        cy.get('button')
            .contains('Sign In')
            .click();
        cy.contains('Username is required!');
        cy.contains('Password is required!');
    });

    it('should redirect to auction view when correct credentials provided', () => {
        const username = uuidv4();
        const password = uuidv4();

        cy.registerUser(username, password);
        cy.get('[name="username"]').type(username);
        cy.get('[name="password"]').type(password);
        cy.get('button')
            .contains('Sign In')
            .click();
        cy.url().should('include', Cypress.env('authenticatedHomepage'));
    });
});
