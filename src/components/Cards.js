import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
import poza1 from '../images/poza1.jpeg'
import poza2 from '../images/poza2.jpeg'
import poza3 from '../images/poza3.jpeg'
import poza4 from '../images/poza4.jpeg'

function Cards() {
    return (
        <div className="cards">
            
            <div className="cards__container" id="jobs">
                <div className="cards_wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        src= {poza1}
                        text="Bluzita forta"
                        />
                        <CardItem 
                        src= {poza2}
                        text="Bluzita2 forta"
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                        src= {poza3}
                        text="Bluzita forta"
                        />
                        <CardItem 
                        src= {poza4}
                        text="Bluzita2 forta"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards