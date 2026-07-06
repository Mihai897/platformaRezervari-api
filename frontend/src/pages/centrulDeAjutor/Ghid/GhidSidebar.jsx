import React from 'react'
import {ghiduri} from './ghiduriData';
import { NavLink } from 'react-router-dom';
const GhidSidebar = () => {
  return (
    <div className='flex flex-col bg-button1 max-modf1:w-full px-5 py-4 rounded-lg space-y-1.5 modf1:sticky top-4 shadow-lg border border-button/10'>
      <p className='font-medium mb-3'>Ghiduri utile</p>
      {ghiduri.map((g)=> (
        <NavLink key={g.path} to={g.path}
          className={({isActive})=>`mb-2 text-[14px] px-2.5 py-1.5 rounded-lg
            ${isActive? 'bg-button/60':'hover:bg-button/50'}
          `}
        >
          {g.label}
        </NavLink>
      ))}
    </div>
  )
}

export default GhidSidebar
