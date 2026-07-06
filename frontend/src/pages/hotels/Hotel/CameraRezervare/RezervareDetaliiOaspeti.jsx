import React, { useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import { MdOutlineKeyboardArrowDown, 
  MdOutlineKeyboardArrowUp } from "react-icons/md";
  import { FaArrowLeft } from "react-icons/fa";

const RezervareDetaliiOaspeti = ({camera,setSearchParams}) => {
  const [visibleNrTel, setVisibleNrTel] = useState(false);
  const [visibleTara, setVisibleTara] = useState(false);
  const [visibleDocument, setVisibleDocument] = useState(false);
  const [visibleDocument1, setVisibleDocument1] = useState(false);
  const [visibleNrPers, setVisibleNrPers] = useState(false);
  
  const [nrLitere,setNrLitere] = useState(0);
  return (
    <div>
      <div>
        <button onClick={()=>setSearchParams({step: 1})} className='border border-button/30 px-3 py-1.5 rounded-lg mb-3 font-medium flex items-center space-x-3 hover:border-button/60 cursor-pointer transition-all duration-500 ease-in-out'>
          <FaArrowLeft className='text-button text-[15px]'/>
          <p>Inapoi</p>
        </button>
      </div>
      <p className='font-medium text-[18px]'>Detalii oaspete principal</p>
      <p className='text-[14px] text-gray-400'>Personaa care va face check-inul la hotel</p>
      <div className='text-[14px] mt-1.5 grid grid-cols-2 gap-3 max-modf2:grid-cols-1'>

        <div className='text-gray-400 space-y-1'>
          <p>Nume</p>
          <input className='w-full text-white  outline-0 border border-button/30 px-3 py-1.5 rounded-sm' type="text" placeholder='Ex: Adrian' name="" id="" />
        </div>

        <div className='text-gray-400 space-y-1'>
          <p>Prenume</p>
          <input className='text-white w-full  outline-0 border border-button/30 px-3 py-1.5 rounded-sm' type="text" placeholder='Ex: Tamas' name="" id="" />
        </div>

        <div className='text-gray-400 space-y-1'>
          <p>Email</p>
          <input className='text-white w-full outline-0 border border-button/30 px-3 py-1.5 rounded-sm' type="email" placeholder='Ex: Tamas' name="" id="" />
        </div>

        <div className='text-gray-400 space-y-1'>
          <p>Numar de telefon</p>
          <div className='flex space-x-2 items-center'>
            <button onClick={()=>setVisibleNrTel(!visibleNrTel)} className='border border-button/30 hover:border-button/60 transition-all duration-500  py-1.5 px-3 rounded-sm flex items-center space-x-1.5 cursor-pointer relative'>
              
              <div className={`absolute z-50 left-0 top-8 bg-button1  w-full transition-all duration-500 ease-in-out ${visibleNrTel? "max-h-100 opacity-100": "max-h-0 opacity-0"}`}>
                <button className=' w-full border border-button/30  py-1.5 px-3 hover:border-button/60 ease-in-out transition-all duration-500  flex items-center  cursor-pointer'>
                  
                  <p className='font-medium text-white'>+40</p>
                </button>
                <button className='   py-1.5 px-3  flex items-center border border-button/30 w-full ease-in-out  hover:border-button/60 transition-all duration-500 cursor-pointer'>
                  <p className='font-medium text-white'>+40</p>
                </button>
              </div>
              <p className='font-medium text-white'>+40</p>
              {visibleNrTel? <MdOutlineKeyboardArrowUp className='mt-0.5' size={19}/>: <MdOutlineKeyboardArrowDown className='mt-0.5' size={19}/>}
            </button>
            <input className='text-white w-full outline-0 border border-button/30 px-3 py-1.5 rounded-sm' type="tel"  name="" id="" />
          </div>
        </div>

        <div className='text-gray-400'>
          <p>Tara de resedinta</p>

          <div className='relative mt-1'>
            <button onClick={()=>setVisibleTara(!visibleTara)} className={`border px-3 py-1.5 border-button/30 w-full flex items-center justify-between cursor-pointer hover:border-button/60 transition-all ${visibleTara? "rounded-t-sm": "rounded-sm"} duration-500 ease-in-out`}>

              <p>Romania</p>

              {visibleTara? <MdOutlineKeyboardArrowUp size={19}/>: <MdOutlineKeyboardArrowDown size={19}/>}
            </button>
            <ul className={`absolute overflow-hidden z-49 w-full transition-all duration-500 ease-in-out bg-button1 ${visibleTara? "opacity-100 max-h-100": "max-h-0 opacity-0"}`}>
              {
                ["Italia","SUA","Moldova","Franta"].map((par,i)=>(
                  <li key={i}>
                    <button className='border px-3 py-1.5 border-button/30 w-full flex items-center justify-between hover:border-button/60 duration-500 transition-all ease-in-out cursor-pointer'>
                      {par}
                    </button>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
        
        <div className='text-gray-400'>
          <p>Document de identitate</p>

          <div className='relative mt-1 z-10'>
            <button onClick={()=>setVisibleDocument(!visibleDocument)} className={`border px-3 py-1.5 border-button/30 w-full flex items-center justify-between cursor-pointer hover:border-button/60 transition-all ${visibleDocument? "rounded-t-sm" :"rounded-sm"} duration-500 ease-in-out`}>

              <p>Carte de identitate</p>

              {visibleDocument? <MdOutlineKeyboardArrowUp size={19}/>: <MdOutlineKeyboardArrowDown size={19}/>}
            </button>
            <ul className={`absolute w-full z-48 transition-all overflow-hidden duration-500 ease-in-out bg-button1 ${visibleDocument? "opacity-100 max-h-100": "max-h-0 opacity-0 "}`}>
              {
                ["Pasaport","Card"].map((par,i)=>(
                  <li key={i}>
                    <button className='border px-3 py-1.5 border-button/30 w-full flex items-center justify-between hover:border-button/60 duration-500 transition-all ease-in-out cursor-pointer'>
                      {par}
                    </button>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
        




      </div>

      <div className='mt-3 text-[14px]'>
       <div className='flex justify-between'>
         <p className='font-medium text-[18px]'>Alti oaspeti</p>
         <div className='relative'>
            <button onClick={()=>setVisibleNrPers(!visibleNrPers)} className={`text-gray-400 border cursor-pointer border-button/30 px-3 py-1.5 transition-all duration-500 ease-in-out hover:border-button/70  space-x-3 flex items-center ${visibleNrPers ?"rounded-t-sm": "rounded-sm"}`}>
              <p>2 adulti</p>
              {visibleNrPers ? <MdOutlineKeyboardArrowUp size={19}/>:<MdOutlineKeyboardArrowDown size={19}/>}
            </button>
            <ul className={`bg-button1 text-gray-400 z-47 overflow-hidden transition-all duration-500 ease-in-out absolute w-full ${visibleNrPers?"max-h-100 opacity-100" : "max-h-0 opacity-0"}`}>
              {["3 adulti", "4 adulti"].map((par,i)=>(
                <li className='w-full'>
                  <button className={`border border-button/30 px-3 py-1.5 transition-all duration-500 ease-in-out hover:border-button/70  w-full cursor-pointer flex`}>{par}</button>
                </li>
              ))}
            </ul>
         </div>
       </div>
        <div>
          <p className=' text-[14px]'>Adult 2:</p>
          <div className='text-[14px]  grid grid-cols-3 gap-3 max-modf2:grid-cols-1 '>
            <div className='text-gray-400 space-y-1'>
              <p>Nume</p>
              <input className='w-full text-white  outline-0 border border-button/30 px-3 py-1.5 rounded-sm' type="text" placeholder='Ex: Maria' name="" id="" />
            </div>
            <div className='text-gray-400 space-y-1'>
              <p>Prenume</p>
              <input className='w-full text-white  outline-0 border border-button/30 px-3 py-1.5 rounded-sm' type="text" placeholder='Ex: Popescu' name="" id="" />
            </div>

            <div className='text-gray-400'>
              <p>Document de identitate</p>

              <div className='relative mt-1 z-10'>
                <button onClick={()=>setVisibleDocument1(!visibleDocument1)} className={`border px-3 py-1.5 border-button/30 w-full flex items-center justify-between cursor-pointer hover:border-button/60 transition-all ${visibleDocument1? "rounded-t-sm" :"rounded-sm"} duration-500 ease-in-out`}>

                  <p>Carte de identitate</p>

                  {visibleDocument1? <MdOutlineKeyboardArrowUp size={19}/>: <MdOutlineKeyboardArrowDown size={19}/>}
                </button>
                <ul className={`absolute z-46 w-full transition-all overflow-hidden duration-500 ease-in-out bg-button1 ${visibleDocument1? "opacity-100 max-h-100": "max-h-0 opacity-0 "}`}>
                  {
                    ["Pasaport","Card"].map((par,i)=>(
                      <li key={i}>
                        <button className='border px-3 py-1.5 border-button/30 w-full flex items-center justify-between hover:border-button/60 duration-500 transition-all ease-in-out cursor-pointer'>
                          {par}
                        </button>
                      </li>
                    ))
                  }
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>


      <div className='mt-3'>
        <p className='text-[18px] font-medium'>Cereri speciale (optional)</p>
        <p className='text-[14px] text-gray-400'>Transmite-ne orice cerere speciala si vom face tot posibilul sa o indeplinim.</p>
        <div className='relative'>
          <textarea  className='w-full border outline-0 pl-3 pr-10 resize-none h-25 border-button/30 py-1.5 text-[14px] mt-1.5 rounded-sm' name="" placeholder='Ex: pat matrimonial, etaj superior, vedere la ocean, surpriza pentru aniversare etc.' id="" maxLength={300}
          onChange={(e) => setNrLitere(e.target.value.length)}></textarea>
          <div className='absolute bottom-3 right-3'>
            <p className='text-gray-400 text-[14px]'>{nrLitere}/300</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RezervareDetaliiOaspeti
