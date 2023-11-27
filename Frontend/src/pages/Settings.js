import React from 'react';
import { Button } from  '@mui/material';
import { useThemeContext, /*currTheme, darkTheme, lightTheme*/ } from "../components/themeswitch";

const Settings = () => {
    const { switchTheme } = useThemeContext();

  return (
    <div className='settings'>
      <h1 className='page_header'>Settings</h1>
      <div>
        <Button
          onClick={switchTheme}>
          Change Theme
        </Button>
      </div>
    </div>
  )
}

export default Settings;