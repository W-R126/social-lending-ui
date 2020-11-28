import {Box} from '@chakra-ui/react';
import {format} from 'date-fns';
import {DATE_FORMAT} from '../../../common/constants';
import {TableButton} from '../../../auctions/components/TableButton';
import {HandleAcceptOfferClick} from '../../../auctions/components/BrowseOffers/BrowseOffers.helpers';
import {Column} from 'react-table';
import React from 'react';

export const TableColumns = () => {
    return [
        {
            Header: 'ID',
            accessor: 'transactionID',
            Cell: (props: {value: number}) => {
                console.log(props);
                return <Box>{props.value}</Box>;
            },
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
        // {
        //     Header: 'Date',
        //     accessor: 'date',
        //     // todo: format date
        //     Cell: (props: {value: string}) => <Box>{format(new Date(props.value), DATE_FORMAT)}</Box>,
        // },
        // {
        //     Header: 'Reference ID',
        //     accessor: 'referenceID',
        //     Cell: (props: {value: string}) => <Box>{props.value}</Box>,
        // }
    ] as Column[];
};

export const mockTransactions = [
    {
        index: 0,
        type: 'DEBIT',
        amount: 15.67,
        timestamp: 1606524211326,
    },
    {
        index: 1,
        type: 'DEBIT',
        amount: 15.67,
        timestamp: 1606524213399,
    },
    {
        index: 2,
        type: 'CREDIT',
        amount: 15,
        timestamp: 1606524233846,
    },
];
