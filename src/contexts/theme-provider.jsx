import React, { createContext, useCallback, useState, useMemo } from 'react';
import { createTheme, ThemeProvider as MUIThemeProvider } from '@mui/material';
import { deepmerge } from '@mui/utils';

export const ColorModeServicesContext = createContext(undefined); // создается контекст

export const ThemeProvider = ({ initialTheme = {}, initialMode = 'light', children }) => { //создается провайдер для темы (контекста)
    const [mode, setMode] = useState(initialMode); // стейт режима отображения (темный или светлый)

    const theme = useMemo(() => 
        createTheme(deepmerge(initialTheme, { palette: { mode } })),  // "обновляется" значение palette объекта темы при изменении режима
        [mode, initialTheme]  // срабатывает при изменении этих значений, но что такое initialTheme??
    ); // возвращает объект с описанием темы

// console.log(mode);
// console.log(initialTheme);

// console.log(theme);

    const toggleColorMode = useCallback(() => { // функция возвращает сеттер для изменения стейта режима отображения
        setMode((prevMode) => prevMode === 'light' ? 'dark' : 'light'); 
    }, []);

    // console.log(toggleColorMode);

    return (
        <ColorModeServicesContext.Provider value={ toggleColorMode }>
            <MUIThemeProvider theme={ theme }>
                { children }
            </MUIThemeProvider>
        </ColorModeServicesContext.Provider>
    )
}
