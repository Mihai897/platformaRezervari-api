import React from 'react'
import Explore from '../noconnect/Explore'
import HotelSidebar from '../hotels/HotelSidebar'
import ListaOferte from './ListaOferte'

const Oferte = () => {
  return (
    <div>
      <div className='max-w-screen-2xl mx-auto px-15 max-modf:px-10 max-modf1:px-8 max-modf8:px-3 py-4'>
        <p className="text-[24px] font-medium">Oferte speciale pentru tine</p>
        <p className='text-gray-300'>Descopera cele mai bune oferte la camere de hotel din intreaga tara.</p>
      </div>
      <Explore />
      <div className='flex space-x-4 max-modf:flex-col items-start max-w-screen-2xl mx-auto px-15 max-modf:px-10 max-modf1:px-8 max-modf8:px-3 py-4 max-modf:space-y-4'>
        <HotelSidebar />
        <ListaOferte />
      </div>
    </div>
  )
}

export default Oferte
