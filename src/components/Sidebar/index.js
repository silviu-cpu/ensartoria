import React from 'react'
import {SidebarContainer, 
    Icon, 
    CloseIcon, 
    SidebarWrapper,
    SideBtnWrap, 
    SidebarMenu, 
    SidebarLink, 
    SidebarRoute
} from './SidebarElements'
const Sidebar = ({ isOpen, toggle}) => {
    return (
        
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="home" onClick={toggle}>
                        Home
                    </SidebarLink>
                    <SidebarLink to="services" onClick={toggle}>  
                        Servizi
                    </SidebarLink>
                    <SidebarLink to="jobs" onClick={toggle} >
                        I nostri lavori
                    </SidebarLink>
                    <SidebarLink to="contact" onClick={toggle}>
                        Contatti
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                   <SidebarRoute to="/">Parla con noi</SidebarRoute> 
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
