import React from 'react'
import { GoGift } from "react-icons/go";

const WhyList = (props) => {
  const iconMap = {
    gift: GoGift
  };
  const Icon = iconMap[props.icon]
  return (
    <li className='  flex-1 space-y-4 ma'>
      <div className='flex justify-center'>
        {Icon && <Icon className="text-button text-[34px]"/>}
      </div>
      <div className=''>
        <p className='font-medium text-center text-[14px]'>{props.nume}</p>
        <p className='modf1:mt-3 text-[12.5px] text-gray-300 text-center'>{props.info}</p>
      </div>
    </li>
  )
}

export default WhyList
