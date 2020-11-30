import {acceptOffer} from '../../../loans/api/borrower/loansAPI';
import {Routes} from '../../../routing/routes';

/**
 * Handles acceptance of offer by borrower. Invokes {@link acceptOffer}
 * api method and then checks if response from this method was successful.
 * If it was then user is redirected to loans detail view, toast with
 * error message is shown otherwise
 *
 * @param offerId id of offer to be accepted
 * @param auctionId id of auction for which offer will be accepted
 * @param history object used for redirection
 * @param onFail shows toast when user has not enough funds
 * @constructor
 */
export const HandleAcceptOfferClick = async (
    offerId: number,
    auctionId: number,
    history: {push: (route: string) => void},
    onFail: () => void,
) => {
    const response = await acceptOffer(Number(auctionId), Number(offerId));
    if (response !== null) {
        history.push(Routes.BORROWER_LOANS_DETAILS.replace(':loanId', response.id.toString()));
    } else {
        onFail();
    }
};
