import {Box} from '@chakra-ui/react';
import React from 'react';
import {format} from 'date-fns';
import {HandleAcceptOfferClick} from './BrowseOffers.helpers';
import {TableButton} from '../TableButton';
import {DATE_FORMAT} from '../../../common/constants';
import {Column} from 'react-table';

/**
 * Definition of columns in which offers for given
 * auction will be displayed
 * @param auctionId id of auction for which offers will be displayed
 * @param history used for redirect after acceptation of offer by borrower
 * @param onFail shows toast when user does not have enough funds
 * @constructor
 */
export const TableColumns = (auctionId: number, history: {push: (route: string) => void}, onFail: () => void) => {
    return [
        {
            Header: 'Annual percentage rate',
            accessor: 'proposedAnnualPercentageRate',
            Cell: (props: {value: number}) => <Box>{(props.value * 100).toFixed(2)} %</Box>,
        },
        {
            Header: 'Date',
            accessor: 'date',
            Cell: (props: {value: number}) => <Box>{format(new Date(props.value), DATE_FORMAT)}</Box>,
        },
        {
            Header: 'Action',
            Cell: (props: any) => (
                <TableButton text="Accept" onClick={() => HandleAcceptOfferClick(props.cell.row.original.id, auctionId, history, onFail)} />
            ),
        },
    ] as Column[];
};
