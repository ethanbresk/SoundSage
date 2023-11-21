import './App.css';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Create from './pages/Create';
import Login from './pages/Login';
import BlogPage from './pages/BlogPage';
import TopBar from './components/TopBar';
import NotFound from './pages/NotFound';
import { Button, ThemeProvider, createTheme } from "@mui/material";
import { ThemeSwitch, useThemeContext, lightTheme, darkTheme } from './components/themeswitch';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {useState} from 'react';

function App() {
  return (
    <Router>
      <ThemeSwitch 
      component = {<div className='App'>
        <TopBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/create" element={<Create />} />
          <Route path="/login" element={<Login />} />
          <Route path="/blogs/:id" element={<BlogPage />} />
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </div>
      }></ThemeSwitch>
    </Router>
  );
}

export default App;
