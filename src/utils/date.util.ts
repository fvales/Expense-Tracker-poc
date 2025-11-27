// Helper function to parse date
export const parseDate = (date: Date | string): Date => {
    if (date instanceof Date) {
        return date;
    }
    return new Date(date);
};

export const formatDateForInput = (value?: Date | string): string => {
    if (!value) {
        return '';
    }
    const date = parseDate(value);
    return date.toISOString().slice(0, 10);
};
