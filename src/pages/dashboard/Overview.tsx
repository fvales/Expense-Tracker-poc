import {
    Box,
    Card,
    CardContent,
    Grid,
    Typography,
    useTheme,
} from '@mui/material';
import { useMemo, type FC } from 'react';
import { useTranslation } from 'react-i18next';
import type { ExpenseType } from 'types/expense.type';
import type { IncomeType } from 'types/income.type';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { calculateMonthlyOverview } from '@utils/dashboard.util';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

type OverviewType = {
    incomeList: IncomeType[];
    expenseList: ExpenseType[];
};

const Overview: FC<OverviewType> = ({ incomeList, expenseList }) => {
    const { t } = useTranslation();
    const theme = useTheme();

    const finiancialData = useMemo(() => {
        const currentDate = new Date();
        const currentMonth = currentDate.getMonth();
        const currentYear = currentDate.getFullYear();
        return calculateMonthlyOverview(
            incomeList,
            expenseList,
            currentMonth,
            currentYear
        );
    }, [incomeList, expenseList]);

    const oberviewCards = [
        {
            title: t('totalIncomeThisMonth'),
            balance: finiancialData.totalIncome,
            color: theme.palette.success.main,
            icon: TrendingUpIcon,
            iconBg: theme.palette.success.light,
        },
        {
            title: t('totalExpensesThisMonth'),
            balance: finiancialData.totalExpense,
            color: theme.palette.error.main,
            icon: TrendingDownIcon,
            iconBg: theme.palette.error.light,
        },
        {
            title: t('netBalance'),
            balance: finiancialData.netBalance,
            color:
                finiancialData.netBalance >= 0
                    ? theme.palette.info.main
                    : theme.palette.warning.main,
            icon: AccountBalanceWalletIcon,
            iconBg:
                finiancialData.netBalance >= 0
                    ? theme.palette.info.light
                    : theme.palette.warning.light,
        },
    ];

    return (
        <Box
            sx={{
                padding: '1rem',
                borderRadius: '8px',
                backgroundColor: theme.palette.background.paper,
                boxShadow: `0 2px 8px ${
                    theme.palette.mode === 'light'
                        ? 'rgba(0, 0, 0, 0.1)'
                        : 'rgba(0, 0, 0, 0.3)'
                }`,
            }}
        >
            <Typography variant="body1" fontWeight="bold" gutterBottom>
                {t('monthlyOverview')}
            </Typography>
            <Grid container spacing={2}>
                {oberviewCards.map((card) => {
                    const IconComponent = card.icon;
                    return (
                        <Grid size={{ xs: 12, sm: 12, md: 4 }} key={card.title}>
                            <Card
                                sx={{
                                    backgroundColor:
                                        theme.palette.background.paper,
                                    borderLeft: `5px solid ${card.color}`,
                                    transition:
                                        'transform 0.2s, box-shadow 0.2s',
                                }}
                            >
                                <CardContent>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'flex-start',
                                            mb: 1,
                                        }}
                                    ></Box>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                        component="div"
                                    >
                                        {card.title}
                                    </Typography>
                                    <Box
                                        sx={{
                                            backgroundColor: card.iconBg,
                                            borderRadius: '50%',
                                            width: 40,
                                            height: 40,
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <IconComponent />
                                    </Box>
                                    <Typography
                                        variant="h4"
                                        fontWeight="bold"
                                        sx={{ color: card.color }}
                                    >
                                        {card.balance.toLocaleString('en-US', {
                                            style: 'currency',
                                            currency: 'INR',
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    );
                })}
            </Grid>
        </Box>
    );
};

export default Overview;
