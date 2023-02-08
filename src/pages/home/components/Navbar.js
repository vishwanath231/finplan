import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
} from 'reactstrap';
import LOGO from '../../../assets/img/logo.png';
import './navbar.css';


const NavbarComponent = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar expand="md" className='navbar'>
                <NavbarBrand href="/">
                    <img src={LOGO} alt="loho" height='50px' width='100%' />
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="me-auto" navbar></Nav>
                    <NavbarText className='nav_item'>
                        <Link to='/blog' className='nav_link'>Blog</Link>
                        <Link to='/events' className='nav_link'>Events</Link>
                        <Link to='/login' className='login_btn' style={{ background: '#F2AE3B', padding: '.4rem 1rem', borderRadius: '3px'}}>Login</Link>
                    </NavbarText>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default NavbarComponent;