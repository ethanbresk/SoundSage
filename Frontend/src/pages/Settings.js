import React from 'react';
import { Button } from  '@mui/material';
import { useThemeContext, /*currTheme, darkTheme, lightTheme*/ } from "../components/themeswitch";
import NotificationTray from '../components/notificationtray'

const Settings = () => {
    const { switchTheme } = useThemeContext();

    const notifications = [
        { message: 'Test Notification' },
        { message: 'Test 2' },
    ]

  return (
    <div className='settings'>
      <h1 className='page_header'>Settings</h1>
      <div>
        <Button
          onClick={switchTheme}>
          Change Theme
        </Button>
      </div>
      <div>
        <NotificationTray notifications={notifications} />
      </div>
    </div>
  )
}

export default Settings;