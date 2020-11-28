import {Loan} from '../loansAPI.types';
import axios from 'axios';

/**
 * Makes GET request to api in order to get
 * loans given to others for current account as a lender
 *
 * @returns List of all loans given by user
 */
export function getGivenLoans(): Promise<Loan[] | null> {
    return axios
        .get('/api/lender/investments')
        .then(response => response.data)
        .catch(() => null);
}
