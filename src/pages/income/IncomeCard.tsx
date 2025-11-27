import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    Grid,
    Typography,
} from '@mui/material';
import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import type { IncomeType } from 'types/income.type';

interface IIncomeCardProps {
    income: IncomeType;
    handleDeleteIncome: (id: string) => void;
    handleEditIncome: (income: IncomeType) => void;
}

const IncomeCard: FC<IIncomeCardProps> = ({
    income,
    handleDeleteIncome,
    handleEditIncome,
}) => {
    const { t } = useTranslation();
    const date = new Date(income.date);
    const formattedDate = Number.isNaN(date.getTime())
        ? t('date')
        : date.toLocaleDateString(undefined, {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
          });

    return (
        <Card
            sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <CardContent
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                    flexGrow: 1,
                }}
            >
                <Box sx={{ wordBreak: 'break-word' }}>
                    <Typography variant="h6" color="text.secondary">
                        {t('incomeSource')}
                    </Typography>
                    <Typography>{income.incomeSource}</Typography>
                </Box>
                <Grid container spacing={2}>
                    <Grid>
                        <Typography color="text.secondary" variant="h6">
                            {t('amount')}
                        </Typography>
                        <Typography>{income.amount}</Typography>
                    </Grid>
                    <Grid>
                        <Typography variant="h6" color="text.secondary">
                            {t('date')}
                        </Typography>
                        <Typography>{formattedDate}</Typography>
                    </Grid>
                </Grid>
                <Box sx={{ wordBreak: 'break-word' }}>
                    <Typography variant="h6" color="text.secondary">
                        {t('notes')}
                    </Typography>
                    <Typography sx={{ whiteSpace: 'pre-wrap' }}>
                        {income.notes}
                    </Typography>
                </Box>
            </CardContent>
            <CardActions
                sx={{
                    justifyContent: 'flex-end',
                    gap: 1,
                    px: 3,
                    pb: 3,
                }}
            >
                <Button
                    color="primary"
                    onClick={() => handleEditIncome(income)}
                >
                    {t('edit')}
                </Button>
                <Button
                    color="error"
                    onClick={() => handleDeleteIncome(income.id)}
                >
                    {t('delete')}
                </Button>
            </CardActions>
        </Card>
    );
};

export default IncomeCard;
