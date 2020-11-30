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
    const cardNumber = '1234123412341234';
    const cvc = '123';
    const expiry = '12/22';
    const name = 'John Smith';
    cy.request('POST', `${Cypress.env('serverUrl')}/api/user/signup`, {
        username,
        password,
        cvc,
        expiry,
        name,
        cardNumber,
    });
});

Cypress.Commands.add('login', (username: string, password: string) => {
    cy.request('POST', `${Cypress.env('serverUrl')}/api/user/signin`, {username, password}).then(({body}) => {
        localStorage.setItem('JWT', body);
    });
});

Cypress.Commands.add('logout', () => {
    localStorage.removeItem('JWT');
});

Cypress.Commands.add('createNewAuction', (description: string, endDate: string, loanAmount: number, numberOfInstallments: number) => {
    return cy
        .request({
            method: 'POST',
            url: `${Cypress.env('serverUrl')}/api/borrower/auctions`,
            auth: {
                bearer: localStorage.getItem('JWT'),
            },
            body: {
                description,
                endDate,
                loanAmount,
                numberOfInstallments,
            },
        })
        .then(response => {
            localStorage.setItem('auctionId', response.body.id);
        });
});

Cypress.Commands.add('submitOffer', (proposedAnnualPercentageRate: number) => {
    cy.request({
        method: 'POST',
        url: `${Cypress.env('serverUrl')}/api/lender/offers`,
        auth: {
            bearer: localStorage.getItem('JWT'),
        },
        body: {
            auctionId: localStorage.getItem('auctionId'),
            proposedAnnualPercentageRate,
        },
    }).then(response => {
        localStorage.setItem('offerId', response.body.id);
    });
});

Cypress.Commands.add('acceptOffer', () => {
    cy.request({
        method: 'POST',
        url: `${Cypress.env('serverUrl')}/api/borrower/auctions/${localStorage.getItem(
            'auctionId',
        )}/accept-offer?offer_id=${localStorage.getItem('offerId')}`,
        auth: {
            bearer: localStorage.getItem('JWT'),
        },
    });
});

Cypress.Commands.add('withdraw', (amount: number) => {
    cy.request({
        method: 'POST',
        url: `${Cypress.env('serverUrl')}/api/user/bank/withdraw?amount=${amount}`,
        auth: {
            bearer: localStorage.getItem('JWT'),
        },
    });
});

Cypress.Commands.add('deposit', (amount: number) => {
    cy.request({
        method: 'POST',
        url: `${Cypress.env('serverUrl')}/api/user/bank/deposit?amount=${amount}`,
        auth: {
            bearer: localStorage.getItem('JWT'),
        },
    });
});

Cypress.Commands.add('userInfo', () => {
    return cy
        .request({
            method: 'GET',
            url: `${Cypress.env('serverUrl')}/api/user/me`,
            auth: {
                bearer: localStorage.getItem('JWT'),
            },
        })
        .then(({body}) => body);
});

Cypress.Commands.add('getLoanId', () => {
    return cy
        .request({
            method: 'GET',
            url: `${Cypress.env('serverUrl')}/api/borrower/loans`,
            auth: {
                bearer: localStorage.getItem('JWT'),
            },
        })
        .then(({body}) => body[0]?.id);
});
Cypress.Commands.add('payNextInstallment', (amount: number, loan_id: number) => {
    return cy.request({
        method: 'POST',
        url: `${Cypress.env('serverUrl')}/api/borrower/loans/${loan_id}/pay-next-installment?amount=${amount}`,
        auth: {
            bearer: localStorage.getItem('JWT'),
        },
    });
});

export {};
