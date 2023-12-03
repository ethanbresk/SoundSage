import React, { useState } from "react";
import { BroswerRouter as Router, Routes, Route } from "react-router-dom";
import { Box, ListItem, ListItemText } from "@mui/material";
import { useTheme } from "@mui/system";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";

const Notification = ({ message }) => {
  return <div>{message}</div>;
};

const NotificationTray = ({ notifications }) => {
  const theme = useTheme();

  if (!notifications || notifications.length === 0) {
    return <div>No notifications available</div>;
  }

  return (
    <div>
      <IconButton>
        <Badge color="secondary" variant="dot"></Badge>
      </IconButton>
      <Menu></Menu>
    </div>
  );
};

export default NotificationTray;
