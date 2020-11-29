/**
 * Checks whether value given by the user is sufficient to perform a transaction
 * @param value
 */

export function isAtLeastMinFunds(value: number | undefined | null): boolean {
    if (value) {
        return value >= 0.01;
    }
    return false;
}
