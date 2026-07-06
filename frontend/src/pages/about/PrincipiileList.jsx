import React from 'react'
import { FaRegStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { RxPeople } from "react-icons/rx";
import { CiGlobe } from "react-icons/ci";

const PrincipiileList = (props) => {
  const iconMap ={
    Star: FaRegStar,
    Heart: FaRegHeart,
    People: RxPeople,
    Globe: CiGlobe
  }
  const Icon = iconMap[props.icon]
  return (
    <li className='bg-button1/70 rounded-lg flex flex-col items-center text-center px-6 py-6 space-y-3 border border-button/15'>
      <div className='bg-button/30 px-2 py-2 rounded-full text-button'>
        {
          Icon && <Icon size={30}/>
        }
      </div>

      <p>{props.nume}</p>
      <p>{props.info}</p>
    </li>
  )
}

export default PrincipiileList
