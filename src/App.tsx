import React from 'react'
import { Link, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import './App.scss';

const App:React.FC = ()=> {
  return(
    <div>
      <nav className='navbar'>
        <Link to="/"  className='nav-link'>Home</Link>
        <Link to="/about" className='nav-link' >About</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  )
}

export default App
