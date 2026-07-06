import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { BsCalendar4 } from "react-icons/bs";
import { GoCreditCard } from "react-icons/go";
import { SlShield } from "react-icons/sl";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { LuUserRoundPlus } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { LuMessageCircleQuestion } from "react-icons/lu";
import { AiOutlineLock } from "react-icons/ai";
import { Link } from 'react-router-dom';


const GhidList = (props) => {
  const iconMap ={
    Calendar: BsCalendar4,
    Card: GoCreditCard,
    Shield: SlShield,
    Pencil: HiOutlinePencilSquare,
    User: LuUserRoundPlus,
    Settings: IoSettingsOutline,
    Question: LuMessageCircleQuestion,
    Lock: AiOutlineLock
  }
  const Icon = iconMap[props.icon]
  return (
    <li className='bg-button1/70 border border-button/15 px-5 py-3 rounded-lg  flex flex-col '>
      <div className='flex items-center space-x-4 min-h-17 '>

        <div>
          {Icon && <Icon className="text-button" size={25}/>}
        </div>
        <div>
          <p className=' font-medium'>{props.name}</p>
        </div>

      </div>
      
      <div className='flex grow mb-4'>
        <p className='text-gray-300 text-[15px]'>{props.text}</p>
      </div>
      
      <div className='flex items-center space-x-3 text-button mt-auto'>
        <Link to={props.button} >Vezi ghidul complet</Link>
        <FaArrowRight size={11}/>
      </div>

    </li>
  )
}

export default GhidList
