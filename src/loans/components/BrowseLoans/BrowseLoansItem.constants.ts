import {CURRENCY} from '../../../common/constants';

/**
 * Custom text message that will be shown at confirmation dialog
 * when user decides to pay installment.
 *
 * Warns user if he really wants to pay for it
 * @param total value of installment to pay
 * @returns message string
 */
export const areYouSureText = (total: number) =>
    `Are you sure you want to pay for this installment?\n ${CURRENCY}${total} will be taken from your account`;
