import {Box} from '@chakra-ui/core';
import React from 'react';
import {format} from 'date-fns';

export const TableColumns: any = [
    {
        Header: 'Value of loan',
        accessor: 'valueOfLoan',
    },
    {
        Header: 'Deadline',
        accessor: 'deadline',
        sortType: 'datetime',
        Cell: (props: any) => <Box>{format(new Date(props.value), 'dd-MM-yyyy')}</Box>,
    },
    {
        Header: 'Number of offers',
        accessor: 'offers',
    },
    {
        Header: 'Lowest bid',
        accessor: 'lowestBid',
    },
];
