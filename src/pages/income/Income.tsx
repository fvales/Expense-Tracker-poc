import { Box, Button, Stack, styled, Typography } from '@mui/material';
import Page from '@components/Page';
import { useTranslation } from 'react-i18next';
import IncomeList from './IncomeList';
import IncomeChart from './IncomeChart';
import { useState } from 'react';
import AddIncome from './AddIncome';
import type { AddIncomeType, IncomeType } from 'types/income.type';
import { getIncomeList, saveIncomeList } from '@utils/income.util';
import { v4 as uuid } from 'uuid';

const StyledBox = styled(Box)(() => ({
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    padding: '1rem',
}));

const Income = () => {
    const { t } = useTranslation();
    const [isAddIncomeDialogOpen, setIsAddIncomeDialogOpen] = useState(false);
    const [incomeList, setIncomeList] = useState<IncomeType[]>(getIncomeList());
    const [editingIncome, setEditingIncome] = useState<IncomeType | null>(null);

    const handleDialogClose = () => {
        setIsAddIncomeDialogOpen(false);
        setEditingIncome(null);
    };

    const handleSubmitIncome = (data: AddIncomeType) => {
        let updatedIncomeList: IncomeType[];
        if (editingIncome) {
            updatedIncomeList = incomeList.map((income) =>
                income.id === editingIncome.id
                    ? {
                          ...income,
                          ...data,
                          dateReceived: data.dateReceived,
                          updatedAt: new Date(),
                      }
                    : income
            );
        } else {
            const newIncome: IncomeType = {
                id: uuid(),
                createdAt: new Date(),
                updatedAt: new Date(),
                ...data,
            };
            updatedIncomeList = [newIncome, ...incomeList];
        }
        setIncomeList(updatedIncomeList);
        saveIncomeList(updatedIncomeList);
        handleDialogClose();
    };

    const handleDeleteIncome = (id: string) => {
        const updatedIncomeList = incomeList.filter(
            (income) => income.id !== id
        );
        setIncomeList(updatedIncomeList);
        saveIncomeList(updatedIncomeList);
    };

    const handleEditIncome = (income: IncomeType) => {
        setEditingIncome(income);
        setIsAddIncomeDialogOpen(true);
    };

    return (
        <Page title={t('yourIncomeSources')}>
            <Stack spacing={2}>
                <StyledBox>
                    <IncomeChart incomeList={incomeList} />
                </StyledBox>

                <StyledBox>
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
                            onClick={() => {
                                setEditingIncome(null);
                                setIsAddIncomeDialogOpen(true);
                            }}
                        >
                            {t('addNewIncomeSource')}
                        </Button>
                    </Box>

                    <Box
                        sx={{
                            minHeight: { xs: 400, md: 520 },
                            overflowY: 'auto',
                        }}
                    >
                        <IncomeList
                            incomeList={incomeList}
                            handleDeleteIncome={handleDeleteIncome}
                            handleEditIncome={handleEditIncome}
                        />
                    </Box>
                    {/* Add/Edit Income Dialog */}
                    {isAddIncomeDialogOpen && (
                        <AddIncome
                            onClose={handleDialogClose}
                            open={isAddIncomeDialogOpen}
                            onSubmit={handleSubmitIncome}
                            initialValues={editingIncome ?? undefined}
                            mode={editingIncome ? 'edit' : 'add'}
                        />
                    )}
                </StyledBox>
            </Stack>
        </Page>
    );
};

export default Income;
