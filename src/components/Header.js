import React, {useState} from 'react';
import logo from '../assets/logo1.png';
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


const Header = () => {
const [isOpen, setIsOpen] = useState(false);

const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
        <Navbar >
        <NavbarBrand  href="/">
      <img
       className='logo'
        alt="uproar"
        src={logo}
        style={{
          height: 40,
          width: 40
        }}
      /> uproar
    </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
          <NavbarText>Find your beast</NavbarText>
            <NavItem>
              <NavLink href="/beastindex">Hunt</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/beastshow">Attack</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/beastnew">Expand</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/beastedit">Sharpen</NavLink>
            </NavItem>
            
          </Nav>
         
        </Collapse>
      </Navbar>
    </div>
  )
}

export default Header