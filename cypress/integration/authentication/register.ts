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
        cy.contains('Card number should consist of 16 digits');
        cy.contains('Provide first and family name');
        cy.contains('Provide expiry date in format **/**');
        cy.contains('CVC should be between 000 and 999');
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

    it('should show error when incorrect card number provided', () => {
        cy.visit('/register');
        cy.get('[name="cardNumber"]')
            .type(uuidv4())
            .blur();
        cy.contains('Card number should consist of 16 digits');
    });
    it('should show error when incorrect name provided', () => {
        cy.visit('/register');
        cy.get('[name="name"]')
            .type(uuidv4())
            .blur();
        cy.contains('Provide first and family names');
    });
    it('should show error when incorrect expiry date provided', () => {
        cy.visit('/register');
        cy.get('[name="expiry"]')
            .type(uuidv4())
            .blur();
        cy.contains('Provide expiry date in format **/**');
    });
    it('should show error when incorrect CVC provided', () => {
        cy.visit('/register');
        cy.get('[name="cvc"]')
            .type(uuidv4())
            .blur();
        cy.contains('CVC should be between 000 and 999');
    });
    it('should show error when user exists', () => {
        const username = uuidv4();
        const password = uuidv4();
        const cardNumber = '5342123412341234';
        const name = 'John Zorn';
        const expiry = '13/23';
        const cvc = '123';

        cy.visit('/register');
        cy.registerUser(username, password);

        cy.get('[name="username"]').type(username);
        cy.get('[name="password"]').type(password);
        cy.get('[name="confirmPassword"]').type(password);
        cy.get('[name="cardNumber"]').type(cardNumber);
        cy.get('[name="name"]').type(name);
        cy.get('[name="expiry"]').type(expiry);
        cy.get('[name="cvc"]')
            .type(cvc)
            .blur();
        cy.get('button')
            .contains('Sign up')
            .click();
        cy.contains('User already exists!');
    });
    it('should redirect user to home page when correct credentials provided', () => {
        const username = uuidv4();
        const password = uuidv4();
        const cardNumber = '5342123412341234';
        const name = 'John Zorn';
        const expiry = '13/23';
        const cvc = '123';

        cy.visit('/register');
        cy.get('[name="username"]').type(username);
        cy.get('[name="password"]').type(password);
        cy.get('[name="confirmPassword"]').type(password);
        cy.get('[name="cardNumber"]').type(cardNumber);
        cy.get('[name="name"]').type(name);
        cy.get('[name="expiry"]').type(expiry);
        cy.get('[name="cvc"]')
            .type(cvc)
            .blur();
        cy.get('button')
            .contains('Sign up')
            .click();
        cy.url().should('include', Cypress.env('authenticatedHomepage'));
    });
});
