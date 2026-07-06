import React from 'react'
import { FaUsers } from "react-icons/fa";
import { BsMegaphoneFill } from "react-icons/bs";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { LuMapPin } from "react-icons/lu";


const About1 = (props) => {
  const iconMap ={
    Users: FaUsers,
    Megaphone: BsMegaphoneFill,
    Verify: RiVerifiedBadgeFill,
    Pin: LuMapPin
  }
  const Icon = iconMap[props.icon];
  return (
    <li className='bg-button1/70 rounded-lg border border-button/15 flex px-3 py-2 space-x-5 items-center'>
      <div>
        {Icon && <Icon className="text-button text-[27px]" />}
      </div>
      <div>
        <p>{props.nr}</p>
        <p className='mt-1'>{props.text}</p>
      </div>
    </li>
  )
}

export default About1
