import React, { useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import client from './client'
import hotels from '../hotels/Hotel/hotels'
import { RiResetRightFill } from "react-icons/ri";
import { FaStar } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';

const RezervarileMele = () => {

  const [rezervarileClient,setRezerervarileClient] = useState([]);

  useEffect(()=>{
    fetch(`${import.meta.env.VITE_API_URL}/users/rezervari/1`)
    .then(res=>res.json())
    .then(data=>setRezerervarileClient(data))
    .catch(err=>console.error(err))
  },[]);


  const [visibleSort,setVisibleSort] = useState(false);
  const [visibleFiltreazaStatus,setVisibleFiltreazaStatus] = useState(false);
  const nrTotatalRezervari =  rezervarileClient?.length
  const nrTotalConfirmate = rezervarileClient?.filter(rezervare=>rezervare.status_rezervare==="Confirmata").length
  const nrTotalDesfasurare = rezervarileClient?.filter(rezervare=>rezervare.status_rezervare==="In desfasurare").length
  const nrTotalFinalizate = rezervarileClient?.filter(rezervare=>rezervare.status_rezervare==="Finalizata").length
  const nrTotalAnulate = rezervarileClient?.filter(rezervare=>rezervare.status_rezervare==="Anulata").length
  const statusFiltru = [
    {nume:"Toate",nr:nrTotatalRezervari},
    {nume:"Confirmata",nr:nrTotalConfirmate},
    {nume:"In desfasurare",nr:nrTotalDesfasurare},
    {nume:"Finalizata",nr:nrTotalFinalizate},
    {nume:"Anulata",nr:nrTotalAnulate},
  ];
  const [checkHotel,setCheckHotel] = useState(null);
  const [checkPerioada,setCheckPerioada] = useState(null);
  const [checkStatus,setCheckStatus] = useState(null);

  const [visibleFiltruPerioada,setVisibleFiltruPerioada] = useState(false);
  const [visibleFiltruHotel,setVisibleFiltruHotel] = useState(false);
  const [visibleMoreRezervari,setVisibleMoreRzervari] = useState(2);

  const navigate = useNavigate();

  const {codRezervare} =useParams();
  
  return (
    <div className='bg-button1/55 max-w-screen-2xl mx-auto px-15 max-modf:px-10 max-modf8:px-3 max-modf1:px-8  py-10'>

      
      {!codRezervare &&<div>
        <p className='text-[22px] font-medium'>Rezervarile mele</p>
        <p className='text-gray-400'>Urmareste si gestioneaza toate rezervarile tale intr-un singur loc.</p>
        <div className='flex mt-2 items-center space-x-3 justify-end'>
          <p className='text-gray-400'>Sorteaza dupa:</p>
          <div className='relative'>
            <button onClick={()=>setVisibleSort(!visibleSort)} className={`flex items-center space-x-3 border px-3 hover:bg-button/60 ${visibleSort?"rounded-t-sm bg-button/60":"rounded-sm"} transition-all duration-300 ease-in-out py-1.5  cursor-pointer ho border-button/30`}>
              <p>Cele mai recente</p>
              {visibleSort?<IoIosArrowUp/>:<IoIosArrowDown/>}
            </button>
            <ul className={`absolute z-500 overflow-hidden transition-all duration-500 ${visibleSort?"max-h-50 opacity-100":"max-h-0 opacity-0"} ease-in-out bg-button1 w-full`}>
              {
                ["Cele mai recente", "Cele mai vechi"].map((sort,isort)=>{
                  return (
                    <li className='border-button/30 border px-3 py-1.5 hover:bg-button/60 cursor-pointer transition-all duration-300 ease-in-out'>
                      {sort}
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>


        <div className='flex modf6:space-x-3 max-modf6:flex-col max-modf7:space-y-3 mt-3 items-start'>
          
          <div className='border max-modf6:w-full border-button/20 px-3 py-3 rounded-lg w-80 shrink-0 shadow-lg bg-button1'>
            <p className='text-[18px]'>Filtreaza rezervaril</p>

            <div className=''>
              <button onClick={()=>setVisibleFiltreazaStatus(!visibleFiltreazaStatus)} className={`flex space-x-3 border border-button/30 items-center justify-between w-full hover:bg-button/60 transition-all duration-300 ease-in-out px-3 mt-1.5 cursor-pointer py-1.5 ${visibleFiltreazaStatus?"rounded-t-sm bg-button/60":"rounded-sm"}`}>
                <p>Status</p> 
                {visibleFiltreazaStatus===true?<IoIosArrowUp />:<IoIosArrowDown />}
              </button>
              <ul className={`space-y-1.5 mt-1.5 overflow-hidden transition-all duration-500 ease-in-out ${visibleFiltreazaStatus ===true?"max-h-100 opacity-100":"max-h-0 opacity-0"}`}>
                {
                  statusFiltru.map((status,iStatus)=>(
                    <li key={iStatus} className='flex text-gray-400 items-center space-x-1.5'>
                      <input onChange={()=>setCheckStatus(iStatus)} checked={checkStatus ===iStatus} className='mt-0.5' type="checkbox" name="" id="" />
                      <p>{status.nume} ({status.nr})</p>
                    </li>
                  ))
                }
              </ul>
            </div>

            <div className='mt-1.5'>
              <p>Perioada</p>
              <div className=''>
                <button onClick={()=>setVisibleFiltruPerioada(!visibleFiltruPerioada)} className={`mt-1.5 border border-button/30 w-full px-3 py-1.5 flex space-x-3 justify-between items-center cursor-pointer hover:bg-button/60 transition-all duration-300 ease-in-out ${visibleFiltruPerioada?"rounded-t-sm bg-button/60":"rounded-sm"}`}>
                  <p>Selecteaza perioada</p>
                  {visibleFiltruPerioada ? <IoIosArrowUp/>:<IoIosArrowDown/>}
                </button>
                <ul className={`space-y-1.5 mt-1.5 overflow-hidden transition-all duration-500 ease-in-out ${visibleFiltruPerioada?"max-h-100 opacity-100":"max-h-0 opacity-0"}`}>
                  {
                    ["Ultima luna","Ultimele 3 luni", "Ultimele 6 luni","Ultimul an","Toate"].map((perioada,iPerioada)=>(
                      <li key={iPerioada} className='flex space-x-1.5'>
                        <input onChange={()=>setCheckPerioada(iPerioada)} checked={checkPerioada ===iPerioada} type="checkbox" name="" id="" />
                        <p>{perioada}</p>
                      </li>
                    ))
                  }
                </ul>
              </div>
            </div>


            <div className='mt-1.5'>
              <p>Hotel</p>
              <div className=''>
                <button onClick={()=>setVisibleFiltruHotel(!visibleFiltruHotel)} className={`mt-1.5 border border-button/30 w-full px-3 py-1.5 flex space-x-3 justify-between items-center cursor-pointer hover:bg-button/60 transition-all duration-300 ease-in-out ${visibleFiltruHotel?"rounded-t-sm bg-button/60":"rounded-sm"}`}>
                  <p>Toate hotelurile</p>
                  {visibleFiltruHotel ? <IoIosArrowUp/>:<IoIosArrowDown/>}
                </button>
                <ul className={`space-y-1.5 mt-1.5 overflow-hidden transition-all duration-500 ease-in-out ${visibleFiltruHotel?"max-h-100 opacity-100":"max-h-0 opacity-0"}`}>
                  <li key={"toate"} className='flex space-x-1.5'>
                    <input onChange={()=>setCheckHotel("toate")} checked={checkHotel ==="toate"} type="checkbox" name="" id="" />
                    <p>Toate hotelurile</p>
                  </li>
                  {
                    hotels.map((hotel,iHotel)=>(
                      <li key={iHotel} className='flex space-x-1.5'>
                        <input onChange={()=>setCheckHotel(iHotel)} checked={checkHotel ===iHotel} type="checkbox" name="" id="" />
                        <p>{hotel.nume}</p>
                      </li>
                    ))
                  }
                </ul>
              </div>
            </div>


            <div className='mt-3'>
              <button onClick={()=>{setCheckHotel(null); setCheckPerioada(null);setCheckStatus(null)}} className='px-3 py-1.5 rounded-lg border border-button/30 hover:bg-button/30 transition-all duration-300 ease-in-out flex items-center justify-center space-x-3 cursor-pointer w-full'>
                <RiResetRightFill className='text-button'/>
                <p className='text-button'>Reseteaza filtrele</p>
                
              </button>
            </div>
          </div>


          <div className='border border-button/20 px-3 min-w-0 py-3 rounded-lg bg-button1 shadow-lg w-full'>
            <ul className='overflow-x-auto  overflow-hidden scrollbar-thin space-y-3 min-w-0 pb-4'>
              {
                rezervarileClient?.slice(0,visibleMoreRezervari).map((rezerv,iRezerv)=>{
                  const checkIN = new Date(rezerv.check_in)
                  .toISOString()
                  .split("T")[0];
                  const checkOut = new Date(rezerv.check_out)
                  .toISOString()
                  .split("T")[0];
                  
                  const dataRezervare = new Date(rezerv.data_rezervare)
                  .toISOString()
                  .split("T")[0];
                  
                  return(
                  <li key={rezerv?.id} className='border-y border-y-button/80 px-3 py-3 flex space-x-3 text-[14px] items-start min-w-max text-gray-400'>
                    

                    <div className='shrink-0 modf9:flex-2 max-modf9:w-79 transition-[width] duration-300 ease-in-out'>
                      <div className='flex space-x-2'>
                        <div className='w-25 h-20 rounded-lg shrink-0'>
                          <img src={`${import.meta.env.BASE_URL}${rezerv.image}`} className='w-full h-full shrink-0 rounded-lg object-center' alt="" />
                        </div>
                        <div>
                          <p className='text-white'>{rezerv.nume}, <span className='text-gray-400'>{rezerv.title}</span></p>
                          <p>{rezerv.locatie}</p>
                          <div className='flex items-center space-x-1.5'>
                            <ul className='flex space-x-1'>
                              {
                                [1,2,3,4,5].map((star,iStar)=>
                                <li key={iStar}>
                                  <FaStar className={`${star<=Math.round(rezerv.rating_mediu)?"text-yellow-400":"text-gray-400"}`}/>
                                </li>)
                              }
                            </ul>
                            <p className='text-white bg-button/60 rounded-sm px-1.5'>{rezerv.rating_mediu}</p>
                          </div>
                        </div>
                      </div>

                      <p className='mt-3'>Cod rezervare: {rezerv.cod_rezervare}, rezervat pe {dataRezervare}</p>
                    </div>


                    <div className='shrink-0  modf9:flex-1  max-modf9:w-35 transition-[width] duration-300 ease-in-out'>                
                      <p>Check-in</p>
                      <p className='text-white mt-2'>{checkIN }</p>
                      <p>{rezerv.oraCheckIn}</p>
                    </div>


                    <div className='shrink-0  modf9:flex-1 max-modf9:w-35 transition-[width] duration-300 ease-in-out'>
                    
                      <p>Check-out</p>
                      <p className='text-white mt-2'>{checkOut }</p>
                      <p>{rezerv.oraCheckOut}</p>
                    </div>


                    <div className='shrink-0  modf9:flex-1 max-modf9:w-21 transition-[width] duration-300 ease-in-out'>
                      
                      <p>Oaspeti</p>
                      <p className='text-white mt-2'>{rezerv.nr_adulti } adulti</p>
                      <p>{rezerv.nr_copii} copii</p>
                    </div>


                    <div className='shrink-0 modf9:flex-1 flex flex-col items-start  max-modf9:w-26 transition-[width] duration-300 ease-in-out'>
                      <p className={`px-1.5 py-0.5 rounded-sm ${
                        rezerv.status_rezervare==="Confirmata"?"text-button bg-button/30":
                        rezerv.status_rezervare==="Anulata"?"text-red-600 bg-red-600/30":
                        rezerv.status_rezervare==="Finalizata"?"bg-green-400/30 text-green-400":"text-blue-400 bg-blue-400/30"}`}>
                          {rezerv.status_rezervare}</p>
                      <p className='mt-2.5'>Total platit</p>
                      <p className='text-white text-[16px]'>{Math.round((rezerv.total_platit_final)*100)/100} RON</p>
                    </div>


                    <div className='shrink-0  modf9:flex-1   space-x-3  my-auto max-modf9:w-30 transition-[width] duration-300 ease-in-out'>
                      <button onClick={()=>navigate(`/rezervarile-mele/${rezerv.cod_rezervare}`)} className='border border-button/30 px-1.5 py-1 rounded-lg cursor-pointer text-white hover:bg-button/30 transition-all duration-300 ease-in-out w-full'>Vezi detalii</button>
                      
                    </div>
                    
                  </li>
                )})
              }
            </ul>

            <div className='space-x-5'>
              {
                visibleMoreRezervari< nrTotatalRezervari && <button onClick={()=>{setVisibleMoreRzervari(prev=>prev+2)}} className='text-button hover:text-button/80 cursor-pointer transition-all duration-300 ease-in-out'>Vezi mai multe rezervari</button>
              }
              {
                visibleMoreRezervari>2 && <button onClick={()=>{setVisibleMoreRzervari(prev=>prev-2)}} className='text-button hover:text-button/80 cursor-pointer transition-all duration-300 ease-in-out'>Vezi mai putine rezervari</button>
              }
            </div>
          </div>



        </div>





      </div>}

      <Outlet/>
    </div>
  )
}

export default RezervarileMele
