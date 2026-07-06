import React from 'react'
import { FaEnvelopeOpen } from 'react-icons/fa'
import { BsMegaphoneFill } from "react-icons/bs";
import { FaStar } from "react-icons/fa6";
import { IoIosWallet } from "react-icons/io";

const AboutList = (props) => {
  const iconMap = {
    Envelope: FaEnvelopeOpen,
    Wallet: IoIosWallet,
    Star: FaStar,
    Megaphone: BsMegaphoneFill
  };
  const Icon = iconMap[props.icon];
  return (
    <li className='h-full bg-button1/70 py-2 border border-button/15 rounded-lg flex space-x-3 px-3'>
      <div className='mt-1.5'>
        {Icon && <Icon className={`${props.bg} text-[35px] px-1.5 rounded-lg  text-button`}/> }
      </div>
      <div>
        <p className='font-medium'>{props.titlu}</p>
        <p className='text-gray-300 mt-1 text-[11.5px]'>{props.info}</p>
      </div>
    </li>
  )
}

export default AboutList
