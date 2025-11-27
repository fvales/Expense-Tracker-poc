// Helper function to parse date
export const parseDate = (date: Date | string): Date => {
    if (date instanceof Date) {
        return date;
    }
    return new Date(date);
};
