import { Box, Button, Typography } from '@mui/material';
import { useState } from 'react';
import AddExpense from './AddExpense';
import type { AddExpenseType, ExpenseType } from 'types/expense.type';
import Page from '@components/Page';
import ExpensesList from './ExpensesList';
import { useTranslation } from 'react-i18next';
import { getExpenseList, saveExpenseList } from '@utils/expense.util';
import { v4 as uuid } from 'uuid';

const Expense = () => {
    const { t } = useTranslation();
    const [expenseList, setExpenseList] =
        useState<ExpenseType[]>(getExpenseList());
    const [isAddExpenseDialogOpen, setIsAddExpenseDialogOpen] = useState(false);

    const handleAddExpense = (data: AddExpenseType) => {
        setIsAddExpenseDialogOpen(false);
        const newExpense = {
            ...data,
            id: uuid(),
            createdAt: new Date(),
            updatedAt: new Date(),
        };
        const updatedExpenseList = [...expenseList, newExpense];
        setExpenseList(updatedExpenseList);
        saveExpenseList(updatedExpenseList);
    };

    const handleDeleteExpense = (id: string) => {
        const updatedExpenseList = expenseList.filter(
            (expense) => expense.id !== id
        );
        setExpenseList(updatedExpenseList);
        saveExpenseList(updatedExpenseList);
    };

    return (
        <Page title="Your Expenses">
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
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
                            {t('incomeSources')}
                        </Typography>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => setIsAddExpenseDialogOpen(true)}
                        >
                            {t('addNewIncomeSource')}
                        </Button>
                    </Box>
                    <ExpensesList
                        expenseList={expenseList}
                        handleDeleteExpense={handleDeleteExpense}
                    />
                    {isAddExpenseDialogOpen && (
                        <AddExpense
                            open={isAddExpenseDialogOpen}
                            onClose={() => setIsAddExpenseDialogOpen(false)}
                            handleAddExpense={handleAddExpense}
                        />
                    )}
                </Box>
            </Box>
        </Page>
    );
};

export default Expense;
