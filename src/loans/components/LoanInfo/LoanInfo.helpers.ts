export const formatInterest = (acceptedInterest: number | undefined) => {
    if (acceptedInterest === undefined) return '-';
    else return acceptedInterest * 100;
};
