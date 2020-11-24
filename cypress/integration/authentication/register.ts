/// <reference types="cypress" />
import {v4 as uuidv4} from 'uuid';

context('Register', () => {
    it('should navigate to register page from login page', () => {
        cy.visit('/login');
        cy.get('a')
            .contains('Register!')
            .click();
        cy.contains('Register');
    });

    it('should show error when empty fields provided', () => {
        cy.visit('/register');
        cy.get('button')
            .contains('Sign up')
            .click();
        cy.contains('Username is required!');
        cy.contains('Password should have at least 8 characters!');
        cy.contains('Confirm password is required!');
    });

    it('should show error when password is too short', () => {
        cy.visit('/register');
        cy.get('[name="username"]').type('username');
        cy.get('[name="password"]')
            .type('shorttt')
            .blur();
        cy.contains('Password should have at least 8 characters!');
    });

    it('should show error when confirm password does not match password', () => {
        cy.visit('/register');
        cy.get('[name="username"]').type('username');
        cy.get('[name="password"]').type('longPassword');
        cy.get('[name="confirmPassword"]')
            .type('notMatching')
            .blur();
        cy.contains('Confirm password does not match with password!');
    });

    it('should show error when user exists', () => {
        const username = uuidv4();
        const password = uuidv4();
        cy.registerUser(username, password);

        cy.visit('/register');
        cy.get('[name="username"]').type(username);
        cy.get('[name="password"]').type(password);
        cy.get('[name="confirmPassword"]')
            .type(password)
            .blur();
        cy.get('button')
            .contains('Sign up')
            .click();
        cy.contains('User already exists!');
    });
    it('should redirect user to home page when correct credentials provided', () => {
        const username = uuidv4();
        const password = uuidv4();

        cy.get('[name="username"]').type(username);
        cy.get('[name="password"]').type(password);
        cy.get('[name="confirmPassword"]')
            .type(password)
            .blur();
        cy.get('button')
            .contains('Sign up')
            .click();
        cy.url().should('include', Cypress.env('authenticatedHomepage'));
    });
});
