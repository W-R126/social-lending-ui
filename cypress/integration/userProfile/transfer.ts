/// <reference types="cypress" />
/// <reference types="../../cypress/support" />
import {v4 as uuidv4} from 'uuid';

const username = uuidv4();
const password = uuidv4();
const amountToTransfer = 1000;
const senderBaseAmount = 10000;

context('External transfer', () => {
    beforeEach(() => {
        cy.registerUser(username, password);
        cy.login(username, password);
        cy.deposit(senderBaseAmount);
    });

    it('should transfer money', () => {
        cy.visit('/user-profile');
        cy.get('[data-cy="transferAmountInput"]')
            .clear()
            .type(amountToTransfer.toString())
            .blur();
        cy.get('[data-cy="transferAddressInput"]')
            .clear()
            .type('71b3-4564-a4a1-a14b5e81f9f3')
            .blur();
        cy.get('button')
            .contains('Send Transfer')
            .click();
        cy.contains(`$${amountToTransfer} will be transferred`);
        cy.userInfo().then(senderInfo => {
            const senderBalance = senderInfo?.balance ?? 0;
            expect(senderBalance).equal(senderBaseAmount - amountToTransfer);
        });
    });
});
