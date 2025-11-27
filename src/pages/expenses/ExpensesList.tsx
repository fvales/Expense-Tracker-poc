import MuiTable from '@components/MuiTable';
import { Box, IconButton, Tooltip } from '@mui/material';
import type { GridColDef } from '@mui/x-data-grid';
import { parseDate } from '@utils/date.util';
import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import type { ExpenseType } from 'types/expense.type';
import EditIcon from '@mui/icons-material/Edit';
import TrashIcon from '@mui/icons-material/Delete';

type ExpenseList = {
    expenseList: ExpenseType[];
    handleDeleteExpense: (id: string) => void;
    handleEditExpense: (id: ExpenseType) => void;
};

const ExpensesList: FC<ExpenseList> = ({
    expenseList,
    handleDeleteExpense,
    handleEditExpense,
}) => {
    const { t } = useTranslation();

    const columns: GridColDef<ExpenseType>[] = [
        {
            field: 'date',
            headerName: t('addExpense.date'),
            minWidth: 120,
            valueFormatter: (value) => {
                if (value) {
                    const date = parseDate(value);
                    return date.toLocaleDateString();
                }
                return '';
            },
        },
        {
            field: 'category',
            headerName: t('addExpense.category'),
            flex: 1,
            valueFormatter: (value) => {
                return t(`category.${value}`);
            },
        },
        {
            field: 'description',
            headerName: t('addExpense.description'),
            flex: 2,
            minWidth: 200,
        },
        {
            field: 'amount',
            headerName: t('addExpense.amount'),
            minWidth: 100,
            valueFormatter: (value) => {
                return `${Number(value).toFixed(2)}`;
            },
        },
        {
            field: 'actions',
            headerName: t('actions'),
            sortable: false,
            filterable: false,
            flex: 1,
            minWidth: 120,
            renderCell: (params) => (
                <Box sx={{ display: 'flex', gap: 1 }}>
                    <Tooltip title={t('edit')}>
                        <IconButton
                            size="small"
                            color="primary"
                            onClick={() => handleEditExpense(params.row)}
                        >
                            <EditIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title={t('delete')}>
                        <IconButton
                            size="small"
                            color="error"
                            onClick={() => handleDeleteExpense(params.row.id)}
                        >
                            <TrashIcon />
                        </IconButton>
                    </Tooltip>
                </Box>
            ),
        },
    ];

    return <MuiTable id="expense-list" columns={columns} rows={expenseList} />;
};

export default ExpensesList;
