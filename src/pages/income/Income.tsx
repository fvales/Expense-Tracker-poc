import { Box, Button, Stack, styled, Typography } from '@mui/material';
import Page from '@components/Page';
import { useTranslation } from 'react-i18next';
import IncomeList from './IncomeList';
import { useState } from 'react';
import AddIncome from './AddIncome';
import type { AddIncomeType, IncomeType } from 'types/income.type';
import { getIncomeList, saveIncomeList } from '@utils/income.util';
import { v4 as uuid } from 'uuid';
import CustomBarChart from '@components/CustomBarChart';
import { useConfirm } from 'material-ui-confirm';

const StyledBox = styled(Box)(({ theme }) => ({
    boxShadow:
        theme.palette.mode === 'dark'
            ? '0 12px 24px rgba(15, 23, 42, 0.35)'
            : '0 8px 20px rgba(15, 23, 42, 0.12)',
    borderRadius: '16px',
    padding: '1.25rem',
    border: `1px solid ${theme.palette.divider}`,
    backgroundColor: theme.palette.background.paper,
}));

const Income = () => {
    const { t } = useTranslation();
    const confirm = useConfirm();
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
                          date: data.date,
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

    const handleDeleteIncome = async (id: string) => {
        const { confirmed } = await confirm({
            title: t('confirmDeleteIncome.title'),
            description: t('confirmDeleteIncome.description'),
            confirmationText: t('delete'),
            cancellationText: t('cancel'),
            confirmationButtonProps: { color: 'error' },
        });

        if (confirmed) {
            const updatedIncomeList = incomeList.filter(
                (income) => income.id !== id
            );
            setIncomeList(updatedIncomeList);
            saveIncomeList(updatedIncomeList);
        }
    };

    const handleEditIncome = (income: IncomeType) => {
        setEditingIncome(income);
        setIsAddIncomeDialogOpen(true);
    };

    return (
        <Page title={t('yourIncomeSources')}>
            <Stack spacing={2}>
                <StyledBox>
                    <CustomBarChart
                        list={incomeList}
                        chartHeader={t('monthlyIncomeOverview')}
                        seriesLabel={t('monthlyIncome')}
                    />
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
                            minHeight: { xs: 360, md: 480 },
                            maxHeight: { xs: 500, lg: 640 },
                            overflowY: 'auto',
                            pr: 1,
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
