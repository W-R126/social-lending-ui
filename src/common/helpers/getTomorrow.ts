export function getTomorrow(today: Date = new Date()): Date {
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow;
}
