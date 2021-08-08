import React from 'react';
import { Nav, NavLink, NavIcon, Bars } from './NavbarElements';
import logo from '../../images/logomuz.png';
import './Navbar.css';

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav className='navbar'>
        <NavLink to='/'>
          <img src={logo} className='logomuz' alt='logomuz' />
          <span className='titleRightOfLogo'>Toptancık</span>
        </NavLink>
        <NavIcon onClick={toggle}>
          <Bars />
        </NavIcon>
      </Nav>
    </>
  );
};

export default Navbar;
