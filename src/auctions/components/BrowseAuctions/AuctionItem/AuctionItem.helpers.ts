import {format} from 'date-fns';
import {dateFormat} from './AuctionItem.constants';

/**
 * Returns formated date using {@link dateFormat}
 * @param date
 */
export function formatDate(date: number): string {
    return format(new Date(date), dateFormat);
}
