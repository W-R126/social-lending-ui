import {Row} from 'react-table';
import {Auction} from '../../api/auctionsAPI.types';
import {Routes} from '../../../routing/routes';

export const HandleRowClick = (row: Row<any>, history: any) => {
    const auctionId = (row.original as Auction).id;
    history.push(`${Routes.OFFERS}?auctionId=${auctionId}`);
};
