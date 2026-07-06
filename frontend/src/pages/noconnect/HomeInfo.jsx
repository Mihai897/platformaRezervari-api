import React from 'react'
import { Link } from 'react-router-dom'
import AllUNeed from './AllUNeed'
import background from '../../assets/background/background.png'
import Explore from './Explore'
const HomeInfo = (props) => {
  return (
    <div className=' bg-cover bg-no-repeat bg-center  py-18' style={{backgroundImage:`url(${background})` }}>
      
      <div className='max-w-screen-2xl mx-auto px-15 max-modf:px-10 max-modf1:px-8 max-modf8:px-3 '>
        <div className='space-y-4'>
          <p className='leading-10 text-[34px]'>Gaseste camera de hotel <br/> <span className='text-button '>perfecta pentru tine.</span></p>

          <p className='text-[14px] text-gray-300'>Descopera cele mai frumoase destinatii si alege din mii de hoteluri <br/> verificate. Cazare confortabila la cele mai bune preturi, garantat.</p>
        </div>
      </div>

      <AllUNeed />
      <Explore />
      
      
    </div>
  )
}

export default HomeInfo
