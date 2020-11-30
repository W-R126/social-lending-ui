/// <reference types="cypress" />
/// <reference types="../../cypress/support" />
import {v4 as uuidv4} from 'uuid';

context('Transaction history', () => {
    beforeEach(() => {
        const username = uuidv4();
        const password = uuidv4();

        cy.registerUser(username, password);
        cy.login(username, password);
    });

    it('should show entries when money withdrawn and top up', () => {
        const toDeposit = 10000;
        const toWithdraw = 1000;
        cy.deposit(toDeposit);
        cy.withdraw(toWithdraw);
        cy.visit('/history');
        cy.get('[data-testid="table-row"]')
            .eq(0)
            .should('contain', 'DEBIT')
            .and('contain', toDeposit);

        cy.get('[data-testid="table-row"]')
            .eq(1)
            .should('contain', 'CREDIT')
            .and('contain', toWithdraw);
    });
});
