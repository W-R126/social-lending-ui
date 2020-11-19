import {Auction} from '../../api/auctionsAPI.types';
import {OrderBy} from './BrowseAuctions.types';

export function orderAuctions(auctions: Auction[], orderBy: OrderBy) {
    switch (+orderBy) {
        case OrderBy.SMALLEST_LOAN_AMOUNT:
            return auctions.sort((a, b) => a.loanAmount - b.loanAmount);
        case OrderBy.LARGEST_LOAN_AMOUNT:
            return auctions.sort((a, b) => b.loanAmount - a.loanAmount);
        case OrderBy.BIGGEST_NUMBER_OF_INSTALLMENTS:
            return auctions.sort((a, b) => b.numberOfInstallments - a.numberOfInstallments);
        case OrderBy.FEWEST_NUMBER_OF_INSTALLMENTS:
            return auctions.sort((a, b) => a.numberOfInstallments - b.numberOfInstallments);
        case OrderBy.NEWEST:
            return auctions.sort((a, b) => b.beginDate - a.beginDate);
        case OrderBy.OLDEST:
            return auctions.sort((a, b) => a.beginDate - b.beginDate);
        case OrderBy.CLOSING_SOONEST:
            return auctions.sort((a, b) => a.endDate - b.endDate);
        default:
            return auctions;
    }
}