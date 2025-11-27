import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    type DialogProps,
} from '@mui/material';
import { type FC } from 'react';
import { useTranslation } from 'react-i18next';

export interface IPopupDialogProps extends DialogProps {
    onSubmit?: () => void;
    submitBtnText?: string;
    closeButtonText?: string;
    isSubmitDisabled?: boolean;
}

const PopupDialog: FC<IPopupDialogProps> = ({
    open,
    onClose,
    onSubmit,
    title,
    submitBtnText,
    closeButtonText,
    children,
    isSubmitDisabled,
}) => {
    const { t } = useTranslation();

    return (
        <Dialog open={open} onClose={onClose} maxWidth="xs">
            <DialogTitle>{title}</DialogTitle>
            <DialogContent>{children}</DialogContent>
            <DialogActions>
                <Button onClick={(event) => onClose?.(event, 'backdropClick')}>
                    {closeButtonText ?? t('close')}
                </Button>
                <Button
                    onClick={onSubmit}
                    variant="contained"
                    disabled={isSubmitDisabled}
                >
                    {submitBtnText ?? t('submit')}
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default PopupDialog;
