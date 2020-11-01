import React from 'react'
import Video from '../../videos/video.mp4'
import {HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1} from './HeroElements'
const HeroSection = () => {
    return (
        
        
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>

            <HeroContent>
                <HeroH1>Sartoria veloce, fatto su misura, ricamo</HeroH1>
                <HeroH1>B2B Services</HeroH1>
            </HeroContent>

        </HeroContainer>
        
        
        
    )
}

export default HeroSection
