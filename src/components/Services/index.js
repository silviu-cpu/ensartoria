import React from 'react'
import { ServicesContainer, ServicesCard, ServicesH2, ServicesIcon, ServicesWrapper, ServicesP} from './ServicesElements'
import Icon1 from '../../images/svg-2.svg'
import Icon2 from '../../images/svg-3.svg'
import Icon3 from '../../images/svg-4.svg'
const Services = () => {
    return (
        <ServicesContainer>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Quality</ServicesH2>
                    <ServicesP>We offer top quality</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>Time</ServicesH2>
                    <ServicesP>We deliver our products very fast</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>B2B Services</ServicesH2>
                    <ServicesP>We offer B2B Services</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services