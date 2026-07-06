import React, { useState } from 'react'
import { ImCalendar } from "react-icons/im";
import { LuCalendarCog } from "react-icons/lu";

import { LuCalendarClock } from "react-icons/lu";
import { LuCalendarX2 } from "react-icons/lu";
import { LuCalendarCheck2 } from "react-icons/lu";
import { IoClose, IoSearch } from "react-icons/io5";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import hotels from '../hotels/Hotel/hotels'
import { BiFilterAlt } from "react-icons/bi";

import rezervare from './rezervare'
import { Outlet, useLocation, useNavigate, useOutletContext } from 'react-router-dom';
import { BsCalendar2, BsThreeDotsVertical, BsTrash } from 'react-icons/bs';

import { FaRegEye, FaUser } from "react-icons/fa6";
import { FiMessageCircle } from "react-icons/fi";
import { LuCircleArrowOutUpRight } from "react-icons/lu";
import { CiMail } from "react-icons/ci";
import { TbCalendarCancel } from "react-icons/tb";
import { RxExclamationTriangle } from 'react-icons/rx';
import { FaRegStickyNote } from "react-icons/fa";
import { useEffect } from 'react';

const AdminRezervari = () => {

  const [rezervariUsers,setRezervariUsers] = useState([]);
  const [hotelss,setHotelss] = useState([]);
  useEffect(()=>{
    fetch(`${import.meta.env.VITE_API_URL}/hotels`)
    .then(res=>res.json())
    .then(data=>setHotelss(data))
    .catch(err=>console.error(err))
  },[])
  useEffect(()=>{
    fetch(`${import.meta.env.VITE_API_URL}/users/rezervari`)
    .then(res=>res.json())
    .then(data=>setRezervariUsers(data))
    .catch(err=>console.error(err))
  },[])

  const location = useLocation();
  const viziblePagineAdminRezervare = location.pathname === `/admin/admin-rezervari`
  const navigate = useNavigate();
  const iconMap ={
    Toate: ImCalendar,
    Confirmate: LuCalendarCog,
    InAsteptare: LuCalendarClock,
    Anulate: LuCalendarX2,
    Finalizate: LuCalendarCheck2
  };
  const {visibleBara} = useOutletContext();
  const [visibleHotel,setVisibleHotel] = useState(false);
  const [visibleStatus,setVisibleStatus] = useState(false);
  const [visibleFiltru,setVisibleFiltru] = useState(false);

  const [visibleActiuneRezMeniu,setVisibleActiuneRezMeniu]= useState(null);
  const [modalActRez, setModalActRez] = useState(null);
  const [checkStatsAc,setCheckstatsAc]= useState(null);
  const iconActRez={
    detalii:FaRegEye,
    statusul:LuCircleArrowOutUpRight,
    email:CiMail,
    notita:FiMessageCircle,
    anulare:TbCalendarCancel
  }
  const actiuniRezMeniu = [
    {icon:"detalii",nume:"Vezi detalii"},
    {icon:"statusul",nume:"Schimba statusul"},
    {icon:"email",nume:"Trimite email"},
    {icon:"notita",nume:"Adauga notita"},
    {icon:"anulare",nume:"Anuleaza rezervarea"},
  ];

  const nrToateRezervarile = rezervariUsers?.length;
  const nrRezervariConfirmate = rezervariUsers?.filter(rezervare=>rezervare?.status_rezervare ==="Confirmata").length;
  const nrRezervariAnulate = rezervariUsers?.filter(rezervare=>rezervare?.status_rezervare ==="Anulata").length;
  const nrRezervariAsteptare = rezervariUsers?.filter(rezervare=>rezervare?.status_rezervare ==="In Asteptare").length;
  const nrRezervariFinalizate = rezervariUsers?.filter(rezervare=>rezervare?.status_rezervare ==="Finalizata").length;
  return (
    <div className='mt-18'>
      {viziblePagineAdminRezervare &&(<div >

        <div className='flex items-center justify-between space-x-3 max-modf2:flex-col max-modf2:items-start max-modf2:space-y-3 text-[14px]'>
          <div>
            <p className='text-[22px] font-medium'>Rezervari</p>
            <p className='text-gray-400'>Gestioneaza si monitorizeaza toate rezervarile hotelului.</p>
          </div>
          <div className='shrink-0'>
            <button onClick={()=>navigate("/admin/admin-rezervari/adauga-rezervare")} className='flex items-center space-x-3 bg-button px-3 py-0.5 rounded-lg hover:bg-button/60 cursor-pointer transition-all duration-300 ease-in-out'>
              <p className='mb-0.5 font-medium text-[22px]'>+</p>
              <p>Rezervare noua</p>
            </button>
          </div>
        </div>

        <ul className={`grid grid-cols-5 max-modf6:grid-cols-3 ${visibleBara? "max-modf2:grid-cols-1":"max-modf2:grid-cols-2"} max-modf:grid-cols-2 gap-3 mt-4 text-[14px]`}>
          { 
            [ {nume:"Toate rezervarile",nr:nrToateRezervarile,icon:"Toate",bgC:"bg-button/30",textC:"text-button"},
              {nume:"Confirmate",nr:nrRezervariConfirmate,icon:"Confirmate",bgC:"bg-green-400/30",textC:"text-green-400"},
              {nume:"In asteptare",nr:nrRezervariAsteptare,icon:"InAsteptare",bgC:"bg-orange-400/30",textC:"text-orange-400"},
              {nume:"Anulate",nr:nrRezervariAnulate,icon:"Anulate",bgC:"bg-red-400/30",textC:"text-red-400"},
              {nume:"Finalizate",nr:nrRezervariFinalizate,icon:"Finalizate",bgC:"bg-green-400/30",textC:"text-green-400"}
            ].map((par,i)=>{
              const Icon = iconMap[par.icon]
              return(
              <li key={i} className='border border-button/30 rounded-lg px-3 py-3 flex items-center space-x-3'>
                <div className={`${par.bgC} px-2 rounded-full py-2`}>
                  {Icon && <Icon size={20} className={`${par.textC}`}/>}
                </div>
                <div>
                  <p className='text-gray-400'>{par.nume}</p>
                  <p className='font-medium'>{par.nr}</p>
                 
                </div>
              </li>
            )})
          }
        </ul>


        <div className='text-[14px] mt-4 flex flex-wrap space-x-3 space-y-3 modf6:justify-between items-end '>

          <div className='w-85'>
            <p className='text-gray-400'>Cauta rezervari</p>
            <div className='mt-1.5'>
              <input type="text" className='border border-button/30 w-full rounded-lg px-3 py-1.5' placeholder='Nume client, email, telefon, cod rezervare...' />
            </div>
          </div>

          
          
          <div className='w-48'>
            <p className='text-gray-400'>Perioada</p>
            <input type="date" className='w-full boder mt-1.5 border border-button/30 rounded-lg px-3 py-1.5'/>
          </div>


          
          <div className='w-48'>
            <p className='text-gray-400'>Hotel</p>
            <div className='relative'>
              <button onClick={()=>setVisibleHotel(!visibleHotel)} className={`w-full ${visibleHotel? "bg-button rounded-t-lg": "bg-transparent rounded-lg"} border mt-1.5 px-3 py-1.5  cursor-pointer  space-x-3 border-button/30 `}>
                <div className='flex justify-between items-center  w-full'>
                  <p>Toate hotelurile</p>
                  {visibleHotel? <IoIosArrowUp className='text-white'/>: <IoIosArrowDown className='text-button'/>}
                </div>
              </button>

              <ul className={`absolute text-start transition-all z-100 duration-500 ease-in-out bg-background ${visibleHotel ? "max-h-100 opacity-100": "max-h-0 opacity-0"} w-full h-43 overflow-hidden left-0 overflow-y-scroll scrollbar-thin`}>
                <li className='px-3 py-1.5 border border-button/30 hover:bg-button/60 cursor-pointer'>
                  <p>Toate hotelurile</p>
                </li>
                {
                  hotelss?.map((par,i)=>(
                    <li key={par.id} className='px-3 py-1.5 border border-button/30 hover:bg-button/60 cursor-pointer'>{par.nume}</li>
                  ))
                }
              </ul>
            </div>
          </div>

          <div className='w-48'>
            <p className='text-gray-400'>Status</p>
            <div className='relative'>
              <button onClick={()=>setVisibleStatus(!visibleStatus)} className={`w-full ${visibleStatus? "bg-button rounded-t-lg": "bg-transparent rounded-lg"} border mt-1.5 px-3 py-1.5  cursor-pointer  space-x-3 border-button/30 `}>
                <div className='flex justify-between items-center  w-full'>
                  <p>Toate statusurile</p>
                  {visibleStatus? <IoIosArrowUp className='text-white'/>: <IoIosArrowDown className='text-button'/>}
                </div>
              </button>

              <ul className={`absolute text-start z-100 transition-all duration-500 ease-in-out bg-background ${visibleStatus ? "max-h-100 opacity-100": "max-h-0 opacity-0"} w-full  overflow-hidden left-0 `}>
                <div className='px-3 py-1.5 border border-button/30 hover:bg-button/60 cursor-pointer'>
                  <p>Toate statusurile</p>
                </div>
                {
                  ["Confirmata","In asteptare","Anulata"].map((par,i)=>(
                    <li key={i} className='px-3 py-1.5 border border-button/30 hover:bg-button/60 cursor-pointer'>{par}</li>
                  ))
                }
              </ul>
            </div>
          </div>


          
        


          
          <div className='mb-3.5'>
            <button className='border px-3 py-1.5 rounded-lg border-button/30 hover:bg-button/60 cursor-pointer duration-300 ease-in-out  flex items-center space-x-3'><IoSearch /> <p>Cauta</p> </button>
          </div>


          
        </div>

        <div className='text-[14px] border py-3 border-button/30  rounded-lg'>
          <div className='flex px-3 justify-between'>
            <p>Rezervari ({rezervariUsers?.length})</p>
            <div className='relative'>
              <button onClick={()=>setVisibleFiltru(!visibleFiltru)} className={`border px-6 py-1  border-button/30 cursor-pointer flex space-x-3 items-center transition-all duration-300 ease-in-out hover:bg-button/60 ${visibleFiltru? "bg-button/60 rounded-t-lg" :"bg-transparent rounded-lg"}`}>
                <BiFilterAlt className={`${visibleFiltru? "text-white": "text-button"}`}/>
                <p>Filtreza</p>
              </button>
              <ul className={`absolute overflow-hidden z-50  w-full bg-background transition-all duration-500 ease-in-out ${visibleFiltru? "max-h-100 opacity-100": "max-h-0 opacity-0"}`}>
                {
                  ["Confirmata","Finalizata","In Asteptare","Anulata"].map((par,i)=>(
                    <li key={i} className={`border px-3 py-1 cursor-pointer hover:bg-button/60 transition-all duration-300 ease-in-out border-button/30`}>
                      {par}
                    </li>
                  ))
                }
              </ul>
              
            </div>
          </div>

          
          

          
          <ul className=' overflow-x-auto  scrollbar-thin w-full text-[12.5px] text-gray-400 space-y-3 mt-3 pb-2'>
            <div className='flex px-3  space-x-3  text-[12.5px]  text-gray-400 mt-4 items-center'>
              <div className={`${visibleBara?"max-modf7:w-20":"max-modf7:w-23"} transition-[width] duration-300 ease-in-out max-modf7:shrink-0  modf7:flex-1`}><p>Cod rezervare</p></div>
              <div className={`${visibleBara?"max-modf7:w-38":"max-modf7:w-48"} transition-[width] duration-300 ease-in-out max-modf7:shrink-0  modf7:flex-2`}><p>Client</p> </div>
              <div className={`${visibleBara? "max-modf7:w-60":"max-modf7:w-70"} transition-[width] duration-300 ease-in-out max-modf7:shrink-0  modf7:flex-3 `}><p>Hotel/Camera</p></div>
              <div className={`${visibleBara?"max-modf7:w-20": "max-modf7:w-23"} transition-[width] duration-300 ease-in-out max-modf7:shrink-0 modf7:flex-1`}><p>Check-in</p></div>
              <div className={`${visibleBara?"max-modf7:w-20":"max-modf7:w-23"} transition-[width] duration-300 ease-in-out max-modf7:shrink-0 modf7:flex-1`}><p>Check-out</p></div>
              <div className={`${visibleBara?"max-modf7:w-20":"max-modf7:w-23"} transition-[width] duration-300 ease-in-out max-modf7:shrink-0 modf7:flex-1`}><p>Oaspeti</p></div>
              <div className={`${visibleBara? "max-modf7:w-20":"max-modf7:w-23"} transition-[width] duration-300 ease-in-out max-modf7:shrink-0 modf7:flex-1`}><p>Suma</p></div>
              <div className={`${visibleBara? "max-modf7:w-20":"max-modf7:w-23"} transition-[width] duration-300 ease-in-out max-modf7:shrink-0 modf7:flex-1`}><p>Status</p></div>
              <div className={`${visibleBara?"max-modf7:w-15":"max-modf7:w-23"} transition-[width] duration-300 ease-in-out max-modf7:shrink-0 modf7:flex-1  text-center`}><p>Actiuni</p></div>
            </div>
          
            {
              rezervariUsers?.map((par,i)=>{
                const checkInRez = new Date(par.check_in).toISOString().split("T")[0];
                const checkOutRez = new Date(par.check_in).toISOString().split("T")[0];
                
                return(
                <li key={par?.id} className=' px-3 py-1.5 border-y min-w-max border-y-button/30 '>

                  
                  <div className='flex items-center space-x-3'>

                    <div className={`${visibleBara?"max-modf7:w-20":"max-modf7:w-23"} transition-[width] duration-300 ease-in-out max-modf7:shrink-0 modf7:flex-1 `}>
                      <p className='text-white'>{par?.cod_rezervare}</p>
                    </div>

                    <div className={`${visibleBara?"max-modf7:w-38":"max-modf7:w-48"} transition-[width] duration-300 ease-in-out max-modf7:shrink-0 modf7:flex-2`}>
                      <p className='text-white'>{par?.nume} {par.prenume}</p>
                      <p>{par?.email}</p>
                      <p>{par?.telefon}</p>
                    </div>

                    <div className={`${visibleBara? "max-modf7:w-60":"max-modf7:w-70"} transition-[width] duration-300 ease-in-out max-modf7:shrink-0 modf7:flex-3  flex items-center space-x-3`}>

                      <div className='w-10 h-10 shrink-0 rounded-lg overflow-hidden'>
                        <img className='w-full  h-full transition-all duration-300 ease-in-out object-center rounded-lg hover:scale-110' src={
    par.image_camera.startsWith("http")
      ? par.image_camera
      : `${import.meta.env.BASE_URL}${par.image_camera}`
  }
 alt="" />
                      </div>
                      
                      <div className=''>
                        <p className='text-white'>{par?.nume_hotel}  </p>
                        <p>{par?.nume_camera}</p>
                      </div>
                    </div>

                    <div className={`${visibleBara?"max-modf7:w-20": "max-modf7:w-23"} transition-[width] duration-300 ease-in-out max-modf7:shrink-0 modf7:flex-1`}>
                      <p>{checkInRez}</p>
                      <p>11:00</p>
                    </div>

                    <div className={`${visibleBara?"max-modf7:w-20":"max-modf7:w-23"} transition-[width] duration-300 ease-in-out max-modf7:shrink-0 modf7:flex-1`}>
                      <p>{checkOutRez}</p>
                      <p>19:00</p>
                    </div>

                    <div className={`${visibleBara?"max-modf7:w-20":"max-modf7:w-23"} transition-[width] duration-300 ease-in-out max-modf7:shrink-0 modf7:flex-1`}>
                      <p className='text-white'>{par?.nr_adulti} adulti</p>
                      <p>{par?.nr_copii} copii</p>
                    </div>

                    <div className={`${visibleBara?"max-modf7:w-20":"max-modf7:w-23"} transition-[width] duration-300 ease-in-out max-modf7:shrink-0 modf7:flex-1`}>
                      <p className='text-white'>{Math.round((par?.total_platit_final)*100)/100} RON</p>
                      <p>{par?.nr_nopti} nopti</p>
                    </div>

                    <div className={`${visibleBara?"max-modf7:w-20":"max-modf7:w-23"} transition-[width] duration-300 ease-in-out max-modf7:shrink-0 modf7:flex-1`}>
                      <p className={`text-center ${
                        par?.status_rezervare === "Confirmata" ?"bg-button/30 text-button":
                          par?.status_rezervare === "Finalizata" ? "bg-green-400/30 text-green-400":
                           par?.status_rezervare === "Anulata" ? "bg-red-400/30 text-red-400": 
                           "bg-orange-400/30 text-orange-400"

                      } rounded-sm`}>{par?.status_rezervare}</p>
                    </div>

                    <div className={`${visibleBara?"max-modf7:w-15":"max-modf7:w-23"} transition-[width] duration-300 ease-in-out max-modf7:shrink-0 modf7:flex-1`}>
                      <div className='flex justify-center space-x-3 '>
                          
                          <div className='relative'>
                            <button onClick={()=>{setVisibleActiuneRezMeniu(visibleActiuneRezMeniu === par.id? null: par?.id);}} className='px-1.5 py-1.5 border cursor-pointer rounded-sm border-button/30'>
                              <BsThreeDotsVertical />
                            </button>

                            {
                              visibleActiuneRezMeniu === par?.id && (
                                <ul className={`absolute right-10 ${visibleActiuneRezMeniu === rezervariUsers[rezervariUsers.length-1]?.id ?"-bottom-3":"top-1/2 -translate-y-1/2"}  w-40 border border-button rounded-lg bg-background z-600`}>
                                  <div className='relative  px-1 py-1'>
                                      {
                                      actiuniRezMeniu.map((act,iAct)=>
                                        {const IconRezAct = iconActRez[act.icon];
                                        return(
                                        <li onClick={()=>{setModalActRez({actiune:iAct,par}); document.body.classList.add("overflow-hidden"); setVisibleActiuneRezMeniu(null)}} className={`flex items-center space-x-1 px-1.5 bg-bu  py-1.5 cursor-pointer transition-all duration-300 ease-in-out ${iAct=== actiuniRezMeniu.length-1?"text-red-400 hover:bg-red-400/30":"text-white hover:bg-button/30"}`} key={iAct}>
                                          {IconRezAct && <IconRezAct size={16} />}
                                          <p>{act.nume}</p>
                                        </li>
                                      )})
                                      }

                                      <div className={`absolute w-3 h-3 bg-button -right-3 ${visibleActiuneRezMeniu=== rezervariUsers[rezervariUsers.length-1]?.id? "bottom-4.5":"top-1/2 -translate-y-1/2"}`} style={{clipPath: "polygon(0 0, 100% 50%, 0 100%)"}}></div>
                                      <div className={`absolute w-3 h-3 bg-background -right-2.75 ${visibleActiuneRezMeniu=== rezervariUsers[rezervariUsers.length-1]?.id? "bottom-4.5":"top-1/2 -translate-y-1/2"}`} style={{clipPath: "polygon(0 0, 100% 50%, 0 100%)"}}></div>
                                  </div>
                                </ul>
                              )
                            }
                          </div>
                        </div>
                    </div>
                  </div>
                </li>
              )})
            }

            {
              modalActRez && (
                <div className='fixed z-800 bg-gray-400/15 inset-0 flex items-center justify-center'>
                  <div className='flex w-full justify-center text-white px-3'>
                    {
                      modalActRez.actiune === 0 && (
                        <div className='border border-button rounded-lg overflow-y-auto overflow-hidden max-h-[95vh] scrollbar-thin px-3 py-3 bg-background w-165'>
                          <div className='flex justify-between'>
                            <p className='text-[19px] text-white'>Detalii rezervare</p>
                            <IoClose onClick={()=>{setModalActRez(null); document.body.classList.remove("overflow-hidden")}}  className='text-[18px] cursor-pointer'/>
                          </div>

                          <div className='grid grid-cols-2 mt-2 gap-3 max-modf2:grid-cols-1'>
                            <div >
                              
                              <div className='flex justify-between space-x-3 items-center border px-2 py-1.5 rounded-lg border-button/30'>
                                <div>
                                  <p>Cod rezervare</p>
                                  <p>{modalActRez.par.cod_rezervare}</p>
                                </div>
                                <div>
                                  <p className={`${
                                    modalActRez.par?.status_rezervare === "Confirmata" ?"bg-button/30 text-button":
                                      modalActRez.par?.status_rezervare === "Finalizata" ? "bg-green-400/30 text-green-400":
                                      modalActRez.par?.status_rezervare === "Anulata" ? "bg-red-400/30 text-red-400": 
                                      "bg-orange-400/30 text-orange-400"

                                  } px-2 py-0.5 rounded-sm`}>{modalActRez.par.status_rezervare}</p>
                                </div>
                              </div>

                              <div className='mt-2 border border-button/30 rounded-lg px-2 py-1.5 items-start flex space-x-3 '>
                                <div className='  px-2 py-2 bg-button/30 shrink-0 rounded-full'>
                                  <FaUser className='shrink-0 text-[16px] text-button'/>
                                </div>

                                <div>
                                  <p>{modalActRez.par.nume} {modalActRez.par.prenume}</p>
                                  <p className='text-gray-400'>{modalActRez.par.telefon}</p>
                                  <p className='text-gray-400'>{modalActRez.par.email}</p>
                                </div>
                              </div>

                              <div className='border mt-2 border-button/30 px-3 py-1.5 '>
                                <p className='text-[15px]'>Informatii sejur</p>


                                <div className='grid grid-cols-2 gap-3'>
                                  <p className='text-gray-400'>Check-in</p>
                                  <p>{new Date(modalActRez.par.check_in).toISOString().split("T")[0]}, ora: 11:00</p>
                                </div>

                                
                                <div className='grid grid-cols-2 gap-3'>
                                  <p className='text-gray-400'>Check-out</p>
                                  <p>{new Date(modalActRez.par.check_out).toISOString().split("T")[0]}, ora: 19:00</p>
                                </div>

                                <div className='grid grid-cols-2 gap-3'>
                                  <p className='text-gray-400'>Durata sejur</p>
                                  <p>{modalActRez.par.numar_nopti} nopti</p>
                                </div>

                                <div className='grid grid-cols-2 gap-3'>
                                  <p className='text-gray-400'>Oaspeti</p>
                                  <p>{modalActRez.par.nr_adulti} adulti, {modalActRez.par.nr_copii} copii</p>
                                </div>


                              </div>

                              <div className='mt-2 border border-button/30 px-3 py-1.5'>
                                <p className='text-[15px]'>Notite client</p>

                                <div className='mt-1.5'>
                                  <p className='text-gray-400'>{modalActRez.par.notite_client}</p>
                                </div>

                              </div>

                            </div>

                            <div>
                              <div className='border border-button/30 px-3 py-1.5 rounded-sm'>
                                <p className='text-[15px]'>Hotel & Camera</p>
                                <div className='flex space-x-3 mt-1.5 items-center'>
                                  <div className='flex-1'>
                                    <img className='rounded-lg' src={`${import.meta.env.BASE_URL}${modalActRez.par?.image_camera}`} alt="" />
                                  </div>
                                  <div className='flex-2'>
                                    <p>{modalActRez.par.nume_hotel}</p>
                                    <p className='text-gray-400'>{modalActRez.par.nume_camera}</p>
                                  </div>
                                </div>
                              </div>

                              <div className='border border-button/30 px-3 py-1.5 mt-2 rounded-sm'>
                                <p className='text-[15px]'>Detalii plata</p>

                                <div className='mt-1.5 flex space-x-3 justify-between'>
                                  <p className='text-gray-400'>Pret camera ({modalActRez.par.numar_nopti} nopti)</p>
                                  <p>{modalActRez.par.pret_pe_noapte *modalActRez.par.numar_nopti} RON</p>
                                </div>

                                <div className='mt-1.5 flex space-x-3 justify-between'>
                                  <p className='text-gray-400'>Taxe si servicii</p>
                                  <p>{modalActRez.par.taxe_servicii} RON</p>
                                </div>

                                <div className='mt-1.5 flex space-x-3 justify-between'>
                                  <p className='text-gray-400'>Reducere</p>
                                  <p className='text-green-400'>
                                    {modalActRez.par.reducerea*100}%
                                  </p>
                                </div>

                                <div className='mt-1.5 border-t border-y-button/30'>
                                  <div className='mt-1.5 flex space-x-3 justify-between'>
                                    <p>Total platit</p>
                                    <p>{Math.round((modalActRez.par.total_platit_final)*100)/100}RON</p>
                                  </div>

                                  <div className='mt-1.5 flex space-x-3 justify-between text-gray-400'>
                                    <p>Metoda plata</p>
                                    <p>Card online (VISA ****4242)</p>
                                  </div>

                                  
                                  <div className='mt-1.5 flex space-x-3 justify-between text-gray-400'>
                                    <p>Status plata</p>
                                    <p className='text-green-400 bg-green-400/30 px-1.5'>Plata integral</p>
                                  </div>


                                </div>



                              </div>
                            </div>
                          </div>


                          <div className='flex modf8:space-x-3 mt-2 modf8:justify-end max-modf8:flex-col max-modf8:space-y-3'>
                            <button onClick={()=>{setModalActRez(null); document.body.classList.remove("overflow-hidden")}} className='px-3 py-1 border border-button/30 hover:bg-button/60 transition-all duration-300 ease-in-out cursor-pointer rounded-sm'>Anuleaza</button>
                            <button onClick={()=>{setModalActRez(prev=>({...prev,actiune:4})); document.body.classList.remove("overflow-hidden")}} className='px-3 py-1 border border-button/30 bg-red-600 hover:bg-red-600/60 transition-all duration-300 ease-in-out cursor-pointer rounded-sm'>Anuleaza rezervarea</button>
                          </div>
                        </div>
                      )
                    }

                    {
                      modalActRez.actiune === 1 && (
                        <div className='border border-button rounded-lg overflow-y-auto overflow-hidden max-h-[95vh] scrollbar-thin px-3 py-3 bg-background w-110'>
                          <div className='flex justify-between'>
                            <p className='text-[19px] text-white'>Schimba statusul rezervarii</p>
                            <IoClose onClick={()=>{setModalActRez(null); document.body.classList.remove("overflow-hidden")}}  className='text-[18px] cursor-pointer'/>
                          </div>


                          <div className='mt-1.5'>
                            <p className='text-[15px] mb-1'>Informatii:</p>
                            <p>{modalActRez.par.cod_rezervare}</p>
                            <p>{modalActRez.par.nume_camera}</p>
                            <p>{modalActRez.par.nume} {modalActRez?.par.prenume}</p>

                            <div className='flex space-x-3 items-center'>
                              <p>Status curent:</p>
                              <p className={`${
                                modalActRez.par?.status_rezervare === "Confirmata" ?"bg-button/30 text-button":
                                  modalActRez.par?.status_rezervare === "Finalizata" ? "bg-green-400/30 text-green-400":
                                    modalActRez.par?.status_rezervare === "Anulata" ? "bg-red-400/30 text-red-400": 
                                    "bg-orange-400/30 text-orange-400"

                              } px-3`}>{modalActRez.par.status_rezervare}</p>
                            </div>
                          </div>

                          <div className='border my-3 px-3 py-3 border-button/50 rounded-lg'>
                            <p className='text-[15px] '>Selecteaza noul status</p>

                            <ul className='space-y-3 mt-2'>
                              {
                                ["Confirmata","Finalizata","In asteptare","Anulata"].map((statusuriAc,iStats)=>(
                                  <li key={iStats} onClick={()=>setCheckstatsAc(iStats)}  className='border border-button/30  px-3 py-1.5 rounded-lg hover:bg-button/60 transition-all duration-500 ease-in-out cursor-pointer flex items-center space-x-3'>
                                  
                                    <input type="checkbox" name="" onChange={()=>setCheckstatsAc(iStats)} checked={checkStatsAc===iStats} id="" />
                                    <div>
                                      <p>{statusuriAc}</p>
                                      <p className='text-gray-400'>Rezervarea este confirmata si platita integral.</p>
                                    </div>
                                  </li>
                                ))
                              }
                            </ul>
                          </div>



                          <div className='flex modf8:space-x-3 mt-2 modf8:justify-end max-modf8:flex-col max-modf8:space-y-3'>
                            <button onClick={()=>{setModalActRez(null); document.body.classList.remove("overflow-hidden")}} className='px-3 py-1 border border-button/30 hover:bg-button/60 transition-all duration-300 ease-in-out cursor-pointer rounded-sm'>Anuleaza</button>
                            <button onClick={()=>{setModalActRez(null); document.body.classList.remove("overflow-hidden")}} className='px-3 py-1 border border-button/30 bg-button hover:bg-button/60 transition-all duration-300 ease-in-out cursor-pointer rounded-sm'>Salveaza modificarile</button>
                          </div>
                        </div>
                      )
                    }

                    {
                      modalActRez.actiune === 2 && (
                        <div className='border border-button rounded-lg overflow-y-auto overflow-hidden max-h-[95vh] scrollbar-thin px-3 py-3 bg-background w-125'>
                          <div className='flex justify-between'>
                            <p className='text-[19px] text-white'>Trimite email clientului</p>
                            <IoClose onClick={()=>{setModalActRez(null); document.body.classList.remove("overflow-hidden")}}  className='text-[18px] cursor-pointer'/>
                          </div>


                          <div className='text-gray-400 border border-button/50 rounded-lg px-3 py-3 mt-3'>
                            <p>Detalii rezervare</p>
                            <div className='grid grid-cols-2 gap-3 max-modf8:grid-cols-1 max-modf8:gap-1.5 mt-1.5'>
                              <div>
                                <p>Cod rezervare: <span className='ml-3 text-button'>{modalActRez.par.cod_rezervare}</span></p>
                                <p>Client: <span className='ml-3 text-white'>{modalActRez.par.nume} {modalActRez.par.prenume}</span></p>
                                <p>Email: <span className='ml-3 text-white'>{modalActRez.par.email}</span></p>
                              </div>
                              <div>
                                <p>Hotel: <span className='ml-3 text-button'>{modalActRez.par.nume_hotel}</span></p>
                                <p>Camera: <span className='ml-3 text-white'>{modalActRez.par.nume_camera}</span></p>
                              </div>
                            </div>
                          </div>


                          <div className='mt-3'>
                            <p>Catre</p>
                            <p className='mt-1.5 border w-full border-button/50 px-3 py-1.5 rounded-lg'>{modalActRez.par.email}</p>
                          </div>

                          <div className='mt-3'>
                            <p>Subiect</p>
                            <input className='w-full border border-button/50 px-3 py-1.5 mt-1.5 outline-0 rounded-lg' type="text" defaultValue={`Confirmarea rezervarii ${modalActRez.par.cod_rezervare}`} name="" id="" />
                          </div>

                          <div className='mt-3'>
                            <p>Sabloane rapide</p>

                            <div className='flex space-x-3 flex-wrap'>
                              <div className='mt-1.5 px-3 py-1 border border-button/30 rounded-sm hover:bg-button/60 cursor-pointer transition-all duration-300 ease-in-out'>
                                <p>Confirmare rezervare</p>
                              </div>


                              
                              <div className='mt-1.5 px-3 py-1 border border-button/30 rounded-sm hover:bg-button/60 cursor-pointer transition-all duration-300 ease-in-out'>
                                <p>Reminder check-in</p>
                              </div>


                              <div className='mt-1.5 px-3 py-1 border border-button/30 rounded-sm hover:bg-button/60 cursor-pointer transition-all duration-300 ease-in-out'>
                                <p>Multumire dupa sejur</p>
                              </div>


                              <div className='mt-1.5 px-3 py-1 border border-button/30 rounded-sm hover:bg-button/60 cursor-pointer transition-all duration-300 ease-in-out'>
                                <p>Oferta speciala</p>
                              </div>


                              <div className='mt-1.5 px-3 py-1 border border-button/30 rounded-sm hover:bg-button/60 cursor-pointer transition-all duration-300 ease-in-out'>
                                <p>Mesaj personalizat</p>
                              </div>



                            </div>
                          </div>


                          <div className='mt-3'>
                            <p>Continut mesaj</p>
                            <textarea className='w-full scrollbar-thin h-30 outline-0 border border-button/30 resize-none px-3 py-1.5 rounded-lg mt-3' name="" defaultValue={`Buna ${modalActRez.par.nume} ${modalActRez.par.prenume},

  Va multumim pentru alegerea ${modalActRez.par.nume_hotel}.
  Rezervarea dumneavoastra cu numarul ${modalActRez.par.cod_rezervare} este confirmata pentru perioada ${new Date(modalActRez.par.check_in).toISOString().split("T")[0]} - ${new Date(modalActRez.par.check_out).toISOString().split("T")[0]}.
  Va asteptam cu drag!`} id=""></textarea>
                          </div>




                          <div className='flex modf8:space-x-3 mt-2 modf8:justify-end max-modf8:flex-col max-modf8:space-y-3'>
                            <button onClick={()=>{setModalActRez(null); document.body.classList.remove("overflow-hidden")}} className='px-3 py-1 border border-button/30 hover:bg-button/60 transition-all duration-300 ease-in-out cursor-pointer rounded-sm'>Anuleaza</button>
                            <button onClick={()=>{setModalActRez(null); document.body.classList.remove("overflow-hidden")}} className='px-3 py-1 border border-button/30 bg-button hover:bg-button/60 transition-all duration-300 ease-in-out cursor-pointer rounded-sm'>Salveaza modificarile</button>
                          </div>
                        </div>
                      )
                    }

                    {
                      modalActRez.actiune === 3 && (
                        <div className='border border-button rounded-lg overflow-y-auto overflow-hidden max-h-[95vh] scrollbar-thin px-3 py-3 bg-background w-120'>
                          <div className='flex justify-end'>
                            
                            <IoClose onClick={()=>{setModalActRez(null); document.body.classList.remove("overflow-hidden")}}  className='text-[18px] cursor-pointer'/>
                          </div>


                          <div className='flex items-center space-x-3 '>
                            <div className='text-button px-3 py-3 bg-button/30 rounded-full text-[19px]'>
                              <FaRegStickyNote/>
                            </div>
                            <div>
                              <p className='text-[19px] text-white'>Adauga notita</p>
                              <p className=' text-gray-400'>Adauga o notita interna pentru aceasta rezervare.</p>
                            </div>
                          </div>


                          <div className='mt-3 flex border border-button/30 rounded-lg px-3 py-3 modf8:space-x-3 max-modf8:space-y-3 max-modf8:flex-col'>
                            <div className='modf8:flex-1'>
                              <img className='w-full h-full max-modf8:h-50 shrink-0 rounded-lg' src={`${import.meta.env.BASE_URL}${modalActRez.par.image_camera}`} alt="" />
                            </div>
                            <div className='modf8:flex-2'>
                              <div className='flex space-x-3 flex-wrap items-center'>
                                <p>Rezervare {modalActRez.par.cod_rezervare}</p>
                                <p className={`${
                                modalActRez.par?.status_rezervare === "Confirmata" ?"bg-button/30 text-button":
                                  modalActRez.par?.status_rezervare === "Finalizata" ? "bg-green-400/30 text-green-400":
                                    modalActRez.par?.status_rezervare === "Anulata" ? "bg-red-400/30 text-red-400": 
                                    "bg-orange-400/30 text-orange-400"

                              } px-3  rounded-sm`}>{modalActRez.par.status_rezervare}</p>
                              </div>
                              <p className='mt-1'>{modalActRez.par.nume_hotel} </p>
                              <div className='flex items-center text-gray-400 space-x-1.5 mt-1'>
                                <BsCalendar2 size={15}/>
                                <p>{new Date(modalActRez.par.check_in).toISOString().split("T")[0]} - {new Date(modalActRez.par.check_out).toISOString().split("T")[0]} ({modalActRez.par.numar_nopti} nopti)</p>
                              </div>
                              <div className='flex items-center text-gray-400 space-x-1.5 mt-1'>
                                <FaUser size={15}/>
                                <p>{modalActRez.par.nume} {modalActRez.par.prenume}</p>
                              </div>
                            </div>
                          </div>


                          <div className='mt-3'>
                            <p className='text-[15px]'>Titlu notita</p>
                            <div className='mt-1'>
                              <input type="text" className='border w-full px-3 py-1.5 rounded-lg border-button/30 outline-0' defaultValue={"Preferinte client"} />
                            </div>

                            <p className='mt-2 text-[15px]'>Notita</p>
                            <div>
                              <textarea name="" className='border resize-none w-full h-30 rounded-lg outline-0 mt-1 border-button/30 px-3 py-3' id="" defaultValue={"Clienta a mentionat ca prefera camerele de la etaj superior, departe de zona restaurantului. Alergie la nuci-sa se ia in considerare la mic dejun. Este o ocazi speciala."}></textarea>
                            </div>
                          </div>


                          



                          <div className='flex modf8:space-x-3 mt-2 modf8:justify-end max-modf8:flex-col max-modf8:space-y-3'>
                            <button onClick={()=>{setModalActRez(null); document.body.classList.remove("overflow-hidden")}} className='px-3 py-1 border border-button/30 hover:bg-button/60 transition-all duration-300 ease-in-out cursor-pointer rounded-sm'>Anuleaza</button>
                            <button onClick={()=>{setModalActRez(null); document.body.classList.remove("overflow-hidden")}} className='px-3 py-1 border border-button/30 bg-button hover:bg-button/60 transition-all duration-300 ease-in-out cursor-pointer rounded-sm'>Salveaza modificarile</button>
                          </div>
                        </div>
                      )
                    }

                    {
                      modalActRez.actiune === 4 && (
                        <div className='border border-button bg-background overflow-y-auto overflow-hidden max-h-[95vh] scrollbar-thin px-3 py-3 rounded-lg w-100'>
                          <div className='flex justify-end'>
                            
                            <IoClose onClick={()=>{setModalActRez(null); document.body.classList.remove("overflow-hidden")}}  className='text-[18px] cursor-pointer'/>
                          </div>

                          <div className='flex justify-center'>
                            <div className='text-red-600 text-[30px]'>
                              <RxExclamationTriangle/>
                            </div>
                          </div>

                          <div className='text-center'>
                            <p className='text-[19px] font-medium'>Anuleaza rezervarea</p>
                            <div className='text-gray-400 w-[85%] mt-0.5 mx-auto'>
                              <p>Esti sigur ca doresti sa anulezi rezervarea {modalActRez.par.cod_rezervare}?</p>
                            </div>
                          </div>

                          <div className='text-center'>
                            <p className='border text-gray-400 px-3 py-3 mt-2 rounded-sm border-red-600/30'>Aceasta actiune este ireversibila si va sterge toate informatiile despre aceasta rezervare.</p>
                          </div>

                          <div className='flex modf8:space-x-3 mt-2 modf8:justify-end max-modf8:flex-col max-modf8:space-y-3'>
                            <button onClick={()=>{setModalActRez(null); document.body.classList.remove("overflow-hidden")}} className='border border-button/30 px-3 py-1.5 rounded-sm hover:bg-button/60 transition-all duration-300 ease-in-out cursor-pointer'>Anuleaza</button>
                            <button onClick={()=>{setModalActRez(null); document.body.classList.remove("overflow-hidden")}} className='border border-button/30 px-3 py-1.5 rounded-sm bg-red-600 hover:bg-red-600/60 transition-all duration-300 ease-in-out cursor-pointer flex items-center space-x-1 w-full justify-center'> <p>Anuleaza rezervare</p></button>
                          </div>

                        </div>
                      )
                    }



                  </div>
                </div>
              )
            }
            


          </ul>
          

          

          


        </div>



      </div>)}

      <Outlet context={{visibleBara}}/>
    </div>
  )
}

export default AdminRezervari
