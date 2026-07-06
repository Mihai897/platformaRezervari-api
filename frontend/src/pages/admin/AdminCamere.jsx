import React, { useEffect, useState } from 'react'
import { Outlet, useLocation, useNavigate, useOutletContext } from 'react-router-dom'
import hotelsData from '../hotels/Hotel/hotels'
import { IoBedOutline, IoClose } from "react-icons/io5";
import { FaRegCheckCircle, FaSearch } from "react-icons/fa";
import { LuCalendarCog } from "react-icons/lu";

import { RxExclamationTriangle } from "react-icons/rx";

import { LuCalendarSync } from "react-icons/lu";
import { TbMoneybagHeart } from "react-icons/tb";
import { BsThreeDotsVertical, BsTrash } from 'react-icons/bs';
import { GoPencil } from 'react-icons/go';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { FaRegEye } from "react-icons/fa6";
import { MdAccessTime } from "react-icons/md";
import { MdOutlinePauseCircleOutline } from "react-icons/md";
import { FaRegTrashCan } from "react-icons/fa6";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FiUpload } from "react-icons/fi";
import clienti from './clienti'
import { AiOutlineExclamationCircle } from "react-icons/ai";

const AdminCamere = () => {
  const [hotels, setHotels] = useState(hotelsData);
  

  const [rooms,setRooms] = useState([]);
  const [hotelss,setHotelss] = useState([]);
  useEffect(()=>{
    fetch(`${import.meta.env.VITE_API_URL}/hotels`)
    .then(res=>res.json())
    .then(data=>setHotelss(data))
    .catch(err=>console.error(err))
  },[])
  useEffect(()=>{
    fetch(`${import.meta.env.VITE_API_URL}/rooms`)
    .then(res=>res.json())
    .then(data=>setRooms(data))
    .catch(err=>console.error(err))
  },[])




  const navigate = useNavigate();
  const {visibleBara} =useOutletContext(); 
  const iconCamAct ={
    vizualieaza:FaRegEye,
    istoric:MdAccessTime,
    edit:GoPencil,
    dezactivare:MdOutlinePauseCircleOutline,
    sterge: FaRegTrashCan
  }
  const camAct = [
    {icon:"vizualieaza",text:"Vizualizeaza detalii"},
    {icon:"istoric",text:"Istoric rezervari"},
    {icon:"edit",text:"Editeaza camera"},
    {icon:"dezactivare",text:"Stare camera"},
    {icon:"sterge",text:"Sterge camera"},
  ];
  const [modalCamAct,setModalCamAct] = useState(null);
    
  let totalCamere = rooms?.length;
  let totalVenituriCamere = 0;
  
  let camereleCodLista = [];
  hotels.forEach(hotel=>
    hotel.rooms.forEach(room=>{
      camereleCodLista.push(room.codCamer)
    })
  )

  hotels?.forEach(hotel=>{
    hotel?.rooms?.forEach(room=>{
      totalVenituriCamere += room?.price || 0
    });
  })

  
  const totalCamereDisponibile = rooms?.filter(room=>room?.disponibilitate === "Disponibil").length || 0;
  const totalCamereOcupate = rooms?.filter(room=>room.disponibilitate === "Ocupat").length ||0;
  const totalCamereAsteptare = rooms?.filter(room => room.disponibilitate === "Asteptare").length ||0

  const totalVenit = rooms?.reduce((suma,camera)=>{
    return suma +Number(camera.pret_camera);
  },0)

  
  
  const iconMap = {
    nrHotel: IoBedOutline,
    disponnibil: FaRegCheckCircle,
    ocupate: LuCalendarCog,
    asteptare: LuCalendarSync,
    venit: TbMoneybagHeart
  }

  const [visibleToateHot, setVisiibleToateHot] = useState(false);
  const [visibleDimensiuni, setVisiibleDimensiuni] = useState(false);
  const [visibleStats, setVisiibleStats] = useState(false);

  const [visibleEditStats,setVisibleEditStats]= useState(false);

  const [visibleCameraActiune,setVisibleCameraActiune] = useState(null);
  const [stareCame,setStareCame]=useState(null);

  const location = useLocation();
  const visibleAdaugaCamera = location.pathname === `/admin/admin-camere`

  return (
    <div className='mt-18 '>
      {visibleAdaugaCamera &&(<div className=''>
        <div className='flex items-center justify-between text-[14px] space-x-3 max-modf2:flex-col max-modf2:items-start max-modf2:space-y-3'>
          <div>
            <p className='text-[22px] font-medium'>Camere</p>
            <p className='text-gray-400'>Gestioneaza toate camerele din platforma.</p>
          </div>
          <div className='shrink-0'>
            <button onClick={()=>navigate("adauga-camera")} className='flex items-center space-x-3 bg-button px-3 py-0.5 rounded-lg hover:bg-button/60 cursor-pointer transition-all duration-300 ease-in-out'>
              <p className='mb-0.5 font-medium text-[22px]'>+</p>
              <p>Adauga camere</p>
            </button>
          </div>
        </div>

        
        <ul className={`max-modf6:grid-cols-3 max-modf:grid-cols-2 ${visibleBara? "max-modf2:grid-cols-1": "max-modf2:grid-cols-2"} gap-3 mt-4 grid-cols-5 grid `}>
          {
            [
              {icon:"nrHotel",nume:"Total camere",bgI:"bg-button/30",textI:"text-button",nr:totalCamere},
              {icon:"disponnibil",nume:"Disponibile",bgI:"bg-green-400/30",textI:"text-green-400",nr:totalCamereDisponibile},
              {icon:"ocupate",nume:"Ocupate",bgI:"bg-red-400/30",textI:"text-red-400",nr:totalCamereOcupate},
              {icon:"asteptare",nume:"In asteptare",bgI:"bg-orange-400/30",textI:"text-orange-400",nr:totalCamereAsteptare},
              {icon:"venit",nume:"Venituri din camere",bgI:"bg-green-400/30",textI:"text-green-400",nr:Math.round((totalVenit)*100)/100,valuta:"RON"},
            ].map((par,i)=>
            {
              const Icon = iconMap[par.icon];
              return(
              <li key={i} className='flex items-center space-x-3 text-[12px] border border-button/30 px-3 py-1.5 rounded-lg   text-gray-400 '>
                <div className={`px-2 py-2 ${par.bgI} rounded-full`}>
                  {Icon && <Icon className={`${par.textI} `} size={20}/>}
                </div>
                <div>
                  <p>{par.nume}</p>
                  <p className='text-[20px] text-white'>{par.nr} {par.valuta}</p>
                  <p><span className={`${par.textI}`}>{par.procent}</span> {par.text}</p>
                </div>
              </li>
            )})
          }
        </ul>

        <div className='mt-4 text-[22px]'>
          <p>Filtreaza dupa:</p> 
        </div>
        <div className={`mt-2 grid grid-cols-4 gap-3 ${visibleBara? "max-modf7:grid-cols-3 max-modf4:grid-cols-2 max-modf1:grid-cols-1":"max-modf6:grid-cols-3 max-modf:grid-cols-2 max-modf2:grid-cols-1"}`}>
          <div className=''>
            <div className='relative w-full '>
              <div className='absolute right-3 top-1/2 -translate-y-1/2'>
                <FaSearch className='text-button'/>
              </div>
              <input className='border  outline-0 border-button/30 w-full pl-3 pr-8 py-1 rounded-lg ' placeholder='Cauta camera dupa nume, hotel...' type="text" name="" id="" />
            </div>
            
          </div>
          
          <div className=''>
            <div className='relative'>
              <button onClick={()=>setVisiibleToateHot(!visibleToateHot)} className={`${visibleToateHot?"bg-button/60 rounded-t-lg":"rounded-lg bg-transparent"} flex items-center border px-3 py-1  border-button/30 justify-between w-full cursor-pointer hover:bg-button/60 transition-all duration-300 ease-in-out`}>
                <p>Toate hotelurile</p>
                <div>
                  {visibleToateHot? <IoIosArrowUp />:<IoIosArrowDown />}
                </div>
              </button>
              
              <ul className={`absolute z-100 overflow-hidden overflow-y-scroll scrollbar-thin w-full ${visibleToateHot? "max-h-60 opacity-100": "max-h-0 opacity-0"} transition-all duration-500 ease-in-out bg-background`}>
                <li className='border px-3 py-1 w-full border-button/30 hover:bg-button/60 cursor-pointer transition-all duration-300 ease-in-out'>
                  <p> Toate hotelurile</p>
                </li>
                {
                  hotelss.map((hotel,i)=>(
                    <li key={hotel.id} className='border px-3 py-1 w-full border-button/30 hover:bg-button/60 cursor-pointer transition-all duration-300 ease-in-out'>
                      <p>{hotel.nume}</p>
                    </li>
                  ))
                }
              </ul>
              
            </div>
          </div>

          
          <div className=''>
            <div className='relative'>
              <button onClick={()=>setVisiibleDimensiuni(!visibleDimensiuni)} className={`${visibleDimensiuni?"bg-button/60 rounded-t-lg":"rounded-lg bg-transparent"} flex items-center border px-3 py-1  border-button/30 justify-between w-full cursor-pointer hover:bg-button/60 transition-all duration-300 ease-in-out`}>
                <p>Toate dimensiunile</p>
                <div>
                  {visibleDimensiuni? <IoIosArrowUp />:<IoIosArrowDown />}
                </div>
              </button>
              
              <ul className={`absolute  overflow-hidden scrollbar-thin overflow-y-scroll   w-full ${visibleDimensiuni? "max-h-60 opacity-100": "max-h-0 opacity-0"} transition-all duration-500 ease-in-out z-100 bg-background`}>
                <div className='border px-3 py-1 w-full border-button/30 hover:bg-button/60 cursor-pointer transition-all duration-300 ease-in-out'>
                  <p> Toate dimensiunile</p>
                </div>
                {
                  
                  rooms?.map((room,i)=>
                  <li key={i} className='border px-3 py-1 w-full border-button/30 hover:bg-button/60 cursor-pointer transition-all duration-300 ease-in-out'>
                    <p>{room?.dimensiune}</p>
                  </li>
                  )
                  
                }
              </ul>
              
            </div>
          </div>

          
          <div className=''>
            <div className='relative'>
              <button onClick={()=>setVisiibleStats(!visibleStats)} className={`${visibleStats?"bg-button/60 rounded-t-lg":"rounded-lg bg-transparent"} flex items-center border px-3 py-1  border-button/30 justify-between w-full cursor-pointer hover:bg-button/60 transition-all duration-300 ease-in-out`}>
                <p>Toate statusurile</p>
                <div>
                  {visibleStats? <IoIosArrowUp />:<IoIosArrowDown />}
                </div>
              </button>
              
              <ul className={`absolute  overflow-hidden w-full ${visibleStats? "max-h-100 opacity-100": "max-h-0 opacity-0"} transition-all duration-500 ease-in-out z-100 bg-background`}>
                <div className='border px-3 py-1 w-full border-button/30 hover:bg-button/60 cursor-pointer transition-all duration-300 ease-in-out'>
                  <p> Toate statusurile</p>
                </div>
                {
                  ["Disponibil","Ocupat","Asteptare"].map((par,i)=>(
                    <li key={i} className='border px-3 py-1 w-full border-button/30 hover:bg-button/60 cursor-pointer transition-all duration-300 ease-in-out'>
                      <p>{par}</p>
                    </li>
                  ))
                }
              </ul>
              
            </div>
          </div>

          

          


        </div>


        <div className='mt-4  border border-button/30 text-[14px] py-3 rounded-lg'>

        
          <div className='overflow-x-auto min-w-0 scrollbar-thin pb-2'>
            <div className='flex space-x-3 px-3'>
              <div className={`${visibleBara?"max-modf7:w-55":"max-modf7:w-67"} modf7:flex-3 shrink-0 transition-[width] duration-300 ease-in-out`}>Camera</div>
              <div className={`${visibleBara? "max-modf7:w-43":"max-modf7:w-60"} modf7:flex-2 shrink-0 transition-[width] duration-300 ease-in-out`}>Hotel</div>
              <div className={`${visibleBara?"max-modf7:w-30":"max-modf7:w-35"} modf7:flex-1 shrink-0 transition-[width] duration-300 ease-in-out`}>Tip camera</div>
              <div className={`${visibleBara? "max-modf7:w-19": "max-modf7:w-20"}  modf7:flex-1 shrink-0 transition-[width] duration-300 ease-in-out`}>Dimensiune</div>
              <div className={`${visibleBara?"max-modf7:w-23":"max-modf7:w-25"} modf7:flex-1  shrink-0 transition-[width] duration-300 ease-in-out`}>Capacitate</div>
              <div className={`${visibleBara?"max-modf7:w-23":"max-modf7:w-25"} modf7:flex-1 shrink-0 transition-[width] duration-300 ease-in-out`}>Pret/noapte</div>
              <div className={`${visibleBara? "max-modf7:w-25": "max-modf7:w-28"} modf7:flex-1 shrink-0 transition-[width] duration-300 ease-in-out `}>Status</div>
              <div className={`${visibleBara? "max-modf7:w-19": "max-modf7:w-23"} modf7:flex-1 shrink-0  transition-[width] text-center duration-300 ease-in-out `}>Actiuni</div>
            </div>

            <ul className='mt-3'>

              {
                
                rooms?.map((room,i1)=>(
                  <li key={room.id} className='border-y border-y-button/30 py-3 space-y-3 min-w-max'>
                    
                    <div className='flex space-x-3 px-3 items-center text-gray-400'>

                      <div className={`${visibleBara?"max-modf7:w-55":"max-modf7:w-67"} modf7:flex-3  shrink-0 transition-[width] duration-300 ease-in-out flex items-center space-x-3`}>
                        <div className='w-16 rounded-lg h-16 overflow-hidden shrink-0'>
                          <img className='w-full h-full hover:scale-110 transition-all duration-300 ease-in-out rounded-lg' src={
    room.image.startsWith("http")
      ? room.image
      : `${import.meta.env.BASE_URL}${room.image}`
  }
 alt="" />
                        </div>
                        <div>
                          <p className='text-white'>{room.title}</p>
                          <p>{room.cod_camera}</p>
                        </div>
                      </div>


                      <div className={`${visibleBara? "max-modf7:w-43":"max-modf7:w-60"} modf7:flex-2 shrink-0 transition-[width] duration-300 ease-in-out`}>
                        <p className='text-white'>{room.nume}</p>
                        <p>{room.locatie}</p>
                      </div>


                      <div className={`${visibleBara?"max-modf7:w-30":"max-modf7:w-35"} modf7:flex-1 shrink-0 transition-[width] duration-300 ease-in-out`}>
                        <p>{room.tip_vedere}</p>
                      </div>


                      <div className={`${visibleBara? "max-modf7:w-19": "max-modf7:w-20"} modf7:flex-1 shrink-0 transition-[width] duration-300 ease-in-out `}>
                        <p className='ml-3'>{room.dimensiune} m<span className='align-super text-[10px]'>2</span></p>
                      </div>


                      <div className={`${visibleBara?"max-modf7:w-23":"max-modf7:w-25"} modf7:flex-1 shrink-0 transition-[width] duration-300 ease-in-out`}>
                        <p>{room.capacitate_camera}</p>
                      </div>


                      <div className={`${visibleBara?"max-modf7:w-23":"max-modf7:w-25"} modf7:flex-1 shrink-0 transition-[width] duration-300 ease-in-out`}>
                        <p className='text-white'>{Math.round((room.pret_camera)*100)/100} RON</p>
                      </div>


                      <div className={`${visibleBara? "max-modf7:w-25": "max-modf7:w-28"} modf7:flex-1 shrink-0 transition-[width] duration-300 ease-in-out`}>
                        <p className={` rounded-sm text-center ${room.disponibilitate==="Disponibil"?"bg-green-400/30 text-green-400":
                          room.disponibilitate==="Ocupat"?"bg-red-400/30 text-red-400":"bg-orange-400/30 text-orange-400"

                        }`}>{room.disponibilitate}</p>
                      </div>


                      <div className={`${visibleBara? "max-modf7:w-19": "max-modf7:w-23"} modf7:flex-1 shrink-0 transition-[width]  duration-300 ease-in-out`}>
                        <div className='flex justify-center space-x-3  '>
                          <button onClick={()=>{setModalCamAct(()=>({actiune:2,room})); document.body.classList.add("overflow-hidden"); setVisibleCameraActiune(null)}} className='px-1.5 py-1.5 cursor-pointer border rounded-sm border-button/30'>
                            <GoPencil className='text-button' />
                          </button>
                          <div className='relative'>
                            <button onClick={()=>{setVisibleCameraActiune(visibleCameraActiune === room.id?null:room.id); }} className='px-1.5 py-1.5 border cursor-pointer rounded-sm border-button/30'>
                              <BsThreeDotsVertical />
                            </button>
                            {
                            visibleCameraActiune ===room.id && (
                              <div className={`absolute  mt-3 right-10 ${visibleCameraActiune === rooms[rooms.length-1].id? "-bottom-3":"top-1/2 -translate-y-1/2"}  z-600  `}>
                                <div className='bg-background w-47 relative border rounded-lg border-button py-1.5'>
                                  <ul className=' px-1'>
                                    {
                                      camAct.map((act,iAct)=>{
                                        const IconActCam = iconCamAct[act.icon];
                                        
                                        return(
                                        <li onClick={()=>{setModalCamAct(()=>({actiune:iAct,room})); document.body.classList.add("overflow-hidden"); setVisibleCameraActiune(null)}} key={iAct} className={` px-3 cursor-pointer py-1.5 transition-all duration-300 ease-in-out flex items-center space-x-3 ${iAct === camAct.length-1? "text-red-400 hover:bg-red-400/30":"hover:bg-button/60 text-white"}`}>
                                          {IconActCam && <IconActCam />}
                                          <p>{act.text}</p>
                                        </li>
                                      )})
                                    }
                                  </ul>

                                  <div className={`absolute w-3 h-3 bg-button  -right-3 ${visibleCameraActiune === rooms[rooms.length-1].id? "bottom-4.5":"top-1/2 -translate-y-1/2 -mt-3"}`} style={{clipPath: "polygon(0% 100%, 100% 50%, 0 0"}}></div>
                                  <div className={`absolute w-3 h-3 bg-background  -right-2.75 ${visibleCameraActiune === rooms[rooms.length-1].id? "bottom-4.5":"top-1/2 -translate-y-1/2 -mt-3"}`} style={{clipPath: "polygon(0% 100%, 100% 50%, 0 0"}}></div>
                                </div>
                              </div>
                              )
                            }
                          </div>
                          

                          
                        </div>
                      </div>
                    </div>
                  </li>
                ))
              }

              {
                modalCamAct && (

                  <div className='fixed bg-gray-400/15  inset-0 z-600 flex justify-center items-center'>

                    <div className='px-3 py-3 flex justify-center w-full'>

                      {
                        modalCamAct.actiune === 0 && (
                          <div className='border border-button bg-background overflow-y-auto overflow-hidden max-h-[95vh] scrollbar-thin px-3 py-3 w-165 rounded-lg'>
                            <div className='flex justify-between'>
                              <p className='text-[18px] text-white'>Detalii camera</p>
                              <IoClose onClick={()=>{setModalCamAct(null); document.body.classList.remove("overflow-hidden")}}  className='text-[18px] cursor-pointer'/>
                            </div>

                            <div className='grid grid-cols-2 max-modf2:grid-cols-1 mt-2 gap-3'>
                              <div className=''>
                                <div className='w-full h-45'>
                                  <img className='w-full h-full' src={`${import.meta.env.BASE_URL}${modalCamAct.room.image}`} alt="" />
                                </div>

                                <div className='flex space-x-1 items-center mt-1.5'>
                                  <div className='grid grid-cols-4 gap-1.5 flex-1'>
                                    <img className='w-full h-15' src={`${import.meta.env.BASE_URL}${modalCamAct.room.image}`} alt="" />
                                    <img className='w-full h-15' src={`${import.meta.env.BASE_URL}${modalCamAct.room.image}`} alt="" />
                                    <img className='w-full h-15' src={`${import.meta.env.BASE_URL}${modalCamAct.room.image}`} alt="" />
                                    <img className='w-full h-15' src={`${import.meta.env.BASE_URL}${modalCamAct.room.image}`} alt="" />
                                  </div>
                                  <button className=' flex justify-center text-[19px] bg-button/30 rounded-lg cursor-pointer'>
                                    <MdKeyboardArrowRight/>
                                  </button>
                                </div>
                              </div>

                              <div className='space-y-1'>
                                <p className='text-[16px]'>Informatii generale</p>

                                <div className='grid grid-cols-2 gap-3'>
                                  <p>Nume camera</p>
                                  <p className='text-gray-400'>{modalCamAct.room.title}</p>
                                </div>
                                <div className='grid grid-cols-2 gap-3'>
                                  <p>Cod camera</p>
                                  <p className='text-gray-400'>{modalCamAct.room.cod_camera}</p>
                                </div>
                                <div className='grid grid-cols-2 gap-3'>
                                  <p>Hotel</p>
                                  <p className='text-gray-400'>{modalCamAct.room.nume}</p>
                                </div>
                                
                                <div className='grid grid-cols-2 gap-3'>
                                  <p>Tip vedere</p>
                                  <p className='text-gray-400'>{modalCamAct.room.tip_vedere}</p>
                                </div>
                                <div className='grid grid-cols-2 gap-3'>
                                  <p>Descriere</p>
                                  <p className='text-gray-400'>{modalCamAct.room.scurta_descriere}</p>
                                </div>
                              </div>
                            </div>


                            <div className='mt-2 '>
                              <p  className='text-[16px]'>Detalii camera</p>

                              <div className='border border-button/30 px-3 py-1.5 max-modf8:grid-cols-2 max-modf2:gap-1.5 rounded-lg grid grid-cols-4 mt-2'>
                                <div className='text-center '>
                                  <p>Dimensiune</p>
                                  <p className='text-gray-400'>{modalCamAct.room.dimensiune} m<span className='align-super text-[10px]'>2</span></p>
                                </div>
                                <div className='text-center '>
                                  <p>Capacitate</p>
                                  <p className='text-gray-400'>{modalCamAct.room.capacitate_camera} </p>
                                </div>
                                <div className='text-center '>
                                  <p>Paturi</p>
                                  <p className='text-gray-400'>{modalCamAct.room.tipul_patului} </p>
                                </div>
                                <div className='text-center '>
                                  <p>Pret/noapte</p>
                                  <p className='text-gray-400'>{modalCamAct.room.pret_camera} RON</p>
                                </div>
                              </div>
                            </div>
                            <div className='mt-2'>
                              <p className='text-[16px]'>Facilitati</p>
                              <ul className='grid grid-cols-3 gap-x-6 gap-1.5 max-modf8:grid-cols-2 list-disc text-gray-400 marker:text-button ml-5'>
                                
                                {
                                  modalCamAct.room.facilitati.map((fac,iFaci)=>(
                                    <li key={iFaci}>
                                      <p>{fac.nume_facilitate}</p>
                                    </li>
                                  ))
                                }
                                
                              </ul>
                            </div>

                            <div className='flex modf8:space-x-3 mt-2 modf8:justify-end max-modf8:flex-col max-modf8:space-y-3'>
                              <button onClick={()=>{setModalCamAct(null); document.body.classList.remove("overflow-hidden")}} className='border border-button/30 px-3 py-1.5 rounded-sm hover:bg-button/60 cursor-pointer transition-all duration-300 ease-in-out'>Inchide</button>
                              <button onClick={()=>{setModalCamAct(prev=>({...prev,actiune:2})); document.body.classList.remove("overflow-hidden")}} className='border border-button/30 px-3 py-1.5 bg-button rounded-sm hover:bg-button/60 cursor-pointer transition-all duration-300 ease-in-out'>Editeaza camera</button>
                            </div>
                          </div>
                        )
                      }

                      {
                        modalCamAct.actiune === 1 && (
                          <div className='border border-button bg-background overflow-y-auto overflow-hidden max-h-[95vh] scrollbar-thin px-3 py-3 rounded-lg w-195'>
                            <div className='flex justify-between'>
                              <p className='text-[18px] text-white'>Istoric rezervari</p>
                              <IoClose onClick={()=>{setModalCamAct(null); document.body.classList.remove("overflow-hidden")}}  className='text-[18px] cursor-pointer'/>
                            </div>

                            <div className='flex justify-between space-x-4 items-center'>
                              <div className='flex modf8:space-x-3 max-modf8:space-y-1.5 modf8:items-center max-modf8:flex-col'>
                                <div className='w-15 h-15 mt-1.5 overflow-hidden border border-button/30 rounded-sm shrink-0'>
                                  <img className='rounded-sm  object-center  hover:scale-110 transition-all duration-300 ease-in-out  w-full h-full shrink-0' src={`${import.meta.env.BASE_URL}${modalCamAct.room.image}`} alt="" />
                                </div>

                                <div className='space-y-1.5 max-modf8:space-y-0.5'>
                                  <p>{modalCamAct.room.title}</p>
                                  <p className='text-gray-400'>{modalCamAct.room.cod_camera} &middot; {modalCamAct.room.nume}, {modalCamAct.room.locatie}</p>
                                </div>
                              </div>
                              
                              <div>
                                <p className={` px-3 ${modalCamAct.room.disponibilitate==="Disponibil"?"bg-green-400/30 text-green-400":
                          modalCamAct.room.disponibilitate==="Ocupat"?"bg-red-400/30 text-red-400":"bg-orange-400/30 text-orange-400"

                        } py-0.5 rounded-sm`}>{modalCamAct.room.disponibilitate}</p>
                              </div>
                            </div>

                            <div className=' mt-1.5 flex'>
                              <div className='relative group cursor-pointer'>
                                <p className=''>Toate rezervarile</p>
                                <div className='absolute w-0 h-0.5 bg-button transition-all duration-300 ease-in-out  group-hover:w-full'></div>
                              </div>
                            </div>


                            <div className='mt-2 border border-button/30 py-3 rounded-sm min-w-0 overflow-x-auto scrollbar-thin'>
                              <div className='pr-3'>
                                <div className='flex space-x-3  pb-3'>
                                  <div className='shrink-0  w-58 pl-3'>Oaspete</div>
                                  <div className='shrink-0  w-23'>Check-in</div>
                                  <div className='shrink-0  w-23'>Check-out</div>
                                  <div className='shrink-0  w-10'>Nopti</div>
                                  <div className='shrink-0  w-20'>Oaspeti</div>
                                  <div className='shrink-0  w-16'>Total</div>
                                  <div className='shrink-0  w-20 text-center '>Status</div>
                                </div> 

                                <ul>
                                  {
                                    modalCamAct.room.rezervari.map((rez,irez)=>(
                                      <li key={rez.id} className='flex space-x-3 py-3 border-y items-center border-y-button/30 min-w-max text-gray-400'>
                                        <div className='shrink-0 flex items-center space-x-3  w-58 px-3'>
                                          <div className='w-10 h-10 rounded-full shrink-0'>
                                            <img className='w-full h-full rounded-full' src={`${import.meta.env.BASE_URL}${rez.poza_profil}`} alt="" />
                                          </div>
                                          <div className=''>
                                            <p>{rez.nume_client} {rez.prenume_client}</p>
                                            <p className='break-all text-[13px]'>{rez.email_client}</p>
                                          </div>
                                        </div>
                                        <div className='shrink-0  w-23'>{rez.check_in}</div>
                                        <div className='shrink-0  w-23'>{rez.check_out}</div>
                                        <div className='shrink-0  w-10 text-center'>{rez.numar_nopti} nopti</div>
                                        <div className='shrink-0  w-20'>{rez.nr_adulti} adulti {rez.nr_copii} copii</div>
                                        <div className='shrink-0  w-16'>{modalCamAct.room.pret_camera *rez.numar_nopti} RON</div>
                                        <div className={`shrink-0  w-20 text-center `}><p className={`${rez.status_rezervare==="Finalizata"?"text-green-400 bg-green-400/30": "text-red-400 bg-red-400/30"} w-[90%]`}>{rez.status_rezervare}</p></div>
                                      </li>
                                    ))
                                  }
                                </ul>
                              
                              </div> 
                            </div>
                          </div>
                        )
                      }

                      {
                        modalCamAct.actiune === 2 && (
                          <div className='border border-button bg-background overflow-y-auto overflow-hidden max-h-[95vh] scrollbar-thin px-3 py-3 rounded-lg w-150'>
                            <div className='flex justify-between'>
                              <p className='text-[18px] text-white'>Editeaza camera</p>
                              <IoClose onClick={()=>{setModalCamAct(null); document.body.classList.remove("overflow-hidden")}}  className='text-[18px] cursor-pointer'/>
                            </div>

                            <div className='grid grid-cols-2 max-modf8:grid-cols-1 gap-3 mt-1.5'>
                              <div className=' space-y-1.5'>
                                <p>Informatii generale</p>

                                <div className='text-gray-400 space-y-1'>
                                  <p >Nume camera <span className='text-red-600'>*</span></p>
                                  <input type="text" defaultValue={modalCamAct.room.title} className='border w-full border-button/30 px-3 py-1.5 rounded-lg outline-0 text-white placeholder:text-white' />
                                </div>

                                <div className='text-gray-400 space-y-1'>
                                  <p >Cod camera <span className='text-red-600'>*</span></p>
                                  <input type="text" defaultValue={modalCamAct.room.cod_camera} className='border w-full border-button/30 px-3 py-1.5 rounded-lg outline-0 text-white placeholder:text-white' />
                                </div>

                                <div className='text-gray-400 space-y-1'>
                                  <p >Hotel <span className='text-red-600'>*</span></p>
                                  <input type="text" defaultValue={modalCamAct.room.nume} className='border w-full border-button/30 px-3 py-1.5 rounded-lg outline-0 text-white placeholder:text-white' />
                                </div>

                                <div className='text-gray-400 space-y-1'>
                                  <p >Descriere </p>
                                  <textarea type="text" defaultValue={modalCamAct.room.scurta_descriere} className='border w-full border-button/30 px-3 py-1.5 rounded-lg outline-0 text-white placeholder:text-white resize-none h-24' ></textarea>
                                </div>

                                <div className='space-y-1'>
                                  <p>Facilitati</p>
                                  <div className='mt-3 max-modf8:text-[10px]'>
                                    <label className='relative '>
                                      <input type="text" className='border peer w-full border-button/30 px-3 py-1.5 rounded-lg outline-0 text-white' placeholder=' '/>
                                      <span className='absolute left-4  top-1/2 -translate-y-1/2   bg-background pointer-events-none 
                                      peer-not-placeholder-shown:-top-2.5
                                      peer-not-placeholder-shown:text-[12px]
                                      peer-not-placeholder-shown:max-modf8:text-[8px]
                                      peer-not-placeholder-shown:text-button
                                      peer-not-placeholder-shown:px-2
                                      peer-placeholder-shown:top-1/2
                                      peer-placeholder-shown:-translate-y-1/2
                                      peer-focus:-top-2.5
                                      peer-focus:text-[12px]
                                      peer-focus:max-modf8:text-[8px]
                                      peer-focus:text-button
                                      peer-focus:px-2
                                      transition-all duration-300 ease-in-out
                                      '>Introdu cate o facilitate</span>
                                    </label>
                                  </div>
                                </div>



                              </div>

                              <div className='space-y-1.5'>
                                <p>Detalii camera</p>

                                <div className='text-gray-400 space-y-1'>
                                  <p >Dimensiune </p>
                                  <div className='relative w-full'>
                                    <input type="text" defaultValue={modalCamAct.room.dimensiune} className='border w-full border-button/30 pl-3 pr-10 py-1.5 rounded-lg outline-0 text-white placeholder:text-white' />
                                    <p className='absolute text-white right-3 top-1/2 -translate-y-1/2'>m <span className='align-super text-[10px] '>2</span></p>
                                  </div>
                                </div>

                                <div className='text-gray-400 space-y-1'>
                                  <p >Capacitate </p>
                                  <div className='relative w-full'>
                                    <input type="text" defaultValue={modalCamAct.room.capacitate_camera} className='border w-full border-button/30 pl-3 pr-20 py-1.5 rounded-lg outline-0 text-white placeholder:text-white' />
                                    
                                  </div>
                                </div>

                                <div className='text-gray-400 space-y-1'>
                                  <p >Paturi </p>
                                  <div className='relative w-full'>
                                    <input type="text" defaultValue={modalCamAct.room.tipul_patului} className='border w-full border-button/30 px-3 py-1.5 rounded-lg outline-0 text-white placeholder:text-white' />
                                  </div>
                                </div>

                                <div className='text-gray-400 space-y-1'>
                                  <p >Pret/noapte </p>
                                  <div className='relative w-full'>
                                    <input type="text" defaultValue={modalCamAct.room.pret_camera} className='border w-full border-button/30 pr-12 pl-3 py-1.5 rounded-lg outline-0 text-white placeholder:text-white' />
                                    <p className='absolute text-white right-3 top-1/2 -translate-y-1/2'>RON</p>
                                  </div>
                                </div>

                                <div className='text-gray-400 space-y-1'>
                                  <p >Status </p>
                                  <div className='relative w-full'>
                                    <button onClick={()=>setVisibleEditStats(!visibleEditStats)} className={`border px-3 py-1.5 flex space-x-3 hover:bg-button/60 transition-all duration-300 ${visibleEditStats?"bg-button/60":"bg-transparent"} ease-in-out cursor-pointer justify-between items-center text-start w-full border-button/30  ${modalCamAct.room.disponibilitate === "Disponibil"?"text-green-400":modalCamAct.room.disponibilitate==="Ocupat"?"text-red-400":"text-orange-400"}`}>
                                      <p>{modalCamAct.room.disponibilitate}</p>
                                      {visibleEditStats? <IoIosArrowUp  className='text-white'/>:<IoIosArrowDown  className='text-white'/>}
                                    </button>
                                    <ul className={`absolute w-full transition-all duration-500 ease-in-out ${visibleEditStats?"max-h-30 opacity-100":"max-h-0 opacity-0"} bg-background z-300 overflow-hidden bottom-8.75`}>
                                      {
                                        ["Disponibil","Asteptare","Ocupat"].map((stat,iStat)=>(
                                          <li key={iStat} className={`border w-full hover:bg-button/60 cursor-pointer border-button/30 px-3 py-1.5 `}>
                                            {stat}
                                          </li>
                                        ))
                                      }
                                    </ul>
                                  </div>
                                </div>

                                <div>
                                  <div className='w-full h-40 shrink-0'>
                                    <img className='w-full h-full object-center' src={`${import.meta.env.BASE_URL}${modalCamAct.room.image}`} alt="" />
                                  </div>

                                  <div className='w-full mt-1.5'>
                                    <button className='border hover:bg-button/60 transition-all duration-300 ease-in-out border-button/30 w-full px-3 py-1.5 flex items-center space-x-3 justify-center cursor-pointer'> <FiUpload/> <p>Schimba imagine</p></button>
                                  </div>
                                </div>



                              </div>
                            </div>

                            <div className='flex modf8:space-x-3 mt-2 modf8:justify-end max-modf8:flex-col max-modf8:space-y-3'>
                              <button onClick={()=>{setModalCamAct(null); document.body.classList.remove("overflow-hidden")}} className='px-3 py-1 border border-button/30 hover:bg-button/60 transition-all duration-300 ease-in-out cursor-pointer rounded-sm'>Anuleaza</button>
                              <button onClick={()=>{setModalCamAct(null); document.body.classList.remove("overflow-hidden")}} className='px-3 py-1 border border-button/30 bg-button hover:bg-button/60 transition-all duration-300 ease-in-out cursor-pointer rounded-sm'>Salveaza modificarile</button>
                            </div>
                          </div>
                        )
                      }

                      {
                        modalCamAct.actiune === 3 && (
                          <div className='border border-button bg-background overflow-y-auto overflow-hidden max-h-[95vh] scrollbar-thin px-3 py-3 rounded-lg w-100'>
                            <div className='flex justify-end'>
                              
                              <IoClose onClick={()=>{setModalCamAct(null); document.body.classList.remove("overflow-hidden")}}  className='text-[18px] cursor-pointer'/>
                            </div>

                            <div className='flex justify-center '>
                              <div className={` px-3 py-3 rounded-full ${modalCamAct.room.stare_activare_camera === true?"text-orange-400 bg-orange-400/12": "text-green-400 bg-green-400/12"} shrink-0`}>
                                <AiOutlineExclamationCircle className='shrink-0' size={30}/>
                              </div>
                            </div>
                            
                            {
                              modalCamAct.room.stare_activare_camera === true ? (
                                <div className='flex text-center flex-col  w-[95%] text-gray-400 mx-auto mt-3'>
                                  <p className='text-white text-[19px] font-medium'>Dezactiveaza camera</p>
                                  <p className='mt-1.5'>Esti pe cale sa dezactivezi camera {modalCamAct.room.title}.</p>
                                  <p className='mt-1.5'>Camera nu va mai fi disponibila pentru rezervari pana cand o reactivezi. Aceasta actiune poate fi anulata oricand.</p>

                                </div>
                              ) : (
                                <div className='flex text-center flex-col  w-[95%] text-gray-400 mx-auto mt-3'>
                                  <p className='text-white text-[19px] font-medium'>Activeaza camera</p>
                                  <p className='mt-1.5'>Esti pe cale sa activezi camera {modalCamAct.room.title}.</p>
                                  <p className='mt-1.5'>Camera va fi disponibila pentru rezervari. Aceasta actiune poate fi anulata oricand.</p>

                                </div>
                              )
                            }

                            <div className='border border-button/30 bg-button1 rounded-lg px-3 py-1.5 mt-1.5 flex space-x-3'>
                              <div className='shrink-0 mt-0.5'>
                                <AiOutlineExclamationCircle className='text-button shrink-0' size={19}/>
                              </div>
                              <div>
                                <p className='text-button'>Ce se va intampla:</p>
                                <ul className='text-gray-400 list-disc ml-4 marker:text-button'>
                                  {
                                    modalCamAct.room.stare_activare_camera === true ? 
                                    ["Camera va fi marcata ca inactiva","Nu va mai aparea in procesul de rezervare","Rezervarile existente nu vor fi afectate"].map((text,iText)=>(
                                      <li key={iText}>
                                        <p>{text}</p>
                                      </li>
                                    )):
                                    ["Camera va fi marcata ca activa","Apare in procesul de rezervare","Rezervarile existente nu vor fi afectate"].map((text,iText)=>(
                                      <li key={iText}>
                                        <p>{text}</p>
                                      </li>
                                    ))
                                  }
                                </ul>
                              </div>
                            </div>

                            <div className='flex modf8:space-x-3 mt-2 modf8:justify-end max-modf8:flex-col max-modf8:space-y-3'>
                              <button onClick={()=>{setModalCamAct(null); document.body.classList.remove("overflow-hidden")}} className='border border-button/30  px-3 py-1.5 rounded-sm hover:bg-button/60 transition-all duration-300 ease-in-out cursor-pointer'>Anuleaza</button>
                              {
                                modalCamAct.room.stare_activare_camera ===true ? (
                                  <button onClick={()=>{ setModalCamAct(null); document.body.classList.remove("overflow-hidden");
                                    setRooms(prev=>
                                      prev.map(room=>
                                        room.id === modalCamAct.room.id?
                                        {...room, stare_activare_camera: false}: room
                                      )
                                    )
                                    
                                  }} className='border border-button/30  px-3 py-1.5 rounded-sm  bg-red-600 hover:bg-red-600/60 transition-all duration-300 ease-in-out cursor-pointer'>Dezactiveaza camera</button>
                                ): (<button onClick={()=>{setModalCamAct(null); document.body.classList.remove("overflow-hidden");
                                  setRooms(prev=>
                                    prev.map(room=>
                                      room.id === modalCamAct.room.id?
                                      {...room,stare_activare_camera: true}: room
                                    )
                                  )
                                }} className='border border-button/30  px-3 py-1.5 rounded-sm  bg-green-400/60 hover:bg-green-400/50 transition-all duration-300 ease-in-out cursor-pointer'>Activeaza camera</button>)
                              }
                            </div>
                          </div>
                        )
                      }

                      {
                        modalCamAct.actiune === 4 && (
                          <div className='border border-button bg-background overflow-y-auto overflow-hidden max-h-[95vh] scrollbar-thin px-3 py-3 rounded-lg w-100'>
                            <div className='flex justify-end'>
                              
                              <IoClose onClick={()=>{setModalCamAct(null); document.body.classList.remove("overflow-hidden")}}  className='text-[18px] cursor-pointer'/>
                            </div>

                            <div className='flex justify-center'>
                              <div className='text-red-600 text-[30px]'>
                                <RxExclamationTriangle/>
                              </div>
                            </div>

                            <div className='text-center'>
                              <p className='text-[19px] font-medium'>Sterge camera</p>
                              <div className='text-gray-400 w-[85%] mt-0.5 mx-auto'>
                                <p>Esti sigur ca doresti sa stergi camera <span className='text-red-600'>{modalCamAct.room.title}</span>?</p>
                              </div>
                            </div>

                            <div className='text-center'>
                              <p className='border text-gray-400 px-3 py-3 mt-2 rounded-sm border-red-600/30'>Aceasta actiune este ireversibila si va sterge toate rezervarile asociate acestei camere.</p>
                            </div>

                            <div className='flex modf8:space-x-3 mt-2 modf8:justify-end max-modf8:flex-col max-modf8:space-y-3'>
                              <button onClick={()=>{setModalCamAct(null); document.body.classList.remove("overflow-hidden")}} className='border border-button/30 px-3 py-1.5 rounded-sm hover:bg-button/60 transition-all duration-300 ease-in-out cursor-pointer'>Anuleaza</button>
                              <button onClick={()=>{setModalCamAct(null); document.body.classList.remove("overflow-hidden")}} className='border border-button/30 px-3 py-1.5 rounded-sm bg-red-600 hover:bg-red-600/60 transition-all duration-300 ease-in-out cursor-pointer flex items-center space-x-1 w-full justify-center'><BsTrash /> <p>Sterge camera</p></button>
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

        </div>

        
        
      </div>)}


      <Outlet context={{hotels,visibleBara}}/>
    </div>  
  )
}

export default AdminCamere
