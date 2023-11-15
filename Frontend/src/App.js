import './App.css';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Create from './pages/Create';
import Navigation from './pages/Navigation';
import NotFound from './pages/NotFound';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/create" element={<Create />} />
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
