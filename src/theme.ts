import { createTheme, type ThemeOptions } from '@mui/material/styles';

export type ThemeMode = 'light' | 'dark';

const fontStack = '"Helvetica Neue", "Arial", sans-serif';

const typography: ThemeOptions['typography'] = {
    fontFamily: fontStack,
    h1: { fontSize: '2.25rem', fontWeight: 600, lineHeight: 1.2 },
    h2: { fontSize: '1.9rem', fontWeight: 600, lineHeight: 1.3 },
    h3: { fontSize: '1.6rem', fontWeight: 600, lineHeight: 1.35 },
    h4: { fontSize: '1.4rem', fontWeight: 600, lineHeight: 1.4 },
    h5: { fontSize: '1.2rem', fontWeight: 600, lineHeight: 1.45 },
    h6: { fontSize: '1.05rem', fontWeight: 600, lineHeight: 1.55 },
    subtitle1: { fontSize: '1rem', fontWeight: 500, lineHeight: 1.5 },
    body1: { fontSize: '1rem', lineHeight: 1.6 },
    body2: { fontSize: '0.9rem', lineHeight: 1.5 },
    button: { fontWeight: 600 },
};

const paletteByMode: Record<ThemeMode, NonNullable<ThemeOptions['palette']>> = {
    light: {
        mode: 'light',
        primary: {
            main: '#2563eb',
            light: '#93c5fd',
            dark: '#1d4ed8',
            contrastText: '#ffffff',
        },
        secondary: {
            main: '#14b8a6',
            light: '#99f6e4',
            dark: '#0f766e',
            contrastText: '#022c22',
        },
        success: { main: '#22c55e' },
        warning: { main: '#f59e0b' },
        error: { main: '#ef4444' },
        info: { main: '#0ea5e9' },
        background: {
            default: '#f7f9fc',
            paper: '#ffffff',
        },
        text: {
            primary: '#0f172a',
            secondary: '#475569',
        },
        divider: 'rgba(15, 23, 42, 0.08)',
    },
    dark: {
        mode: 'dark',
        primary: {
            main: '#60a5fa',
            light: '#93c5fd',
            dark: '#1d4ed8',
            contrastText: '#031633',
        },
        secondary: {
            main: '#f4b400',
            light: '#fde68a',
            dark: '#ca8a04',
            contrastText: '#0f172a',
        },
        success: { main: '#4ade80' },
        warning: { main: '#facc15' },
        error: { main: '#f87171' },
        info: { main: '#38bdf8' },
        background: {
            default: '#0f172a',
            paper: '#1e293b',
        },
        text: {
            primary: '#f8fafc',
            secondary: 'rgba(226, 232, 240, 0.72)',
        },
        divider: 'rgba(148, 163, 184, 0.35)',
    },
};

const getComponents = (
    mode: ThemeMode
): NonNullable<ThemeOptions['components']> => ({
    MuiButton: {
        styleOverrides: {
            root: {
                borderRadius: 999,
                textTransform: 'none',
                paddingInline: '1.5rem',
                fontWeight: 600,
                boxShadow: 'none',
                '&:hover': {
                    boxShadow: 'none',
                },
            },
        },
    },
    MuiPaper: {
        styleOverrides: {
            root: {
                borderRadius: 16,
                backgroundImage: 'none',
                border:
                    mode === 'light'
                        ? '1px solid rgba(15, 23, 42, 0.08)'
                        : '1px solid rgba(148, 163, 184, 0.2)',
            },
        },
    },
    MuiDrawer: {
        styleOverrides: {
            paper: {
                backgroundColor:
                    mode === 'light'
                        ? '#ffffff'
                        : paletteByMode.dark.background!.paper,
                borderRight:
                    mode === 'light'
                        ? '1px solid rgba(15, 23, 42, 0.08)'
                        : '1px solid rgba(148, 163, 184, 0.2)',
            },
        },
    },
    MuiListItemButton: {
        styleOverrides: {
            root: {
                borderRadius: 12,
                marginInline: 8,
                marginBlock: 4,
                '&.Mui-selected, &.Mui-selected:hover': {
                    backgroundColor:
                        mode === 'light'
                            ? 'rgba(37, 99, 235, 0.1)'
                            : 'rgba(96, 165, 250, 0.18)',
                },
                '&:hover': {
                    backgroundColor:
                        mode === 'light'
                            ? 'rgba(15, 23, 42, 0.04)'
                            : 'rgba(148, 163, 184, 0.12)',
                },
            },
        },
    },
    MuiAppBar: {
        styleOverrides: {
            root: {
                borderBottom:
                    mode === 'light'
                        ? '1px solid rgba(15, 23, 42, 0.08)'
                        : '1px solid rgba(148, 163, 184, 0.2)',
                boxShadow: 'none',
            },
        },
    },
});

const createAppTheme = (mode: ThemeMode) =>
    createTheme({
        palette: paletteByMode[mode],
        typography,
        shape: { borderRadius: 12 },
        components: getComponents(mode),
    });

const lightTheme = createAppTheme('light');
const darkTheme = createAppTheme('dark');

export { lightTheme, darkTheme };
