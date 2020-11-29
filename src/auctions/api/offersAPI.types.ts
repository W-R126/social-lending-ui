import {Auction} from './auctionsAPI.types';

/**
 * Main object representing information about
 * offer. Mainly used for presentation of
 * offer data on graphical interface
 */
export interface Offer {
    /**
     * Annual percentage rate that was set by
     * lender during offer creation process.
     * Specifies profit that lender wants to
     * achieve
     *
     * Represented as floating point number between 0.01 and 0.99
     */
    annualPercentageRate: number;
    /**
     * Auction object associated with this offer.
     * Displays basic info about ongoing auction
     *
     * Represented as {@link Auction object}
     */
    auction: Auction;
    /**
     * Date of submission of this offer
     *
     * Represented as integer number of seconds from 01.01.1970
     */
    date: string;
    /**
     * Value that uniquely identifies given offer
     *
     * Represented as integer number greater than 0
     */
    id: number;
}

/**
 * Offer object used during offer creation process.
 * Contains set of required data that will be sent to
 * api in order to create new offer
 */
export interface OfferDTO {
    /**
     * Id of auction for which offer will be generated
     *
     * Represented as non-negative integer
     */
    auctionId: number;
    /**
     * Proposed by lender annual percentage rate
     * during offer creation process
     *
     * Represented as floating point number between 0.01 and 0.99
     */
    proposedAnnualPercentageRate: number;
}
