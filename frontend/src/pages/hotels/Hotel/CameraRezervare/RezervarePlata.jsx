import React, { useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import { FaArrowLeft, FaRegAddressCard } from "react-icons/fa6";
import { PiCashRegisterLight } from "react-icons/pi";
import { CiCircleInfo } from "react-icons/ci";

const RezervarePlata = ({camera, setSearchParams}) => {
  const [selectId, setSelectId] = useState(null);
  const iconMap =  {
    Proprietate: PiCashRegisterLight,
    Card: FaRegAddressCard
  }
  return (
    <div>

      <div>
        <button onClick={()=>setSearchParams({step: 2})} className='border border-button/30 px-3 py-1.5 rounded-lg mb-3 font-medium flex items-center space-x-3 hover:border-button/60 cursor-pointer transition-all duration-500 ease-in-out'>
          <FaArrowLeft className='text-button text-[15px]'/>
          <p>Inapoi</p>
        </button>
      </div>

      <p className='font-medium text-[18px]'>Metdoda de plata</p>
      <p className='text-[14px] text-gray-400'>Alege metoda de plata preferata pentru aceasta rezervare.</p>
      <ul className='space-y-3 mt-3'>

        {camera?.metodaPlata.map((par,i)=>
        { const Icon = iconMap[par.icon]
        return (
          <li key={par.id} onClick={()=>setSelectId(par.id)} className={`border px-3 py-1.5 rounded-lg border-button/30 hover:bg-button/10 transition-all duration-300 ease-in-out  cursor-pointer ${selectId===par.id? "bg-button/10": "bg-transparent"}`}>
            <div className='flex space-x-3'>
              <input onChange={()=>setSelectId(par.id)} type="checkbox" checked={selectId === par.id}/>
              <div className='text-[14px] flex items-center space-x-3'>
                {Icon && <Icon className="text-button" size={19}/>}
                <div>
                  <p className='font-medium'>{par.nume_plata}</p>
                  <p className='text-gray-400'>{par.text_plata}</p>
                </div>
              </div>
            </div>

            <div className={`border-t hover:cursor-auto border-t-button/30 mt-3 py-3 ${selectId===par.id && par.nume_plata === 'Plata cu cardul' ? "flex flex-col":'hidden'}`}>
                <p className='font-medium'>Detaliile cardului</p>
                <div className='text-gray-400 text-[14px] grid grid-cols-2 max-modf8:grid-cols-1 gap-3'>

                  <div className='space-y-1'>
                    <p>Numar card</p>
                    <div>
                      <input className='border outline-0 border-button/30 px-3 py-1.5 w-full rounded-sm' type="text" />
                    </div>
                  </div>

                  <div className='space-y-1'>
                    <p>Nume pe card</p>
                    <div>
                      <input className='border outline-0 border-button/30 px-3 py-1.5 w-full rounded-sm' type="text" />
                    </div>
                  </div>

                  <div className='space-y-1'>
                    <p>Data expirarii</p>
                    <div>
                      <input className='border border-button/30 outline-0 px-3 py-1.5 w-full rounded-sm' type="month" placeholder='/' />
                    </div>
                  </div>

                  <div className='space-y-1'>
                    <p>Cod de securitate (CVV)</p>
                    <div className='relative'>
                      <input className='border border-button/30 px-3 py-1.5 w-full outline-0 rounded-sm' type="text" />
                      <div className='absolute right-3 top-1/2 -translate-y-1/2'>
                        <div className='relative group'>
                          <CiCircleInfo className={` text-button cursor-pointer`} size={19}/>
                          <div className='absolute bg-button1 border border-button px-3 py-1.5 text-[10px] left-1/2 -translate-x-1/2 bottom-7 w-50 rounded-sm  hidden group-hover:flex z-100'>
                            <p><span className='text-white font-medium'>Codul de securitate (CVV)</span> este codul de 3 cifre de pe spatele cardului.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
            </div>
          </li>
        )})}

      </ul>
    </div>
  )
}

export default RezervarePlata
