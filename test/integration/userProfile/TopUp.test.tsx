import React from 'react';
import {postTopUpAccount} from '../../../src/userProfile/api/userApi';
import {render, screen, fireEvent, act, waitFor} from '@testing-library/react';
import {TopUp} from '../../../src/userProfile/components/TopUp';
import {mocked} from 'ts-jest/utils';
import userEvent from '@testing-library/user-event';

const buttonTitle = 'Send Top Up';

describe('<TopUp />', () => {
    beforeEach(() => {
        mocked(postTopUpAccount);
    });

    it('Expect the user to be able to top up if correct amount typed', () => {
        render(<TopUp />);
        act(() => {
            userEvent.type(screen.getByPlaceholderText(/amount/i), '10');
        });
        expect(screen.getByText(buttonTitle)).toBeEnabled();
    });

    it('Expect api call once', () => {
        render(<TopUp />);
        act(() => {
            fireEvent.click(screen.getByText(buttonTitle));
        });
        waitFor(() => {
            expect(postTopUpAccount).toHaveBeenCalledTimes(1);
        });
    });
});
