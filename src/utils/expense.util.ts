import type { ExpenseType } from 'types/expense.type';
import { parseDate } from './date.util';

export const getExpenseList = (): ExpenseType[] => {
    const expenseList = localStorage.getItem('expenseList');
    try {
        const parsedExpenses: ExpenseType[] = expenseList
            ? JSON.parse(expenseList)
            : [];
        return parsedExpenses.map((expense) => ({
            ...expense,
            date: parseDate(expense.date),
            createdAt: parseDate(expense.createdAt),
            updatedAt: parseDate(expense.updatedAt),
        }));
    } catch (error) {
        console.error('Error parsing expense list from localStorage:', error);
        return [];
    }
};

export const saveExpenseList = (expenseList: ExpenseType[]): void => {
    localStorage.setItem('expenseList', JSON.stringify(expenseList));
};
