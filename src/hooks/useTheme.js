import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

// This custom hook provides an easy way to access the theme context in any component.
export const useTheme = () => useContext(ThemeContext);