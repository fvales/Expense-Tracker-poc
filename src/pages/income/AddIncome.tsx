import PopupDialog, { type IPopupDialogProps } from '@components/PopupDialog';
import { useTranslation } from 'react-i18next';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { Grid } from '@mui/material';
import TextFieldControl from '@components/TextFieldControl';
import type { AddIncomeType, IncomeType } from 'types/income.type';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useMemo, type FC } from 'react';
import { formatDateForInput, parseDate } from '@utils/date.util';

type AddIncomeFormValues = Omit<AddIncomeType, 'date'> & {
    date: string;
};

interface IAddIncomeProps extends Omit<IPopupDialogProps, 'onSubmit'> {
    open: boolean;
    onSubmit: (data: AddIncomeType) => void;
    income?: IncomeType;
}

const getDefaultValues = (income?: AddIncomeType): AddIncomeFormValues => ({
    incomeSource: income?.incomeSource ?? '',
    amount: income?.amount ?? 0,
    date: formatDateForInput(income?.date),
    notes: income?.notes ?? '',
});

const AddIncome: FC<IAddIncomeProps> = ({
    open,
    onSubmit,
    onClose,
    income,
}) => {
    const { t } = useTranslation();
    const isEditMode = !!income;

    const validationSchema = yup.object({
        incomeSource: yup
            .string()
            .required(
                t('fieldIsMandatory', {
                    field: t('addIncomeSource.incomeSource'),
                })
            )
            .max(100),
        amount: yup
            .number()
            .typeError(
                t('fieldIsMandatory', { field: t('addIncomeSource.amount') })
            )
            .required(
                t('fieldIsMandatory', { field: t('addIncomeSource.amount') })
            )
            .min(0),
        date: yup.string().required(
            t('fieldIsMandatory', {
                field: t('addIncomeSource.date'),
            })
        ),
        notes: yup
            .string()
            .required(
                t('fieldIsMandatory', { field: t('addIncomeSource.notes') })
            )
            .max(255),
    });

    const defaultValues = useMemo(() => getDefaultValues(income), [income]);

    const {
        control,
        handleSubmit,
        formState: { isValid },
        reset,
    } = useForm<AddIncomeFormValues>({
        mode: 'all',
        resolver: yupResolver(validationSchema),
        defaultValues,
    });

    useEffect(() => {
        reset(defaultValues);
    }, [defaultValues, reset]);

    const handleFormSubmit = (values: AddIncomeFormValues) => {
        onSubmit({
            ...values,
            amount: Number(values.amount),
            date: parseDate(values.date),
        });
    };

    return (
        <PopupDialog
            open={open}
            title={isEditMode ? t('edit') : t('addIncomeSource.title')}
            onClose={onClose}
            isSubmitDisabled={!isValid}
            onSubmit={handleSubmit(handleFormSubmit)}
        >
            <form onSubmit={handleSubmit(handleFormSubmit)}>
                <Grid container spacing={2}>
                    <Grid size={{ xs: 12 }}>
                        <TextFieldControl
                            label={t('addIncomeSource.incomeSource')}
                            name="incomeSource"
                            control={control}
                        />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                        <Grid container spacing={2}>
                            <Grid size={{ xs: 12, md: 6 }}>
                                <TextFieldControl
                                    label={t('addIncomeSource.amount')}
                                    name="amount"
                                    control={control}
                                    type="number"
                                />
                            </Grid>
                            <Grid size={{ xs: 6, md: 6 }}>
                                <TextFieldControl
                                    label={t('addIncomeSource.date')}
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
                        </Grid>
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                        <TextFieldControl
                            label={t('addIncomeSource.notes')}
                            name="notes"
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

export default AddIncome;
