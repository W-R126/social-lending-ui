import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import {Auction} from '../../../../src/auctions/api/auctionsAPI.types';
import {AuctionItem} from '../../../../src/auctions/components/BrowseAuctions/AuctionItem/AuctionItem';

describe('<AuctionItem />', () => {
    it('displays button title', () => {
        const auction = {
            id: 17,
            numberOfInstallments: 12,
            loanAmount: 222.11,
            beginDate: 1,
            endDate: 2,
            description: 'None',
            offers: [],
        } as Auction;

        const buttonTitle = 'Open details';

        render(<AuctionItem auction={auction} onOpenDetails={() => {}} buttonTitle={buttonTitle} />);

        screen.getByText(buttonTitle);
    });

    it('calls the onOpenDetails function on button click', () => {
        const auction = {
            id: 17,
            numberOfInstallments: 12,
            loanAmount: 222.11,
            beginDate: 1,
            endDate: 2,
            description: 'None',
            offers: [],
        } as Auction;

        const buttonTitle = 'Open details';

        const onOpenDetails = jest.fn(() => {});

        render(<AuctionItem auction={auction} onOpenDetails={onOpenDetails} buttonTitle={buttonTitle} />);

        expect(onOpenDetails.mock.calls.length).toBe(0);
        fireEvent.click(screen.getByText(buttonTitle));
        expect(onOpenDetails.mock.calls.length).toBe(1);
    });
});
