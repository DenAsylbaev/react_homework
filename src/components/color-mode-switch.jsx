import React from 'react';
import { IconButton, useTheme } from '@mui/material';
import { useToggleModeServices } from '../hooks/use-toggle-mode-services'; // сеттер для изменения режима темы

export const ColorModeSwitch = () => {
    const toggleColorMode = useToggleModeServices();// возвращает функцию setMode(prevMode => prevMode === 'light' ? 'dark' : 'light');
    const theme = useTheme();

    return (
        <IconButton onClick={ toggleColorMode } color="inherit">
            { theme.palette.mode }
        </IconButton>
    );
}