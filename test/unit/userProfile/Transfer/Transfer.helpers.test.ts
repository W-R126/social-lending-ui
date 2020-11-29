import {validate} from '../../../../src/userProfile/components/Transfer/Transfer.helpers';

/**
 * test for transfer form validation
 * amount is not tested on each boundary as the involved helper function was already tested
 */
describe('Transfer.helpers.validate', () => {
    describe('validate', () => {
        it('returns empty errors as the amount and to account is within limits, lower bound', () => {
            expect(validate({amount: 0.01, toAccount: '11111111111'})).toEqual({});
        });

        it('returns empty errors as the amount and to account is within limits, upper bound', () => {
            expect(validate({amount: Number.MAX_SAFE_INTEGER, toAccount: '1111111111111111111111111111111111111111111111111'})).toEqual({});
        });

        it('returns error message, lower bound', () => {
            expect(validate({amount: 0.01, toAccount: '111111111'})).toEqual({toAccount: 'Please enter a valid account number'});
        });

        it('returns error message upper bound', () => {
            expect(validate({amount: 0.01, toAccount: '111111111111111111111111111111111111111111111111111'})).toEqual({
                toAccount: 'Please enter a valid account number',
            });
        });
    });
});
