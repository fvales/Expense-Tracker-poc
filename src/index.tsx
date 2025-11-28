import React from 'react';
import ReactDOM from 'react-dom/client';
import '@i18n/i18n';
import App from './App';
import { AppThemeProvider } from 'contexts/AppThemeContext';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { ConfirmProvider } from 'material-ui-confirm';

const rootEl = document.getElementById('root');
if (rootEl) {
    const root = ReactDOM.createRoot(rootEl);
    root.render(
        <React.StrictMode>
            <HelmetProvider>
                <AppThemeProvider>
                    <ConfirmProvider>
                        <Helmet titleTemplate="%s | FinCat" defaultTitle="FinCat" />
                        <App />
                    </ConfirmProvider>
                </AppThemeProvider>
            </HelmetProvider>
        </React.StrictMode>
    );
}
