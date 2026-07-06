import React from 'react'
import { Link, Outlet, useMatches } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";
import GhidSidebar from './GhidSidebar';
import GhidTop from './GhidTop';
 



const Ghid = () => {
  const matches = useMatches();
  const current = matches[matches.length-1];

  const title = current?.handle?.title;
  const description = current?.handle?.description;
  const description2 = current?.handle?.description2;
  const time = current?.handle?.time;
  return (
    
    <div className=''>

      <GhidTop title={title}
        description={description}
        description2={description2}
        time ={time}
      />
      

      <div className='flex text-white max-modf1:flex-col max-modf1:space-y-3 mt-4 max-w-screen-2xl mx-auto px-15 bg-button1/50 max-modf:px-10 max-modf1:px-8 max-modf8:px-3 items-start modf1:space-x-5 py-4 border-y border-y-button/15'>
         <GhidSidebar/>
        <Outlet/>
      </div>
    </div>
  )
}

export default Ghid
