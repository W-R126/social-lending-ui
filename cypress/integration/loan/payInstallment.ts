/// <reference types="cypress" />
/// <reference types="../../cypress/support" />
import {v4 as uuidv4} from 'uuid';

describe('Pay installment', () => {
    beforeEach(() => {
        createLoan();
        cy.visit('/borrower-loans');
    });
    it('should correctly pay next installment and show toast', () => {
        cy.get('[name="valueToPay"]')
            .invoke('text')
            .then(valueToPay => {
                const loanValue: number = Number(valueToPay) ?? 0;
                cy.contains('Pay installment').click();
                cy.contains('Yes')
                    .click()
                    .then(() => {
                        const alert = cy.get('[role="alert"]').contains('Installment paid.');
                        cy.get('[role="alert"]').contains(`$${loanValue} was taken from your account`);
                    });
            });
    });
    it('should show reduced amount left', () => {
        cy.get('[name="valueToPay"]')
            .invoke('text')
            .then(valueToPay => {
                const loanValue: number = Number(valueToPay) ?? 0;
                cy.get('[name="LoanLeft"]')
                    .invoke('text')
                    .then(loanLeft => {
                        const loanLeftBefore: number = Number(loanLeft.slice(1)) ?? 0;
                        cy.contains('Pay installment').click();
                        cy.contains('Yes')
                            .click()
                            .then(() => {
                                cy.get('[role="alert"]').then(() => {
                                    cy.get('[name="LoanLeft"]')
                                        .invoke('text')
                                        .then(loanLeft => {
                                            const loanLeftAfter: number = Number(loanLeft.slice(1)) ?? 0;
                                            expect(loanLeftAfter).to.be.closeTo(loanLeftBefore - loanValue, 0.1);
                                        });
                                });
                            });
                    });
            });
    });
    it('should show payed installment in details', () => {
        cy.get('[name="dueDate"]')
            .invoke('text')
            .then(dueDate => {
                cy.contains('Pay installment').click();
                cy.contains('Yes')
                    .click()
                    .then(() => {
                        cy.get('[role="alert"]').then(() => {
                            cy.contains('See details').click();
                            cy.contains(dueDate).should('have.length', 1);
                            cy.get('[name="statusBadge"]')
                                .eq(3)
                                .contains('PAID');
                        });
                    });
            });
    });
    it('should reduce amount on borrower account', () => {
        cy.get('[name="valueToPay"]')
            .invoke('text')
            .then(valueToPay => {
                const loanValue: number = Number(valueToPay) ?? 0;
                cy.userInfo().then(({balance}) => {
                    const balanceBefore = balance ?? 0;
                    cy.contains('Pay installment').click();
                    cy.contains('Yes')
                        .click()
                        .then(() => {
                            cy.get('[role="alert"]').then(() => {
                                cy.userInfo().then(({balance}) => {
                                    const balanceAfter = balance ?? 0;
                                    expect(balanceAfter).to.be.closeTo(balanceBefore - loanValue, 0.1);
                                });
                            });
                        });
                });
            });
    });
});

const getTestData = () => ({
    username1: uuidv4(),
    password1: uuidv4(),
    username2: uuidv4(),
    password2: uuidv4(),
    endDate: '12/12/9999 12:12',
    loanAmount: 10000,
    numberOfInstallments: 12,
    description: 'description',
    proposedAnnualPercentageRate: 10,
});

const createLoan = () => {
    const testData = getTestData();

    cy.registerUser(testData.username1, testData.password1);
    cy.login(testData.username1, testData.password1);
    cy.createNewAuction(testData.description, testData.endDate, testData.loanAmount, testData.numberOfInstallments);

    cy.registerUser(testData.username2, testData.password2);
    cy.login(testData.username2, testData.password2);
    cy.deposit(testData.loanAmount);
    cy.submitOffer(testData.proposedAnnualPercentageRate);
    cy.login(testData.username1, testData.password1);
    cy.acceptOffer();
};
