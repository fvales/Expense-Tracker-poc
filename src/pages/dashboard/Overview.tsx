import {
    Box,
    Card,
    CardContent,
    Grid,
    Typography,
    useTheme,
} from '@mui/material';
import { useTranslation } from 'react-i18next';

const Overview = () => {
    const { t } = useTranslation();
    const theme = useTheme();

    const oberviewCards = [
        {
            title: t('totalIncomeThisMonth'),
            balance: 0,
            color: 'green',
        },
        {
            title: t('totalExpensesThisMonth'),
            balance: 0,
            color: 'red',
        },
        {
            title: t('netBalance'),
            balance: 0,
            color: 'blue',
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
                {oberviewCards.map((card) => (
                    <Grid size={{ xs: 12, sm: 12, md: 4 }} key={card.title}>
                        <Card
                            sx={{ backgroundColor: card.color, color: '#fff' }}
                        >
                            <CardContent>
                                <Typography
                                    variant="body2"
                                    component="div"
                                    mb="2rem"
                                >
                                    {card.title}
                                </Typography>
                                <Typography variant="h5">{`$${card.balance}`}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Overview;
