import React, {useState} from 'react'
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
    NavBtnLink, 
    ArrowForward,
    ArrowRight
} from './NavbarElements'

const Navbar = ({ toggle }) => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }
    return (
      <>
        <Nav>
            <NavbarContainer>
                <NavLogo to="/">
                    EN Sartoria
                </NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars value={{ style: { fontSize: '39px' } }}/>
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
                    <NavBtnLink to="/" onMouseEnter={onHover} onMouseLeave={onHover}>Parla con noi { hover ? <ArrowForward/> : <ArrowRight/>} </NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>



      </>
    )
}

export default Navbar 
