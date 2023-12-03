import React, { useState } from 'react';
import { BroswerRouter as Router, Routes, Route} from 'react-router-dom';
import { Box, ListItem, ListItemText } from "@mui/material";
import { useTheme } from '@mui/system';

const Notification = ({ message }) => {
    return (
        <div>
            {message}
        </div>
    )
}

const NotificationTray = ({ /*notifications*/ }) => {
    const theme = useTheme()

    return (
        /*
        <div>
            {notifications.map((notification, index) => (
                <ListItem key={index}>
                    <Notification key={index} message={notification.message} />
                </ListItem>
            ))}
        </div>*/
        <Box
        position = "sticky"
        width = "100%"
        style = {{ backgroundColor: theme.palette.secondary.main}}
        p={1.5}
        />
    )
}

export default NotificationTray