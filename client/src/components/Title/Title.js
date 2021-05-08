import { NavItem, Nav, Navbar, NavbarBrand, NavLink } from 'reactstrap';
import './Title.css';

const Title = () => {
    return (
        <Navbar dark expand="md" className='title'>
            <NavbarBrand className='text-left' href="/">Rahee</NavbarBrand>
            <Nav navbar className='text-right'>
                <NavItem>
                    <NavLink href='/'>
                        Home
                        </NavLink>
                </NavItem>
            </Nav>
        </Navbar>
    );
}

export default Title;