//Style
import './styles/global.css';

//Pages
import Home from './pages/Home';
import NotFound from './pages/NotFound';

//React Router Dom
import {Route, BrowserRouter as Router, Routes, Navigate } from 'react-router-dom'

function App() {
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/pageNotFound' element={<NotFound />} />
          <Route path='*' element={<Navigate to='/pageNotFound'/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
