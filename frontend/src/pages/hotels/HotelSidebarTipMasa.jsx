import React from 'react'
import hotelSidebarTipMasa from './hotelSideBarTipMasa.json'
import HotelSideBarTipMasaList from './HotelSideBarTipMasaList'
const HotelSidebarTipMasa = () => {
  const createHotelSidebarTipMasaList = (component)=>{
    return <HotelSideBarTipMasaList 
      id= {component.id}
      key= {component.id}
      nume = {component.nume}
      numar = {component.numar}
    />
  }
  return (
    <div className=' border-b border-b-button/25 pt-2'>
      <p>Tip de proprietate</p>
      <ul className='space-y-2 py-2'>
        {hotelSidebarTipMasa && hotelSidebarTipMasa.map(createHotelSidebarTipMasaList)}
        
      </ul>

      

    </div>
  )
}

export default HotelSidebarTipMasa
