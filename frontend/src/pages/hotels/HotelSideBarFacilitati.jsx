import React from 'react'
import hotelSideBarFacilitati from './hotelSideBarFacilitati.json'
import HotelSideBarFacilitatiList from './HotelSideBarFacilitatiList'
const HotelSideBarFacilitati = () => {
   const createHotelSideBarFacilitatiList = (component)=>{
    return <HotelSideBarFacilitatiList 
      id= {component.id}
      key= {component.id}
      nume = {component.nume}
      numar = {component.numar}
    />
  }
  return (
    <div className=' border-b border-b-button/25 pt-2'>
      <p>Facilitati</p>
      <ul className='space-y-2 py-2'>
        {hotelSideBarFacilitati && hotelSideBarFacilitati.map(createHotelSideBarFacilitatiList)}
        
      </ul>

      

    </div>
  )
}

export default HotelSideBarFacilitati
