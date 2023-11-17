import './App.css';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Create from './pages/Create';
import TopBar from './components/TopBar';
import NotFound from './pages/NotFound';
import { Button,AppBar,Toolbar } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='App'>
        <TopBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/create" element={<Create />} />
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </div>
      <div>
        <Button>
          click me to switch theme!
        </Button>
      </div>
    </Router>
  );
}

export default App;
