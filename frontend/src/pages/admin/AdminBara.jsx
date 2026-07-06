import React from 'react'
import { IoMenu } from "react-icons/io5";
import { FaBell } from "react-icons/fa";

const AdminBara = ({visibleBara,setVisibileBara}) => {
  return (
    <div className={`fixed top-0 ${visibleBara? "left-46.5 modf5:left-50 modf5:mr-3 ":"left-0 " } z-100 pl-3 pr-6 bg-background  border-b border-button/30 transition-all duration-300 ease-in-out py-4 
    right-0 `}>
      <div className='flex justify-between space-x-3 items-center max-w-screen-2xl mx-auto'>
        <button className='  cursor-pointer z-100' onClick={()=>setVisibileBara(!visibleBara)}>
          <IoMenu className='text-[19px]'/>
        </button>

        <div className='flex items-center space-x-8'>
          <div className='relative'>
            <FaBell className='text-button' size={20}/>
            <div className='text-[10px] absolute bg-red-600 px-1  rounded-full flex items-center justify-center -right-2.5 -top-1'>
              <p>8</p>
            </div>
          </div>
          <div className='flex items-center space-x-3 text-[14px]'>
            <div className='w-10 h-10 rounded-full'>
              <img className='rounded-full w-full h-full' src={`${import.meta.env.BASE_URL}home/descopera/exotic.jpg`} alt="" />
            </div>
            <div>
              <p>Anrei Poopescu</p>
              <p className='text-gray-400'>Administrator</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminBara
