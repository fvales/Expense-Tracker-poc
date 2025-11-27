import { ThemeContext } from 'contexts/AppThemeContext';
import { useContext } from 'react';

const useAppTheme = () => useContext(ThemeContext);

export default useAppTheme;
