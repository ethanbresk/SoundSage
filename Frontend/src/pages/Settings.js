import React from 'react';
import { Button } from  '@mui/material';
import { useThemeContext, /*currTheme, darkTheme, lightTheme*/ } from "../components/themeswitch";
import NotificationTray from '../components/notificationtray'
import { useTheme } from '@mui/system';
import { Box } from '@mui/material';

const Settings = () => {
    const { switchTheme } = useThemeContext();
    const theme = useTheme()

    const notifications = [
        { message: 'Test Notification' },
        { message: 'Test 2' },
    ]

  return (
    <div className='settings'>
      <Box
        position = "fixed"
        bottom = {0}
        width = "100%"
        style = {{ backgroundColor: theme.palette.tertiary.main}}
        p={3}
      />
      <h1 className='page_header'>Settings</h1>
      <div className="center">
        <Button
          onClick={switchTheme}
          variant="contained"
          style={{
            borderRadius:30,
            backgroundColor: theme.palette.secondary.main
            }}>
          Change Theme
        </Button>
      <div/>
      <p/>
      <div className="center">
        <Button
          onClick={(e) => {
            e.preventDefault();
            window.location.href='/songdatabase';
          }}
            variant="contained"
            style={{
              borderRadius:30,
              backgroundColor: theme.palette.secondary.main
              }}>
            Albums
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Settings;