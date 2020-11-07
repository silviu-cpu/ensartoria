import React, {useState, useEffect} from 'react'
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
import {animateScroll as scroll } from 'react-scroll'

const Navbar = ({ toggle }) => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if(window.scrollY >= 980) {
            setScrollNav(true)

        }else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    },[])

    const toggleHome = () => {
        scroll.scrollToTop()
    }

    const toggleBottom = () => {
        scroll.scrollToBottom()
    }
    return (
      <>
      
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <NavLogo to="/" onClick={toggleHome}>
                    EN Sartoria
                </NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars value={{ style: { fontSize: '39px' } }}/>
                </MobileIcon>
                <NavMenu>
                    <NavItem> 
                        <NavLinks to="home" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Home</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="services" smooth={true} duration={500} spy={true} exact='true' offset={-80} >Servizi</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="jobs" smooth={true} duration={500} spy={true} exact='true' offset={-80} >I nostri lavori</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="contact" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Contatti</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/" onClick={toggleBottom} onMouseEnter={onHover} onMouseLeave={onHover}>Parla con noi { hover ? <ArrowForward/> : <ArrowRight/>} </NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>



      </>
    )
}

export default Navbar 
