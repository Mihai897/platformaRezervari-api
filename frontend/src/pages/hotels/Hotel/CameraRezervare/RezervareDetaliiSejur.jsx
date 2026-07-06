import React, { useState } from 'react'
import { IoArrowForward } from 'react-icons/io5'
import { LuCalendarDays } from 'react-icons/lu'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { CiSquareMinus } from "react-icons/ci";
import { CiSquarePlus } from "react-icons/ci";
import { IoManSharp } from "react-icons/io5";
import { FaChildren } from "react-icons/fa6";
import { BiSolidBabyCarriage } from "react-icons/bi";

const RezervareDetaliiSejur = ({camera}) => {
  const [nrAdulti, setNrAdulti] = useState(0);
  const [nrCopii,setNrCopii] = useState(0);
  const [nrSugari,setNrSugari] = useState(0);
  const addAdult = () =>setNrAdulti(nrAdulti+1);
  const addCopil = ()=>setNrCopii(nrCopii+1);
  const addSugar = ()=>setNrSugari(nrSugari+1);

  const [selectedId, setSelectedId] = useState(null);

  const deleteAdulti = ()=>setNrAdulti(prev => Math.max(prev - 1, 0));
  const deleteCopil = ()=>setNrCopii(prev=>Math.max(prev-1,0));
  const deleteSugar = ()=>setNrSugari(prev=>Math.max(prev-1,0));

  return (
    <div>
    
      <p className='font-medium text-[18px]'>Detalii sejur</p>
       
      <div className='mt-3 flex modf3:space-x-10 modf4:space-x-4 items-stretch modf:space-x-1 max-modf:space-x-8 max-modf1:space-x-4 max-modf8:flex-wrap max-modf8:space-y-3 max-modf2:space-x-1'>

        <div className='text-gray-400 border max-modf2:px-2 max-modf2:py-1 px-5 py-3 rounded-lg border-button/30 text-[14px]'>
          <p>Check-in</p>
          <div className='flex items-center space-x-2 cursor-pointer'>
            <div className='border px-1 py-1 border-button/30 rounded-lg'>
              <LuCalendarDays  size={20}/>
            </div>
            <div>
              <p className='text-white max-modf2:text-[10px]'>20 iun. 2024</p>
              <p className='max-modf2:text-[10px]'>de la 14:00</p>
            </div>
          </div>
        </div>

        <div className='flex items-center'>
          <IoArrowForward className='text-button '/>
        </div>

        <div className='text-gray-400 border max-modf2:px-2 max-modf2:py-1 px-5 py-3 rounded-lg border-button/30 text-[14px]'>
          <p>Check-out</p>
          <div className='flex items-center space-x-2 cursor-pointer'>
            <div className='border px-1 py-1 border-button/30 rounded-lg'>
              <LuCalendarDays size={20}/>
            </div>
            <div>
              <p className='text-white max-modf2:text-[10px]'>22 iun. 2024</p>
              <p className='max-modf2:text-[10px]'>de la 19:00</p>
            </div>
          </div>
        </div>

        <div className='flex items-center'>
          <IoArrowForward className='text-button'/>
        </div>


        <div className='text-gray-400 border max-modf2:px-2 max-modf2:py-1 px-5 py-4  rounded-lg border-button/30 text-[14px] flex flex-col justify-center'>
          
          <div className='flex items-center  space-x-2.5 cursor-pointer '>
            <p className='max-modf2:text-[10px]'>Durata sejur</p>
            <MdKeyboardArrowDown className='text-[20px]'/>
          </div>
          <p className='max-modf2:text-[10px]'>2 nopti</p>
        </div>

        

      </div>

      <div className='mt-3'>
        <p className='font-medium text-[18px]'>Oaspeti</p>

        <div className='flex mt-2 modf2:justify-between max-modf2:flex-wrap max-modf2:space-x-5 max-modf2:space-y-2'>
          
          <div className='text-gray-400'>
            <p className='text-[15px]'>Adulti</p>

            <div className='flex items-center space-x-1.5'>
              <div>
                <IoManSharp className='text-button' size={20}/>
              </div>
              <div className='flex space-x-5 border border-button/30 mt-1 px-2 py-1 rounded-lg items-center'>
                <button onClick={deleteAdulti}>
                  <CiSquareMinus className='text-button/80 mt-0.5 cursor-pointer' size={24}/>
                </button>

                <div>
                  <p>{nrAdulti}</p>
                </div>
                <button onClick={addAdult}> 
                  <CiSquarePlus className='mt-0.5 cursor-pointer text-button/80' size={24}/>
                </button>
              </div>
            </div> 
          </div>


          <div className='text-gray-400'>
            <p className='text-[15px]'>Copii (2-18 ani)</p>

            <div className='flex items-center space-x-1.5'>
              <div>
                <FaChildren className='text-button' size={20}/>
              </div>
              <div className='flex space-x-5 border border-button/30 mt-1 px-2 py-1 rounded-lg items-center'>
                <button onClick={deleteCopil}>
                  <CiSquareMinus className='text-button/80 mt-0.5 cursor-pointer' size={24}/>
                </button>

                <div>
                  <p>{nrCopii}</p>
                </div>
                <button onClick={addCopil}>
                  <CiSquarePlus className='mt-0.5 cursor-pointer text-button/80' size={24}/>
                </button>
              </div>
            </div> 
          </div>


          <div className='text-gray-400'>
            <p className='text-[15px]'>Sugari (0-2 ani)</p>

            <div className='flex items-center space-x-1.5'>
              <div>
                <BiSolidBabyCarriage className='text-button' size={20}/>
              </div>
              <div className='flex space-x-5 border border-button/30 mt-1 px-2 py-1 rounded-lg items-center'>
                <button onClick={deleteSugar}>
                  <CiSquareMinus className='text-button/80 mt-0.5 cursor-pointer' size={24}/>
                </button>

                <div>
                  <p>{nrSugari}</p>
                </div>
                <button onClick={addSugar}>
                  <CiSquarePlus className='mt-0.5 cursor-pointer text-button/80' size={24}/>
                </button>
              </div>
            </div> 
          </div>




        </div>
      </div>


      <div className='mt-4'>
        <div className='flex modf8:items-center max-modf8:flex-col max-modf8:space-y-3 modf8:justify-between'>
          <p className='font-medium'>Tarife disponibile</p>
          <div className='text-[12px] px-2 py-1 text-lime-600  bg-lime-600/20 rounded-lg'>
            <p>Anulare gratuita pana la 24 mai 2026</p>
          </div>
        </div>


        <ul className='mt-4 space-y-3'>
          {camera?.tarife.map((par,i)=>(

            <li key={par.id} onClick={()=>setSelectedId(par.id)} className={`flex max-modf8:flex-col max-modf8:space-y-3 modf8:justify-between border px-2 py-2 rounded-lg cursor-pointer border-button/30 ${selectedId ===par.id ? "bg-button/10 ": "bg-transparent "}`}>
            <div className=''>
              <div className='flex space-x-3'>
                <input onChange={()=>setSelectedId(par.id)} type='checkbox' checked={selectedId===par.id} />
                <p className='font-medium'>{par.titlu_tarif}</p>
              </div>
              <ul className='list-disc ml-10 marker:text-button text-[15px] text-gray-400'>
                {
                  par?.beneficii.map((par1,i1)=>(
                    <li key={par1.id}>{par1.beneficiu}</li>
                  ))
                }
              </ul>
            </div>
            <div className='flex items-center'>
              <p className='text-gray-400'><span className='text-[24px] text-white font-medium'>{par.pret_tarif}</span> RON / <span className='text-[16px]'>noapte</span></p>
            </div>
          </li>
          ))}
        </ul>
      </div>



    </div>
  )
}

export default RezervareDetaliiSejur
