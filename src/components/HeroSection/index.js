import React from 'react'
import { FaPhone } from 'react-icons/fa'
import Video from '../../videos/video.mp4'
import {HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroTwoContent} from './HeroElements'
const HeroSection = () => {
    return (
        
        
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>

            <HeroContent>
                <HeroH1>Sartoria veloce, fatto su misura, ricamo</HeroH1>
                <HeroH1>B2B Servizi</HeroH1>
            </HeroContent>

            {/* <HeroTwoContent>
                <HeroH1><FaPhone /> +39 3533306491</HeroH1>
            </HeroTwoContent> */}

        </HeroContainer>
        
        
        
    )
}

export default HeroSection
