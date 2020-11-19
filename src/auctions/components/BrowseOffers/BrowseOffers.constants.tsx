import {Box} from '@chakra-ui/react';
import React from 'react';
import {format} from 'date-fns';
import {HandleAcceptOfferClick} from './BrowseOffers.helpers';
import {TableButton} from '../TableButton';
import {DATE_FORMAT} from '../../../common/constants';

export const TableColumns: any = [
    {
        Header: 'Annual percentage rate',
        accessor: 'annualPercentageRate',
    },
    {
        Header: 'Date',
        accessor: 'date',
        Cell: (props: any) => <Box>{format(new Date(props.value), DATE_FORMAT)}</Box>,
    },
    {
        Header: 'Action',
        Cell: (props: any) => <TableButton text="Accept" onClick={() => HandleAcceptOfferClick(props.cell.row.original)} />,
    },
];
