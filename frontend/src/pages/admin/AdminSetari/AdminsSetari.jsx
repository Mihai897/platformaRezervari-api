import React from 'react'
import AdminSetariNav from './AdminSetariNav'
import { Outlet, useMatches, useOutletContext } from 'react-router-dom'
import { MdKeyboardArrowRight } from "react-icons/md";

const AdminsSetari = () => {
  const {visibleBara} = useOutletContext();
  const matches = useMatches();
  const current = matches[matches.length-1];
  const title = current?.handle?.title;
  return (
    <div className='mt-18'>
      <div className='flex justify-between items-center text-[14px]'>
        <div className=''>
          <p className='text-[22px] font-medium flex items-center'>Setari <MdKeyboardArrowRight className='mt-0.5'/> <span className='text-[19px] text-button'>{title}</span></p>
          <p className='text-gray-400'>Configureaza preferintele si setarile platformei.</p>
        </div>
        
      </div>

      <AdminSetariNav />
      <Outlet context={{ visibleBara }} />
    </div>
  )
}

export default AdminsSetari
