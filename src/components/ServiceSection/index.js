import React from 'react'
import { ServiceContainer, ServiceRow, ServiceWrapper, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, ImgWrap, Img} from './ServiceElements'
const ServiceSection = ({lightBg,id,imgStart,topLine,lightText,headline,darkText,description,img,alt}) => {
    return (
        <>
            <ServiceContainer lightBg={lightBg} id={id}>
                <ServiceWrapper>
                    <ServiceRow imgStart = {imgStart}> 
                        <Column1>
                            <TextWrapper>
                                <TopLine>{ topLine }</TopLine>
                                <Heading lightText={lightText}>{ headline }</Heading>
                                <Subtitle darkText={darkText}>{ description }</Subtitle>
        
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img}/>
                            </ImgWrap>
                        </Column2>
                    </ServiceRow>
                </ServiceWrapper>
            </ServiceContainer>
        
        
        
        
        </>
            
        
    )
}

export default ServiceSection
