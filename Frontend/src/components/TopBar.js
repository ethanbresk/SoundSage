import React, { useState, useEffect } from "react";
import {
  login,
  logout,
  getUserData,
} from "../utilities/backend_integration.js";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  ButtonGroup,
  IconButton,
  AppBar,
  Toolbar,
} from "@mui/material";
import "./styles.css";
import soundsage from "../assets/soundsage-logo-solid.svg";
import { useTheme } from "@mui/system";
import {
  ThemeSwitch,
  useThemeContext,
  lightTheme,
  darkTheme,
} from "./themeswitch";
import SvgIcon from "@mui/material/SvgIcon";
import NotificationTray from "./notificationtray";
import SoundSageIcon from "./soundSageIcon.js";
import Typography from "@mui/material/Typography";

const TopBar = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const theme = useTheme();
  useEffect(() => {
    getUserData()
      .then((data) => {
        //console.log(data);
        setData(data);
        setError(null);
      })
      .catch((error) => {
        setData(null);
        setError(error);
      });
  }, []);

  const notificationList = [
    { message: "Test Notification" },
    { message: "Test 2" },
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="sticky"
        style={{ backgroundColor: theme.palette.tertiary.main }}
      >
        <Toolbar>
          <SoundSageIcon />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              flexGrow: 1,
              marginLeft: "10px",
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            SOUNDSAGE
          </Typography>
          <NotificationTray
            notifications={notificationList}
            style={{ marginRight: "10px" }}
          />
          <Link to="/profile" title="Link to Profile Page">
            <Button
              variant="contained"
              size="medium"
              style={{
                backgroundColor: theme.palette.accentOne.main,
                marginRight: "10px",
                marginLeft: "10px",
              }}
            >
              Profile
            </Button>
          </Link>
          {!data && !error && (
            <Button
              onClick={() => {
                login();
              }}
              variant="contained"
              size="medium"
              style={{
                backgroundColor: theme.palette.accentOne.main,
                marginRight: "10px",
              }}
            >
              LOGIN
            </Button>
          )}
          {data && (
            <Button
              onClick={() => {
                logout();
              }}
              variant="contained"
              size="medium"
              style={{
                backgroundColor: theme.palette.accentOne.main,
                marginRight: "10px",
              }}
            >
              LOGOUT
            </Button>
          )}
          <Link to="/settings" title="Link to Settings">
            <Button
              variant="contained"
              size="medium"
              style={{ backgroundColor: theme.palette.accentOne.main }}
            >
              Settings
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default TopBar;
