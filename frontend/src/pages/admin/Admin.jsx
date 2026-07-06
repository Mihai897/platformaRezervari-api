import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import AdminSideBar from './AdminSideBar'
import AdminBara from './AdminBara'


const Admin = () => {
  const [visibleBara, setVisibileBara]= useState(() => window.innerWidth >= 760);

  /*useEffect(() => {
    const handleResize = () => {
      setVisibileBara(window.innerWidth >= 760);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);*/
  useEffect(() => {
    const media = window.matchMedia("(max-width: 759px)");

    const handleChange = (e) => {
      if (e.matches) {
        setVisibileBara(false);
      }
    };

    media.addEventListener("change", handleChange);

    if (media.matches) {
      setVisibileBara(false);
    }

    return () => media.removeEventListener("change", handleChange);
}, []);

  

  
  return (
    <div className='min-h-screen bg-background text-white  '>
      
      <div className='max-w-screen-2xl mx-auto left-0 flex px-3 min-w-0 '>
        
        <AdminSideBar visibleBara={visibleBara}/>
        <main className={`${visibleBara?"ml-46 ": "ml-0 "} transition-all duration-300 ease-in-out py-4 w-full min-w-0`}>
          <AdminBara visibleBara={visibleBara} setVisibileBara={setVisibileBara}/>
          <Outlet context={{visibleBara,setVisibileBara}}/>
        </main>
      </div>
      
    </div>
  )
}

export default Admin
