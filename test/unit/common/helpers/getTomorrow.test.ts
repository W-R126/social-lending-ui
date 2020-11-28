import {getTomorrow} from '../../../../src/common/helpers/getTomorrow';

describe('getTomorrow', () => {
    test.each([
        [new Date(1410, 6, 15, 11, 37, 28), new Date(1410, 6, 16, 11, 37, 28)],
        [new Date(1410, 6, 31, 11, 37, 28), new Date(1410, 7, 1, 11, 37, 28)],
        [new Date(1410, 10, 30, 11, 37, 28), new Date(1410, 11, 1, 11, 37, 28)],
        [new Date(1410, 11, 31, 11, 37, 28), new Date(1411, 0, 1, 11, 37, 28)],
    ])('should return the next day', (today, tomorrow) => {
        expect(getTomorrow(today)).toEqual(tomorrow);
    });
});
