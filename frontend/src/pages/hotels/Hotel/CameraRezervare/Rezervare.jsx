import React, { useEffect, useState } from 'react'
import { Link, Outlet, useLocation, useNavigate, useOutletContext, useSearchParams } from 'react-router-dom'
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { FaStar } from 'react-icons/fa6';
import { FaArrowRightLong } from "react-icons/fa6";
import { Bs1CircleFill, Bs2CircleFill, Bs3CircleFill } from "react-icons/bs";
import { GoCheckCircleFill } from "react-icons/go";
import { LuCalendarDays } from "react-icons/lu";
import { IoArrowForward } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import RezervareDetaliiSejur from './RezervareDetaliiSejur';
import RezervareDetaliiOaspeti from './RezervareDetaliiOaspeti';
import RezervarePlata from './RezervarePlata';
import { IoClose } from "react-icons/io5";
import { FaRegCreditCard } from "react-icons/fa6";

import { IoMdInformationCircleOutline } from "react-icons/io";



const Rezervare = () => {
  const {camera} = useOutletContext();
  const [searchParams,setSearchParams] = useSearchParams();
  const [openMesaj, setOpenMesaj] = useState(false);
  const location =useLocation();
  useEffect(()=>{
    if(!searchParams.get("step") && !location.pathname.includes("rezervare-confirmata")) {
      setSearchParams({step:1}, {replace:true});
    }
  },[searchParams,setSearchParams, location.pathname])
  const step = Number(searchParams.get("step"))||1;
  const isDetSejur = step === 1;
  const isDetOaspeti = step === 2;
  const isDetPlata = step === 3;
  const navigate = useNavigate();
  
  const showDiv = location.pathname === `/hotels/${camera?.slug}/camere/${camera?.slugs}/rezervare/rezervare-confirmata`
  return (
    <div className='max-w-screen-2xl mx-auto px-15 max-modf:px-10 max-modf1:px-8  max-modf8:px-3'>
      
      <div className='flex items-center space-x-2 max-modf1:space-x-1 overflow-x-scroll scrollbar-hide text-[14px] text-gray-400'>
        <Link className='shrink-0' to="/hotels">Hoteluri</Link>
        <MdKeyboardArrowRight className='shrink-0'/>
        <Link className='shrink-0' to={`/hotels/${camera?.slug}`}>{camera?.nume}</Link>
        <MdKeyboardArrowRight className='shrink-0'/>
        <Link className='shrink-0' to={`/hotels/${camera?.slug}/camere`}>Camere</Link>
        <MdKeyboardArrowRight className='shrink-0'/>
        <Link className='shrink-0' to={`/hotels/${camera?.slug}/camere/${camera?.slugs}`}>{camera?.title}</Link>
        <MdKeyboardArrowRight className='shrink-0'/>
        <p className={`shrink-0 ${showDiv? "text-gray-400": "text-button"}`}>Rezervare</p>
        {
          showDiv && (
            <div className='flex items-center space-x-2 max-modf1:space-x-1'>
              <MdKeyboardArrowRight className='shrink-0'/>
              <p className='shrink-0 text-button'>Rezervare Confirmata</p>
            </div>
          )
        }
      </div>
      
      {(!showDiv &&<div className='flex space-x-4 mt-4'>
        <div className='modf2:flex max-modf2:space-y-3 flex-2 items-center modf2:justify-between'>
          <div>
            <p className='text-[20px] font-medium'>Rezerva acum</p>
            <p className='text-gray-400 text-[14px]'>Finalizeaza rezervarea in doar cativa pasi simpli.</p>
          </div>
          <div className='flex space-x-3 items-center  '>
            <div className='text-[26px] text-lime-600'>
              <MdOutlineVerifiedUser/>
            </div>
            <div className='text-[14px]  modf:pr-3'>
              <p>Rezervare 100% sigura.</p>
              <p className='text-gray-400'>Datele tale sunt protejate</p>
            </div>
          </div>
        </div>
        <div className='modf:flex-1'></div>
      </div>)}

      <div className='flex mt-4 max-modf:flex-col modf:space-x-4 items-start'>


        

        
          <div className='modf:flex-2    max-modf:w-full'>

            <Outlet context={{camera}}/>
          
          {(!showDiv && <div className='border px-3 py-3 border-button/30 rounded-lg flex justify-between space-x-3 max-modf2:flex-wrap max-modf2:space-y-1.5 modf:grid modf:grid-cols-3 modf:gap-3 modf4:flex modf4:justify-between'>
             <div className='flex items-center space-x-2  text-[12px]'>
                <div className=' '>
                  {
                    isDetOaspeti || isDetPlata? <GoCheckCircleFill className='text-lime-500 rounded-full text-[25px]'/> : <Bs1CircleFill className='text-button bg-white rounded-full text-[22px]'/>
                  }        
                </div>
              <div>
                <p className='font-medium'>Detalii sejur</p>
                <p className='text-gray-400'>Soliciteaza datele si verifica optiunile</p>
              </div>
             </div>
             
             <div className='flex items-center space-x-2  text-[12px]'>
              <div className=' '>
                  {
                    isDetPlata? <GoCheckCircleFill className='text-lime-500 rounded-full text-[25px]'/> : <Bs2CircleFill className={`${isDetOaspeti?"text-button":"text-background"} bg-white rounded-full text-[22px]`}/>
                  }        
                </div>
              <div>
                <p className='font-medium'>Detalii oaspeti</p>
                <p className='text-gray-400'>Completeaza informatiile</p>
              </div>
             </div>
             <div className='flex items-center space-x-2  text-[12px]'>
              <div className=' '><Bs3CircleFill className={`${isDetPlata?"text-button":"text-background"} bg-white rounded-full text-[22px]`}/></div>
              <div>
                <p className='font-medium'>Plata</p>
                <p className='text-gray-400'>Finalizeaza rezervarea</p>
              </div>
             </div>

          </div>)}
          
          {!showDiv &&(<div className='border px-3 py-3 border-button/30 rounded-lg  mt-3'>
            {
              isDetSejur && (
              <RezervareDetaliiSejur camera={camera} />)
            }
            {
              isDetOaspeti && (
              <RezervareDetaliiOaspeti camera={camera}  setSearchParams={setSearchParams}/>)
            }
            {
              isDetPlata && (
              <RezervarePlata camera={camera} setSearchParams={setSearchParams}/>)
            }
            


           
          </div>)}


          </div>
        






        <div className='modf:flex-1 max-modf:w-full border px-3 py-3 max-modf:mt-3 border-button/30 rounded-lg text-[14px]'>
          <p className='font-medium'>Sumar rezervare</p>

          <div className='flex space-x-3 items-center mt-3 border-b pb-3 border-b-button/30'>
            <div className='rounded-sm w-33 h-25 shrink-0 max-modf:w-30'>
              <img className='rounded-sm w-full h-full shrink-0 object-center' src={`${import.meta.env.BASE_URL}${camera?.image}`} alt="" />
            </div>
            <div>
              <p>{camera?.title}</p>
              <p className='text-gray-400'>{camera?.nume}</p>
              <div className='flex space-x-1'>
                {[1,2,3,4,5].map(star=>(
                  <FaStar className={star<=Math.round(camera?.recenzie_camera)? "text-yellow-400": "text-gray-400"}/>
                ))}
              </div>
              <p className='text-gray-400'>{camera?.locatie}</p>
              
            </div>
          </div>

          <div className=' py-3 border-b border-b-button/30 max-modf:grid max-modf:grid-cols-2 max-modf2:grid-cols-1 max-modf:gap-x-8'>
            <div className='flex justify-between items-center text-gray-400'>
              <div>
                <p>Check-in</p>
                <p className='text-white font-medium'>19 iun. 2026</p>
              </div>
              <div>
                <p>de la 14:00</p>
              </div>
            </div>
            <div className='flex justify-between items-center mt-3 text-gray-400'>
              <div>
                <p>Check-out</p>
                <p className='text-white font-medium'>19 iun. 2026</p>
              </div>
              <div>
                <p>pana la 14:00</p>
              </div>
            </div>
            <div className='text-gray-400 mt-3'>
              <p>Oaspeti:</p>
              <p className='text-white'>3 adulti</p>
              
            </div>
            <div>
              <p className='mt-3 text-gray-400'>Durata sejur:</p>
              <p className=''>3 nopti</p>
            </div>
          </div>

          <div className='py-3 border-b border-b-button/30'>
            <div className='text-gray-400 flex justify-between'>
              <p> RON x 3 nopti</p>
              <p> RON</p>
            </div>
            <div className='text-gray-400 flex justify-between'>
              <p>Mic dejun inclus</p>
              <p>0 RON</p>
            </div>
            <div className='text-gray-400 flex justify-between'>
              <p>Taxe si servicii</p>
              <p>0 RON</p>
            </div>
          </div>

          <div className='py-3 flex justify-between'>
            <p>Total (TVA inclus)</p>
            <p> RON</p>
          </div>

          {!showDiv &&(<div className='w-full'>
            {isDetSejur &&(<button onClick={()=>{ setSearchParams({step: 2}); 
              window.scrollTo(0,0)
            }} className={` relative w-full  bg-button py-2 rounded-lg font-medium cursor-pointer`}><p>Continua</p> <div className=' absolute right-0 top-0 bottom-0 bg-buttoncol1/30 h-full flex items-center justify-center  rounded-r-lg px-3'><FaArrowRightLong className='text-[18px]'/></div></button>)}


            {isDetOaspeti&&(<button onClick={()=>{ setSearchParams({step: 3}); 
              window.scrollTo(0,0)
            }} className={` relative w-full  bg-button py-2 rounded-lg font-medium cursor-pointer`}><p>Continua la Plata</p> <div className=' absolute right-0 top-0 bottom-0 bg-button1/30 h-full flex items-center justify-center  rounded-r-lg px-3'><FaArrowRightLong className='text-[18px]'/></div></button>)}

            {isDetPlata&&(<button onClick={()=>{ 
              
              setOpenMesaj(true),
              document.body.classList.add("overflow-hidden")
            }} className={` relative w-full  bg-button py-2 rounded-lg font-medium cursor-pointer `}><p>Plateste</p> <div className=' absolute right-0 top-0 bottom-0 bg-button1/30 h-full flex items-center justify-center  rounded-r-lg px-3'><FaArrowRightLong className='text-[18px]'/></div></button>)}
            
          </div>)}

        </div>

      </div>

     {
      openMesaj && ( 

        <div className='fixed bg-gray-400/15 z-1000  flex items-center justify-center  inset-0  '>
          <div className='flex justify-center px-3 w-full'>
            <div className='border border-button/30 px-4 py-4 flex justify-center relative w-100 bg-button1 rounded-lg max-h-[95vh] overflow-hidden scrollbar-thin overflow-y-auto'>
              <div className='absolute right-3 cursor-pointer'>
                <IoClose className='text-[19px]' onClick={()=>{
                  setOpenMesaj(false);
                  document.body.classList.remove("overflow-hidden")

                }}/>
              </div>

              <div className='mt-1 flex flex-col items-center text-center'>
                <div className='px-3 py-3 bg-button/30 rounded-full border border-button'>
                  <FaRegCreditCard className='text-button text-[30px]'/>
                </div>
                <div className='mt-3 flex flex-col items-center'>
                  <p className='font-medium text-[19px]'>Asteptam confirmarea platii</p>
                  <p className='text-gray-400 text-[14px] mt-1'>Te rugam sa finalizezi plata in aplicatia bancii tale pentru a confirma rezervarea.</p>

                  <p className='mt-1 text-[14px] text-gray-400'>Timp ramas pentru confirmarea platii</p>

                  <div className='flex justify-center space-x-4'>
                    <div>
                      <p className='text-button text-[35px] font-medium'>09</p>
                      <p className='text-gray-400 -mt-1'>minute</p>
                    </div>
                    <div>
                      <p className='text-button text-[35px] font-medium'>:</p>
                    </div>
                    <div>
                      <p className='text-button text-[35px] font-medium'>47</p>
                      <p className='text-gray-400 -mt-1'>secunde</p>
                    </div>
                  </div>

                  <div className='flex  w-[90%] mt-3 bg-gray-900 border border-button rounded-lg px-3 space-x-2 py-1.5'>
                    <IoMdInformationCircleOutline className=' shrink-0  text-button' size={20}/>
                    <p  className='text-gray-400 text-[12.5px] text-start'>Daca plata nu este confirmata in timpul ramas, rezervarea va fi anulata autmoat, iar suma nu va fi retinuta.</p>
                  </div>
                  <div className='text-[14px] mt-3 w-[70%] space-y-1'>
                    <p>Ai finalizat plata?</p>
                    <p className='text-gray-400'>Dupa ce ai confirmat plata in aplicatia bancii, apasa pe butonul de mai jos.</p>
                    <button onClick={()=>{
                      setOpenMesaj(false);
                      navigate({
                        pathname: "rezervare-confirmata",
                        search: ""
                      });
                      document.body.classList.remove("overflow-hidden");
                      
                    }} className='w-full bg-button mt-3 py-1.5 rounded-lg cursor-pointer'>Am confirmat plata</button>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>

      )
     }

    </div>
  )
}

export default Rezervare
