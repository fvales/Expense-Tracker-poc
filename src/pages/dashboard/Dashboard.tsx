import Page from '@components/Page';
import { Grid, Paper, Stack, styled } from '@mui/material';
import Overview from '@pages/dashboard/Overview';
import { getExpenseList } from '@utils/expense.util';
import { getIncomeList } from '@utils/income.util';
import CustomBarChart from '@components/CustomBarChart';
import { useTranslation } from 'react-i18next';

const StyledPaper = styled(Paper)(({ theme }) => ({
    p: 0,
    borderRadius: '8px',
    boxShadow: `0 2px 8px ${
        theme.palette.mode === 'dark'
            ? 'rgba(0, 0, 0, 0.3)'
            : 'rgba(0, 0 , 0, 0.1)'
    }`,
}));

const Dashboard = () => {
    const { t } = useTranslation();
    const incomeList = getIncomeList();
    const expenseList = getExpenseList();

    return (
        <Page title="Dashboard">
            <Stack spacing={3}>
                <Overview incomeList={incomeList} expenseList={expenseList} />

                <Grid container spacing={3}>
                    <Grid size={{ xs: 12, lg: 6, md: 6 }}>
                        <StyledPaper elevation={0}>
                            <CustomBarChart
                                list={incomeList}
                                chartHeader={t('monthlyIncomeOverview')}
                                seriesLabel={t('monthlyIncome')}
                            />
                        </StyledPaper>
                    </Grid>
                    <Grid size={{ xs: 12, lg: 6, md: 6 }}>
                        <StyledPaper elevation={0}>
                            <CustomBarChart
                                list={expenseList}
                                chartHeader={t('monthlyExpenseOverview')}
                                seriesLabel={t('monthlyExpense')}
                            />
                        </StyledPaper>
                    </Grid>
                </Grid>
            </Stack>
        </Page>
    );
};

export default Dashboard;
