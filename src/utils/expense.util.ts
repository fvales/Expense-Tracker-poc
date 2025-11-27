import type { ExpenseType } from 'types/expense.type';

export const getExpenseList = (): ExpenseType[] => {
    const expenseList = localStorage.getItem('expenseList');
    try {
        return expenseList ? JSON.parse(expenseList) : [];
    } catch (error) {
        console.error('Error parsing expense list from localStorage:', error);
        return [];
    }
};

export const saveExpenseList = (expenseList: ExpenseType[]): void => {
    localStorage.setItem('expenseList', JSON.stringify(expenseList));
};
