/// <reference types="cypress" />
/// <reference types="../../cypress/support" />
import {v4 as uuidv4} from 'uuid';

context('Balance tests', () => {
    beforeEach(() => {
        const username = uuidv4();
        const password = uuidv4();

        cy.registerUser(username, password);
        cy.login(username, password);
        cy.visit('/user-profile');
    });

    it('should show 0 balance on first login', () => {
        cy.get('[name="AccountBalance"]')
            .invoke('text')
            .then(value => {
                const balance = Number(value.slice(1));
                expect(balance).equal(0);
            });
    });

    it('should increase balance on top up', () => {
        const topUpAmount = 199923;
        cy.get('[data-cy="topUpInput"]')
            .clear()
            .type(topUpAmount.toString())
            .blur()
            .then(() => {
                cy.get('button')
                    .contains('Top Up')
                    .click();
                cy.contains(`$${topUpAmount} will be added to your account`).then(() => {
                    cy.visit('/user-profile');
                    cy.wait(2000);
                    cy.get('[name="AccountBalance"]')
                        .invoke('text')
                        .then(value => {
                            const balance = Number(value.slice(1));
                            expect(balance).to.equal(topUpAmount);
                        });
                });
            });
    });

    it('should decrease balance on withdraw', () => {
        const withdrawAmount = 199923;
        const baseMoney = 2000000;
        cy.deposit(baseMoney);
        cy.get('[data-cy="withdrawInput"]')
            .clear()
            .type(withdrawAmount.toString())
            .blur()
            .then(() => {
                cy.get('button')
                    .contains('Withdraw')
                    .click();
                cy.contains(`$${withdrawAmount} will be sent to your card`).then(() => {
                    cy.visit('/user-profile');
                    cy.wait(2000);
                    cy.get('[name="AccountBalance"]')
                        .invoke('text')
                        .then(value => {
                            const balance = Number(value.slice(1));
                            expect(balance).to.equal(baseMoney - withdrawAmount);
                        });
                });
            });
    });

    it('should show error when withdraw to big', () => {
        const withdrawAmount = 2000000;
        const baseMoney = 10000;
        cy.deposit(baseMoney);
        cy.get('[data-cy="withdrawInput"]')
            .clear()
            .type(withdrawAmount.toString())
            .blur()
            .then(() => {
                cy.get('button')
                    .contains('Withdraw')
                    .click();
                cy.contains(`Failed to send to your card, please ensure you have enough funds`);
            });
    });

    it('should show the same balance on drawer and user profile', () => {
        const baseMoney = 10000;
        cy.deposit(baseMoney);
        cy.visit('/user-profile');
        cy.get('[aria-label="Open Drawer"]').click();
        cy.get('[name="AccountBalance"]')
            .eq(0)
            .invoke('text')
            .then(userProfileBalance => {
                cy.get('[name="AccountBalance"]')
                    .eq(1)
                    .invoke('text')
                    .should('equal', userProfileBalance);
            });
    });
});
