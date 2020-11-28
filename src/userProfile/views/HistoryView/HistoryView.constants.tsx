import {Box} from '@chakra-ui/react';
import {format} from 'date-fns';
import {DATE_FORMAT} from '../../../common/constants';
import {TableButton} from '../../../auctions/components/TableButton';
import {HandleAcceptOfferClick} from '../../../auctions/components/BrowseOffers/BrowseOffers.helpers';
import {Column} from 'react-table';
import React from 'react';

export const TableColumns = (auctionId: number, history: {push: (route: string) => void}) => {
    return [
        {
            Header: 'ID',
            accessor: 'transactionID',
            Cell: (props: {value: number}) => <Box>{props.value}</Box>,
        },
        {
            Header: 'Date',
            accessor: 'date',
            // todo: format date
            Cell: (props: {value: string}) => <Box>{format(new Date(props.value), DATE_FORMAT)}</Box>,
        },
        {
            Header: 'Type',
            accessor: 'transactionType',
            Cell: (props: {value: String}) => <Box>{props.value}</Box>,
        },
        {
            Header: 'Amount',
            accessor: 'transactionAmount',
            Cell: (props: {value: number}) => <Box>${props.value}</Box>,
        },
        {
            Header: 'Reference ID',
            accessor: 'referenceID',
            Cell: (props: {value: string}) => <Box>{props.value}</Box>,
        },
        {
            Header: 'Action',
            Cell: (props: any) => (
                <TableButton text="Accept" onClick={() => HandleAcceptOfferClick(props.cell.row.original.id, auctionId, history)} />
            ),
        },
    ] as Column[];
};
