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
                    <SidebarLink to="home">
                        Home
                    </SidebarLink>
                    <SidebarLink to="services">
                        Servizi
                    </SidebarLink>
                    <SidebarLink to="jobs">
                        I nostri lavori
                    </SidebarLink>
                    <SidebarLink to="contact">
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
