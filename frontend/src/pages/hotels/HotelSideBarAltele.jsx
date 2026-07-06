import React from 'react'
import hotelSideBarAltele from './hotelSideBarAltele.json'
import HotelSideBarAlteleList from './HotelSideBarAlteleList'
const HotelSideBarAltele = () => {
  const createHotelSideBarAltelList = (component)=>{
    return <HotelSideBarAlteleList
      id= {component.id}
      key= {component.id}
      nume = {component.nume}
      numar = {component.numar}
    />
  }
  return (
    <div className=' border-b border-b-button/25 pt-2'>
      <p>Alte optiuni</p>
      <ul className='space-y-2 py-2'>
        {hotelSideBarAltele && hotelSideBarAltele.map(createHotelSideBarAltelList)}
        
      </ul>

      

    </div>
  )
}

export default HotelSideBarAltele
