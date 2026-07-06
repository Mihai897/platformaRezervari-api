import React, { useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import client from './client'
import { IoIosArrowBack } from 'react-icons/io';
import { IoClose, IoLocationOutline } from "react-icons/io5";
import { FaStar } from 'react-icons/fa';
import { BiCalendar } from 'react-icons/bi';
import { useEffect } from 'react';

const DetaliiRezervariPage = () => {
  const {codRezervare} = useParams();
  const navigate = useNavigate();


  const [rezervare,setRezervare] = useState(null);
  useEffect(()=>{
    fetch(`${import.meta.env.VITE_API_URL}/users/rezervari/1/${codRezervare}`)
    .then(res=>res.json())
    .then(data=>setRezervare(data))
    .catch(err=>console.error(err))
  },[codRezervare])

  const location = useLocation();
  

  const dataRezervare = rezervare?.data_rezervare?new Date(rezervare.data_rezervare).toISOString().split("T")[0]:""
  const checkIn = rezervare?.check_in? new Date(rezervare.check_in).toISOString().split("T")[0]:0
  const checkOut = rezervare?.check_out? new Date(rezervare.check_out).toISOString().split("T")[0]:0

  const showDet = location.pathname ===`/rezervarile-mele/${codRezervare}`

  const [visibleAnuleaza,setVisibleAnuleaza] = useState(false);
  return (
    <div>
      {
        showDet && (
          <div>

            {
              visibleAnuleaza && (
                <div className='fixed inset-0 bg-gray-400/15 flex justify-center items-center z-600'>
                  <div className=' justify-center flex w-full  px-3'>
                    <div className='border border-button max-h-[95vh] overflow-hidden overflow-y-auto bg-button1 px-3 py-3 w-120 scrollbar-thin rounded-lg'>
                      
                      <div className='flex justify-end'>
                        <IoClose className='cursor-pointer' onClick={()=>{document.body.classList.remove("overflow-hidden"); setVisibleAnuleaza(false)}}/>
                      </div>
                      
                      <div className='flex justify-center mt-3'>
                        <div className='px-2 py-2 bg-red-600 rounded-full'>
                          <IoClose size={22}/>
                        </div>
                      </div>

                      <div className='text-center mt-3'>
                        <p className='text-[19px] font-medium'>Anulezi aceasta rezervare?</p>
                        <p className='text-gray-400 mt-1'>Acesta actiune este ireversibila.</p>
                        <p className='text-gray-400'>Te rugam sa confirmi ca doresti sa anulezi rezervarea.</p>
                      </div>

                      <div className='border border-button/30 px-3 py-3 mt-3 rounded-sm flex space-x-3'>
                        <div className='w-25 h-20 shrink-0'>
                          <img className='w-full rounded-lg h-full object-center shrink-0' src={`${import.meta.env.BASE_URL}${rezervare?.image}`} alt="" />
                        </div>
                        <div>
                          <p>{rezervare?.nume_hotel}, <span className='text-gray-400'>{rezervare?.nume_camera}</span></p>
                          <p className='text-gray-400'>{checkIn} - {checkOut}</p>
                          <p className='text-gray-400'>{rezervare?.nr_adulti} adulti, {rezervare?.nr_copii} copii</p>
                        </div>
                      </div>


                      <div className='grid grid-cols-2 gap-3 mt-3 max-modf8:grid-cols-1'>
                        <button onClick={()=>{setVisibleAnuleaza(false); document.body.classList.remove("overflow-hidden")}} className='border px-3 py-1.5 rounded-sm border-button/30 cursor-pointer hover:bg-button/60 transition-all duration-300 ease-in-out'>Pastreaza rezervarea</button>
                        <button onClick={()=>{setVisibleAnuleaza(false); document.body.classList.remove("overflow-hidden")}} className='border px-3 py-1.5 rounded-sm border-button/30 cursor-pointer bg-red-600 hover:bg-red-600/60 transition-all duration-300 ease-in-out'>Anuleaza rezervarea</button>
                        
                      </div>
                      
                    </div>
                  </div>
                </div>
              )
            }

            <div className='flex modf8:space-x-3 justify-between max-modf8:flex-col max-modf8:space-y-3 max-modf8:items-start items-center'>
              <button onClick={()=>navigate("/rezervarile-mele")} className='text-gray-400 flex items-center space-x-1.5 cursor-pointer hover:text-white transition-all duration-300 ease-in-out'>
              <IoIosArrowBack className='mt-1'/>
              <p>Inapoi la rezervarile mele</p>
            </button>

            {
              (rezervare?.status_rezervare ==="In desfasurare" || rezervare?.status_rezervare === "Confirmata") && (
                <button onClick={()=>{document.body.classList.add("overflow-hidden"); setVisibleAnuleaza(true)}} className='text-gray-400 border-button/50 border cursor-pointer px-3 py-1.5 rounded-sm hover:bg-button/50 hover:text-white transition-all duration-300 ease-in-out'>
                  <p>Anuleaza rezervarea</p>
                </button>
              )
            }
            </div>

            <div className='mt-3 relative'>
              <img className='w-full max-modf2:h-69 h-115 max-modf:h-80 shrink-0 object-center' src={`${import.meta.env.BASE_URL}${rezervare?.image}`} alt="" />
              <p className={`absolute top-3 py-1 left-3 ${rezervare?.status_rezervare === "Confirmata"?" bg-button":rezervare?.status_rezervare==="Anulata"?" bg-red-600": rezervare?.status_rezervare==="Finalizata"?"bg-green-600 ":"bg-blue-400"} px-3 rounded-sm`}>{rezervare?.status_rezervare}</p>
              <div className={`absolute top-3 py-3 right-3 $ px-3 flex items-center space-x-1.5 bg-green-600 rounded-lg`}><span>{rezervare?.rating_mediu} </span> <FaStar className='text-yellow-400'/></div>
            </div>

            <div className='mt-3'>
              <p className='text-[19px]'>{rezervare?.nume_hotel}, <span className='text-gray-400'>{rezervare?.nume_camera}</span></p>
              <div className='flex space-x-3 items-center text-gray-400 mt-1'>
                <IoLocationOutline/>
                <p>{rezervare?.locatie}</p>
              </div>

              <div className='flex items-center space-x-3 mt-2 text-gray-400'>
                <ul className='flex space-x-1'>
                  {
                    [1,2,3,4,5].map((star,istar)=>(
                      <li className={`${star<=Math.round(rezervare?.rating_mediu)?"text-yellow-400":"text-gray-400"}`} key={istar}>
                        <FaStar/>
                      </li>
                    ))
                  }
                </ul>
                <p>{rezervare?.rating_mediu} ({rezervare?.numarul_recenziilor} recenzii)</p>
              </div>

              <div className='flex items-center modf8:space-x-4 mt-5 max-modf8:items-start max-modf8:space-y-3 max-modf8:flex-col text-gray-400'>
                <p className={`${rezervare?.status_rezervare === "Confirmata"?"text-button bg-button/30":rezervare?.status_rezervare==="Anulata"?"text-red-600 bg-red-600/30": rezervare?.status_rezervare==="Finalizata"?"bg-green-400/30 text-green-400":"bg-blue-400/30 text-blue-400"} shrink-0 px-3 rounded-sm`}>{rezervare?.status_rezervare}</p>
                <p>Cod rezervare: {rezervare?.cod_rezervare}, Rezervat pe {dataRezervare}</p>
              </div>
            </div>

            <div className='grid max-modf:grid-cols-2 grid-cols-4 max-modf8:grid-cols-1 gap-3 mt-3'>
              <div className='border px-3 py-3 rounded-lg border-button/30 flex items-start space-x-3'>
                <BiCalendar className='text-[21px] text-button mt-1'/>
                <div>
                  <p className='text-gray-400'>Check-in</p>
                  <p>{checkIn}</p>
                  <p className='text-gray-400'>11:00</p>
                </div>
              </div>
              
              <div className='border px-3 py-3 rounded-lg border-button/30 flex items-start space-x-3'>
                <BiCalendar className='text-[21px] text-button mt-1'/>
                <div>
                  <p className='text-gray-400'>Check-out</p>
                  <p>{checkOut}</p>
                  <p className='text-gray-400'>19:00</p>
                </div>
              </div>
              
              <div className='border px-3 py-3 rounded-lg border-button/30 flex items-start space-x-3'>
                <BiCalendar className='text-[21px] text-button mt-1'/>
                <div>
                  <p className='text-gray-400'>Durata sejur</p>
                  <p>{rezervare?.numar_nopti} nopti</p>
                  
                </div>
              </div>
              
              <div className='border px-3 py-3 rounded-lg border-button/30 flex items-start space-x-3'>
                <BiCalendar className='text-[21px] text-button mt-1'/>
                <div>
                  <p className='text-gray-400'>Oaspeti</p>
                  <p>{rezervare?.nr_adulti} adulti</p>
                  <p className='text-gray-400'>{rezervare?.nr_copii} copii</p>
                </div>
              </div>
              


            </div>

            <div className='mt-3 grid max-modf1:grid-cols-1 grid-cols-2 gap-3'>
             <div className='border px-3 py-3 rounded-lg border-button/30'>
              <p className='text-[19px] font-medium'>Informatii</p>
              <div className='mt-3 space-y-3'>
                <div className=''>
                  <p className='text-gray-400'>Nume client</p>
                  <p>{rezervare?.nume}</p>
                </div>
                <div className=''>
                  <p className='text-gray-400'>Email client</p>
                  <p>{rezervare?.email}</p>
                </div>
                <div className=''>
                  <p className='text-gray-400'>Telefon client</p>
                  <p>{rezervare?.telefon}</p>
                </div>
              </div>
             </div>
             <div className='border px-3 py-3 rounded-lg border-button/30'>
              <p className='text-[19px] font-medium'>Sumar rezervare</p>
              <div className='mt-3 space-y-3'>
                <div className='flex space-x-3 justify-between'>
                  <p className='text-gray-400'>{rezervare?.nume_camera} ({rezervare?.numar_nopti} nopti)</p>
                  <p>{rezervare?.pret_camera_fara_taxe} RON</p>
                </div>
                <div className='flex space-x-3 justify-between'>
                  <p className='text-gray-400'>Mic dejun inclus</p>
                  <p>Inclus</p>
                </div>
                <div className='flex space-x-3 justify-between'>
                  <p className='text-gray-400'>Taxe si servicii</p>
                  <p>{rezervare?.taxe_servicii} RON</p>
                </div>
                <div className='flex space-x-3 justify-between'>
                  <p className='text-gray-400'>Reducere</p>
                  <p>{rezervare?.reducerea*100}%</p>
                </div>

                <div className='border-t mt-5 py-3 flex space-x-3 justify-between items-center border-button/30'>
                   <p className='text-gray-400'>Total platit</p>
                   <p className='text-button text-[20px]'>{Math.round((rezervare?.total_platit_final)*100)/100} RON</p>
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

export default DetaliiRezervariPage
