import { useState } from 'react';
import { Link } from 'react-scroll';
import { NavItem, Nav, Navbar, NavbarBrand, NavLink, Collapse, NavbarToggler } from 'reactstrap';
import './NavBar.css';

const NavBar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <Navbar dark expand="md">
            <NavbarBrand href="/">Rahee</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav navbar>
                    <NavItem>
                        <NavLink href='/'>
                            Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink style={{ cursor: 'pointer' }}>
                            <Link to='about'>About</Link>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink style={{ cursor: 'pointer' }} >
                            <Link to='features'>Features</Link>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink style={{ cursor: 'pointer' }} >
                            <Link to='forum'>Forum</Link>
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
}

export default NavBar;