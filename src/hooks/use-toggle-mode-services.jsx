import { useContext } from 'react';
import { ColorModeServicesContext } from '../contexts/theme-provider';

export const useToggleModeServices = () => {
    const toggleMode = useContext(ColorModeServicesContext);// сеттер для изменения режима темы

    //  console.log(toggleMode);

    if (toggleMode === undefined) {
        throw new Error('You must use useToggleModeServices with ToggleColorModeServicesContext');
    }

    // console.log(toggleMode)
    return toggleMode;
}