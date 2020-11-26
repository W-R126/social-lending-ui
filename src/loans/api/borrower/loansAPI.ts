import {Loan, LoanWithRedundantData} from '../loansAPI.types';
import axios from 'axios';

const auctionsUrl = 'api/borrower/auctions';

export function acceptOffer(auctionId: number, offerId: number): Promise<Loan | null> {
    const url = `${auctionsUrl}/${auctionId}/accept-offer?offer_id=${offerId}`;
    return axios
        .post(url)
        .then(response => response.data)
        .catch(() => null);
}

export function getMyLoans(): Promise<LoanWithRedundantData[] | null> {
    return axios
        .get('/api/borrower/loans')
        .then(response => response.data)
        .catch(() => null);
}
