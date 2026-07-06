import React from 'react'
import hotelSideBarEvaluare from './hotelSideBarEvaluare.json'
import HotelSideBarElavuareList from './HotelSideBarElavuareList'
const HotelSideBarEvaluare = () => {
  const createHotelSideBarEvaluareList = (component)=>{
    return <HotelSideBarElavuareList 
      id= {component.id}
      key= {component.id}
      star1 = {component.star1}
      star2 = {component.star2}
      star3 = {component.star3}
      star4 = {component.star4}
      star5 = {component.star5}
      numar = {component.numar}
    />
  }
  return (
    <div className=' border-b border-b-button/25 pt-2'>
      <p>Evaluare oaspeti</p>
      <ul className='space-y-2 py-2'>
        {hotelSideBarEvaluare && hotelSideBarEvaluare.map(createHotelSideBarEvaluareList)}
        
      </ul>

      

    </div>
  )
}

export default HotelSideBarEvaluare
