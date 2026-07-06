import React from 'react'
import { RiShieldCheckLine } from "react-icons/ri";
import { PiMoneyWavyFill } from "react-icons/pi";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { FaAudible } from "react-icons/fa";



const AllUNeedList = (props) => {
  const iconMap = {
    Shield: RiShieldCheckLine,
    Dolar: PiMoneyWavyFill,
    Suport: TfiHeadphoneAlt,
    Anulare: FaAudible
  }
  const Icon = iconMap[props.icon]
  return (
    <li className='flex items-center bg-button1/70 border border-button/15 space-x-2 px-1.5 py-1.5 rounded-lg mt-3'>
      <div>
        {Icon && <Icon className="text-button shrink-0 " size={25}/>}
      </div>
      <div className='text-[14px]'>
        <p className='font-medium'>{props.nume}</p>
        <p className='text-gray-300'>{props.info}</p>
      </div>
    </li>
  )
}

export default AllUNeedList
