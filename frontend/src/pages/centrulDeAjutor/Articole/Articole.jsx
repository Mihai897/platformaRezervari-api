import React from 'react'
import { Outlet, useMatches } from 'react-router-dom'
import ArticoleSideBar from './ArticoleSideBar';
import ArticoleTop from './ArticoleTop';

const Articole = () => {

  const matches = useMatches();
  const current = matches[matches.length-1];

  const title = current?.handle?.title;
  return (
    <div className=' '>
      <ArticoleTop title={title}/>
      <div className='flex text-white mt-4 max-w-screen-2xl mx-auto px-15 bg-button1/55 max-modf:px-10 max-modf1:px-8 max-modf8:px-3 items-start modf1:space-x-5 max-modf1:flex-col max-modf1:space-y-3  py-4'>
        <ArticoleSideBar />
        <Outlet context={{title}}/>
      </div>
    </div>
  )
}

export default Articole
