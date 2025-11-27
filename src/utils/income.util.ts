import type { IncomeType } from 'types/income.type';

export const getIncomeList = (): IncomeType[] => {
    const incomeList = localStorage.getItem('incomeList');
    try {
        return incomeList ? JSON.parse(incomeList) : [];
    } catch (error) {
        console.error('Error parsing income list from localStorage:', error);
        return [];
    }
};

export const saveIncomeList = (incomeList: IncomeType[]): void => {
    localStorage.setItem('incomeList', JSON.stringify(incomeList));
};
