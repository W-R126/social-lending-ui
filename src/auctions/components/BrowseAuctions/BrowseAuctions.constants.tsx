import {Box} from '@chakra-ui/react';
import React from 'react';
import {format} from 'date-fns';
import {DATE_FORMAT} from '../../../common/constants';

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
        Cell: (props: any) => <Box>{format(new Date(props.value), DATE_FORMAT)}</Box>,
    },
    {
        Header: 'End date',
        accessor: 'endDate',
        Cell: (props: any) => <Box>{format(new Date(props.value), DATE_FORMAT)}</Box>,
    },
];
