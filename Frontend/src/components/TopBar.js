import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, ButtonGroup, IconButton, AppBar, Toolbar } from "@mui/material";
import './styles.css';
import soundsage from '../assets/soundsage-logo-solid.svg';
import { useTheme } from '@mui/system';
import { ThemeSwitch, useThemeContext, lightTheme, darkTheme } from './themeswitch';
import SvgIcon from '@mui/material/SvgIcon';

const TopBar = () => {
  const theme = useTheme()

  return (
    <Box sx ={{flexGrow:1}}>
    <AppBar position="sticky"
    style= {{backgroundColor: theme.palette.tertiary.main}}>
      <Toolbar variant="dense">
        <Link to='/' title='Link to Home Page'>
          <IconButton>
            <SvgIcon>
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
            </SvgIcon>
          </IconButton>
        </Link>
        <ButtonGroup
          variant="contained"
        >
              <Link to='/profile' title='Link to Profile Page'>
                <Button
                  variant="contained"
                  size="medium"
                  style={{ backgroundColor: theme.palette.accentOne.main }}>
                  Profile
                </Button>
              </Link>
              <Link to='/login' title='Log into Account'>
                <Button
                  variant="contained"
                  size="medium"
                  style={{ backgroundColor: theme.palette.accentOne.main }}
                  >
                  Login
                </Button>
              </Link>
              <Link to='/settings' title='Link to Settings'>
                <Button
                  variant="contained"
                  size="medium"
                  style={{ backgroundColor: theme.palette.accentOne.main }}>
                  Settings
                </Button>
              </Link>
        </ButtonGroup>
      </Toolbar>
    </AppBar>
    </Box>
  )
}

export default TopBar;