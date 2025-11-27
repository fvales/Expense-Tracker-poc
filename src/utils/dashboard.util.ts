import type { ExpenseType } from 'types/expense.type';
import type { IncomeType } from 'types/income.type';
import { parseDate } from './date.util';

export type OverviewData = {
    totalIncome: number;
    totalExpense: number;
    netBalance: number;
};

export const calculateMonthlyOverview = (
    incomeList: IncomeType[],
    expenseList: ExpenseType[],
    currentMonth: number,
    currentYear: number
): OverviewData => {
    const totalIncome = incomeList
        .filter((income) => {
            const date = parseDate(income.dateReceived);
            return (
                date.getMonth() === currentMonth &&
                date.getFullYear() === currentYear
            );
        })
        .reduce((sum, income) => sum + Number(income.amount), 0);

    const totalExpense = expenseList
        .filter((expense) => {
            const date = parseDate(expense.date);
            return (
                date.getMonth() === currentMonth &&
                date.getFullYear() === currentYear
            );
        })
        .reduce((sum, expense) => sum + Number(expense.amount), 0);

    const netBalance = totalIncome - totalExpense;

    return {
        totalIncome,
        totalExpense,
        netBalance,
    };
};
