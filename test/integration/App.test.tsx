import {render, screen} from '@testing-library/react';
import {App} from '../../src/App';
import React from 'react';

describe('<App/>', () => {
    test('renders welcome text', () => {
        render(<App />);

        expect(screen.getByRole('heading')).toHaveTextContent('Hello world with Chakra UI!');
    });
});
