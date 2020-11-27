import {acceptOffer} from '../../../loans/api/borrower/loansAPI';
import {Routes} from '../../../routing/routes';

export const HandleAcceptOfferClick = async (offerId: number, auctionId: number, history: {push: (route: string) => void}) => {
    const response = await acceptOffer(Number(auctionId), Number(offerId));
    if (response !== null) {
        history.push(Routes.BORROWER_LOANS_DETAILS.replace(':loanId', response.id.toString()));
    } else {
        console.log('Sth went wrong');
    }
};
