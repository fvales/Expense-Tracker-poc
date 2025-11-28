import { Box, Button, Typography } from '@mui/material';
import { useState } from 'react';
import AddExpense from './AddExpense';
import type { AddExpenseType, ExpenseType } from 'types/expense.type';
import Page from '@components/Page';
import ExpensesList from './ExpensesList';
import { useTranslation } from 'react-i18next';
import { getExpenseList, saveExpenseList } from '@utils/expense.util';
import { v4 as uuid } from 'uuid';
import CustomBarChart from '@components/CustomBarChart';

const Expense = () => {
    const { t } = useTranslation();
    const [expenseList, setExpenseList] =
        useState<ExpenseType[]>(getExpenseList());
    const [isAddExpenseDialogOpen, setIsAddExpenseDialogOpen] = useState(false);
    const [editingExpense, setEditingExpense] = useState<ExpenseType | null>(
        null
    );

    const handleEditExpense = (expense: ExpenseType) => {
        setIsAddExpenseDialogOpen(true);
        setEditingExpense(expense);
    };

    const handleDialogClose = () => {
        setIsAddExpenseDialogOpen(false);
        setEditingExpense(null);
    };

    const handleSubmitExpense = (data: AddExpenseType) => {
        let updatedExpenseList: ExpenseType[];
        if (editingExpense) {
            updatedExpenseList = expenseList.map((expense) =>
                expense.id === editingExpense.id
                    ? {
                          ...expense,
                          ...data,
                          date: data.date,
                          updatedAt: new Date(),
                      }
                    : expense
            );
        } else {
            const newExpense: ExpenseType = {
                id: uuid(),
                createdAt: new Date(),
                updatedAt: new Date(),
                ...data,
            };
            updatedExpenseList = [newExpense, ...expenseList];
        }
        setExpenseList(updatedExpenseList);
        saveExpenseList(updatedExpenseList);
        handleDialogClose();
    };

    const handleDeleteExpense = (id: string) => {
        const updatedExpenseList = expenseList.filter(
            (expense) => expense.id !== id
        );
        setExpenseList(updatedExpenseList);
        saveExpenseList(updatedExpenseList);
    };

    return (
        <Page title={t('yourExpenses')}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <CustomBarChart
                    list={expenseList}
                    chartHeader={t('monthlyExpenseOverview')}
                    seriesLabel={t('monthlyExpense')}
                />
                <Box
                    sx={{
                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                        borderRadius: '8px',
                        p: 2,
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            mb: 2,
                        }}
                    >
                        <Typography variant="h5" gutterBottom>
                            {t('yourExpenses')}
                        </Typography>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => setIsAddExpenseDialogOpen(true)}
                        >
                            {t('addNewExpense')}
                        </Button>
                    </Box>
                    <ExpensesList
                        expenseList={expenseList}
                        handleDeleteExpense={handleDeleteExpense}
                        handleEditExpense={handleEditExpense}
                    />
                    {isAddExpenseDialogOpen && (
                        <AddExpense
                            open={isAddExpenseDialogOpen}
                            onClose={() => setIsAddExpenseDialogOpen(false)}
                            handleAddExpense={handleSubmitExpense}
                            expense={editingExpense ?? undefined}
                        />
                    )}
                </Box>
            </Box>
        </Page>
    );
};

export default Expense;
