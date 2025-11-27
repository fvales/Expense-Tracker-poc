import {
    MenuItem,
    TextField,
    type TextFieldProps as MuiTextFieldProps,
} from '@mui/material';
import {
    Controller,
    type Control,
    type FieldValues,
    type Path,
} from 'react-hook-form';

export type SelectOption<TValue extends string | number = string> = {
    label: string;
    value: TValue;
};

type SelectControlProps<
    TFieldValues extends FieldValues = FieldValues,
    TValue extends string | number = string,
> = Omit<MuiTextFieldProps, 'select' | 'defaultValue' | 'name'> & {
    control: Control<TFieldValues>;
    name: Path<TFieldValues>;
    options: SelectOption<TValue>[];
};

const SelectControl = <
    TFieldValues extends FieldValues = FieldValues,
    TValue extends string | number = string,
>({
    control,
    name,
    options,
    ...rest
}: SelectControlProps<TFieldValues, TValue>) => {
    return (
        <Controller
            control={control}
            name={name}
            render={({ field, fieldState: { error } }) => (
                <TextField
                    select
                    fullWidth
                    variant="outlined"
                    {...field}
                    {...rest}
                    helperText={error ? error.message : rest.helperText}
                    error={!!error}
                >
                    {options.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
            )}
        />
    );
};

export default SelectControl;
