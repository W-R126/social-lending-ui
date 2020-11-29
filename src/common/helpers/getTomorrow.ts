/**
 * returns javascript Date object for tomorrow. If data is given as a param,
 * it will return the next days date
 * @param today
 */
export function getTomorrow(today: Date = new Date()): Date {
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow;
}
