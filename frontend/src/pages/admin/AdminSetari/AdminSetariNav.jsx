import React from 'react'
import {setNav} from './setNav'
import { NavLink } from 'react-router-dom'
const AdminSetariNav = () => {
  return (
    <div>
      <ul className='space-x-3 space-y-1 flex flex-wrap py-4'>
        {
          setNav.map(par=>
            <NavLink key={par.path} to={par.path} end={par.path === "/admin/admin-setari"}
            className={`px-3 py-1 relative group`}>
              {({isActive})=>(
                <>
                  <p>{par.label}</p>
                  <div className={`absolute bottom-0 left-0 h-0.5 rounded-full bg-button transition-all  duration-300 ease-in ${isActive? "w-full":"w-0 group-hover:w-full"}`}>

                  </div>
                </>
              )}
            </NavLink>
          )
        }
      </ul>
    </div>
  )
}

export default AdminSetariNav
