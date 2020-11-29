import {validateFormAmount} from '../../../../src/userProfile/common/common.helpers';

describe('common.helpers', () => {
    describe('validate', () => {
        it('returns empty errors as the amount is equal to 0.01', () => {
            expect(validateFormAmount({amount: 0.01})).toEqual({});
        });

        it('returns empty errors as the amount is greater or equal to 0.01', () => {
            expect(validateFormAmount({amount: Number.MAX_SAFE_INTEGER})).toEqual({});
        });

        it('returns error message as the amount is 0.0099999', () => {
            expect(validateFormAmount({amount: 0.009})).toEqual({amount: 'amount must be at least 0.01'});
        });

        it('returns error message as the amount is 0', () => {
            expect(validateFormAmount({amount: 0})).toEqual({amount: 'amount must be at least 0.01'});
        });

        it('returns error message as the amount is below 0.01', () => {
            expect(validateFormAmount({amount: -Number.MAX_SAFE_INTEGER})).toEqual({amount: 'amount must be at least 0.01'});
        });
    });
});
