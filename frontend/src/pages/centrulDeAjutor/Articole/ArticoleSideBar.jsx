import React from 'react'
import {articole} from './articoleData'
import { NavLink } from 'react-router-dom'
const ArticoleSideBar = () => {
  return (
    <div className='flex flex-col bg-button1 max-modf1:w-full px-5 py-4 rounded-lg space-y-1.5 modf1:sticky top-4 shadow-lg border border-button/10'>
      <p className='font-medium mb-3'>Articole populare</p>
      {articole.map((g)=>(
        <NavLink key ={g.path} to = {g.path} className={({isActive}) =>(
          `${isActive? 'bg-button/60':"hover:bg-button/50"} mb-2 text-[14px] px-2.5 py-1.5 rounded-lg`
        )}>
          {g.label}
        </NavLink>
      ))}
    </div>
  )
}

export default ArticoleSideBar
