import {Box, Flex} from '@chakra-ui/react';
import React from 'react';
import {Column, Row, usePagination, useSortBy, useTable} from 'react-table';
import {defaultPageSize} from './Table.constants';
import {TableFooter} from './TableFooter';
import {TableHeader} from './TableHeader';
import {TableBody} from './TableBody';
import {InnerFlex, MainFlex} from './Table.styles';

declare module 'react-table' {
    export interface TableOptions<D extends object> extends UsePaginationOptions<D>, UseFiltersOptions<D> {}

    export interface TableInstance<D extends object = {}> extends UsePaginationInstanceProps<D> {}

    export interface TableState<D extends object = {}> extends UsePaginationState<D> {}

    export interface ColumnInstance<D extends object = {}> extends UseSortByColumnProps<D> {}
}

type Props<D extends object = {}> = {
    data: any;
    pageSize?: number;
    tableHeading?: React.ReactNode;
    columns: Column<D>[];
    onRowClick?: (row: Row<D>) => void;
};

/**
 * Table component to be used wherever an information in tabular form needs to be presented.
 * @param columns
 * @param data - must be compatible with columns
 * @param tableHeading
 * @param pageSize
 * @param onRowClick
 * @constructor
 */
export const Table: React.FC<Props> = <D extends {}>({columns, data, tableHeading, pageSize, onRowClick}: Props<D>) => {
    const tableColumns = React.useMemo(() => columns, [columns]);

    const {
        getTableProps,
        headerGroups,
        prepareRow,
        page,
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        state: {pageIndex},
    } = useTable<D>(
        {
            columns: tableColumns,
            data,
            initialState: {pageIndex: 0, pageSize: pageSize},
        },
        useSortBy,
        usePagination,
    );

    return (
        <Flex className={MainFlex}>
            {!!tableHeading && <Box>{tableHeading}</Box>}
            <Flex className={InnerFlex} {...getTableProps()}>
                <TableHeader headerGroups={headerGroups} />
                <TableBody prepareRow={prepareRow} page={page} onRowClick={onRowClick} />
            </Flex>
            <TableFooter
                gotoPage={gotoPage}
                canPreviousPage={canPreviousPage}
                previousPage={previousPage}
                pageIndex={pageIndex}
                pageOptions={pageOptions}
                canNextPage={canNextPage}
                nextPage={nextPage}
                pageCount={pageCount}
            />
        </Flex>
    );
};

Table.defaultProps = {
    pageSize: defaultPageSize,
};
