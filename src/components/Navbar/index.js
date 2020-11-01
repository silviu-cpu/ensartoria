import React from 'react'
import { FaBars } from 'react-icons/fa'
import { 
    Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks,
    NavBtn,
    NavBtnLink 
} from './NavbarElements'

const Navbar = ({ toggle }) => {
    return (
      <>
        <Nav>
            <NavbarContainer>
                <NavLogo to="/">
                    EN Sartoria
                </NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem> 
                        <NavLinks to="home">Home</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="services">Servizi</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="jobs">I nostri lavori</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="contact">Contatti</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/">Parla con noi</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>



      </>
    )
}

export default Navbar 
