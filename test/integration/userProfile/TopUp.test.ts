import {mocked} from 'ts-jest/utils';
import {topUpAccount} from '../../../src/userProfile/api/userApi';
import {render} from '@testing-library/react';
import {TopUp} from '../../../src/userProfile/components/TopUp';

describe('TopUp', () => {
    it('Successfully sent top up request', async () => {
        render(<TopUp />);
    });

    // const sendTopUpRequest = async () => {
    //     const render = render(<TopUp />);
    // }
});
