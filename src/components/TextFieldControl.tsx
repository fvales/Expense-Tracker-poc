import {
    TextField,
    type TextFieldProps as MuiTextFieldProps,
} from '@mui/material';
import {
    Controller,
    type Control,
    type FieldValues,
    type Path,
} from 'react-hook-form';

type ITextFieldProps<TFieldValues extends FieldValues = FieldValues> =
    MuiTextFieldProps & {
        control: Control<TFieldValues>;
        name: Path<TFieldValues>;
    };

const TextFieldControl = <TFieldValues extends FieldValues = FieldValues>({
    control,
    name,
    ...rest
}: ITextFieldProps<TFieldValues>) => {
    return (
        <Controller
            control={control}
            name={name}
            render={({ field, fieldState: { error } }) => (
                <TextField
                    fullWidth
                    variant="outlined"
                    {...field}
                    {...rest}
                    helperText={error ? error.message : rest.helperText}
                    error={!!error}
                />
            )}
        />
    );
};

export default TextFieldControl;
