import React, { useState } from 'react'
import HotelSiderbarTip from './HotelSiderbarTip'
import HotelSideBarEvaluare from './HotelSideBarEvaluare'
import HotelSideBarFacilitati from './HotelSideBarFacilitati'
import HotelSidebarTipMasa from './HotelSidebarTipMasa'
import HotelSideBarAltele from './HotelSideBarAltele'

const HotelSidebar = () => {
  const [visible,setVisible] = useState(false)
  return (
    <div className='modf:flex-1 max-modf:w-full  bg-button1 border border-button/25 text-[14px] px-4 py-4 rounded-sm'>
      <div className=' '>
        <div className='flex justify-between '>
          <button onClick={()=>setVisible(!visible)} className=' font-medium cursor-pointer'>Filtreaza rezultatele </button>
          <button className='text-button cursor-pointer'>Reseteaza filtrele</button>
        </div>

        <div className={`${visible ? "block": "hidden"} border-b border-b-button/25 py-2 space-y-2 `}>
          <p>Pret pe noapte</p>
          <div>
            asdsad
          </div>
        </div>
        
        <div className={` ${visible ? "block": "hidden"}`}>
          <HotelSiderbarTip />
          <HotelSideBarEvaluare />
          <HotelSideBarFacilitati />
          <HotelSidebarTipMasa />
          <HotelSideBarAltele />

          <div className='pt-4'>
            <button className='py-2 rounded-lg cursor-pointer bg-button w-full'>Aplica filtre</button>
          </div>
        </div>
      </div>

      
    </div>
  )
}

export default HotelSidebar
