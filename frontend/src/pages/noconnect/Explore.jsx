import React from 'react'
import { Link } from 'react-router-dom'
import { FaSearch } from "react-icons/fa";


const Explore = () => {
  return (
    <div className='max-w-screen-2xl mx-auto px-15 max-modf:px-10 max-modf1:px-8 max-modf8:px-3  py-4'>
      <div className='bg-background/90 border border-button/30 py-4 px-3 rounded-lg text-[14px] '>

        <div className='grid grid-cols-4 max-modf:gap-y-3  max-modf:grid-cols-2 max-modf2:grid-cols-1 items-end  '>
          <div className='w-full'>
            <p>Destinatie</p>
            <input type="text" className='bg-background w-[80%] max-modf2:w-full  border border-button/35 px-3 py-1.5 outline-none rounded-lg' placeholder='Alege destinatia '/>
          </div>

          <div className=''>
            <p>Check-in</p>
            <button className='bg-background  w-[80%] max-modf2:w-full flex border border-button/35 px-3 py-1.5  rounded-lg'>

              <p>Selecteaza data</p>
            </button>
          </div>

          <div className=' '>
            <p>Check-out</p>
            <button className='bg-background  flex w-[80%] max-modf2:w-full   border border-button/35 px-3 py-1.5  rounded-lg'>

              <p>Selecteaza data</p>
            </button>
          </div>

          <div className='flex modf:justify-end  '>
            
            
              <button className='bg-button justify-center cursor-pointer w-[80%] max-modf2:w-full flex items-center font-medium space-x-1.5  border border-button/35 px-3 py-1.5  rounded-lg'><FaSearch className='shrink-0'/> <p>Cauta hotel</p></button>
            
          </div>
        </div>


      </div>
    </div>
  )
}

export default Explore
