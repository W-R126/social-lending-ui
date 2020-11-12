import {Box} from '@chakra-ui/core';
import React from 'react';
import {format} from 'date-fns';

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
        sortType: 'datetime',
        Cell: (props: any) => <Box>{format(new Date(props.value), 'dd-MM-yyyy')}</Box>,
    },
    {
        Header: 'End date',
        accessor: 'endDate',
    },
];
