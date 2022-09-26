import React from 'react'
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavLink } from 'react-bootstrap';
import Login from './Login';
import LogOut from './LogOut';
import { auth } from '../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'


const ListNavbar = () => {


  const [user] = useAuthState(auth)


  return (
    <div>
      <Navbar collapseOnSelect expand='sm' bg='info'>
        <Navbar.Toggle aria-controls='myNavbar' />
        <Navbar.Collapse>
          <Nav id='myNavbar'>
            <NavLink style={{ color: 'white' }} as={Link} to='/'>Home</NavLink>
            <NavLink style={{ color: 'white' }} as={Link} to='/about'>About</NavLink>
            <NavLink style={{ color: 'white' }} as={Link} to='/product'>Product</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {user ? <LogOut /> : <Login />}
    </div>
  )
}

export default ListNavbar