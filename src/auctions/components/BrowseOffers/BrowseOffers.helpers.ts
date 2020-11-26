import {acceptOffer} from '../../../loans/api/borrower/loansAPI';
import {Routes} from '../../../routing/routes';

export const HandleAcceptOfferClick = async (offerId: number, auctionId: number, history: any) => {
    if ((await acceptOffer(Number(auctionId), Number(offerId))) !== null) {
        history.push(Routes.BORROWER_LOANS);
    } else {
        console.log('Sth went wrong');
    }
};
