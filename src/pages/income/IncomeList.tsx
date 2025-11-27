import { Grid, Typography } from '@mui/material';
import IncomeCard from './IncomeCard';
import type { IncomeType } from 'types/income.type';
import type { FC } from 'react';

interface IIncomeListProps {
    incomeList: IncomeType[];
    handleDeleteIncome: (id: string) => void;
    handleEditIncome: (income: IncomeType) => void;
}

const IncomeList: FC<IIncomeListProps> = ({
    incomeList,
    handleDeleteIncome,
    handleEditIncome,
}) => {
    return (
        <Grid
            container
            spacing={2}
            sx={{ overflow: 'auto', height: 'inherit' }}
        >
            {incomeList.length === 0 ? (
                <Grid size={12}>
                    <Typography variant="h6">No income found</Typography>
                </Grid>
            ) : (
                incomeList.map((income) => {
                    return (
                        <Grid
                            size={{ xs: 12, md: 4, sm: 12, xl: 3 }}
                            key={income.id}
                        >
                            <IncomeCard
                                income={income}
                                handleDeleteIncome={handleDeleteIncome}
                                handleEditIncome={handleEditIncome}
                            />
                        </Grid>
                    );
                })
            )}
        </Grid>
    );
};

export default IncomeList;
