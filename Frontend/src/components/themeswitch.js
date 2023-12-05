import React, { useState, createContext, useContext, useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material';
import CssBaseline from "@mui/material/CssBaseline"

export const lightTheme = createTheme({
    palette: {
        primary: {
            main: '#FFFFFF',
        },
        secondary: {
            main: '#E3E3E3',
        },
        tertiary: {
            main: '#E8E8E8',
        },
        accentOne: {
            main: '#DEF1C2'
        },
        accentTwo: {
            main: '#253D20',
        },
        background: {
            default: '#FFFFFF',
        },
        text: {
            main: '#000000',
        },
        subtext: {
            main: '#777777',
        },
        link: {
            main: '#378122',
        },
        visited: {
            main: '#374a20',
        },
        hover: {
            main: '#9cca8f',
        }
    },
});

export const darkTheme = createTheme({
    palette: {
        primary: {
        main: '#000000',
        },
        secondary: {
            main: '#282828',
        },
        tertiary: {
            main: '#191919',
        },
        accentOne: {
            main: '#809973'
        },
        accentTwo: {
            main: '#251230',
        },
        background: {
            default: '#000000',
        },
        text: {
            main: '#FFFFFF',
        },
        subtext: {
            main: '#999999',
        },
        link: {
            main: '#378122',
        },
        visited: {
            main: '#376400',
        },
        hover: {
            main: '#9cca8f',
        }
    },
});

const themeContext = createContext();

export const useThemeContext = () => {
    return useContext(themeContext);
};

export const ThemeSwitch = ({ component }) => {

    // load theme from local storage and set initial theme
    const locallyStoredTheme = localStorage.getItem("theme");
    const initialTheme = locallyStoredTheme ? JSON.parse(locallyStoredTheme) : false;

    const [defaultTheme, setDefaultTheme] = useState(initialTheme);

    const currTheme = createTheme(defaultTheme ? lightTheme : darkTheme);

    // save theme to local storage when it changes
    useEffect(() => {
        localStorage.setItem("theme", JSON.stringify(defaultTheme));
    }, [defaultTheme]);

    const switchTheme = () => {
        setDefaultTheme(!defaultTheme);
      };
      
    return (
        <themeContext.Provider value={{switchTheme,currTheme}}>
            <ThemeProvider theme={currTheme}>
                <CssBaseline/>
                {component}
            </ThemeProvider>
        </themeContext.Provider>
    );
};