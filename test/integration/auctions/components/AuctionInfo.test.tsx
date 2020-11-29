import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import {AuctionInfo} from '../../../../src/auctions/components/AuctionInfo';
import {Auction} from '../../../../src/auctions/api/auctionsAPI.types';

describe('<AuctionInfo />', () => {
    it('displays auction id', () => {
        const auction = {
            id: 17,
            numberOfInstallments: 12,
            loanAmount: 222.11,
        } as Auction;

        render(<AuctionInfo auction={auction} />);

        screen.getByText(`Auction No. ${auction.id}`);
    });

    it('displays number of installments', () => {
        const auction = {
            id: 17,
            numberOfInstallments: 12,
            loanAmount: 222.11,
        } as Auction;

        render(<AuctionInfo auction={auction} />);

        screen.getByText(auction.numberOfInstallments.toString());
    });

    test.each([
        [0, '0.00'],
        [27, '27.00'],
        [0.05, '0.05'],
        [634.2534, '634.25'],
        [634.2599, '634.26'],
    ])('displays loan amount with correct precision', (amt, expected) => {
        const auction = {
            id: 17,
            numberOfInstallments: 12,
            loanAmount: amt,
        } as Auction;

        render(<AuctionInfo auction={auction} />);

        screen.getByText('$' + expected);
    });
});
