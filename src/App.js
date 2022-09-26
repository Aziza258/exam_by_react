import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {Navbar, Nav, NavLink} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import ListNavbar from './components/ListNavbar';
import "bootstrap/dist/css/bootstrap.min.css";
import './pages/app.css'


const App = () => {
  return (
    <BrowserRouter>
    <ListNavbar/>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/product' element={<Product />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
