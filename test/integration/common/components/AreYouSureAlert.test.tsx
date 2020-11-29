import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import {AreYouSureAlert} from '../../../../src/common/components/AreYouSureAlert';

describe('<AreYouSureAlert />', () => {
    it('does not display text when not open', () => {
        const text = 'This is a dialog text.';
        render(<AreYouSureAlert isOpen={false} onClose={() => {}} onConsent={() => {}} dialogText={text} title={'title'} />);
        expect(screen.queryByText(text)).toBeNull();
    });

    it('displays the dialog text', () => {
        const text = 'This is a dialog text.';
        render(<AreYouSureAlert isOpen={true} onClose={() => {}} onConsent={() => {}} dialogText={text} title={'title'} />);
        expect(screen.getByText(text)).toBeInTheDocument();
    });

    it('calls the onConsent function when clicking yes', () => {
        const text = 'This is a dialog text.';
        const onConsent = jest.fn(() => {});

        render(<AreYouSureAlert isOpen={true} onClose={() => {}} onConsent={onConsent} dialogText={text} title={'title'} />);
        expect(onConsent.mock.calls.length).toBe(0);
        fireEvent.click(screen.getByText('Yes'));
        expect(onConsent.mock.calls.length).toBe(1);
    });

    it('does not call the onConsent function when clicking no', () => {
        const text = 'This is a dialog text.';
        const onConsent = jest.fn(() => {});

        render(<AreYouSureAlert isOpen={true} onClose={() => {}} onConsent={onConsent} dialogText={text} title={'title'} />);
        expect(onConsent.mock.calls.length).toBe(0);
        fireEvent.click(screen.getByText('No'));
        expect(onConsent.mock.calls.length).toBe(0);
    });

    it('calls the onClose function when clicking no', () => {
        const text = 'This is a dialog text.';
        const onClose = jest.fn(() => {});

        render(<AreYouSureAlert isOpen={true} onClose={onClose} onConsent={() => {}} dialogText={text} title={'title'} />);
        expect(onClose.mock.calls.length).toBe(0);
        fireEvent.click(screen.getByText('No'));
        expect(onClose.mock.calls.length).toBe(1);
    });
});
