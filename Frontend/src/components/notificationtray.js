import React, { useState } from 'react';
import { BroswerRouter as Router, Routes, Route} from 'react-router-dom';
import { ListItem, ListItemText } from "@mui/material";

const Notification = ({ message }) => {
    return (
        <div>
            {message}
        </div>
    )
}

const NotificationTray = ({ notifications }) => {
    return (
        <div>
            {notifications.map((notification, index) => (
                <ListItem key={index}>
                    <Notification key={index} message={notification.message} />
                </ListItem>
            ))}
        </div>
    )
}

export default NotificationTray