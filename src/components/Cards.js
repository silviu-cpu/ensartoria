import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
import poza1 from '../images/poza1.jpeg'
import poza2 from '../images/poza2.jpeg'
// import poza3 from '../images/poza3.jpeg'
import poza4 from '../images/poza4.jpeg'
// import poza5 from '../images/poza5.jpeg'
import poza6 from '../images/poza6.jpeg'
import poza7 from '../images/poza7.jpeg'
import poza8 from '../images/poza8.jpeg'
import poza9 from '../images/poza9.jpeg'
import poza10 from '../images/poza10.jpeg'

function Cards() {
    return (
        <div className="cards">
            
            <div className="cards__container" id="jobs">
                <div className="cards_wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        src= {poza1}
                        />
                        <CardItem 
                        src= {poza2}
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                        src= {poza6}
                        />
                        <CardItem 
                        src= {poza7}
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                        src= {poza9}
                        />
                        <CardItem 
                        src= {poza8}
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                        src= {poza10}
                        />
                        <CardItem 
                        src= {poza4}
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards