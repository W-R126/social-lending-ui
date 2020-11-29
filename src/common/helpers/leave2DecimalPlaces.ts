/**
 * removes all decimals beyond the first 2 decimal places
 * @param value
 */

export function leave2DecimalPlaces(value: number) {
    return Math.floor(value * 100) / 100;
}
