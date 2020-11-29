import * as React from 'react';
import {Flex, Text} from '@chakra-ui/react';
import {ChevronDown, ChevronUp} from 'react-feather';
import {HeaderGroup} from 'react-table';
import {HeaderTitle, HeaderWrapper, MainFlex, TableItem} from './TableHeader.styles';

interface Props {
    headerGroups: HeaderGroup<any>[];
}

/**
 * Displays the header of the Table component
 * @param headerGroups
 * @constructor
 */

export const TableHeader: React.FC<Props> = ({headerGroups}) => (
    <Flex className={MainFlex}>
        {headerGroups.map((headerGroup: any) => (
            <Flex key={headerGroup.id} className={HeaderWrapper} {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column: any) => (
                    <Flex className={TableItem} key={column.id} {...column.getHeaderProps()} {...column.getSortByToggleProps()}>
                        <Text className={HeaderTitle}>{column.render('Header')}</Text>
                        {column.isSorted ? column.isSortedDesc ? <ChevronDown size={20} /> : <ChevronUp size={20} /> : ''}
                    </Flex>
                ))}
            </Flex>
        ))}
    </Flex>
);
