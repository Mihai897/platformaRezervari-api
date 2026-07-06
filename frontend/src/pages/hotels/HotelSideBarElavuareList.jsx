import React from 'react'
import { FaStar } from "react-icons/fa";

const HotelSideBarElavuareList = (props) => {
  return (
    <li className='flex justify-between'>
      <div className='flex space-x-3'>
        <input type="checkbox" className='' />
        <div className='flex space-x-1 items-center'>
          <FaStar className={`${props.star1}`}/>
          <FaStar className={`${props.star2}`}/>
          <FaStar className={`${props.star3}`}/>
          <FaStar className={`${props.star4}`}/>
          <FaStar className={`${props.star5}`}/>
        </div>
      </div>
      <p>{props.numar}</p>
    </li>
  )
}

export default HotelSideBarElavuareList
