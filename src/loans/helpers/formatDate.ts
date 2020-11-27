import {format} from 'date-fns';
import {dateFormat} from './formatDate.constants';

/**
 * Custom date formatter using {@link dateFormat} string
 * @param date
 */
export function formatDate(date: number) {
    return format(new Date(date), dateFormat);
}
