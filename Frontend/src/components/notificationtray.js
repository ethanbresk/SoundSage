import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
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
import { getLikeNotifications, getCommentNotifications, getUserData, deleteLikeNotification, deleteCommentNotification } from '../utilities/backend_integration.js';
//Copied part of MUI library example for display and refactored to our own use, adding our own unqiue parts
function NotificationTray() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [notifications, setNotifications] = useState(null)
  const [othernotifications, setOtherNotifications] = useState(null)

  useEffect(() => {
    getUserData()
    .then(data => {
        getLikeNotifications(data.spotify_id)
        .then((res) => {
          setNotifications(res)
        })
        getCommentNotifications(data.spotify_id)
        .then((res) => {
          setOtherNotifications(res)
        })
        setData(data);
        setError(null);
        console.log("testing notifications" + notifications)
      })
      .catch(error => {
        setData(null);
        setError(error);
      })
    }, []);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLikeDelete = (id) => {
    deleteLikeNotification(id)
    .then(() => {
      setNotifications((prevNotifications) =>
        prevNotifications.filter((notification) => notification._id !== id)
      );
    })
    handleClose();
  };
  const handleCommentDelete = (id) => {
    deleteCommentNotification(id)
    .then(() => {
      setNotifications((prevNotifications) =>
        prevNotifications.filter((notification) => notification._id !== id)
      );
    })
    handleClose();
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        style={{ backgroundColor: theme.palette.accentTwo.main}}
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
        
{notifications && notifications.length > 0 && notifications.map((option) => (
  <MenuItem key={option.post_title} selected={option.post_title === 'Pyxis'} onClick={() => handleLikeDelete(option._id)}>
    <Link reloadDocument to={`/blogs/${option._id}`}>
      {"Someone liked \"" + option.post_title + "\""}
    </Link>
  </MenuItem>
))}
{othernotifications && othernotifications.length > 0 && othernotifications.map((option) => (
  <MenuItem key={option.post_title} selected={option.post_title === 'Pyxis'} onClick={() => handleCommentDelete(option._id)}>
    <Link reloadDocument to={`/blogs/${option._id}`}>
    {"Someone commented \"" + option.post_title + "\""}
    </Link>
  </MenuItem>
))}
{!notifications && !othernotifications && <MenuItem>No new notifications.</MenuItem>}

      </Menu>
    </div>
  );
}
export default NotificationTray;