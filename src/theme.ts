import { createTheme } from '@mui/material/styles';
import { useMemo } from 'react';

export type ThemeMode = 'light' | 'dark';

const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#1976d2',
            light: '#e3f2fd',
            dark: '#1565c0',
            contrastText: '#fff',
        },
        secondary: {
            main: '#dc004e',
            light: '#f73378',
            dark: '#9a0036',
            contrastText: '#fff',
        },
        success: {
            main: '#4caf50',
            light: '#81c784',
            dark: '#388e3c',
        },
        error: {
            main: '#f44336',
            light: '#ef5350',
            dark: '#d32f2f',
        },
        warning: {
            main: '#ff9800',
            light: '#ffb74d',
            dark: '#f57c00',
        },
        info: {
            main: '#2196f3',
            light: '#64b5f6',
            dark: '#1976d2',
        },
        background: {
            default: '#f5f5f5',
            paper: '#ffffff',
        },
        text: {
            primary: 'rgba(0, 0, 0, 0.87)',
            secondary: 'rgba(0, 0, 0, 0.60)',
            disabled: 'rgba(0, 0, 0, 0.38)',
        },
        divider: 'rgba(0, 0, 0, 0.12)',
    },
    typography: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        h1: {
            fontSize: '2.5rem',
            fontWeight: 500,
            lineHeight: 1.334,
        },
        h2: {
            fontSize: '2rem',
            fontWeight: 500,
            lineHeight: 1.5,
        },
        h3: {
            fontSize: '1.75rem',
            fontWeight: 500,
            lineHeight: 1.57,
        },
        h4: {
            fontSize: '1.5rem',
            fontWeight: 500,
            lineHeight: 1.67,
        },
        h5: {
            fontSize: '1.25rem',
            fontWeight: 500,
            lineHeight: 1.6,
        },
        h6: {
            fontSize: '1rem',
            fontWeight: 500,
            lineHeight: 1.75,
        },
        body1: {
            fontSize: '1rem',
            lineHeight: 1.5,
        },
        body2: {
            fontSize: '0.875rem',
            lineHeight: 1.43,
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    borderRadius: '8px',
                    fontWeight: 500,
                },
            },
        },
        MuiDrawer: {
            styleOverrides: {
                paper: {
                    backgroundColor: '#ffffff',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                },
            },
        },
        MuiListItem: {
            styleOverrides: {
                root: {
                    borderRadius: '8px',
                    margin: '4px 8px',
                    transition: 'all 0.2s ease',
                    '&:hover': {
                        backgroundColor: '#e3f2fd',
                    },
                },
            },
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                },
            },
        },
    },
});

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#90caf9',
            light: '#bbdefb',
            dark: '#1976d2',
            contrastText: '#000',
        },
        secondary: {
            main: '#f48fb1',
            light: '#f8bbd0',
            dark: '#c2185b',
            contrastText: '#000',
        },
        success: {
            main: '#81c784',
            light: '#a5d6a7',
            dark: '#388e3c',
        },
        error: {
            main: '#ef5350',
            light: '#e57373',
            dark: '#d32f2f',
        },
        warning: {
            main: '#ffb74d',
            light: '#ffe0b2',
            dark: '#f57c00',
        },
        info: {
            main: '#64b5f6',
            light: '#90caf9',
            dark: '#1976d2',
        },
        background: {
            default: '#121212',
            paper: '#1e1e1e',
        },
        text: {
            primary: '#ffffff',
            secondary: 'rgba(255, 255, 255, 0.70)',
            disabled: 'rgba(255, 255, 255, 0.50)',
        },
        divider: 'rgba(255, 255, 255, 0.12)',
    },
    typography: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        h1: {
            fontSize: '2.5rem',
            fontWeight: 500,
            lineHeight: 1.334,
        },
        h2: {
            fontSize: '2rem',
            fontWeight: 500,
            lineHeight: 1.5,
        },
        h3: {
            fontSize: '1.75rem',
            fontWeight: 500,
            lineHeight: 1.57,
        },
        h4: {
            fontSize: '1.5rem',
            fontWeight: 500,
            lineHeight: 1.67,
        },
        h5: {
            fontSize: '1.25rem',
            fontWeight: 500,
            lineHeight: 1.6,
        },
        h6: {
            fontSize: '1rem',
            fontWeight: 500,
            lineHeight: 1.75,
        },
        body1: {
            fontSize: '1rem',
            lineHeight: 1.5,
        },
        body2: {
            fontSize: '0.875rem',
            lineHeight: 1.43,
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    borderRadius: '8px',
                    fontWeight: 500,
                },
            },
        },
        MuiDrawer: {
            styleOverrides: {
                paper: {
                    backgroundColor: '#1e1e1e',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
                },
            },
        },
        MuiListItem: {
            styleOverrides: {
                root: {
                    borderRadius: '8px',
                    margin: '4px 8px',
                    transition: 'all 0.2s ease',
                    '&:hover': {
                        backgroundColor: '#2a2a2a',
                    },
                },
            },
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
                },
            },
        },
    },
});

export const useTheme = (mode: ThemeMode = 'light') => {
    return useMemo(() => (mode === 'light' ? lightTheme : darkTheme), [mode]);
};

export { lightTheme, darkTheme };
