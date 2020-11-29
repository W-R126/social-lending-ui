import {isAtLeastMinFunds} from '../../../../src/common/helpers/isAtLeastMinFunds';

describe('isAtLeastMinFunds', () => {
    test.each([
        [0, false],
        [0.0099999999, false],
        [-Number.MAX_VALUE, false],
        [Number.MAX_VALUE, true],
        [0.01, true],
        [undefined, false],
        [null, false],
    ])('should return equal', (value, result) => {
        expect(isAtLeastMinFunds(value)).toEqual(result);
    });
});
