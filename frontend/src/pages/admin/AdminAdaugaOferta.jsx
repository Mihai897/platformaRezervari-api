import React, { useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { RiArrowRightSLine } from 'react-icons/ri';
import { Link, useNavigate, useOutletContext, useParams } from 'react-router-dom';
import hotels from '../hotels/Hotel/hotels'
import { useEffect } from 'react';
const AdminAdaugaOferta = () => {
  const {visibleBara} = useOutletContext();

  const {slug} = useParams();
  
  const [hottels, setHottels] = useState([]);
  const [camereSlug, setCamereSlug] = useState([]);
  useEffect(()=>{
    fetch(`${import.meta.env.VITE_API_URL}/rooms/rosetti-hotel`)
    .then(res=>res.json())
    .then(data=>setCamereSlug(data))
    .catch(err=>console.error(err))
  },[slug])
  
  useEffect(()=>{
    fetch(`${import.meta.env.VITE_API_URL}/hotels`)
    .then(res=>res.json())
    .then(data=>setHottels(data))
    .catch(err=>console.error(err))
  },[])
  

  const navigate = useNavigate();
  const [visibleHotelList,setVisibleHotelList] = useState(false);
  const [visibleCameraList,setVisibleCameraList] = useState(false);
  const [visibleButonActivare,setVisibleButonActivare] = useState(false);
  const [visibleButonSite,setVisibleButonSite] = useState(false);

  return (
    <div>

      <div className='flex items-center space-x-3 text-gray-400'>
        <Link to={"/admin/admin-angajati"} className='hover:text-white text-gray-400 transition-all duration-300 ease-in-out'>Oferte</Link>
        <RiArrowRightSLine className='text-[18px] mt-0.5'/>
        <p className='text-button'>Adauga oferta</p>
      </div>
      <div>
        <p className='mt-3 text-[18px] font-medium'>Adauga oferta</p>
        <p className='text-gray-400'>Completeaza infomratiile pentru a crea o oferta noua.</p>
      </div>

      <div className='border border-button/30  py-3 mt-3 rounded-lg'>
        <p className='px-3'>Informatii generale</p>
        <div className={`grid grid-cols-2 px-3 gap-3 pb-3 border-b-button/30 mt-3 border-b ${visibleBara?"max-modf:grid-cols-1":" max-modf1:grid-cols-1"}`}>

          <div>
            <p className='text-gray-400'>Alege hotelul</p>
            <div className='mt-3 relative'>
              <button onClick={()=>setVisibleHotelList(!visibleHotelList)} className={`flex  space-x-3 items-center border border-button/30 px-3 py-3 w-full justify-between ${visibleHotelList?"rounded-t-sm bg-button/60":"bg-background rounded-sm"} hover:bg-button/60 transition-all duration-300 ease-in-out cursor-pointer`}>
                <p>Selecteaza hotelul</p>
                {visibleHotelList?<IoIosArrowUp />:<IoIosArrowDown />}
              </button>
              <ul className={`absolute transition-all duration-500 ease-in-out overflow-y-scroll scrollbar-thin overflow-hidden ${visibleHotelList?"max-h-40 opacity-100":"max-h-0 opacity-0"} bg-background z-30  w-full`}>
                {
                  hottels.map((hotel,iHotel)=>(
                    <li className={`border border-button/30 px-3 py-3 hover:bg-button/60 cursor-pointer transition-all duration-300 ease-in-out flex items-center space-x-3`} key={hotel.id}>
                      <div className='w-30 h-20 shrink-0'>
                        <img className='w-full h-full' src={`${import.meta.env.BASE_URL}${hotel.img}`} alt="" />
                      </div>
                      <div className='text-gray-400'>
                        <p>ID: {hotel.id}</p>
                        <p>{hotel.nume}</p>
                        <p>{hotel.locatie}</p>
                      </div>
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>

          <div>
            <p className='text-gray-400'>Alege camera unde vrei sa fie activa oferta</p>
            <div className='mt-3 relative'>
              <button onClick={()=>setVisibleCameraList(!visibleCameraList)} className={`flex  space-x-3 items-center border border-button/30 px-3 py-3 w-full justify-between ${visibleCameraList?"rounded-t-sm":"rounded-sm"} hover:bg-button/60 transition-all duration-300 ease-in-out cursor-pointer`}>
                <p>Selecteaza camera</p>
                {visibleCameraList?<IoIosArrowUp />:<IoIosArrowDown />}
              </button>
              <ul className={`absolute transition-all duration-500 ease-in-out overflow-y-scroll scrollbar-thin overflow-hidden ${visibleCameraList?"max-h-40 opacity-100":"max-h-0 opacity-0"} bg-background z-30  w-full`}>
                {
                  camereSlug.map((camera,iCamera)=>(
                    <li className={`border border-button/30 px-3 py-3 hover:bg-button/60 cursor-pointer transition-all duration-300 ease-in-out flex items-center space-x-3`} key={camera.id}>
                      <div className='w-30 h-20 shrink-0'>
                        <img className='w-full h-full' src={`${import.meta.env.BASE_URL}${camera.image}`} alt="" />
                      </div>
                      <div className='text-gray-400'>
                        <p>Cod: {camera.cod_camera}</p>
                        <p>{camera.title}</p>
                        
                      </div>
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>

          <div className=''>
            <p className='text-gray-400 '>Cod oferta <span className='text-red-400'>*</span></p>
            <input type="text" className='border border-button/30 mt-3 px-3 py-1.5 rounded-sm outline-0 w-full' maxLength={3} placeholder='Introduceti un cod de maxim 3 caractere' name="" id="" />
          </div>

          <div className=''>
            <p className='text-gray-400 '>Reducere <span className='text-red-400'>*</span></p>
            <div className='relative mt-3'>
              <input type="number" className='border border-button/30  pl-3 py-1.5 rounded-sm no-spinner outline-0  [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none w-full' maxLength={3} placeholder='Ex: 0.25' min={0} max={100} name="" id="" />
              <p className='absolute text-gray-400 right-3 top-1/2 -translate-y-1/2'>procent (%)</p>
            </div>
          </div>
          

          
          <div className=''>
            <p className='text-gray-400 '>Perioada de valabilitate <span className='text-red-400'>*</span></p>
            <div className={`grid max-modf8:grid-cols-1 grid-cols-2 gap-3 mt-3`}>
              <div>
                <p className='text-gray-400'>De la:</p>
                <input type="date" className='border mt-3 border-button/30  px-3 py-1.5 rounded-sm outline-0 [&::-webkit-calendar-picker-indicator]:invert  w-full' placeholder=''  name="" id="" />
              </div>
              <div>
                <p className='text-gray-400'>Pana la:</p>
                <input type="date" className='border mt-3 border-button/30 [&::-webkit-calendar-picker-indicator]:invert outline-0 px-3 py-1.5 rounded-sm w-full' name="" id="" />
              </div>
              
            </div>
          </div>

          <div>
            <p className='text-gray-400'>Setari suplimentare</p>
            <div className={`grid grid-cols-2 gap-3 mt-3 ${visibleBara?"max-modf2:grid-cols-1":"max-modf8:grid-cols-1"}`}>
              <div className='w-full flex items-center space-x-3 '>
                <div>
                  <button onClick={()=>setVisibleButonActivare(!visibleButonActivare)} className={`w-9 h-4.5 cursor-pointer rounded-full ${visibleButonActivare===false?"bg-gray-400":"bg-button"} shrink-0 transition-all duration-300 ease-in-out relative`}><div className={`absolute transition-all duration-300 ease-in-out ${visibleButonActivare===false?"translate-x-0": "translate-x-full"} shrink-0 bg-white w-[50%] h-full rounded-full top-1/2 -translate-y-1/2`}></div></button>
                </div>
                <div>
                  <p>Activare oferta</p>
                  <p className='text-gray-400 text-[12.5px]'>Oferta va fi activa imediat dupa creare</p>
                </div>
              </div>

              {/*<div className='w-full flex items-center space-x-3 '>
                <div>
                  <button onClick={()=>setVisibleButonSite(!visibleButonSite)} className={`w-9 h-4.5 cursor-pointer rounded-full ${visibleButonSite===false?"bg-gray-400":"bg-button"} shrink-0 transition-all duration-300 ease-in-out relative`}><div className={`absolute transition-all duration-300 ease-in-out shrink-0 ${visibleButonSite===false?"translate-x-0": "translate-x-full"} bg-white w-[50%] h-full rounded-full top-1/2 -translate-y-1/2`}></div></button>
                </div>
                <div>
                  <p>Afisare</p>
                  <p className='text-gray-400 text-[12.5px]'>Oferta va fi vizibila pe platforma.</p>
                </div>
              </div>*/}

              
            </div>
          </div>

          

        </div>




        <div className='flex mt-3 px-3 space-x-3 justify-end'>
          <button onClick={()=>{navigate("/admin/admin-oferte"); window.scrollTo(0,0)}} className='border border-button/30 px-3  py-1.5 rounded-sm hover:bg-button/60 transition-all duration-300 ease-in-out cursor-pointer'>Inchide</button>
          <button onClick={()=>{navigate("/admin/admin-oferte"); window.scrollTo(0,0)}} className='border border-button/30 px-3  py-1.5 rounded-sm hover:bg-button/60 transition-all bg-button duration-300 ease-in-out cursor-pointer'>Salveaza modificari</button>
        </div>

      </div>
      
      
    </div>
  )
}

export default AdminAdaugaOferta
