import React, {useState} from 'react'
import HeroSection from '../components/HeroSection'
import Navbar from '../components/Navbar'
import ServiceSection from '../components/ServiceSection'
import { homeObjOne } from '../components/ServiceSection/Data'
import Sidebar from '../components/Sidebar'
import Services from '../components/Services'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)


    const toggle = () => {
      setIsOpen(!isOpen)
    }




    return (
        <>
          <Sidebar isOpen={isOpen} toggle={toggle}/>
          <Navbar toggle={toggle}/>  
          <HeroSection/>
          <ServiceSection {...homeObjOne}/>
          <Services />
          <ServiceSection {...homeObjOne}/>
        </>
    )
}

export default Home
