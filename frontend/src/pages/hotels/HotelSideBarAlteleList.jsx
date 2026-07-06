import React from 'react'

const HotelSideBarAlteleList = (props) => {
  return (
    <li className='flex justify-between'>
      <div className='flex space-x-3'>
        <input type="checkbox" />
        <p>{props.nume}</p>
      </div>
      <p>{props.numar}</p>
    </li>
  )
}

export default HotelSideBarAlteleList
