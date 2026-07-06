import React, { useState } from 'react'
import hotelsData from '../hotels/Hotel/hotels'
import { FaHotel, FaSearch, FaStar } from "react-icons/fa";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp, IoMdCloseCircleOutline } from "react-icons/io";
import { data, Outlet, useLocation, useNavigate, useOutletContext } from 'react-router-dom';
import { GoLocation, GoPencil } from "react-icons/go";
import { BsCalendar2, BsPlus, BsThreeDotsVertical, BsTrash } from "react-icons/bs";

import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaCircleCheck, FaRegCirclePause } from "react-icons/fa6";
import { MdContentCopy } from "react-icons/md";

import { FaRegTrashAlt } from "react-icons/fa";
import { IoClose } from 'react-icons/io5';
import { RxExclamationTriangle } from 'react-icons/rx';


import { BsPatchExclamation } from "react-icons/bs";

import { MdOutlineFileCopy } from "react-icons/md";
import { useEffect } from 'react';


const AdminHoteluri = () => {
  //const [hotels,setHotels] = useState(hotelsData)

  const [hotels,setHotels] = useState([]);
  useEffect(()=>{
    fetch(`${import.meta.env.VITE_API_URL}/hotels`)
    .then(res=>res.json())
    .then(data=>setHotels(data))
    .catch(err=>console.error(err))
  },[])
  
  const iconMap = {
    Hotel : FaHotel,
    Activ: FaRegCheckCircle,
    Asteptare: FaRegClock,
    Inactive: IoMdCloseCircleOutline
  }

  const {visibleBara} = useOutletContext();
  const [visibleLocatie,setVisibleLocatie] = useState(false);
  const [visibleStatus,setVisibleStatus] = useState(false);
  const iconHotelActiuni ={
    vizualizeaza:MdOutlineRemoveRedEye,
    edit:GoPencil,
    stare:FaRegCirclePause,
    clon:MdContentCopy,
    sterge:FaRegTrashAlt
  };
  const hotelActiuni = [
    {icon:"vizualizeaza",nume:"Vizualizeaza detalii"},
    {icon:"edit",nume:"Editeaza hotel"},
    {icon:"stare",nume:"Stare hotel"},
    {icon:"clon",nume:"Cloneaza hotel"},
    {icon:"sterge",nume:"Sterge hotel"},
  ];
  const [visibleHotelActiuni,setVisibleHotelActiuni] = useState(null);
  const [modalHotelActiuni,setModalHotelActiuni]= useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const showAdminHotelPage = location.pathname === `/admin/admin-hoteluri`;

  const nrActive = hotels?.filter(hotel=>hotel.stare_activare_hotel === true).length;
  const nrInactive = hotels?.filter(hotel=>hotel.stare_activare_hotel === false).length;
  const totalIncasatd = hotels?.reduce(
  (sum, hotel) => sum + Number(hotel?.total_incasat || 0),
    0
  );
  return (
    <div className='mt-18'>
      {showAdminHotelPage &&(<div >
        <div className='flex items-center justify-between text-[14px] max-modf2:flex-col max-modf2:items-start space-x-3 max-modf2:space-y-3'>
          <div>
            <p className='text-[22px] font-medium'>Hoteluri</p>
            <p className='text-gray-400'>Gestioneaza toate proprietatile din platforma.</p>
          </div>
          <div className='shrink-0'>
            <button onClick={()=>navigate("/admin/admin-hoteluri/adauga-hotel")} className='flex items-center space-x-3 bg-button px-3 py-0.5 rounded-lg hover:bg-button/60 cursor-pointer transition-all duration-300 ease-in-out'>
              <p className='mb-0.5 font-medium text-[22px]'>+</p>
              <p>Adauga hotel</p>
            </button>
          </div>
        </div>
        

        <ul className={`grid max-modf1:grid-cols-2 grid-cols-4 ${visibleBara?"max-modf:grid-cols-2": "max-modf:grid-cols-4"} text-[14px] gap-3 mt-4 }`}>
          {
            [
              {nume:"Total hoteluri",nr:hotels?.length,icon:"Hotel",bgI:"bg-button/30",colI:"text-button"},
              {nume:"Active",nr:nrActive,icon:"Activ",bgI:"bg-green-400/30",colI:"text-green-400" },
              {nume:"Venit total",nr:`${totalIncasatd} RON`,icon:"Asteptare",bgI:"bg-orange-400/30",colI:"text-orange-400" },
              {nume:"Inactive",nr:nrInactive,icon:"Inactive",bgI:"bg-red-400/30",colI:"text-red-400" }
            ].map((par,i)=>{
              const Icon = iconMap[par.icon];
              return(
              <li key={i} className='px-3 py-3 border border-button/30 rounded-lg flex items-center space-x-3'>
                <div className={`${par.bgI} px-2 rounded-full py-2`}>
                  {Icon && <Icon className={`${par.colI}`} size={18}/>}
                </div>
                <div className='text-gray-400'>
                  <p>{par.nume}</p>
                  <p className='text-white text-[19px]'>{par.nr}</p>
                </div>
              </li>
            )})
          }
        </ul>
        <div className='mt-4 text-[22px]'>
          <p>Filtreaza dupa:</p> 
        </div>
        <div className='mt-2 text-[14px] flex flex-wrap modf1:justify-between space-y-3  space-x-3'>
          <div className=''>
            <div className='relative w-80 max-modf2:w-65'>
              <div className='absolute right-3 top-1/2 -translate-y-1/2'>
                <FaSearch className='text-button'/>
              </div>
              <input className='border  outline-0 border-button/30 w-full pl-3 pr-8 py-1 rounded-lg ' placeholder='Cauta hotel dupa nume, locatie...' type="text" name="" id="" />
            </div>
            
          </div>

          <div className=''>
            <div className='relative'>
              <button onClick={()=>setVisibleLocatie(!visibleLocatie)} className={`flex items-center border  justify-between cursor-pointer border-button/30 w-50 px-3 py-1 hover:bg-button/60 transition-all duration-300 ease-in-out ${visibleLocatie?"rounded-t-lg bg-button/60":"bg-transparent rounded-lg"}`}>
                <p>Toate locatiile</p>
                {visibleLocatie? <IoIosArrowUp />:<IoIosArrowDown />}
              </button>
              <ul className={`absolute bg-background overflow-hidden z-100 w-full transition-all duration-500 ease-in-out ${visibleLocatie? "max-h-100 opacity-100": "max-h-0 opacity-0"}`}>
                {
                  ["Timisoara","Arad","Severin"].map((par,i)=>(
                    <li key={i} className='border px-3 py-1 border-button/30 hover:bg-button/60 duration-300 ease-in-out transition-all cursor-pointer'><p>{par}</p></li>
                  ))
                }
              </ul>
            </div>
          </div>


          <div>
            <div className='relative'>
              <button onClick={()=>setVisibleStatus(!visibleStatus)} className={`flex items-center border  justify-between cursor-pointer border-button/30 w-50 px-3 py-1 hover:bg-button/60 transition-all duration-300 ease-in-out ${visibleStatus?"rounded-t-lg bg-button/60":"bg-transparent rounded-lg"}`}>
                <p>Toate statusurile</p>
                {visibleStatus? <IoIosArrowUp />:<IoIosArrowDown />}
              </button>
              <ul className={`absolute bg-background overflow-hidden z-100 w-full transition-all duration-500 ease-in-out ${visibleStatus? "max-h-100 opacity-100": "max-h-0 opacity-0"}`}>
                {
                  ["Activ","Inactiv","In asteptare"].map((par,i)=>(
                    <li key={i} className='border px-3 py-1 border-button/30 hover:bg-button/60 duration-300 ease-in-out transition-all cursor-pointer'><p>{par}</p></li>
                  ))
                }
              </ul>
            </div>
          </div>

        </div>


        <div className='border border-button/30 space-y-3  py-3 rounded-lg mt-4 text-[14px]'>
          <div>
            <p className='px-3 text-[20px]'>Hoteluri ({hotels?.length})</p>
          </div>

          <ul className='overflow-x-auto space-y-3 scrollbar-thin min-w-0 pb-3 w-full'>
            
            
            
            {
            hotels?.map((par,i)=>(
              <li key={par.id} className='border-y py-3 px-3 min-w-max border-y-button/30 text-gray-400'>
                <div className='text-gray-400 flex items-center space-x-3 '>
                  <div className={`${visibleBara?"max-modf7:w-63":"max-modf7:w-75"} transition-[width] duration-300 ease-in-out max-modf7:shrink-0  modf7:flex-2`}><p>Hotel</p></div>
                  <div className={`${visibleBara?"max-modf7:w-48":"max-modf7:w-60"} transition-[width] duration-300 ease-in-out max-modf7:shrink-0  modf7:flex-2`}><p>Locatie</p></div>
                  <div className={`${visibleBara?"max-modf7:w-12 ":"max-modf7:w-20"} transition-[width] duration-300 ease-in-out  max-modf7:shrink-0  modf7:flex-1`}><p>Camere</p></div>
                  <div className={`${visibleBara?"max-modf7:w-23":"max-modf7:w-25"} transition-[width] duration-300 ease-in-out max-modf7:shrink-0  modf7:flex-1`}><p>Rating</p></div>
                  <div className={`${visibleBara?"max-modf7:w-30":"max-modf7:w-33"} transition-[width] duration-300 ease-in-out max-modf7:shrink-0  modf7:flex-1`}><p>Rezervari (30 zile)</p></div>
                  <div className={`${visibleBara?"max-modf7:w-30":"max-modf7:w-33"} transition-[width] duration-300 ease-in-out max-modf7:shrink-0  modf7:flex-1`}><p>Venituri (30 zile)</p></div>
                  <div className={`${visibleBara?"max-modf7:w-33":"max-modf7:w-36 "} transition-[width] duration-300 ease-in-out text-center  max-modf7:shrink-0  modf7:flex-1`}><p>Actiuni</p></div>
                </div>

                <div className='flex items-center space-x-3 mt-3'>

                  <div className={`${visibleBara?"max-modf7:w-63":"max-modf7:w-75"} transition-[width] duration-300 ease-in-out max-modf7:shrink-0 flex space-x-3 items-center modf7:flex-2`}>
                    <div className='w-15 h-15 rounded-lg shrink-0 overflow-hidden'>
                      <img className='w-full h-full object-center rounded-lg hover:scale-110 transition-all duration-300 ease-in-out' src={`${import.meta.env.BASE_URL}${par?.img}`} alt="" />
                    </div>

                    <div>
                      <p className='text-white'>{par.nume}</p>
                      <p>ID: {par.id}</p>
                    </div>
                  </div>
                  <div className={`${visibleBara?"max-modf7:w-48":"max-modf7:w-60"} transition-[width] duration-300 ease-in-out  max-modf7:shrink-0  modf7:flex-2`}>
                    <p className='text-white'>{par.locatie}</p>
                  </div>
                  <div className={`${visibleBara?"max-modf7:w-12":"max-modf7:w-20"} transition-[width] duration-300 ease-in-out max-modf7:shrink-0  modf7:flex-1`}>
                    <p>{par?.numar_camere}</p>
                  </div>
                  <div className={`${visibleBara?"max-modf7:w-23 ":"max-modf7:w-25"} transition-[width] duration-300 ease-in-out max-modf7:shrink-0  modf7:flex-1`}>
                    <div className='flex space-x-1.5 items-center'>
                      <FaStar className='text-yellow-400'/>
                      <p className='text-white '>{par.rating_hotel}</p>
                    </div>
                    <p>{par.total_recenzii} recenzii</p>
                  </div>
                  <div className={`${visibleBara?"max-modf7:w-30":"max-modf7:w-33"} transition-[width] duration-300 ease-in-out max-modf7:shrink-0   modf7:flex-1`}>
                    <div>
                      <p className='text-white'>{par.numar_rezervari} rezervari</p>
                      
                    </div>
                  </div>
                  <div className={`${visibleBara?"max-modf7:w-30":"max-modf7:w-33"} transition-[width] duration-300 ease-in-out max-modf7:shrink-0  modf7:flex-1`}>
                    <div>
                      <p className='text-white'>{Math.round(par.total_incasat*100)/100} RON</p>
                    </div>
                  </div>
                  <div className={`${visibleBara?"max-modf7:w-33":"max-modf7:w-36 "}  text-center transition-[width] duration-300 ease-in-out max-modf7:shrink-0  modf7:flex-1`}>
                    <div className='flex justify-center space-x-3'>
                      <button onClick={()=>{setModalHotelActiuni({actiune:1,par}); document.body.classList.add("overflow-hidden"); setVisibleHotelActiuni(null)}} className='px-1.5 py-1.5 cursor-pointer border rounded-sm border-button/30'>
                        <GoPencil className='text-button' />
                      </button>
                      <div className='relative'>
                        <button onClick={()=>setVisibleHotelActiuni(()=>visibleHotelActiuni === par.id? null: par.id)} className='px-1.5 py-1.5 border cursor-pointer rounded-sm border-button/30'>
                          <BsThreeDotsVertical />
                        </button>
                        {
                          visibleHotelActiuni === par.id && (
                            <div className={`absolute border mt-1 bg-background border-button right-10 rounded-lg  z-300 ${visibleHotelActiuni===hotels[hotels.length-1].id ? "-bottom-1":"top-1/2 -translate-y-1/2"} w-43 max-modf8:w-50`}>
                              <div className='relative'>
                                <ul className={`  py-1  px-1 `}>
                              
                                  {
                                    hotelActiuni.map((actH,iactH)=>{
                                      const IconActH = iconHotelActiuni[actH.icon];
                                      return(
                                      <li key={iactH} onClick={()=>{setModalHotelActiuni({actiune:iactH,par});setVisibleHotelActiuni(null); document.body.classList.add("overflow-hidden")}} key={iactH} className={`flex items-center px-3 py-1 transition-all duration-300 ease-in-out  cursor-pointer space-x-1.5 ${hotelActiuni.length-1 === iactH?"text-red-400 hover:bg-red-400/30": "text-white hover:bg-button/30"}`}>
                                        {IconActH && <IconActH/>}
                                        <p>{actH.nume}</p>
                                      </li>
                                      
                                    )})
                                  }
                                </ul>
                                <div className={`absolute w-3 h-3 bg-button ${visibleHotelActiuni===hotels[hotels.length-1].id?"bottom-3":"top-1/2  -translate-y-1/2"} -mt-1 -right-3`} style={{clipPath: "polygon(0 0, 100% 50%, 0 100%)"}}></div>
                                <div className={`absolute w-3 h-3 bg-background ${visibleHotelActiuni===hotels[hotels.length-1].id?"bottom-3":"top-1/2  -translate-y-1/2"} -mt-1 -right-2.75`} style={{clipPath: "polygon(0 0, 100% 50%, 0 100%)"}}></div>
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
              modalHotelActiuni && (
                <div className='fixed inset-0 bg-gray-400/15 flex items-center justify-center z-500'>
                  <div className='flex justify-center px-3 w-full'>
                    {
                      modalHotelActiuni.actiune === 0 && (
                        <div className='border border-button/30 max-h-[95vh] px-3 py-3 rounded-lg overflow-y-auto overflow-hidden scrollbar-thin bg-background w-165'>
                          <div className='flex justify-between'>
                            <p className='text-[19px] text-white'>Detalii hotel</p>
                            <IoClose onClick={()=>{setModalHotelActiuni(null); document.body.classList.remove("overflow-hidden")}}  className='text-[18px] cursor-pointer'/>
                          </div>

                          <div className='grid grid-cols-2 max-modf2:grid-cols-1 gap-3'>
                            <div className='mt-1.5 space-y-1.5'>
                              <div className='h-40 w-full max-modf2:h-60 max-modf8:h-40 relative'>
                                <img  src={`${import.meta.env.BASE_URL}${modalHotelActiuni.par.img}`} className='w-full h-full rounded-lg' alt="" />
                                <div className={`absolute right-3 top-1 px-3  text-white rounded-sm ${modalHotelActiuni.par.stare_activare_hotel===true?"bg-green-600": "bg-red-600"}`}>{modalHotelActiuni.par.stare_activare_hotel===true?"Activ":"Inactiv"}</div>
                              </div>

                              <div className='grid grid-cols-5 gap-1.5'>
                                <div>
                                  <img className='rounded-sm' src={`${import.meta.env.BASE_URL}${modalHotelActiuni.par.img}`} alt="" />
                                </div>
                                <div>
                                  <img className='rounded-sm' src={`${import.meta.env.BASE_URL}${modalHotelActiuni.par.img}`} alt="" />
                                </div>
                                <div>
                                  <img className='rounded-sm' src={`${import.meta.env.BASE_URL}${modalHotelActiuni.par.img}`} alt="" />
                                </div>
                                <div>
                                  <img className='rounded-sm' src={`${import.meta.env.BASE_URL}${modalHotelActiuni.par.img}`} alt="" />
                                </div>
                                <div className='border border-button/15 hover:bg-button/15 cursor-pointer transition-all duration-300 ease-in-out bg-button/8 rounded-sm flex items-center justify-center'>
                                  <p>+8</p>
                                </div>
                              </div>


                              <div className='space-y-1.5'>
                                <p className='text-[16px]'>Descriere</p>
                                <p className='h-25 border px-3 py-1 rounded-sm border-button/30 overflow-hidden overflow-y-scroll scrollbar-thin text-gray-400'>{modalHotelActiuni.par.descriere}</p>
                              </div>

                              <div className='mt-3'>
                                <p>Facilitati principale</p>
                                <ul className='grid grid-cols-2 mt-1 gap-1.5 text-gray-400 list-disc ml-3 marker:text-button'>
                                  {
                                    modalHotelActiuni?.par?.facilitati_principale?.map((fac,iFac)=>(
                                      <li key={fac.id} className='ml-3'>
                                        <p>{fac.nume}</p>
                                      </li>
                                    ))
                                  }
                                </ul>
                              </div>

                              
                            </div>

                            <div className='space-y-1.5'>
                              <p className='font-medium text-[18px]'>{modalHotelActiuni.par.nume}</p>
                              <p className='text-gray-400'>ID: {modalHotelActiuni.par.id}</p>
                              <div className='flex items-center space-x-1.5'>
                                <FaStar className='text-yellow-400'/>
                                <p className='font-medium'>{modalHotelActiuni.par.rating_hotel}</p>
                                <p className='text-gray-400'>({modalHotelActiuni.par.total_recenzii} recenzii)</p>
                              </div>
                              <div className='flex items-center space-x-1.5'>
                                <GoLocation size={18}/>
                                <p>{modalHotelActiuni.par.locatie}</p>
                                <p className='ml-1.5 text-button cursor-pointer hover:text-button/60 transition-all duration-300 ease-in-out'>Vezi pe harta</p>
                              </div>
                              <div className='space-y-1 border border-button/30 px-1.5 py-1.5 rounded-lg'>
                                <div className='grid grid-cols-2 gap-1.5'>
                                  <p className='text-gray-400'>Locatie</p>
                                  <p>{modalHotelActiuni.par.locatie}</p>
                                </div>
                                <div className='grid grid-cols-2 gap-1.5'>
                                  <p className='text-gray-400'>Total camere</p>
                                  <p>{modalHotelActiuni.par.numar_camere} camere</p>
                                </div>
                                <div className='grid grid-cols-2 gap-1.5'>
                                  <p className='text-gray-400'>Telefon</p>
                                  <p>{modalHotelActiuni.par.telefon_hotel}</p>
                                </div>
                                <div className='grid grid-cols-2 gap-1.5'>
                                  <p className='text-gray-400'>Email</p>
                                  <p>{modalHotelActiuni.par.site_hotel}</p>
                                </div>
                                <div className='grid grid-cols-2 gap-1.5'>
                                  <p className='text-gray-400'>Website</p>
                                  <p>{modalHotelActiuni.par.email_hotel}</p>
                                </div>
                              </div>
                              <p>Statistici (30 zile)</p>
                              <div className='grid grid-cols-2 gap-1.5'>
                                <div className='border border-button/30 text-center px-1.5  py-2 rounded-lg'>
                                  <div className=' flex justify-center'>
                                    <div className='shrink-0 bg-button/30 px-2 py-2 rounded-full text-[19px]'>
                                      <BsCalendar2 className='shrink-0 text-button'/>
                                    </div>
                                  </div>
                                  <p className='text-gray-400 mt-1.5'>{modalHotelActiuni.par.numar_rezervari} rezervari</p>
                                  
                                </div>
                                <div className='border border-button/30 text-center px-1.5  py-2 rounded-lg'>
                                  <div className=' flex justify-center'>
                                    <div className='shrink-0 bg-orange-400/30 px-2 py-2 rounded-full text-[19px]'>
                                      <FaRegClock className='shrink-0 text-orange-400'/>
                                    </div>
                                  </div>
                                  <p className='text-gray-400 mt-1.5'>{Math.round((modalHotelActiuni.par.total_incasat)*100)/100} RON</p>
                                  
                                </div>
                              </div>
                            </div>
                          </div>


                          <div className='flex modf8:space-x-3 mt-2 modf8:justify-end max-modf8:flex-col max-modf8:space-y-3'>
                            <button onClick={()=>{setModalHotelActiuni(null); document.body.classList.remove("overflow-hidden")}} className='border border-button/30 px-3 py-1.5 rounded-sm hover:bg-button/60 transition-all duration-300 ease-in-out cursor-pointer'>Inchide</button>
                            <button onClick={()=>{setModalHotelActiuni(prev=>({...prev,actiune:1}));}} className='border border-button/30 px-3 py-1.5 rounded-sm bg-button hover:bg-button/60 transition-all duration-300 ease-in-out cursor-pointer flex items-center space-x-1 justify-center w-full'> Editeaza hotel</button>
                          </div>
                        </div>
                      )
                    }

                    {
                      modalHotelActiuni.actiune === 1 && (
                        <div className='border border-button max-h-[95vh] px-3 py-3 rounded-lg overflow-y-auto overflow-hidden scrollbar-thin bg-background w-185'>
                          <div className='flex justify-between'>
                            <p className='text-[19px] text-white'>Editeaza hotelul</p>
                            <IoClose onClick={()=>{setModalHotelActiuni(null); document.body.classList.remove("overflow-hidden")}}  className='text-[18px] cursor-pointer'/>
                          </div>

                          <div className='grid grid-cols-2 gap-3 max-modf2:grid-cols-1'>


                            <div className='mt-1.5 space-y-1.5'>
                              <p>Fotografii hotel</p>
                              <div className='h-40 w-full max-modf2:h-60 max-modf8:h-40 relative'>
                                <img  src={`${import.meta.env.BASE_URL}${modalHotelActiuni.par.img}`} className='w-full h-full rounded-lg' alt="" />
                              </div>

                              <div className='grid grid-cols-5 gap-1.5'>
                                <div>
                                  <img className='rounded-sm' src={`${import.meta.env.BASE_URL}${modalHotelActiuni.par.img}`}alt="" />
                                </div>
                                <div>
                                  <img className='rounded-sm' src={`${import.meta.env.BASE_URL}${modalHotelActiuni.par.img}`} alt="" />
                                </div>
                                <div>
                                  <img className='rounded-sm' src={`${import.meta.env.BASE_URL}${modalHotelActiuni.par.img}`} alt="" />
                                </div>
                                <div>
                                  <img className='rounded-sm' src={`${import.meta.env.BASE_URL}${modalHotelActiuni.par.img}`}alt="" />
                                </div>
                                <div className='border border-button/15 hover:bg-button/15 cursor-pointer transition-all duration-300 ease-in-out bg-button/8 rounded-sm flex items-center justify-center'>
                                  <p className='text-[24px]'>+</p>
                                </div>
                              </div>
                              <p className='text-gray-400'>Format recomandat: JPG sau PNG. Dimensiune maxima: 5MB</p>
                            </div>

                            
                            <div>
                              <div className='grid grid-cols-2 max-modf8:grid-cols-1 gap-3'>
                                <div>
                                  <p>Nume hotel</p>
                                  <input className='border border-button/30 w-full outline-0 px-1 py-1 mt-1 rounded-lg placeholder:text-white' type="text" name="" id="" defaultValue={modalHotelActiuni.par.nume}/>
                                </div>

                                
                                <div>
                                  <p>Locatie</p>
                                  <input className='border border-button/30 w-full outline-0 px-1 py-1 mt-1 rounded-lg placeholder:text-white' type="text" name="" id="" defaultValue={modalHotelActiuni.par.locatie}/>
                                </div>

                                <div>
                                  <p>Telefon</p>
                                  <input className='border border-button/30 w-full outline-0 px-1 py-1 mt-1 rounded-lg placeholder:text-white' type="text" name="" id="" defaultValue={`${modalHotelActiuni.par.telefon_hotel}`}/>
                                </div>

                                <div>
                                  <p>Email</p>
                                  <input className='border border-button/30 w-full outline-0 px-1 py-1 mt-1 rounded-lg placeholder:text-white' type="text" name="" id="" defaultValue={`${modalHotelActiuni.par.email_hotel}`}/>
                                </div>

                                <div>
                                  <p>Website</p>
                                  <input className='border border-button/30 w-full outline-0 px-1 py-1 mt-1 rounded-lg placeholder:text-white' type="text" name="" id="" defaultValue={`${modalHotelActiuni.par.site_hotel}`}/>
                                </div>


                              </div>

                              <div className='mt-1'>
                                <p>Descriere</p>
                                <textarea className='outline-0 w-full border scrollbar-thin border-button/30 resize-none rounded-lg px-3 py-3 mt-1 h-30' name="" id="">{modalHotelActiuni.par.descriere}</textarea>
                              </div>
                            </div>



                          </div>

                          <div className='mt-3'>
                            <p className='text-[16px]'>Facilitati</p>
                            <ul className='mt-1 overflow-x-auto scrollbar-thin  pr-3 min-w-0 '>
                              {
                                modalHotelActiuni.par.facilitati_principale.map((fac,iFac)=>(
                                  <li className=' min-w-max' key={fac.id}>
                                    <input className=' border  border-button/30 rounded-sm px-3 py-1 outline-0' type="text" defaultValue={fac.nume} name="" id="" />
                                    <ul className='flex space-x-3 px-3 pb-3'>
                                      {
                                        fac.detalii.map((facil,iFacil)=>(
                                          <li className='shrink-0 mt-3 border-button/30 bg-button/30 border px-1.5 py-1 flex items-center space-x-1  min-w-max' key={facil.id}>
                                            <p>{facil.facilitate}</p>
                                            <IoClose className='cursor-pointer' />
                                          </li>
                                        ))
                                      }
                                    </ul>
                                  </li>
                                )
                                  
                                )
                              }
                            </ul>

                            <div>
                              <button className='flex items-center space-x-1 border border-button mt-3 rounded-sm px-3 py-1.5 text-button hover:bg-button/60 hover:text-white transition-all duration-300 ease-in-out cursor-pointer'>
                                <BsPlus className='text-[19px]'/>
                                <p>Adauga facilitati</p>
                              </button>
                            </div>
                          </div>
                          <div className='mt-3'>
                            <p className='text-[16px]'>Politici</p>
                            <ul className='mt-1 overflow-x-auto scrollbar-thin  pr-3 min-w-0 '>
                              {
                                modalHotelActiuni.par.politici_principale.map((fac,iFac)=>(
                                  <li className=' min-w-max' key={fac.id}>
                                    <input className=' border  border-button/30 rounded-sm px-3 py-1 outline-0' type="text" defaultValue={fac.nume} name="" id="" />
                                    <ul className='flex space-x-3 px-3 pb-3'>
                                      {
                                        fac.detalii.map((facil,iFacil)=>(
                                          <li className='shrink-0 mt-3 border-button/30 bg-button/30 border px-1.5 py-1 flex items-center space-x-1  min-w-max' key={facil.id}>
                                            <p>{facil.politica}</p>
                                            <IoClose className='cursor-pointer' />
                                          </li>
                                        ))
                                      }
                                    </ul>
                                  </li>
                                )
                                  
                                )
                              }
                            </ul>

                            <div>
                              <button className='flex items-center space-x-1 border border-button mt-3 rounded-sm px-3 py-1.5 text-button hover:bg-button/60 hover:text-white transition-all duration-300 ease-in-out cursor-pointer'>
                                <BsPlus className='text-[19px]'/>
                                <p>Adauga politiici</p>
                              </button>
                            </div>
                          </div>

                          <div className='flex modf8:space-x-3 mt-2 modf8:justify-end max-modf8:flex-col max-modf8:space-y-3'>
                            <button onClick={()=>{setModalHotelActiuni(null); document.body.classList.remove("overflow-hidden")}} className='border border-button/30 px-3 py-1.5 rounded-sm hover:bg-button/60 transition-all duration-300 ease-in-out cursor-pointer'>Anuleaza</button>
                            <button onClick={()=>{setModalHotelActiuni(null); document.body.classList.remove("overflow-hidden")}} className='border border-button/30 px-3 py-1.5 rounded-sm bg-button hover:bg-button/60 transition-all duration-300 ease-in-out cursor-pointer flex items-center space-x-1 w-full justify-center'><p>Salveaza modificarile</p></button>
                          </div>


                        </div>
                      )
                    }

                    {
                      modalHotelActiuni.actiune === 2 && (
                        <div className='border border-button max-h-[95vh] px-3 py-3 rounded-lg overflow-y-auto overflow-hidden scrollbar-thin bg-background w-110'>
                          <div className='flex justify-end'>
                            <IoClose onClick={()=>{setModalHotelActiuni(null); document.body.classList.remove("overflow-hidden")}}  className='text-[18px] cursor-pointer'/>
                          </div>

                          <div className='flex mt-1 items-center space-x-3'>
                            <div className={`${modalHotelActiuni.par.stare_activare_hotel === false?"text-orange-400 bg-orange-400/14":"text-green-400 bg-green-400/14"} px-3 py-3 rounded-full  shrink-0 text-[22px]`}>
                              <BsPatchExclamation className='shrink-0'/>
                            </div>
                            {
                              modalHotelActiuni.par.stare_activare_hotel === true ? (
                                <div>
                                  <p className='text-[16px] font-medium'>Dezactiveaza hotel</p>
                                  <p className='text-gray-400 '>Esti pe cale sa dezactivezi hotelul {modalHotelActiuni.par.nume}.</p>
                                  <p className='text-gray-400'>Hotelul nu va mai fi disponibil pentru rezervari pana il reactivezi.</p>
                                </div>
                              ): (
                                <div>
                                  <p className='text-[16px] font-medium'>Activeaza hotel</p>
                                  <p className='text-gray-400 '>Esti pe cale sa activezi hotelul {modalHotelActiuni.par.nume}.</p>
                                  <p className='text-gray-400'>Hotelul va fi disponibil pentru rezervari.</p>
                                </div>
                              )
                            }
                          </div>
                          
                          <div className='mt-1'>
                            <p className='text-[15px] font-medium'>Ce se va intampla:</p>
                            <ul className='text-gray-400 border border-button/30 px-3 py-1 rounded-lg'>
                              {
                                modalHotelActiuni.par.stare_activare_hotel === true ?
                                ["Hotelul va fi marcat ca inactiv.","Nu vor mai fi permise rezervari noi.","Tarifele si disponibilitatile nu vor mai fi afisate.","Datele si rezervarile existente vor fi pastrate."].map((list,iList)=>(
                                  <li key={iList} className='flex items-center space-x-1'>
                                    <IoClose className='text-red-400'/>
                                    <p>{list}</p>
                                  </li>
                                )): 
                                ["Hotelul va fi marcat ca activ.","Vor fi permise rezervari noi.","Tarifele si disponibilitatile vor fi afisate.","Datele si rezervarile existente vor fi pastrate."].map((list,iList)=>(
                                  <li key={iList} className='flex items-center space-x-1'>
                                    <FaCircleCheck className='text-green-600'/>
                                    <p>{list}</p>
                                  </li>
                                ))
                              }
                            </ul>
                          </div>

                          <div className='flex modf8:space-x-3 modf8:justify-end mt-1.5 max-modf8:flex-col max-modf8:space-y-1.5'>
                            <button onClick={()=>{setModalHotelActiuni(null); document.body.classList.remove("overflow-hidden")}} className='border border-button/30 px-3 py-1 rounded-sm hover:bg-button/60 cursor-pointer transition-all duration-300 ease-in-out'>Anuleaza</button>
                            {
                              modalHotelActiuni.par.stare_activare_hotel === true? (
                                <button onClick={()=>{setModalHotelActiuni(null); document.body.classList.remove("overflow-hidden");
                                   
                                  setHotels(prev=>prev.map(hotel=>(
                                    hotel.id === modalHotelActiuni.par.id ? {...hotel, stare_activare_hotel:false}: hotel
                                  )
                                  ))
                                }} className='border border-button/30 px-3 py-1 rounded-sm bg-red-600/80 hover:bg-red-600/60 cursor-pointer transition-all duration-300 ease-in-out'>Dezactiveaza hotel</button>
                              ) : (
                                <button onClick={()=>{setModalHotelActiuni(null); document.body.classList.remove("overflow-hidden");
                                  
                                    setHotels(prev=>prev.map(hotel=>(
                                      hotel.id === modalHotelActiuni.par.id ? {...hotel, stare_activare_hotel:true}: hotel
                                    )
                                    ))
                                  }} className='border border-button/30 px-3 py-1 rounded-sm bg-green-600/80 hover:bg-green-600/60 cursor-pointer transition-all duration-300 ease-in-out'>Activeaza hotel</button>
                                )
                            }
                          </div>
                        </div>
                      )
                    }

                    {
                      modalHotelActiuni.actiune === 3 && (
                        <div className='border border-button max-h-[95vh] px-3 py-3 rounded-lg overflow-y-auto overflow-hidden scrollbar-thin bg-background w-120'>
                          <div className='flex justify-end'>
                            <IoClose onClick={()=>{setModalHotelActiuni(null); document.body.classList.remove("overflow-hidden")}}  className='text-[18px] cursor-pointer'/>
                          </div>

                          <div className='flex modf8:items-center modf8:space-x-3 max-modf8:flex-col max-modf8:space-y-2'>
                            <div className='max-modf8:flex '>
                              <div className={`px-3 py-3 bg-button/30 text-button  shrink-0 rounded-full  text-[22px]`}>
                                <MdOutlineFileCopy className='shrink-0'/>
                              </div>
                            </div>
                            <div>
                              <p className='text-[17px] font-medium'>Cloneaza hotel</p>
                              <p className='text-gray-400'>Creeaza o copie a hotelului "{modalHotelActiuni.par.nume}".</p>
                              <p className='text-gray-400'>Toate setarile vor fi copiate cu exceptia rezervarilor si veniturilor.</p>
                            </div>
                          </div>

                          <div className='mt-1.5'>
                            <p>Nume hotel <span className='text-red-600'>*</span></p>
                            <input type="text" name="" id="" className='border border-button/30 px-3 py-1 w-full mt-1 placeholder:text-white rounded-lg outline-0 ' defaultValue={modalHotelActiuni.par.nume}/>
                          </div>

                          
                          <div className='mt-1.5'>
                            <p>Locatie <span className='text-red-600'>*</span></p>
                            <input type="text" name="" id="" className='border border-button/30 px-3 py-1 w-full mt-1 placeholder:text-white rounded-lg outline-0 ' defaultValue={modalHotelActiuni.par.locatie}/>
                          </div>

                          <div className='mt-1.5'>
                            <p>Descriere (optional) </p>
                            <textarea type="text" name="" id="" className='border border-button/30 px-3 py-1 w-full mt-1 placeholder:text-white rounded-lg outline-0 h-35' defaultValue={modalHotelActiuni.par.descriere}></textarea>
                          </div>

                          <div>
                            <p className='font-medium mt-1'>Ce va fi copiat</p>

                            <ul className='grid grid-cols-2 gap-3 mt-1.5'>
                              {
                                ["Informatiile hotelului","Facilitati si servicii","Camere si tipuri de camere","Preturi si politici","Imagini si media"].map((copiat,iCopiat)=>(
                                  <li key={iCopiat} className='flex items-center space-x-1.5'>
                                    <FaCircleCheck className='shrink-0 text-green-400'/>
                                    <p>{copiat}</p>
                                  </li>
                                ))
                              }
                            </ul>
                          </div>

                          <div className='flex modf8:space-x-3 mt-2 modf8:justify-end max-modf8:flex-col max-modf8:space-y-3'>
                            <button onClick={()=>{setModalHotelActiuni(null); document.body.classList.remove("overflow-hidden")}} className='border border-button/30 px-3 py-1.5 rounded-sm hover:bg-button/60 transition-all duration-300 ease-in-out cursor-pointer'>Anuleaza</button>
                            <button onClick={()=>{setModalHotelActiuni(null); document.body.classList.remove("overflow-hidden")}} className='border border-button/30 px-3 py-1.5 rounded-sm bg-green-600 hover:bg-green-600/60 transition-all duration-300 ease-in-out cursor-pointer flex items-center space-x-1 w-full justify-center'><BsTrash /> <p>Cloneaza hotelul</p></button>
                          </div>


                        </div>
                      )
                    }

                    {
                      modalHotelActiuni.actiune === 4 && (
                        <div className='border border-button max-h-[95vh] px-3 py-3 rounded-lg overflow-y-auto overflow-hidden scrollbar-thin bg-background w-100'>
                          <div className='flex justify-end'>
                            
                            <IoClose onClick={()=>{setModalHotelActiuni(null); document.body.classList.remove("overflow-hidden")}}  className='text-[18px] cursor-pointer'/>
                          </div>

                          <div className='flex justify-center'>
                            <div className='text-red-600 text-[30px]'>
                              <RxExclamationTriangle/>
                            </div>
                          </div>

                          <div className='text-center'>
                            <p className='text-[19px] font-medium'>Sterge hotel</p>
                            <div className='text-gray-400 w-[85%] mt-0.5 mx-auto'>
                              <p>Esti sigur ca doresti sa stergi hotelul <span className='text-red-600'>{modalHotelActiuni.par.nume}</span>?</p>
                            </div>
                          </div>

                          <div className='text-center'>
                            <p className='border text-gray-400 px-3 py-3 mt-2 rounded-sm border-red-600/30'>Aceasta actiune este ireversibila si va sterge toate informatiile asociate acestui hotel.</p>
                          </div>

                          <div className='flex modf8:space-x-3 mt-2 modf8:justify-end max-modf8:flex-col max-modf8:space-y-3'>
                            <button onClick={()=>{setModalHotelActiuni(null); document.body.classList.remove("overflow-hidden")}} className='border border-button/30 px-3 py-1.5 rounded-sm hover:bg-button/60 transition-all duration-300 ease-in-out cursor-pointer'>Anuleaza</button>
                            <button onClick={()=>{setModalHotelActiuni(null); document.body.classList.remove("overflow-hidden")}} className='border border-button/30 px-3 py-1.5 rounded-sm bg-red-600 hover:bg-red-600/60 transition-all duration-300 ease-in-out cursor-pointer flex items-center space-x-1 w-full justify-center'><BsTrash /> <p>Sterge hotel</p></button>
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

      <Outlet  context={{visibleBara}}/>
    </div>
  )
}

export default AdminHoteluri
