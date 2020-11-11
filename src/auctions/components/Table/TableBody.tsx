import * as React from 'react';
import {Flex} from '@chakra-ui/core';
import {Row} from 'react-table';
import {TableCell, MainFlex, TableRow} from './TableBody.styles';

interface Props {
    prepareRow: (row: Row<any>) => void;
    page: Row<any>[];
    onRowClick?: (row: Row<any>) => void;
}

export const TableBody: React.FC<Props> = ({prepareRow, page, onRowClick}) => (
    <Flex className={MainFlex}>
        {page.map(
            (row: any, key: any) =>
                // @ts-ignore
                prepareRow(row) || (
                    <Flex
                        onClick={() => onRowClick && onRowClick(row)}
                        key={key}
                        className={TableRow}
                        {...row.getRowProps()}
                        data-testid="table-row"
                    >
                        {row.cells.map((cell: any) => (
                            <Flex key={cell.row.index} className={TableCell} {...cell.getCellProps()}>
                                {cell.render('Cell')}
                            </Flex>
                        ))}
                    </Flex>
                ),
        )}
    </Flex>
);
