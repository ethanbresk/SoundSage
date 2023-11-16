import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const SiteTheme = createTheme({
    palette: {
        light: {
            one: '#E4E7E3',
            two: '#CFD7CB',
            three: '#FFFFFF',
            four: '#DEF1C2',
            five: '#253D20',
        },
        dark: {
            one: '#000000',
            two: '#141912',
            three: '#242D22',
            four: '#809973',
            five: '#253D20',
        },
    },
});

export default SiteTheme;