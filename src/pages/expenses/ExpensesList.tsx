import MuiTable from '@components/MuiTable';
import type { GridColDef } from '@mui/x-data-grid';
import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import type { ExpenseType } from 'types/expense.type';

type ExpenseList = {
    expenseList: ExpenseType[];
    handleDeleteExpense: (id: string) => void;
};

const ExpensesList: FC<ExpenseList> = ({
    expenseList,
    // handleDeleteExpense,
}) => {
    const { t } = useTranslation();

    const columns: GridColDef<ExpenseType>[] = [
        {
            field: 'date',
            headerName: t('addExpense.date'),
        },
        {
            field: 'category',
            headerName: t('addExpense.category'),
        },
        {
            field: 'description',
            headerName: t('addExpense.description'),
        },
        {
            field: 'amount',
            headerName: t('addExpense.amount'),
        },
        {
            field: 'amount',
            headerName: t('addExpense.amount'),
        },
    ];

    return <MuiTable id="expense-list" columns={columns} rows={expenseList} />;
};

export default ExpensesList;
