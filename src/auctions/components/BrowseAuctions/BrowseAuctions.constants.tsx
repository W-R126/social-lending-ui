import {Box} from '@chakra-ui/core';
import React from 'react';
import {format} from 'date-fns';

const dateFormat = 'dd-MM-yyyy HH:mm';

export const TableColumns: any = [
    {
        Header: 'Value of loan',
        accessor: 'loanAmount',
    },
    {
        Header: 'Number of Installments',
        accessor: 'numberOfInstallments',
    },
    {
        Header: 'Begin date',
        accessor: 'beginDate',
        Cell: (props: any) => <Box>{format(new Date(props.value), dateFormat)}</Box>,
    },
    {
        Header: 'End date',
        accessor: 'endDate',
        Cell: (props: any) => <Box>{format(new Date(props.value), dateFormat)}</Box>,
    },
];
