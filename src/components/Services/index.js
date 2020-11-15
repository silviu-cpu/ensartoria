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
                    <ServicesH2>Qualità</ServicesH2>
                    <ServicesP>Offriamo la massima qualità sui nostri prodotti</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>Tempo</ServicesH2>
                    <ServicesP>Consegniamo i nostri prodotti molto velocemente</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>B2B Servizi</ServicesH2>
                    <ServicesP>Offriamo servizi B2B -business to business- </ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services