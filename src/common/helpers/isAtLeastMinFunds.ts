export function isAtLeastMinFunds(value: number | undefined | null): boolean {
    if (value) {
        return value >= 0.01;
    }
    return false;
}
