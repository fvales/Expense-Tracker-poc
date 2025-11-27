import {
    Box,
    Drawer,
    FormControlLabel,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    styled,
    Switch,
    Typography,
} from '@mui/material';
import i18n from '@i18n/i18n';
import dashboard from '@mui/icons-material/Dashboard';
import AttachMoney from '@mui/icons-material/AttachMoney';
import MoneyOff from '@mui/icons-material/MoneyOff';
import { NavLink } from 'react-router';
import useAppTheme from '@hooks/useAppTheme';

const sideNavItems = [
    {
        name: i18n.t('dashboard'),
        icon: dashboard,
        path: '/',
    },
    {
        name: i18n.t('income'),
        icon: AttachMoney,
        path: '/income',
    },
    {
        name: i18n.t('expenses'),
        icon: MoneyOff,
        path: '/expense',
    },
];

const StyledListItem = styled(ListItem)(({ theme }) => ({
    cursor: 'pointer',
    '&.active': {
        fontWeight: 'bold',
        color: theme.palette.primary.main,
        backgroundColor: theme.palette.primary.light,
    },
    '&:hover': { backgroundColor: theme.palette.primary.light },
}));

const StyledLogo = styled('img')({
    width: '24px',
    height: '24px',
    verticalAlign: 'middle',
    marginRight: '8px',
});

const SideNav = () => {
    const { toggleTheme, isDarkMode } = useAppTheme();

    return (
        <Drawer
            open
            variant="permanent"
            sx={{
                width: 250,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: 250,
                    boxSizing: 'border-box',
                },
            }}
        >
            <Box role="presentation" sx={{ height: '100%' }}>
                <Box>
                    <Typography variant="h6" sx={{ p: 2 }}>
                        <StyledLogo
                            src="images/logo_light.svg"
                            alt="FinCat Logo"
                        />
                        FinCat
                    </Typography>
                </Box>
                <List>
                    {sideNavItems.map((item) => (
                        <NavLink
                            key={item.name}
                            to={item.path}
                            style={{ textDecoration: 'none', color: 'inherit' }}
                        >
                            {({ isActive }) => (
                                <StyledListItem
                                    className={isActive ? 'active' : ''}
                                >
                                    <ListItemIcon>
                                        <item.icon />
                                    </ListItemIcon>
                                    <ListItemText primary={item.name} />
                                </StyledListItem>
                            )}
                        </NavLink>
                    ))}
                </List>
                <FormControlLabel
                    sx={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        margin: '0 auto',
                    }}
                    control={
                        <Switch
                            checked={isDarkMode}
                            onChange={toggleTheme}
                            size="medium"
                        />
                    }
                    label={isDarkMode ? 'Dark Mode' : 'Light Mode'}
                />
            </Box>
        </Drawer>
    );
};

export default SideNav;
