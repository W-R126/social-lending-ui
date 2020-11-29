import {leave2DecimalPlaces} from '../../../../src/common/helpers/leave2DecimalPlaces';

describe('isAtLeastMinFunds', () => {
    test.each([
        [0, 0],
        [0.0099999999, 0],
        [1, 1],
        [1.111, 1.11],
        [0.01, 0.01],
    ])('should return equal', (value, result) => {
        expect(leave2DecimalPlaces(value)).toEqual(result);
    });
});
