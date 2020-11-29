import {Loan} from '../loansAPI.types';
import axios from 'axios';

/**
 * Makes POST request to api in order to make offer
 * acceptance request by borrower
 *
 * @param auctionId
 * @param offerId
 * @returns Loan data
 */
export function acceptOffer(auctionId: number, offerId: number): Promise<Loan | null> {
    const url = `api/borrower/auctions/${auctionId}/accept-offer?offer_id=${offerId}`;
    return axios
        .post(url)
        .then(response => response.data)
        .catch(() => null);
}

/**
 * Makes GET request to api in order to get
 * loans for current account
 *
 * @returns List of all loans assigned to user
 */
export function getMyLoans(): Promise<Loan[] | null> {
    return axios
        .get('/api/borrower/loans')
        .then(response => response.data)
        .catch(() => null);
}

/**
 * Makes POST request to api in order to pay next installment
 * Successful if borrower has enough funds on his account
 *
 * After payment amount is taken from borrower account and added
 * to lender account
 * @param loanId
 * @param amount
 * @returns http codes 200 if successful, 400 otherwise
 */
export function payNextInstallment(loanId: number, amount: number): Promise<any | null> {
    const url = `api/borrower/loans/${loanId}/pay-next-installment?amount=${amount}`;
    return axios
        .post(url)
        .then(response => response.status)
        .catch(() => null);
}
