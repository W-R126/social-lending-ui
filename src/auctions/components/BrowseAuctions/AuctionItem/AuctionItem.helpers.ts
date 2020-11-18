import {format} from 'date-fns';
import {dateFormat} from './AuctionItem.constants';

export function formatDate(date: number) {
    return format(new Date(date), dateFormat);
}
