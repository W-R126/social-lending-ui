import * as React from 'react';
import {Flex, IconButton, Text} from '@chakra-ui/react';
import {ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight} from 'react-feather';
import {
    MainFlex,
    PageChangeButtonFlex,
    PageChangeButtonStyles,
    PageIndicator,
    PageIndicatorLeft,
    PageIndicatorRight,
} from './TableFooter.styles';

interface Props {
    gotoPage: (updater: number | ((pageIndex: number) => number)) => void;
    canPreviousPage: boolean;
    previousPage: () => void;
    pageIndex: number;
    pageOptions: number[];
    canNextPage: boolean;
    nextPage: () => void;
    pageCount: number;
}

/**
 * the Footer of the Table component, displays table page number and provides table navigation
 * @param gotoPage
 * @param canPreviousPage
 * @param previousPage
 * @param pageIndex
 * @param pageOptions
 * @param canNextPage
 * @param nextPage
 * @param pageCount
 * @constructor
 */
export const TableFooter: React.FC<Props> = ({
    gotoPage,
    canPreviousPage,
    previousPage,
    pageIndex,
    pageOptions,
    canNextPage,
    nextPage,
    pageCount,
}) => (
    <Flex className={MainFlex}>
        <Flex className={PageChangeButtonFlex}>
            <IconButton
                className={PageChangeButtonStyles}
                onClick={() => gotoPage(0)}
                isDisabled={!canPreviousPage}
                icon={<ChevronsLeft size={20} />}
                size="sm"
                aria-label="Table Icon button"
            />
            <IconButton
                className={PageChangeButtonStyles}
                isDisabled={!canPreviousPage}
                onClick={() => previousPage()}
                icon={<ChevronLeft size={20} />}
                size="sm"
                aria-label="Table Icon button"
            />
        </Flex>
        <Flex className={PageIndicator}>
            <Text className={PageIndicatorLeft}>Page</Text>
            <Text className={PageIndicatorRight}>
                {pageIndex + 1} of {pageOptions.length}
            </Text>
        </Flex>
        <Flex className={PageChangeButtonFlex}>
            <IconButton
                className={PageChangeButtonStyles}
                isDisabled={!canNextPage}
                onClick={() => nextPage()}
                icon={<ChevronRight size={20} />}
                size="sm"
                aria-label="Table Icon button"
            />
            <IconButton
                className={PageChangeButtonStyles}
                onClick={() => gotoPage(pageCount ? pageCount - 1 : 1)}
                isDisabled={!canNextPage}
                icon={<ChevronsRight size={20} />}
                size="sm"
                aria-label="Table Icon button"
            />
        </Flex>
    </Flex>
);
