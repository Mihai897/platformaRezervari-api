import React from 'react'
import HotelSiderbarTipList from './HotelSiderbarTipList'
import hotelSideBar from './hotelSideBar.json'
const HotelSiderbarTip = () => {
  const createHotelSiderbarTipList = (component)=>{
    return <HotelSiderbarTipList 
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
        {hotelSideBar && hotelSideBar.map(createHotelSiderbarTipList)}
        
      </ul>

      

    </div>
  )
}

export default HotelSiderbarTip
