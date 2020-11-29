import {css} from 'emotion';

/**
 * tableBody styles
 */
export const MainFlex = css`
    flex-direction: column;
`;

export const TableRow = css`
    border-bottom-width: 1px;
    flex: 1;
    overflow: hidden;
    justify-content: space-between;
    align-items: center;

    &:hover {
        cursor: pointer;
        background-color: rgba(0, 0, 0, 0.01);
    }
`;

export const TableCell = css`
    width: 100%;
    padding: 1rem;
    justify-content: center;
`;
