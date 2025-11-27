import PopupDialog, { type IPopupDialogProps } from '@components/PopupDialog';
import { useTranslation } from 'react-i18next';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { Grid } from '@mui/material';
import type { FC } from 'react';
import TextFieldControl from '@components/TextFieldControl';
import type { AddExpenseType, Category } from 'types/expense.type';
import { yupResolver } from '@hookform/resolvers/yup';
import SelectControl from '@components/SelectControl';
import { CategoryOptions } from 'constants/addexpense.constant';

interface IAddExpenseProps extends IPopupDialogProps {
    open: boolean;
    handleAddExpense: (data: AddExpenseType) => void;
}

const AddExpense: FC<IAddExpenseProps> = ({
    open,
    handleAddExpense,
    onClose,
}) => {
    const { t } = useTranslation();

    const validationSchema = yup.object({
        description: yup
            .string()
            .required(
                t('fieldIsMandatory', { field: t('addExpense.description') })
            )
            .max(255),
        amount: yup
            .number()
            .required(t('fieldIsMandatory', { field: t('addExpense.amount') }))
            .min(0),
        date: yup
            .date()
            .required(t('fieldIsMandatory', { field: t('addExpense.date') })),
        category: yup
            .string<Category>()
            .required(
                t('fieldIsMandatory', { field: t('addExpense.category') })
            ),
    });

    const {
        control,
        handleSubmit,
        formState: { isValid },
    } = useForm<AddExpenseType>({
        mode: 'all',
        resolver: yupResolver(validationSchema),
    });

    return (
        <PopupDialog
            open={open}
            title={t('addIncomeSource.title')}
            onClose={onClose}
            isSubmitDisabled={!isValid}
            onSubmit={handleSubmit(handleAddExpense)}
        >
            <form>
                <Grid container spacing={2}>
                    <Grid size={{ xs: 12 }}>
                        <TextFieldControl
                            label={t('addExpense.date')}
                            name="date"
                            control={control}
                            type="date"
                            slotProps={{
                                inputLabel: {
                                    shrink: true,
                                },
                            }}
                        />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                        <Grid container spacing={2}>
                            <Grid size={{ xs: 12, md: 6 }}>
                                <TextFieldControl
                                    label={t('addExpense.amount')}
                                    name="amount"
                                    control={control}
                                    type="number"
                                />
                            </Grid>
                            <Grid size={{ xs: 6, md: 6 }}>
                                <SelectControl
                                    label={t('addExpense.category')}
                                    name="category"
                                    control={control}
                                    options={CategoryOptions}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                        <TextFieldControl
                            label={t('addExpense.description')}
                            name="description"
                            control={control}
                            multiline
                            rows={4}
                        />
                    </Grid>
                </Grid>
            </form>
        </PopupDialog>
    );
};

export default AddExpense;
