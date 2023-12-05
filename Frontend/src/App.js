/* eslint-disable no-unused-vars */
import './App.css';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Create from './pages/Create';
import BlogPage from './pages/BlogPage';
import Settings from './pages/Settings';
import OtherProfiles from './pages/OtherProfiles'
import TopBar from './components/TopBar';
import NotificationTray from './components/notificationtray'
import NotFound from './pages/NotFound';
import { Box, Container, AppBar, Button, ThemeProvider, createTheme } from "@mui/material";
import { ThemeSwitch, useThemeContext, lightTheme, darkTheme } from './components/themeswitch';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {useState, useEffect } from 'react';
import { useTheme } from '@mui/system';
import SongDatabase from './components/SongDatabase';

function App() {

  return (
    <Router>
      <ThemeSwitch 
      component = {<div className='App'>
        <TopBar />
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/:user" element={<OtherProfiles />} />
          <Route path="/create" element={<Create />} />
          <Route path="/blogs/:id" element={<BlogPage />} />
          <Route path="/settings" element = {<Settings />} />
          <Route path="/SongDatabase" element={<SongDatabase />} />
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </div>
      }></ThemeSwitch>
    </Router>
  );
}

export default App;
