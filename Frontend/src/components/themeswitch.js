import React, { useState, createContext, useContext } from 'react';
import { createTheme, ThemeProvider } from '@mui/material';

export const lightTheme = createTheme({
    palette: {
        primary: {
            main: '#E4E7E3',
        },
        secondary: {
            main: '#CFD7CB',
        },
        tertiary: {
            main: '#FFFFFF',
        },
        accentOne: {
            main: '#DEF1C2'
        },
        accentTwo: {
            main: '#253D20',
        }
    },
});

export const darkTheme = createTheme({
    palette: {
        primary: {
        main: '#000000',
        },
        secondary: {
            main: '#141912',
        },
        tertiary: {
            main: '#242D22',
        },
        accentOne: {
            main: '#809973'
        },
        accentTwo: {
            main: '#253D20',
        }
    },
});

const themeContext = createContext();

export const useThemeContext = () => {
    return useContext(themeContext);
};

export const ThemeSwitch = ({ component }) => {
    const [defaultTheme, setDark] = useState(false);

    const switchTheme = () => {
        setDark(!defaultTheme);
    };

const currTheme = createTheme(defaultTheme ? darkTheme : lightTheme);

return (
    <themeContext.Provider value={{switchTheme,currTheme}}>
        <ThemeProvider theme ={currTheme}>
            {component}
        </ThemeProvider>
    </themeContext.Provider>
);
};