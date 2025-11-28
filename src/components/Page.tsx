import {
    Box,
    Stack,
    Typography,
    Switch,
    FormControlLabel,
} from '@mui/material';
import type { ChangeEvent, FC, ReactNode } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

interface IPageProps {
    children?: ReactNode;
    title: string;
    description?: string;
}

const Page: FC<IPageProps> = ({ children, title }) => {
    const { i18n } = useTranslation();

    const handleLanguageChange = (event: ChangeEvent<HTMLInputElement>) => {
        const newLanguage = event.target.checked ? 'hn' : 'en';
        i18n.changeLanguage(newLanguage);
    };

    const isHindi = i18n.language === 'hn';

    return (
        <Stack>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    mb: 2,
                }}
            >
                <Helmet title={title} />
                <Typography variant="h4" gutterBottom sx={{ m: 0 }}>
                    {title}
                </Typography>
                <FormControlLabel
                    control={
                        <Switch
                            checked={isHindi}
                            onChange={handleLanguageChange}
                            size="medium"
                        />
                    }
                    label={isHindi ? 'हिंदी' : 'English'}
                />
            </Box>
            {children}
        </Stack>
    );
};

export default Page;
