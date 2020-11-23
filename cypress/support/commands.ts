/// <reference types="cypress" />
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//

Cypress.Commands.add('registerUser', (username: string, password: string) => {
    cy.request('POST', `${Cypress.env('serverUrl')}/api/user/signup`, {username, password});
});

Cypress.Commands.add('login', (username: string, password: string) => {
    cy.request('POST', `${Cypress.env('serverUrl')}/api/user/signin`, {username, password}).then(({body}) => {
        localStorage.setItem('JWT', body);
    });
});

Cypress.Commands.add('logout', () => {
    localStorage.removeItem('JWT');
});

export {};
