import React from 'react';
import ReactDOM from 'react-dom/client';
import '@i18n/i18n';
import App from './App';
import { AppThemeProvider } from 'contexts/AppThemeContext';
import { HelmetProvider, Helmet } from 'react-helmet-async';

const rootEl = document.getElementById('root');
if (rootEl) {
    const root = ReactDOM.createRoot(rootEl);
    root.render(
        <React.StrictMode>
            <HelmetProvider>
                <AppThemeProvider>
                    <Helmet title="%s | FinCat" defaultTitle="FinCat" />
                    <App />
                </AppThemeProvider>
            </HelmetProvider>
        </React.StrictMode>
    );
}
