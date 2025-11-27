import './App.css';
import Drawer from '@components/SideNav';
import { BrowserRouter } from 'react-router';
import RoutesComponent from 'Routes';
import { Box, CssBaseline } from '@mui/material';

const App = () => {
    return (
        <BrowserRouter>
            <CssBaseline />
            <Box
                sx={{
                    display: 'flex',
                    height: '100vh',
                    bgcolor: 'background.default',
                }}
            >
                <Drawer />
                <Box
                    component="main"
                    sx={{
                        flex: 1,
                        backgroundColor: 'background.paper',
                        p: '1rem 2rem',
                    }}
                >
                    <RoutesComponent />
                </Box>
            </Box>
        </BrowserRouter>
    );
};

export default App;
