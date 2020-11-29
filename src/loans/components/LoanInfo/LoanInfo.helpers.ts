/**
 * Formats interest.
 * If interest is not provided by api
 * then it replaces it with one character string.
 * Otherwise interest is multiplied by 100
 * @param acceptedInterest
 */
export const formatInterest = (acceptedInterest: number | undefined) => {
    if (acceptedInterest === undefined) return '-';
    else return (acceptedInterest * 100).toFixed(2);
};
