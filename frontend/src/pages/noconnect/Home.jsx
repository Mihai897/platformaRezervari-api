import React from 'react'
import AllUNeed from './AllUNeed'
import Explore from './Explore'
import HomeInfo from './HomeInfo'
import DestinatiiPopulare from './DestinatiiPopulare'
import Why from './Why'
import { useMatches } from 'react-router-dom'
import Descopera from './Descopera'
import Beneficii from './Beneficii'
import Oferte from './Oferte'
import Recenzii from './Recenzii'


const Home = () => {
  
  return (
    <div className='' >
      <HomeInfo />
      <Oferte />
      <Descopera />
      <Why />
      <DestinatiiPopulare />
      <Beneficii />
      <Recenzii/>
      
    </div>
  )
}

export default Home
