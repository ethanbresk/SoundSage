import React, { useState } from "react";
import { BroswerRouter as Router, Routes, Route } from "react-router-dom";
import { Box, ListItem, ListItemText } from "@mui/material";
import { useTheme } from "@mui/system";
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
//import NotificationsIcon from "@mui/icons-material/Notifications";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
//Copied part of MUI library example for display and refactored to our own use, adding our own unqiue parts
const notis = [
  'Comment',
  'Like'
]

function NotificationTray() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        style={{ backgroundColor: theme.palette.accentOne.main}}
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <Badge variant="dot">
          <NotificationsIcon />
        </Badge>
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {notis.map((option) => (
          <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

export default NotificationTray;