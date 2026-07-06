import React, { useState } from 'react'
import hotelsData from '../hotels/Hotel/hotels'
import { MdOutlineLocalOffer } from "react-icons/md";
import { FaArrowRight, FaCheckCircle, FaRegCheckCircle, FaSearch } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import { FaRegWindowClose } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { Outlet, useLocation, useNavigate, useOutletContext } from 'react-router-dom';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { GoPencil } from 'react-icons/go';
import { FaRegEye } from "react-icons/fa6";
import { MdOutlineContentCopy } from "react-icons/md";
import { MdMotionPhotosPaused } from "react-icons/md";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import { IoClose } from 'react-icons/io5';
import { RiUploadCloud2Line } from "react-icons/ri";
import { RxExclamationTriangle } from "react-icons/rx";
import { TbTrash } from 'react-icons/tb';
import { useEffect } from 'react';
const AdminOferte = () => {
  const [hotels,setHotels] =useState(hotelsData);
  const [hoteluri,setHoteluri] = useState([])
  const [oferte,setOferte] = useState([]);
  useEffect(()=>{
    fetch("http://localhost:5000/api/oferte/toate")
    .then(res=>res.json())
    .then(data=>setOferte(data))
    .catch(err=>console.error(err))
  },[])
  useEffect(()=>{
    fetch("http://localhost:5000/api/hotels")
    .then(res=>res.json())
    .then(data=>setHoteluri(data))
    .catch(err=>console.error(err))
  },[])



  const nrTotalOferte = oferte.length;
  const nrTotalOferteActive = oferte.filter(oferta=>oferta.stare_activare_oferta === true).length ||0;
  const  nrTotalOferteInactive = oferte.filter(oferta=>oferta.stare_activare_oferta === false).length ||0;
  const totalIncasatDinOFerte = Math.round((oferte.reduce((sum,oferta)=>{
    return sum + Number(oferta.total_incasat ||0);
  },0))*100)/100

  
  

  const iconMap ={
    nrTot: MdOutlineLocalOffer,
    activ: FaRegCheckCircle,
    programat: FaRegClock,
    inactive: FaRegWindowClose
  }
 
  const [visibleHot, setVisibleHot] = useState(false);
  const [visibleStatus, setVisibleStatus] = useState(false);
  const {visibleBara} = useOutletContext();
  const [visibleAct, setVisibleAct] = useState(null);
  const [visibleEditAct, setVisibleEditAct] = useState(null);
  const [visibleEditStatus,setVisibleEditStatus] = useState(false);


  const [modal,setModal] = useState(null);
  
  const listaAct = [
    {icon:"viz",nume:"Vizualizeaza detalii"},
    {icon:"copy",nume:"Copiaza oferta"},
    {icon:"dezact",nume:"Stare oferta"},
    {icon:"programeaza",nume:"Programeaza oferta"},
    {icon:"stergere",nume:"Sterge oferta"},
  ]
  const iconListAct = {
    viz:FaRegEye,
    copy:MdOutlineContentCopy,
    dezact:MdMotionPhotosPaused,
    programeaza:FaRegCalendarAlt,
    stergere:FaRegTrashAlt

  }

  const maxLit= 200;
  const [textEd,setTextEd] = useState("");
  const [checkOfDis,setCheckOfDis] = useState(null);
  const [visibOfPrio, setVisibOfPrio] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const visibleAdminOfertaPage = location.pathname === `/admin/admin-oferte`
  return (
    <div className='mt-18'>
      {visibleAdminOfertaPage &&(
        <div >
          <div className='flex justify-between items-center space-x-3 text-[14px] max-modf2:flex-col max-modf2:items-start max-modf2:space-y-3'>
            <div className=''>
              <p className='text-[22px] font-medium'>Oferte</p> 
              <p className='text-gray-400'>Gestioneaza si monitorieaza toate ofertele si promotiile.</p>
            </div>
            <div className='shrink-0'>
              <button onClick={()=>navigate("/admin/admin-oferte/adauga-oferta")} className='flex items-center space-x-3 bg-button px-3 py-0.5 rounded-lg hover:bg-button/60 cursor-pointer transition-all duration-300 ease-in-out'>
                <p className='mb-0.5 font-medium text-[22px]'>+</p>
                <p>Adauga oferta</p>
              </button>
            </div>
          </div>
        
          
          <ul className={`text-[14px] mt-4 grid grid-cols-4 gap-3 ${visibleBara?"max-modf:grid-cols-1":"max-modf:grid-cols-2 max-modf2:grid-cols-1"}`}>
            {
              [
                {icon:"nrTot",textIc:"text-button",bgIc:"bg-button/30",nume:"Total oferte",nr:nrTotalOferte},
                {icon:"activ",textIc:"text-green-400",bgIc:"bg-green-400/30",nume:"Active",nr:nrTotalOferteActive},
                {icon:"programat",textIc:"text-orange-400",bgIc:"bg-orange-400/30",nume:"Venituri din oferte",nr:`${totalIncasatDinOFerte} RON`},
                {icon:"inactive",textIc:"text-red-400",bgIc:"bg-red-400/30",nume:"Inactive",nr:nrTotalOferteInactive},
              ].map((par,i)=>
              { const Icon = iconMap[par.icon]
                return(
                <li key={i} className='border px-3 py-1.5 rounded-lg border-button/30 flex space-x-3 items-center'>
                  <div className={`${par.bgIc} px-1.5 py-1.5 rounded-full`}>
                    {Icon && <Icon className={`${par.textIc} text-[19px] `}/>}
                  </div>
                  <div className='text-gray-400'>
                    <p>{par.nume}</p>
                    <p className='text-white text-[19px]'>{par.nr}</p>
                    <p><span className={`${par.nrText<0?"text-red-400": "text-green-400"}`}>{par.nrText}</span> {par.text}</p>
                  </div>
                </li>
              )})
            }
          </ul>

          <div className={`grid grid-cols-3 ${visibleBara?" max-modf:grid-cols-2 max-modf1:grid-cols-1":" max-modf1:grid-cols-2 max-modf2:grid-cols-1"} gap-3 mt-4 text-[14px]`}>
            <div className='relative'>
              <input className='border border-button/30 outline-0 pl-3 pr-9 py-1 rounded-lg w-full' type="text" placeholder='Cauta oferta dupa cod, hotel...'/>
              <div className='absolute right-3 top-1/2 -translate-y-1/2'>
                <FaSearch className='text-gray-400'/>
              </div>
            </div>

            <div className={`w-full modf7:flex modf7:justify-center`}>
              <div className='relative modf7:w-[80%] '>
                <button onClick={()=>setVisibleHot(!visibleHot)} className={`border border-button/30 w-full  hover:bg-button/60 cursor-pointer transition-all ease-in-out duration-300 ${visibleHot? "bg-button/60 rounded-t-lg": "bg-transparent rounded-lg"} px-3 py-1`}>
                  <div className={`flex items-center justify-between`}>
                    <p>Toate hotelurile</p>
                    {visibleHot? <IoIosArrowUp />:<IoIosArrowDown />}
                  </div>
                </button>

                <ul className={`absolute ${visibleHot? "max-h-40 opacity-100": "max-h-0 opacity-0"} w-full bg-background z-100 overflow-hidden overflow-y-scroll scrollbar-none transition-all duration-500 ease-in-out`}>
                  <li className={`px-3 py-1 border cursor-pointer border-button/30 hover:bg-button/60 transition-all duration-300 ease-in-out`}><p>Toate hotelurile</p></li>
                  {
                    hoteluri?.map((hotel,i)=>(
                      <li key={hotel.id} className={`px-3 py-1 border cursor-pointer border-button/30 hover:bg-button/60 transition-all duration-300 ease-in-out`}><p>{hotel.nume}</p></li>
                      
                    ))
                  }
                </ul>
              </div>
            </div>


            <div className={`w-full modf7:flex modf7:justify-center`}>
              <div className='relative modf7:w-[80%]'>
                <button onClick={()=>setVisibleStatus(!visibleStatus)} className={`border border-button/30 w-full  hover:bg-button/60 cursor-pointer transition-all ease-in-out duration-300 ${visibleStatus? "bg-button/60 rounded-t-lg": "bg-transparent rounded-lg"} px-3 py-1`}>
                  <div className={`flex items-center justify-between`}>
                    <p>Toate statusurile</p>
                    {visibleStatus? <IoIosArrowUp />:<IoIosArrowDown />}
                  </div>
                </button>

                <ul className={`absolute ${visibleStatus? "max-h-40 opacity-100": "max-h-0 opacity-0"} w-full bg-background z-100 overflow-hidden overflow-y-scroll scrollbar-none transition-all duration-500 ease-in-out`}>
                  <li className={`px-3 py-1 border cursor-pointer border-button/30 hover:bg-button/60 transition-all duration-300 ease-in-out`}><p>Toate statusurile</p></li>
                  {
                    ["Activ","Programat","Inactiv","Expira"]?.map((par,i)=>(
                      <li key={i} className={`px-3 py-1 border cursor-pointer border-button/30 hover:bg-button/60 transition-all duration-300 ease-in-out`}><p>{par}</p></li>
                      
                    ))
                  }
                </ul>
              </div>
            </div>
          </div>


          <div className={`mt-4 border border-button/30 py-3 rounded-lg text-[14px]`}>
            <div className={`overflow-x-auto max-modf7:pb-2 scrollbar-thin min-w-0`}>
              <div className='flex space-x-3 px-3'>
                <div className={`${visibleBara? "max-modf7:w-55": "max-modf7:w-63"} modf7:flex-2  shrink-0 transition-[width] duration-300 ease-in-out`}><p>Oferta</p></div>
                <div className={`${visibleBara? "max-modf7:w-60": "max-modf7:w-66"} modf7:flex-2  shrink-0 transition-[width] duration-300 ease-in-out`}><p>Hotel</p></div>
                <div className={`${visibleBara? "max-modf7:w-30": "max-modf7:w-38"} modf7:flex-1  shrink-0 transition-[width] duration-300 ease-in-out`}><p>Reducere</p></div>
                <div className={`${visibleBara? "max-modf7:w-25": "max-modf7:w-33"} modf7:flex-1  shrink-0 transition-[width] duration-300 ease-in-out`}><p>Perioada</p></div>
                <div className={`${visibleBara? "max-modf7:w-23": "max-modf7:w-30"} modf7:flex-1  shrink-0 transition-[width] duration-300 ease-in-out`}><p>Status</p></div>
                <div className={`${visibleBara? "max-modf7:w-28": "max-modf7:w-33"} modf7:flex-1  shrink-0 transition-[width] duration-300 ease-in-out`}><p>Venit generat</p></div>
                <div className={`${visibleBara? "max-modf7:w-18 ": "max-modf7:w-21"} modf7:flex-1  text-center shrink-0 transition-[width] duration-300 ease-in-out`}><p>Actiuni</p></div>
              </div>

              <ul  className='mt-4 text-gray-400'>
                {
                  oferte.map((oferta,i1)=>(
                    <li key={oferta.id} className='border-y border-y-button/30 px-3 py-3 min-w-max '>
                      <div className='flex space-x-3 items-center'>
                        <div className={`${visibleBara? "max-modf7:w-55": "max-modf7:w-63"} modf7:flex-2  shrink-0 transition-[width] duration-300 ease-in-out flex items-center space-x-3`}>
                          <div className='w-15 h-15 shrink-0'>
                            <img className='w-full h-full object-center rounded-lg' src={`${import.meta.env.BASE_URL}${oferta.image}`} alt="" />
                          </div>
                          <div >
                            <p className='text-white'>{oferta.nume_camera},  </p>
                            <p className='text-white'>{oferta.reducerea*100}% reducere  </p>
                            <p>Cod: {oferta.cod_oferta}</p>
                          </div>
                        </div>
                        <div className={`${visibleBara? "max-modf7:w-60": "max-modf7:w-66"} modf7:flex-2  shrink-0 transition-[width] duration-300 ease-in-out`}>
                          <p className='text-white'>{oferta.nume_hotel}</p>
                          <p>{oferta.locatie}</p>
                        </div>
                        <div className={`${visibleBara? "max-modf7:w-30": "max-modf7:w-38"} modf7:flex-1  shrink-0 transition-[width] duration-300 ease-in-out`}>
                          <p className='text-white'>{oferta.reducerea*100}%</p>
                          <p>din pretul camerei</p>
                        </div>
                        <div className={`${visibleBara? "max-modf7:w-25": "max-modf7:w-33"} modf7:flex-1  shrink-0 transition-[width] duration-300 ease-in-out`}>
                          <p>{new Date(oferta.oferta_start).toISOString().split("T")[0]}</p>
                          <p>{new Date(oferta.oferta_end).toISOString().split("T")[0]}</p>
                        </div>
                        <div className={`${visibleBara? "max-modf7:w-23": "max-modf7:w-30"} modf7:flex-1  shrink-0 transition-[width] duration-300 ease-in-out`}>
                          <p className={`${oferta.stare_activare_oferta?"bg-green-400/30 text-green-400": "bg-red-400/30 text-red-400"} bg-green-400/30 text-center rounded-sm`}>{oferta?.stare_activare_oferta? "Activa":"Inactiva"}</p>
                        </div>


                        <div className={`${visibleBara? "max-modf7:w-28": "max-modf7:w-33"} modf7:flex-1  shrink-0 transition-[width] duration-300 ease-in-out`}><p>{Math.round(oferta.total_incasat*100)/100} RON</p></div>

                        
                        <div className={`${visibleBara? "max-modf7:w-18": "max-modf7:w-21"} modf7:flex-1  text-center shrink-0 transition-[width] duration-300 ease-in-out`}>
                          <div className='flex justify-center space-x-3'>
                            <div className='relative'>
                              <button onClick={()=>{setVisibleEditAct(visibleEditAct === oferta.id? null: oferta.id); document.body.classList.add("overflow-hidden"); setVisibleAct(null)}} className='px-1.5 py-1.5 cursor-pointer border rounded-sm border-button/30'>
                                <GoPencil  className='text-button' />
                              </button>

                              {
                                visibleEditAct ===oferta.id && (
                                  <div className='fixed inset-0 px-3 py-3 bg-gray-400/15 z-300 flex justify-center items-center '>

                                    <div className='border border-button rounded-lg px-3 py-3 max-w-135 max-h-[95vh] overflow-y-auto bg-background scrollbar-thin flex items-start flex-col text-[14px]'>
                                      <div className='flex justify-between space-x-3 w-full'>
                                        <p className='text-[19px] text-white'>Editeaza oferta</p>
                                        <IoClose className='cursor-pointer  text-white' onClick={()=>{setVisibleEditAct(null); document.body.classList.remove("overflow-hidden")}} size={19}/>
                                      </div>

                                      <div className=' modf8:space-x-3 mt-1.5 flex max-modf8:flex-col w-full'>
                                        <div className=''>
                                          <div className='w-35 h-32 max-modf8:w-full shrink-0 object-center max-modf8:h-45'>
                                            <img className='w-full h-full rounded-lg' src={`${import.meta.env.BASE_URL}${oferta.image}`} alt="" />
                                          </div>
                                          <div>
                                            <button className='px-1.5 py-1 rounded-sm mt-1.5 border flex space-x-1 items-center text-white border-button/30 hover:bg-button/60 transition-all duration-300 ease-in-out'>
                                              <RiUploadCloud2Line/>
                                              <p>Schimba imagine</p>
                                            </button>
                                          </div>
                                        </div>
                                        <div className='w-full  space-y-1'>

                                          <div className='space-y-0.5'>
                                            <p className='text-start'>Nume camera</p>
                                            <input className='border w-full border-button/30 rounded-sm px-3 py-1 placeholder:text-white text-white outline-0' type="text" name="" id="" defaultValue={`${oferta.nume_camera}`}/>
                                          </div>

                                          <div className='space-y-0.5'>
                                            <p className='text-start'>Nume hotel</p>
                                            <input className='border w-full border-button/30 rounded-sm px-3 py-1 placeholder:text-white text-white outline-0' type="text" name="" id="" defaultValue={`${oferta.nume_hotel}`}/>
                                          </div>

                                          <div className='grid grid-cols-2 gap-1.5 mt-1.5'>
                                            <div className='space-y-0.5'>
                                              <p className='text-start'>Cod oferta</p>
                                              <input className='border w-full border-button/30 rounded-sm px-3 py-1 placeholder:text-white text-white outline-0' type="text" name="" id="" defaultValue={`${oferta.cod_oferta}`}/>
                                            </div>

                                            <div className='space-y-0.5'>
                                              <p className='text-start'>Reducere</p>
                                              <div>
                                                <input className='border w-full border-button/30 rounded-sm px-3 py-1 placeholder:text-white text-white outline-0' type="text" name="" id="" defaultValue={`${oferta.reducerea*100}%`}/>
                                              </div>
                                            </div>

                                            
                                          </div>

                                          <div className='text-start'>
                                              <p>Perioada de valabilitate</p>
                                            <div className='flex modf8:items-center max-modf8:flex-col modf8:space-x-1.5 '>
                                              <div className='flex-1'>
                                                <input className='border w-full border-button/30 rounded-sm px-3 py-1 placeholder:text-white text-white outline-0' type="date" name="" id=""/>
                                              </div>
                                              <div>
                                                <FaArrowRight />
                                              </div>
                                              <div className='flex-1'>
                                                <input className='border w-full border-button/30 rounded-sm px-3 py-1 placeholder:text-white text-white outline-0' type="date" name="" id=""/>
                                              </div>
                                            </div>
                                          </div>

                                          <div className='space-y-0.5'>
                                            <p className='text-start'>Status</p>
                                            

                                            <div className='relative'>
                                              <div>
                                                <button onClick={()=>{setVisibleEditStatus(!visibleEditStatus)}} className={`cursor-pointer  transition-all duration-300 ease-in-out flex border w-full border-button/30 ${visibleEditStatus?"rounded-t-sm":"rounded-sm"} transition-all duration-300 ease-in-out px-3 py-1`}><p className={`${oferta.stare_activare_oferta?"bg-green-400/30 text-green-400":"bg-red-400/30 text-red-400"} px-3`}>{oferta.stare_activare_oferta?"Activa":"Inactiva"}</p></button>
                                              </div>
                                              <ul className={`absolute  z-100 bg-background w-full text-start  overflow-y-scroll overflow-hidden scrollbar-none ${visibleEditStatus?"max-h-40 opacity-100": "max-h-0 opacity-0"} transition-all duration-500 ease-in-out`}>
                                                {
                                                  ["Activa","Inactiva"].map((stareEd,iEd)=>(
                                                    <li className={`border px-3 py-1 border-button/30 hover:bg-button/60 transition-all duration-300 ease-in-out cursor-pointer`}>
                                                      <p>{stareEd}</p>
                                                    </li>
                                                  ))
                                                }
                                              </ul>
                                            </div>
                                          </div> 

                                          <div className='space-y-0.5 text-start'>
                                            <p>Descriere (optional)</p>

                                            <div className='relative'>
                                              <textarea className='w-full outline-0 px-3 border border-button/30 h-27 scrollbar-thin resize-none' name="" defaultValue={oferta.scurta_descriere} onChange={(e)=>setTextEd(e.target.value)} maxLength={maxLit} id=""></textarea>

                                              <div className='absolute right-3 bottom-1.5'><p><span className={`${textEd.length<150?"text-green-400": (textEd.length>=150 && textEd.length<=199)?"text-orange-300":"text-red-400"}`}>{textEd.length}</span>/200</p></div>
                                            </div>
                                          </div>

                                          <div className='flex modf8:space-x-3 mt-2 modf8:justify-end max-modf8:flex-col max-modf8:space-y-3'>
                                            <button onClick={()=>{setVisibleEditAct(null); document.body.classList.remove("overflow-hidden")}}  className='border-button/30 border px-3 py-1 rounded-sm hover:bg-red-400/30 cursor-pointer hover:text-red-400 transition-all duration-300 ease-in-out'>Anuleaza</button>
                                            <button onClick={()=>{setVisibleEditAct(null); document.body.classList.remove("overflow-hidden")}}  className='border-button/30 border bg-button px-3 py-1 rounded-sm hover:bg-button/60 cursor-pointer text-white transition-all duration-300 ease-in-out'>Salveaza modificarile</button>
                                          </div>


                                        </div>
                                      </div>
                                    </div>


                                  </div>
                                )
                              }
                            </div>



                            <div className='relative'>
                              <button onClick={()=>setVisibleAct(visibleAct===oferta.id? null: oferta.id)} className='px-1.5 py-1.5 border cursor-pointer rounded-sm border-button/30'>
                                <BsThreeDotsVertical />
                              </button>
                              
                              
                              {visibleAct === oferta.id && (
                                <div className={`absolute -right-1  ${visibleAct === oferte[oferte.length-1].id ||visibleAct === oferte[oferte.length-2].id ?"bottom-9":"top-9"}`}>
                                  <div  className='border border-button px-1.5 py-1 rounded-lg bg-background z-100 text-white relative'>
                                    <ul className='space-y-1 w-39 max-modf8:w-46'>
                                      {
                                        listaAct.map((par,iList)=>{
                                          const IconLiAct = iconListAct[par.icon]
                                          return (
                                            <li key={iList} className='relative'>
                                              <button onClick={()=>{setModal({actiune:iList,oferta}); document.body.classList.add("overflow-hidden"); setVisibleAct(null)}} className={`flex items-center space-x-3 ${iList===listaAct.length-1? "hover:bg-red-400/30 text-red-400 border-t border-t-button/30":"hover:bg-button/30"} transition-all duration-300 ease-in-out cursor-pointer py-1 px-1 w-full`}>
                                                <div>
                                                  {IconLiAct && <IconLiAct/>}
                                                </div>
                                                <p>{par.nume}</p>
                                              </button>
                                              
                                            </li>
                                          )
                                        })
                                      }
                                    </ul>

                                    

                                    <div className={`absolute ${visibleAct===oferte[oferte.length-1].id || visibleAct===oferte[oferte.length-2].id ? "-bottom-2": "-top-2"} right-3  w-2 h-2 bg-button`} style={{clipPath: visibleAct===oferte[oferte.length-1].id || visibleAct===oferte[oferte.length-2].id  ? "polygon(0 0, 100% 0, 50% 100%)":"polygon(0 100%, 100% 100%, 50% 0)"}}></div>
                                    <div className={`absolute ${ visibleAct===oferte[oferte.length-1].id ||visibleAct===oferte[oferte.length-2].id? "-bottom-1.75": "-top-1.75"} right-3  w-2 h-2 bg-background`} style={{clipPath: (visibleAct===oferte[oferte.length-1].id || visibleAct===oferte[oferte.length-2].id) ? "polygon(0 0, 100% 0, 50% 100%)":"polygon(0 100%, 100% 100%, 50% 0)"}}></div>
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
                  modal && (
                  <div className=' inset-0 fixed z-500  flex items-center justify-center bg-gray-400/15 '>
                    <div className=' px-3 flex justify-center     w-full'>

                      {modal.actiune === 0 && (
                        <div className='w-165 max-h-[95vh] overflow-y-auto overflow-hidden scrollbar-thin border border-button bg-background rounded-lg py-3 px-3'>
                          <div className='flex justify-between'>
                            <p className='text-[19px] text-white'>Detalii oferta</p>
                              <IoClose onClick={()=>{setModal(null); document.body.classList.remove("overflow-hidden")}}  className='text-[18px] cursor-pointer'/>
                          </div>

                          <div className='mt-1 flex modf8:space-x-3 max-modf8:flex-col'>
                            <div className='flex-2 '>
                              <div className='flex max-modf8:flex-col modf8:space-x-3'>
                                <div className='w-35 shrink-0 mt-1.5 h-30 max-modf8:w-full max-modf8:h-50'>
                                  <img className='w-full rounded-lg h-full' src={`${import.meta.env.BASE_URL}${modal.oferta.image}`} alt="" />
                                </div>
                                <div className='w-full max-modf8:mt-1.5'>
                                  <p className='text-white text-[19px]'>{modal.oferta.nume_camera}</p>
                                  <p>Cod oferta</p>
                                  <p className='text-white text-[19px]'>{modal.oferta.cod_oferta}</p>
                                  <p>Hotel</p>
                                  <p className='text-white'>{modal.oferta.nume_hotel}</p>
                                  <p>{modal.oferta.locatie}</p>
                                </div>
                              </div>

                              <div className='mt-2.5'>
                                <p className='text-white text-[19px]'>Descriere</p>
                                <p>Rezerva cu cel putin 30 de zile inainte de check-in si beneficiaza de 20% reducere la pretul camerei.</p>
                              </div>
                            </div>
                            <div className='flex-1 border border-button/30 px-1.5 py-1 rounded-lg max-modf8:mt-1.5'>
                              <p>Reducere</p>
                              <p className='text-green-400 text-[19px]'>{modal.oferta.reducerea*100}%</p>
                              <p>din pretul camerei</p>

                              <div className='mt-1.5 space-y-0.5'>
                                <p>Perioada de valabilitate</p>
                                <div className='flex items-center space-x-1'>
                                  <FaRegCalendarAlt/>
                                  <p>{new Date(modal.oferta.oferta_start).toISOString().split("T")[0]}</p>
                                </div>
                                <div className='flex space-x-1 items-center'>
                                  <FaArrowRight/>
                                  <p>{new Date(modal.oferta.oferta_start).toISOString().split("T")[0]}</p>
                                </div>
                              </div>
                              <div className='mt-1.5 space-y-0.5'>
                                <p>Creata la data:</p>
                                <p>{new Date(modal.oferta.oferta_start).toISOString().split("T")[0]}</p>
                              </div>
                            
                            </div>

                          </div>

                          <div className='mt-1.5'>
                            <p className='text-white text-[19px]'>Conditii oferta</p>
                            <ul className='space-y-0.5 mt-0.5'>
                              {
                                ["Rezervarea trebuie facuta cu minim 30 de zile inainte de data check-in-ului.","Oferta se aplica doar pentru rezervari de minimum 3 nopti.","Nu se cumuleaza cu alte oferte sau promotii.","Oferta este valabila in limita disponibilitatii."].map((par,i)=>(
                                  <li className='flex items-center space-x-1.5 '>
                                    <FaRegCheckCircle className='text-[17px] text-green-400 shrink-0'/>
                                    <p>{par}</p>
                                  </li>
                                ))
                              }
                            </ul>
                          </div>

                          <div className='mt-1.5 flex justify-end'>
                            <button onClick={()=>{setModal(null);document.body.classList.remove("overflow-hidden")}} className='border border-button/30 px-3 py-1 rounded-sm hover:bg-button/60 transition-all duration-300 ease-in-out cursor-pointer'>Inchide</button>
                          </div>
                        </div>
                      )}


                      {
                        modal.actiune === 1 && (
                          <div className='border border-button px-3 py-3 overflow-y-auto overflow-hidden scrollbar-thin max-h-[95vh] rounded-lg w-125 bg-background'>
                            <div className='flex justify-between'>
                              <p className='text-[19px] text-white'>Copiaza oferta</p>
                                <IoClose onClick={()=>{setModal(null); document.body.classList.remove("overflow-hidden")}}  className='text-[18px] cursor-pointer'/>
                            </div>

                            <div className='mt-1 '>
                              <p>Creeaza o copie al ofertei pentru camera {modal.oferta.nume_camera} din hotelul {modal.oferta.nume_hotel}.</p>
                              <p>Toate informatiile vor fi copiate, cu exceptia rezervarilor si veniturilor.</p>
                            </div>

                            <div className='border border-button/30 px-3 py-3 rounded-lg mt-2 grid grid-cols-2 max-modf8:grid-cols-1 gap-3'>
                              <div>
                                <p>Nume hotel: <span className='text-white ml-3'>{modal.oferta.nume_hotel}</span></p>
                                <p>Nume camera: <span className='text-white ml-3'>{modal.oferta.nume_camera}</span></p>
                                <p>Locatie: <span className='text-white ml-3'>{modal.oferta.locatie}</span></p>
                              </div>

                              <div>
                                <p>Oferta de: <span className='text-white ml-3'>{modal.oferta.reducerea*100}%</span></p>
                                <p>Stare: <span className='text-white ml-3'>{modal.oferta.stare_activare_oferta? "Activa":"Inactiva"}</span></p>
                                <p>Perioada: <span className='text-white ml-3'>{new Date(modal.oferta.oferta_start).toISOString().split("T")[0]} {new Date(modal.oferta.oferta_end).toISOString().split("T")[0]}</span></p>
                              </div>
                            </div>

                            <div className='mt-3'>
                              <p className='text-white'>Ce va fi copiat</p>
                              <div className='grid grid-cols-2 gap-1'>
                                {
                                  ["Informatiile camerei","Facilitatile","Pretul camerei","Oferta atribuita camerei respective","Imagini si media"].map((copiat,iCopiat)=>(
                                    <li key={iCopiat} className='flex items-center space-x-1.5'>
                                      <FaCheckCircle className='text-green-600 shrink-0 text-[15px]'/>
                                      <p>{copiat}</p>
                                    </li>
                                  ))
                                }
                              </div>
                            </div>




                            <div className='flex text-white modf8:space-x-3 mt-2 modf8:justify-end max-modf8:flex-col max-modf8:space-y-3 '>
                              <button onClick={()=>{setModal(null); document.body.classList.remove("overflow-hidden")}} className='px-3 py-1 border border-button/30 hover:bg-button/60 transition-all duration-300 ease-in-out cursor-pointer rounded-sm'>Anuleaza</button>
                              <button onClick={()=>{setModal(null); document.body.classList.remove("overflow-hidden")}} className='px-3 py-1 border border-button/30 bg-button hover:bg-button/60 transition-all duration-300 ease-in-out cursor-pointer rounded-sm'>Copiaza oferta</button>
                            </div>
                          </div>
                        )
                      }

                      {
                        modal.actiune === 2 && (
                          <div className='border border-button px-3 py-3 overflow-y-auto overflow-hidden scrollbar-thin max-h-[95vh] rounded-lg w-110 bg-background'>
                            <div className='flex justify-end'>
                                <IoClose onClick={()=>{setModal(null); document.body.classList.remove("overflow-hidden")}}  className='text-[18px] cursor-pointer'/>
                            </div>

                            {
                              modal.oferta.stare_activare_oferta === true && (
                                <div className='text-center'>
                                  <p className='text-[19px] text-white'>Dezactiveaza oferta</p>
                                  <p className='text-gray-400'>Esti pe cale sa dezactivezi aceasta oferta</p>
                                  <p className='text-gray-400'>Camerele vor reveni la pretul initial pana oferta va fi reactivata.</p>
                              </div>
                              )
                            }
                            {
                              modal.oferta.stare_activare_oferta === false && (
                                <div className='text-center'>
                                  <p className='text-[19px] text-white'>Activeaza oferta</p>
                                  <p className='text-gray-400'>Esti pe cale sa activezi aceasta oferta</p>
                                  <p className='text-gray-400'>Pretul camerelor va fi redus de oferta folosita.</p>
                              </div>
                              )
                            }


                            <div className='mt-2'>
                              <p className='text-white text-[15px]'>Ce se va intampla</p>

                              <ul className='list-disc marker:text-button mt-1 border border-button/30 px-3 py-3 rounded-lg'>
                                {
                                  modal.oferta.stare_activare_oferta === true &&( ["Oferta va fi trecuta ca inactiva","Tarifele vor reveni la valoarea lor initiala","Datele si rezervariile existente vor fi pastrate"].map((dezact,iDezact)=>(
                                    <li key={iDezact} className='ml-3'>
                                      <p>{dezact}</p>
                                    </li>
                                  )))
                                }
                                {
                                  modal.oferta.stare_activare_oferta === false &&( ["Oferta va fi trecuta ca activa","Tarifele vor reveni la valoarea redusa","Datele si rezervariile existente vor fi pastrate"].map((dezact,iDezact)=>(
                                    <li key={iDezact} className='ml-3'>
                                      <p>{dezact}</p>
                                    </li>
                                  )))
                                }
                              </ul>
                            </div>

                            




                            <div className='flex text-white modf8:space-x-3 mt-2 modf8:justify-end max-modf8:flex-col max-modf8:space-y-3 '>
                              <button onClick={()=>{setModal(null); document.body.classList.remove("overflow-hidden")}} className='px-3 py-1 border border-button/30 hover:bg-button/60 transition-all duration-300 ease-in-out cursor-pointer rounded-sm'>Anuleaza</button>
                              {
                                modal.oferta.stare_activare_oferta=== true &&(
                                  <button onClick={()=>{setModal(null); document.body.classList.remove("overflow-hidden");
                                   setOferte(prev=>
                                    prev.map(oferta=>
                                      oferta.id === modal.oferta.id ?
                                      {...oferta, stare_activare_oferta: false} : oferta 
                                    )
                                   )
                                  }} className='px-3 py-1 border border-button/30 bg-red-600/80 hover:bg-red-600/60 transition-all duration-300 ease-in-out cursor-pointer rounded-sm'>Dezactiveaza oferta</button>
                                )
                              }
                              {
                                modal.oferta.stare_activare_oferta=== false &&(
                                  <button onClick={()=>{setModal(null); document.body.classList.remove("overflow-hidden");
                                  setOferte(prev=>
                                    prev.map(oferta=>
                                      oferta.id === modal.oferta.id ? {...oferta, stare_activare_oferta: true}: oferta
                                    )
                                  )
                                  }} className='px-3 py-1 border border-button/30 bg-green-600/80 hover:bg-green-600/60 transition-all duration-300 ease-in-out cursor-pointer rounded-sm'>Activeaza oferta</button>
                                )
                              }
                            </div>
                          </div>
                        )
                      }

                      {
                        modal.actiune === 3 && (
                          <div className='w-135 max-h-[95vh] overflow-y-auto overflow-hidden scrollbar-thin border border-button bg-background rounded-lg py-3 px-3'>
                            <div className='flex justify-between'>
                              <p className='text-[19px] text-white'>Programeaza oferta</p>
                              <IoClose onClick={()=>{setModal(null); document.body.classList.remove("overflow-hidden")}}  className='text-[18px] cursor-pointer'/>
                            </div>
                            <div className='mt-0.5  w-[95%]'>
                              <p>Stabileste perioada de valabilitate si disponibilitatea ofertei.</p>

                              <div>
                                <p className='text-white text-[16px]'>Perioada de valabilitate</p>
                                <div className='flex space-x-3 max-modf8:space-x-0 mt-2 items-end'>
                                  <div className='space-y-0.5 flex-1'>
                                    <p>Data inceput</p>
                                    <input className='border border-button/30 w-full rounded-lg px-3 py-1' type="date" name="" id="" />
                                  </div>
                                  <div className='mb-1.5 '>
                                    <FaArrowRight className='' />
                                  </div>
                                  <div className='space-y-0.5 flex-1'>
                                    <p>Data inceput</p>
                                    <input className='border border-button/30 w-full rounded-lg px-3 py-1' type="date" name="" id="" />
                                  </div>
                                </div>
                                <div className='flex  space-x-1.5 mt-2 '>
                                  <input type="checkbox" name="" id="" />
                                  <p>Fara data de sfarsit(oferta nelimitata)</p>
                                </div>
                              </div>

                              <div className='mt-2'>
                                <p className='text-[16px] text-white'>Disponibilitate</p>
                                <ul className='mt-1.5 space-y-1.5'>
                                  {
                                    [
                                      {nume:"Perioade specifice",text:"Selecteaza perioadele in care oferta va fi disponibila."},
                                      {
                                        nume:"Zile specifice ale saptamanii",text:"Alege in ce zile ale saptamanii va fi activa oferta."
                                      }
                                    ].map((par,iOfDis)=>(
                                      <li key={iOfDis} onClick={()=>setCheckOfDis(iOfDis)} className='border px-3 py-2 rounded-lg border-button/30 flex items-center space-x-3 hover:bg-button/60 transition-all duration-300 ease-in-out cursor-pointer'>
                                        <input type="checkbox" value={checkOfDis} onChange={()=>setCheckOfDis(iOfDis)}  checked={checkOfDis ===iOfDis} />
                                        <div>
                                          <p className='text-white'>{par.nume}</p>
                                          <p>{par.text}</p>
                                        </div>
                                      </li>
                                    ))
                                  }
                                </ul>
                              </div>

                              <div  className='mt-2'>
                                <p className='text-white text-[16px]'>Alte setari</p>
                                <div className='mt-1 space-y-1'>
                                  <p>Prioritate oferta</p>
                                  <div className='relative'>
                                    <div>
                                      <button onClick={()=>setVisibOfPrio(!visibOfPrio)} className={`border border-button/30 ${visibOfPrio?"rounded-b-lg bg-button/60":"rounded-lg bg-transparent"} flex items-center space-x-3 w-full px-3 py-2 justify-between hover:bg-button/60  transition-all duration-300 ease-in-out cursor-pointer`}>
                                        <p>Normala</p>
                                        {visibOfPrio? <IoIosArrowUp />:<IoIosArrowDown />}
                                      </button>
                                    </div>
                                    <ul className={`absolute w-full bottom-9.5 transition-all duration-500 ease-in-out overflow-hidden ${visibOfPrio? "max-h-40 opacity-100":"max-h-0 opacity-0"} bg-background z-400`}>
                                      {
                                        ["Ridicata","Normala","Scazuta"].map((par,iPrio)=>(
                                          <li key={iPrio} className={`border border-button/30  hover:bg-button/60  transition-all duration-300 ease-in-out cursor-pointer space-x-3 w-full px-3 py-2  `}>
                                            <p>{par}</p>
                                          </li>
                                        ))
                                      }
                                    </ul>
                                  </div>
                                </div>
                              </div>

                              <div className='flex modf8:space-x-3 mt-2 modf8:justify-end max-modf8:flex-col max-modf8:space-y-3'>
                                <button onClick={()=>{setModal(null); document.body.classList.remove("overflow-hidden")}} className='border border-button/30 px-3 py-1.5 rounded-sm hover:bg-red-400/30 hover:text-red-400 cursor-pointer transition-all duration-300 ease-in-out text-white'>Anuleaza</button>
                                <button onClick={()=>{setModal(null); document.body.classList.remove("overflow-hidden")}} className='border border-button/30 px-3 py-1.5 rounded-sm hover:bg-button/60 bg-button text-white cursor-pointer transition-all duration-300 ease-in-out '>Programeaza oferta</button>
                              </div>
                            </div>
                          </div>
                        )
                      }

                      {
                        modal.actiune ===4 && (
                          <div className='w-99 max-h-[95vh] overflow-y-auto overflow-hidden scrollbar-thin border border-button bg-background rounded-lg py-3 px-3'>
                            <div className='flex justify-end'>
                              
                              <IoClose onClick={()=>{setModal(null); document.body.classList.remove("overflow-hidden")}}  className='text-[18px] cursor-pointer'/>
                            </div>

                            <div className='flex justify-center flex-col items-center text-center px-4 text-[16px]'>
                              <div className=''>
                                <RxExclamationTriangle className='shrink-0 text-red-600' size={35 }/>
                              </div>
                              <div>
                                <p className='text-white text-[18px] mt-1'>Sterge oferta</p>
                                <p className='mt-1.5'>Esti sigur ca doresti sa stergi aceasta <span className='text-red-600'>oferta</span>? </p>
                                <p className='mt-1.5 border border-red-600/30 px-3 py-1 rounded-sm'>Aceasta actiune este ireversibila si va sterge toate informatiile despre aceasta oferta.</p>

                                <div className=' flex modf8:space-x-3 mt-2 modf8:justify-end max-modf8:flex-col max-modf8:space-y-3'>
                                  <button onClick={()=>{setModal(null); document.body.classList.remove("overflow-hidden")}} className='border border-button/30 px-3 py-2 rounded-sm hover:bg-button/60 cursor-pointer transition-all duration-300 ease-in-out text-white'>Anuleaza</button>
                                  <button onClick={()=>{setModal(null); document.body.classList.remove("overflow-hidden")}} className='border border-button/30 px-3 py-2 rounded-sm bg-red-600 hover:bg-red-600/60 cursor-pointer flex items-center  space-x-1 transition-all duration-300 ease-in-out text-white w-full justify-center'>
                                  <TbTrash/>
                                  <p>Sterge oferta</p></button>
                                </div>
                              </div>
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
        </div>
      )}

      <Outlet context={{visibleBara}}/>
    </div>
  )
}

export default AdminOferte
