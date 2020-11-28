import {Box} from '@chakra-ui/react';
import {format} from 'date-fns';
import {DATE_FORMAT} from '../../../common/constants';
import {Column} from 'react-table';
import React from 'react';

export const TableColumns = [
    {
        Header: 'ID',
        accessor: 'index',
        Cell: (props: {value: number}) => <Box>{props.value}</Box>,
    },
    {
        Header: 'Type',
        accessor: 'type',
        Cell: (props: {value: String}) => <Box>{props.value}</Box>,
    },
    {
        Header: 'Amount',
        accessor: 'amount',
        Cell: (props: {value: number}) => <Box>${props.value}</Box>,
    },
    {
        Header: 'Date',
        accessor: 'timestamp',
        Cell: (props: {value: string}) => <Box>{format(new Date(props.value), DATE_FORMAT)}</Box>,
    },
] as Column[];
