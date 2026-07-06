import React, { useState } from 'react'
import { FiUsers } from "react-icons/fi";
import { FaHotel, FaPhone, FaRegCircleCheck, FaTriangleExclamation } from "react-icons/fa6";
import { RiUserSettingsLine } from "react-icons/ri";
import { BsExclamationCircle, BsSearch, BsShieldExclamation, BsThreeDotsVertical, BsTrash } from "react-icons/bs";
import { Outlet, useLocation, useNavigate, useOutletContext } from 'react-router-dom';
import { IoIosArrowDown, IoIosArrowUp, IoIosMail } from 'react-icons/io';
import angajatiData from './angajati';
import hotels from '../hotels/Hotel/hotels'
import { GoPencil } from 'react-icons/go';
import { MdLockReset } from "react-icons/md";
import { LuCircleCheck, LuCirclePause, LuUserPen } from "react-icons/lu";
import { FaRegPauseCircle } from "react-icons/fa";
import { IoClose, IoInformationCircleOutline } from "react-icons/io5";

import { FaRegTrashAlt } from "react-icons/fa";


const AdminAngajati = () => {
  const [angajati,setAngajati] = useState(angajatiData)
  const navigate = useNavigate();
  const angajatiActivi =angajati.filter(angajat=> angajat.status === "Activ").length ||0;

  const angajatiInactiv = angajati.filter(angajat => angajat.status ==="Inactiv").length ||0;
  const nrAdministrator = angajati.filter(angajat => angajat.rol === "Administrator").length ||0;
  const nrManageri = angajati.filter(angajat=>angajat.rol === "Manager").length ||0;
  const nrReceptioneri = angajati.filter(angajat=>angajat.rol === "Receptioner").length ||0;
  
  const iconMap ={
    angajati:FiUsers,
    activi: FaRegCircleCheck,
    inactivi: RiUserSettingsLine,
    administrator: BsShieldExclamation
  };
  const {visibleBara} = useOutletContext();
  const [visibleRol,setVisibleRol]=useState(false);
  const [visibleNume,setVisibleNume]=useState(false);
  const [visibleStatusuri,setVisibleStatusuri]=useState(false);
  const [visibleEmail,setVisibleEmail]=useState(false);
  const [visibleHot,setVisibleHot]=useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [openMenuEdit,setOpenMenuEdit] = useState(null);

  const [visibleRolAng, setVisibleRolAng] = useState(false);
  const [visibleStatusAng, setVisibleStatusAng] = useState(false);
  const [visibleHotelAng, setVisibleHotelAng] = useState(false);
  const [check,setCheck] = useState([
    {nume:"Dashboard",text:"Poate vizualiza dashboard-ul principal",check:false},
    {nume:"Hoteluri",text:"Poate gestiona hotelurile si informatiile",check:false},
    {nume:"Rezervari",text:"Poate crea, edita si anula rezervari",check:false},
    {nume:"Camere",text:"Poate gestiona camere",check:false},
    {nume:"Clienti",text:"Poate gestiona clienti",check:false},
    {nume:"Oferte",text:"Poate crea si edita oferte",check:false},
  ]);
  const toggCheck = (index)=>{
    setCheck(prev=>
      prev.map((item,i)=>
      i===index? {...item, check:!item.check}: item)
    )
  };
  const [modalAng,setModalAng] = useState(null);

  const [checkRolMod,setCheckRolMod] =useState(null);
  
  const location = useLocation();
  const visibleAngajatiPage = location.pathname === `/admin/admin-angajati`
  return (
    <div  className='mt-18'>
      {visibleAngajatiPage &&(<div >
        <div className='flex items-center justify-between text-[14px] max-modf2:flex-col max-modf2:items-start max-modf2:space-y-3 space-x-3'>
          <div>
            <p className='text-[22px] font-medium'>Angajati</p>
            <p className='text-gray-400'>Gestioneaza conturile angajatilor si permisiunile acestora.</p>
          </div>
          <div className='shrink-0'>
            <button onClick={()=>navigate("/admin/admin-angajati/adauga-angajat")} className='flex items-center space-x-3 bg-button px-3 py-0.5 rounded-lg hover:bg-button/60 cursor-pointer transition-all duration-300 ease-in-out'>
              <p className='mb-0.5 font-medium text-[22px]'>+</p>
              <p>Adauga angajati</p>
            </button>
          </div>
        </div>

        <ul className={`mt-3 grid grid-cols-4 gap-3 ${visibleBara?"max-modf6:grid-cols-2 max-modf2:grid-cols-1":"max-modf:grid-cols-2 max-modf2:grid-cols-1"}`}>
          {
            [
              {icon:"angajati",nume:"Total angajati",nr:angajati.length,inPlus:"+2",textPlus:"fata de luna trecuta",bgIc:"bg-button/30",icCul:"text-button"},
              {icon:"activi",nume:"Angajati activi",nr:angajatiActivi,inPlus:"+3",textPlus:"fata de luna trecuta",bgIc:"bg-green-400/30",icCul:"text-green-400"},
              {icon:"inactivi",nume:"Angajati inactivi",nr:angajatiInactiv,inPlus:"-1",textPlus:"fata de luna trecuta",bgIc:"bg-red-400/30",icCul:"text-red-400"},
              {icon:"administrator",nume:"Administratori",nr:nrAdministrator,inPlus:"",textPlus:"Nicio schimbare",bgIc:"bg-blue-400/30",icCul:"text-blue-400"},
              {icon:"administrator",nume:"Manageri",nr:nrManageri,inPlus:"",textPlus:"Nicio schimbare",bgIc:"bg-blue-400/30",icCul:"text-blue-400"},
              {icon:"administrator",nume:"Receptioneri",nr:nrReceptioneri,inPlus:"",textPlus:"Nicio schimbare",bgIc:"bg-blue-400/30",icCul:"text-blue-400"},
            ].map((par,i)=>{
              const Icon = iconMap[par.icon]
              return(
                <li key={i} className='border px-3 py-3 rounded-lg border-button/30 text-[14px] flex items-center space-x-3'>
                  <div className={`px-2 py-2 ${par.icCul} ${par.bgIc} text-[24px] rounded-full`}>
                    {Icon && <Icon />}
                  </div>
                  <div className='text-gray-400'>
                    <p className='text-white'>{par.nume}</p>
                    <p className='text-white text-[19px]'>{par.nr}</p>
                    <p><span className={`${par.inPlus<0?"text-red-400":"text-green-400"}`}>{par.inPlus}</span> {par.textPlus}</p>
                  </div>
                </li>
              )
            })
          }
        </ul>
        
        <div className='mt-4 text-[22px]'>
          <p>Filtreaza dupa:</p> 
        </div>
        <div className={`grid grid-cols-3 modf7:grid-cols-4 gap-3   rounded-lg  mt-3 text-[14px] ${visibleBara?"max-modf4:grid-cols-2 max-modf1:grid-cols-1":"max-modf:grid-cols-2 max-modf2:grid-cols-1"}`}>
          <div className='relative'>
            <input className='border pl-3 pr-9 py-1 w-full rounded-lg outline-0 border-button/30' type="text" name="" id="" placeholder='Cauta angajat dupa nume, email ...'/>
            <div className='absolute right-3 top-1/2 -translate-y-1/2'>
              <BsSearch/>
            </div>
          </div>

          <div className='relative'>
            <div>
              <button onClick={()=>setVisibleRol(!visibleRol)} className={`w-full border border-button/30 px-3 py-1 ${visibleRol?"rounded-t-lg bg-button/60":"bg-transparent rounded-lg"} cursor-pointer hover:bg-button/60 transition-all duration-300 ease-in-out`}>
                <div className='flex items-center justify-between'>
                  <p>Toate rolurile</p>
                  {visibleRol? <IoIosArrowUp />:<IoIosArrowDown />}
                </div>
              </button>
            </div>

            <ul className={`absolute bg-background w-full ${visibleRol?"max-h-40 opacity-100": "max-h-0 opacity-0"} overflow-hidden transition-all duration-500 ease-in-out z-300 overflow-y-scroll scrollbar-none`}>
              <li key={"toateRol"} className={`px-3 py-1 border border-button/30 hover:bg-button/60 cursor-pointer transition-all duration-300 ease-in-out`}>
                <p>Toate rolurile</p>
              </li>
              {
                ["Administrator","Manager","Receptioner"].map((par,i)=>(
                  <li key={i} className={`px-3 py-1 border border-button/30 hover:bg-button/60 cursor-pointer transition-all duration-300 ease-in-out`}>
                    <p>{par}</p>
                  </li>
                ))
              }
            </ul>
          </div>

          
          <div className='relative'>
            <div>
              <button onClick={()=>setVisibleNume(!visibleNume)} className={`w-full border border-button/30 px-3 py-1 ${visibleNume?"rounded-t-lg bg-button/60":"bg-transparent rounded-lg"} cursor-pointer hover:bg-button/60 transition-all duration-300 ease-in-out`}>
                <div className='flex items-center justify-between'>
                  <p>Toate numele</p>
                  {visibleNume? <IoIosArrowUp />:<IoIosArrowDown />}
                </div>
              </button>
            </div>

            <ul className={`absolute bg-background w-full ${visibleNume?"max-h-40 opacity-100": "max-h-0 opacity-0"} overflow-hidden transition-all duration-500 ease-in-out z-300 overflow-y-scroll scrollbar-none`}>
              <li key={"toateNum"} className={`px-3 py-1 border border-button/30 hover:bg-button/60 cursor-pointer transition-all duration-300 ease-in-out`}>
                <p>Toate numele</p>
              </li>
              {
                angajati.map((par,i)=>(
                  <li key={i} className={`px-3 py-1 border border-button/30 hover:bg-button/60 cursor-pointer transition-all duration-300 ease-in-out`}>
                    <p>{par.nume}</p>
                  </li>
                ))
              }
            </ul>
          </div>

          <div className='relative'>
            <div>
              <button onClick={()=>setVisibleStatusuri(!visibleStatusuri)} className={`w-full border border-button/30 px-3 py-1 ${visibleStatusuri?"rounded-t-lg bg-button/60":"bg-transparent rounded-lg"} cursor-pointer hover:bg-button/60 transition-all duration-300 ease-in-out`}>
                <div className='flex items-center justify-between'>
                  <p>Toate statusurile</p>
                  {visibleStatusuri? <IoIosArrowUp />:<IoIosArrowDown />}
                </div>
              </button>
            </div>

            <ul className={`absolute bg-background w-full ${visibleStatusuri?"max-h-40 opacity-100": "max-h-0 opacity-0"} overflow-hidden transition-all duration-500 ease-in-out z-300 overflow-y-scroll scrollbar-none`}>
              <li key={"toateStats"} className={`px-3 py-1 border border-button/30 hover:bg-button/60 cursor-pointer transition-all duration-300 ease-in-out`}>
                <p>Toate statusurile</p>
              </li>
              {
                ["Activ","Inactiv"].map((par,i)=>(
                  <li key={i} className={`px-3 py-1 border border-button/30 hover:bg-button/60 cursor-pointer transition-all duration-300 ease-in-out`}>
                    <p>{par}</p>
                  </li>
                ))
              }
            </ul>
          </div>

          <div className='relative'>
            <div>
              <button onClick={()=>setVisibleEmail(!visibleEmail)} className={`w-full border border-button/30 px-3 py-1 ${visibleEmail?"rounded-t-lg bg-button/60":"bg-transparent rounded-lg"} cursor-pointer hover:bg-button/60 transition-all duration-300 ease-in-out`}>
                <div className='flex items-center justify-between'>
                  <p>Toate email-urile</p>
                  {visibleEmail? <IoIosArrowUp />:<IoIosArrowDown />}
                </div>
              </button>
            </div>

            <ul className={`absolute bg-background w-full ${visibleEmail?"max-h-40 opacity-100": "max-h-0 opacity-0"} overflow-hidden transition-all duration-500 ease-in-out z-300 overflow-y-scroll scrollbar-none`}>
              <li key={"toateEm"} className={`px-3 py-1 border border-button/30 hover:bg-button/60 cursor-pointer transition-all duration-300 ease-in-out`}>
                <p>Toate email-urile</p>
              </li>
              {
                angajati.map((par,i)=>(
                  <li key={i} className={`px-3 py-1 border border-button/30 hover:bg-button/60 cursor-pointer transition-all duration-300 ease-in-out`}>
                    <p>{par.email}</p>
                  </li>
                ))
              }
            </ul>
          </div>

          <div className='relative'>
            <div>
              <button onClick={()=>setVisibleHot(!visibleHot)} className={`w-full border border-button/30 px-3 py-1 ${visibleHot?"rounded-t-lg bg-button/60":"bg-transparent rounded-lg"} cursor-pointer hover:bg-button/60 transition-all duration-300 ease-in-out`}>
                <div className='flex items-center justify-between'>
                  <p>Toate hotelurile</p>
                  {visibleHot? <IoIosArrowUp />:<IoIosArrowDown />}
                </div>
              </button>
            </div>

            <ul className={`absolute bg-background w-full ${visibleHot?"max-h-40 opacity-100": "max-h-0 opacity-0"} overflow-hidden transition-all duration-500 ease-in-out z-300 overflow-y-scroll scrollbar-none`}>
              <li key={"toateHot"} className={`px-3 py-1 border border-button/30 hover:bg-button/60 cursor-pointer transition-all duration-300 ease-in-out`}>
                <p>Toate hotelurile</p>
              </li>
              {
                hotels.map((par,i)=>(
                  <li key={i} className={`px-3 py-1 border border-button/30 hover:bg-button/60 cursor-pointer transition-all duration-300 ease-in-out`}>
                    <p>{par.nume}</p>
                  </li>
                ))
              }
            </ul>
          </div>


          
        </div>

        <div className='mt-4 border rounded-lg border-button/30 py-3'>
          <div>
            <p className='px-3 font-medium'>Angajati ({angajati.length})</p>
          </div>
          <div className='overflow-x-auto pb-2 min-w-0  scrollbar-thin text-gray-400 text-[14px] mt-3'>
            <div className='flex space-x-3 px-3'>
              <div className={`${visibleBara?"max-modf7:w-55":"max-modf7:w-60"} modf7:flex-2 shrink-0 transition-[width] duration-300 ease-in-out`}><p>Utilizator</p></div>
              <div className={`${visibleBara?"max-modf7:w-30":"max-modf7:w-35"} modf7:flex-1 shrink-0 transition-[width] duration-300 ease-in-out`}><p>Contact</p></div>
              <div className={`${visibleBara?"max-modf7:w-30":"max-modf7:w-35"} modf7:flex-1 shrink-0 transition-[width] duration-300 ease-in-out`}><p>Rol</p></div>
              <div className={`${visibleBara?"max-modf7:w-50":"max-modf7:w-57"} modf7:flex-2 shrink-0 transition-[width] duration-300 ease-in-out`}><p>Hoteluri accesibile</p></div>
              <div className={`${visibleBara?"max-modf7:w-18":"max-modf7:w-23"} modf7:flex-1 shrink-0 transition-[width] duration-300 ease-in-out`}><p>Status</p></div>
              <div className={`${visibleBara?"max-modf7:w-35":"max-modf7:w-40"} modf7:flex-1 shrink-0 transition-[width] duration-300 ease-in-out`}><p>Ultima autentificare</p></div>
              <div className={`${visibleBara?"max-modf7:w-20":"max-modf7:w-35"} modf7:flex-1 shrink-0 transition-[width] duration-300 ease-in-out text-center`}><p>Actiuni</p></div>
            </div>

            <ul className=''>
              {
                angajati.map((angajat,i)=>(
                  <li key={i} className='flex relative space-x-3 px-3 border-y border-y-button/30 py-3  mt-3 min-w-max items-center'>
                    
                    
                    
                    <div className={`${visibleBara?"max-modf7:w-55":"max-modf7:w-60"} modf7:flex-2 shrink-0 transition-[width] duration-300 ease-in-out flex items-center space-x-3`}>
                      <div className='w-10 h-10 rounded-full'>
                        <img className='w-full h-full rounded-full' src={angajat.img} alt="" />
                      </div>
                      <div>
                        <p className='text-white'>{angajat.nume}</p>
                        <p className='break-all'>{angajat.email}</p>
                      </div>
                    </div>
                    <div className={`${visibleBara?"max-modf7:w-30":"max-modf7:w-35"} modf7:flex-1 shrink-0 transition-[width] duration-300 ease-in-out`}><p>{angajat.nr}</p></div>
                    <div className={`${visibleBara?"max-modf7:w-30":"max-modf7:w-35"} modf7:flex-1 shrink-0 transition-[width] duration-300 flex ease-in-out`}><p className={`${angajat.rol ==="Manager"?"bg-green-400/30 text-green-400":angajat.rol==="Administrator"?"bg-button/30 text-button":"bg-blue-400/30 text-blue-400"} px-3 rounded-full `}>{angajat.rol}</p></div>
                    <div className={`${visibleBara?"max-modf7:w-50":"max-modf7:w-57"} modf7:flex-2 shrink-0 transition-[width] duration-300 ease-in-out`}><p>{angajat.hotAccesibile}</p></div>
                    <div className={`${visibleBara?"max-modf7:w-18":"max-modf7:w-23"} modf7:flex-1 flex shrink-0 transition-[width] duration-300 ease-in-out`}><p className={`${angajat.status === "Activ"?"bg-green-400/30 text-green-400":"bg-red-400/30 text-red-400"} px-3 rounded-full`}>{angajat.status}</p></div>
                    <div className={`${visibleBara?"max-modf7:w-35":"max-modf7:w-40"} modf7:flex-1 shrink-0 transition-[width] duration-300 ease-in-out`}><p>{angajat.ultimaAutentificare}</p></div>
                    <div className={`${visibleBara?"max-modf7:w-20":"max-modf7:w-35"} modf7:flex-1 shrink-0 transition-[width] duration-300 ease-in-out text-center`}>
                      <div className='flex justify-center space-x-3'>

                        <div className='relative'>
                          <div>
                            <button onClick={()=>{setModalAng({actiune:0,angajat}); document.body.classList.add("overflow-hidden"); setOpenMenu(null)}} className='px-1.5 py-1.5 cursor-pointer border rounded-sm border-button/30'>
                              <GoPencil className='text-button' />
                            </button>
                          </div>
                          
                          
                        </div>

                        <div className=''>
                          <div className='relative'>
                            <button onClick={()=>setOpenMenu(openMenu === angajat.id? null: angajat.id)} className='px-1.5 py-1.5 border cursor-pointer rounded-sm border-button/30'>
                              <BsThreeDotsVertical />
                            </button>

                            {openMenu === angajat.id && (
                              <div className={`absolute ${i>=angajati.length-2?"-bottom-4":"-top-12" } border-button rounded-lg bg-background z-30 border  py-1 right-10 w-50 text-white`}>
                                <div className='relative'>
                                  <ul className='px-1.5 space-y-1'>
                                    <li key="menu-1" onClick={()=>{setModalAng({actiune:0,angajat}); document.body.classList.add("overflow-hidden"); setOpenMenu(null)}}  className='flex items-center space-x-3 hover:bg-button/60 transition-all px-3 duration-300 ease-in-out cursor-pointer rounded-sm py-1.5'>
                                      <GoPencil className='text-button' size={18}/>
                                      <p>Editeaza angajat</p>
                                    </li>
                                    <li key="menu-2" onClick={()=>{setModalAng({actiune:1,angajat}); document.body.classList.add("overflow-hidden"); setOpenMenu(null)}} className='flex items-center space-x-3 hover:bg-button/60 transition-all px-3 duration-300 ease-in-out cursor-pointer rounded-sm py-1.5'>
                                      <MdLockReset className='text-button' size={18}/>
                                      <p>Vezi detalii</p>
                                    </li>
                                    <li key="menu-3" onClick={()=>{setModalAng({actiune:2,angajat}); document.body.classList.add("overflow-hidden"); setOpenMenu(null)}} className='flex items-center space-x-3 hover:bg-button/60 transition-all px-3 duration-300 ease-in-out cursor-pointer rounded-sm py-1.5'>
                                      <LuUserPen className='text-button' size={18}/>
                                      <p>Schimba rol</p>
                                    </li>
                                    <ul className=' border-y border-y-button/60 py-1'>
                                      <li key="menu-4" onClick={()=>{
                                        if(angajat.stareActivareAngajat === false) {
                                          setModalAng({actiune:3,angajat}); document.body.classList.add("overflow-hidden"); setOpenMenu(null);
                                        }
                                      }}  className={`flex items-center space-x-3  transition-all px-3 duration-300 ease-in-out   rounded-sm py-1.5 ${angajat.stareActivareAngajat===true?"text-gray-400 pointer-events-none":"cursor-pointer hover:bg-button/60 text-white"}`}>
                                        <FaRegCircleCheck className={`${angajat.stareActivareAngajat===true?"text-gray-400":"text-button"}`} size={18}/>
                                        <p>Activeaza</p>
                                      </li>
                                      <li key="menu-5" onClick={()=>{
                                        if(angajat.stareActivareAngajat === true) {
                                          setModalAng({actiune:4,angajat}); document.body.classList.add("overflow-hidden"); setOpenMenu(null);
                                        }
                                      }} className={`flex items-center space-x-3  transition-all px-3 duration-300 ease-in-out  rounded-sm py-1.5 ${angajat.stareActivareAngajat===false?"text-gray-400 pointer-events-none":"hover:bg-button/60 cursor-pointer"}`}>
                                        <FaRegPauseCircle className={`${angajat.stareActivareAngajat === false? "text-gray-400":'text-button'}`} size={18}/>
                                        <p>Dezactiveaza</p>
                                      </li>
                                    </ul>

                                    <li key="menu-6" onClick={()=>{setModalAng({actiune:5,angajat}); document.body.classList.add("overflow-hidden"); setOpenMenu(null)}} className='flex items-center space-x-3 hover:bg-button/60 transition-all px-3 duration-300 ease-in-out cursor-pointer rounded-sm py-1.5 text-red-400'>
                                      <FaRegTrashAlt className='' size={18}/>
                                      <p >Sterge angajat</p>
                                    </li>
                                  </ul>

                                  <div className={`absolute w-3 h-3 bg-button -right-3 ${i>=angajati.length-2?"bottom-4.5":"top-13"}`} style={{clipPath: "polygon(0 100%, 100% 50%, 0 0)"}}></div>
                                  <div className={`absolute w-3 h-3 bg-background -right-2.75 ${i>=angajati.length-2?"bottom-4.5":"top-13"}`} style={{clipPath: "polygon(0 100%, 100% 50%, 0 0)"}}></div>
                                </div>
                                
                              </div>
                            )}
                          </div>

                          
                        </div>


                      </div>
                    </div>
                  </li>
                ))
              }
              

              {
                modalAng && (
                  <div className='fixed bg-gray-400/15 inset-0 z-500 flex justify-center items-center'>
                    <div className='flex px-3 justify-center w-full'>
                      {
                        modalAng.actiune === 0 && (
                          <div className='border border-button px-3 py-3  bg-background overflow-y-auto overflow-hidden  rounded-lg max-h-[95vh] scrollbar-thin w-140'>
                            <div className='flex justify-end'>
                              <IoClose onClick={()=>{setModalAng(null); document.body.classList.remove("overflow-hidden")}}  className='text-[18px] cursor-pointer'/>
                            </div>


                            <div>
                              <p className='text-white text-[18px]'>Editeaza angajat</p>
                              <p>Modifica informatiile si permisiunile angajatului.</p>
                              <p className='text-white mt-1'>Informatii personale</p>
                              <div className='grid grid-cols-2 max-modf8:grid-cols-1 w-full gap-1'>
                                
                                <div className='flex flex-col items-start mt-1 '>
                                  <p>Nume</p>
                                  <div className='w-full mt-1'>
                                    <input className='border w-full border-button/30  px-3 py-1 rounded-lg outline-0 text-white placeholder:text-white' type="text" name="" defaultValue={modalAng.angajat.nume} id="" />
                                  </div>
                                </div>


                                <div className='flex flex-col items-start mt-1 '>
                                  <p>Email</p>
                                  <div className='w-full mt-1'>
                                    <input className='border w-full border-button/30  px-3 py-1 rounded-lg outline-0 text-white placeholder:text-white' type="text" name="" defaultValue={modalAng.angajat.email} id="" />
                                  </div>
                                </div>


                                <div className='flex flex-col items-start mt-1 '>
                                  <p>Numar telefon</p>
                                  <div className='w-full mt-1'>
                                    <input className='border w-full border-button/30  px-3 py-1 rounded-lg outline-0 text-white placeholder:text-white' type="text" name="" defaultValue={modalAng.angajat.nr} id="" />
                                  </div>
                                </div>


                                <div className='flex flex-col items-start mt-1 '>
                                  <p>Rol</p>
                                  <div className='w-full mt-1 relative'>
                                    <div>
                                      <button onClick={()=>{setVisibleRolAng(!visibleRolAng); setVisibleStatusAng(false); setVisibleHotelAng(false);}} className={`border cursor-pointer w-full border-button/30  px-3 py-1 ${visibleRolAng?"rounded-b-lg bg-button/60":"bg-transparent rounded-lg"} outline-0 text-white text-start transition-all hover:bg-button/60 duration-300 ease-in-out`}>
                                        {modalAng.angajat.rol}
                                      </button>
                                    </div>
                                    <ul className={`absolute overflow-hidden bg-background ${visibleRolAng? "max-h-100 opacity-100": "max-h-0 opacity-0"} transition-all bottom-7.5  duration-500 ease-in-out w-full  text-white text-start `}>
                                      {
                                        ["Administrator","Manager","Receptioner"].map((par,i)=>(
                                          <li key={i} className='border border-button/30 px-3 py-1 cursor-pointer hover:bg-button/60 transition-all duration-300 ease-in-out'>
                                            {par}
                                          </li>
                                        ))
                                      }
                                    </ul>
                                  </div>
                                </div>

                                <div className='flex flex-col items-start mt-1 '>
                                  <p>Status</p>
                                  <div className='w-full mt-1 relative'>
                                    <div>
                                      <button onClick={()=>{setVisibleStatusAng(!visibleStatusAng); setVisibleRolAng(false); setVisibleHotelAng(false)}} className={`border cursor-pointer w-full border-button/30  px-3 py-1 ${visibleStatusAng?"rounded-t-lg bg-button/60":"bg-transparent rounded-lg"} outline-0 text-white text-start transition-all hover:bg-button/60 duration-300 ease-in-out`}>
                                        {modalAng.angajat.status}
                                      </button>
                                    </div>
                                    <ul className={`absolute overflow-hidden bg-background ${visibleStatusAng? "max-h-100 opacity-100": "max-h-0 opacity-0"} transition-all   duration-500 ease-in-out w-full  text-white text-start `}>
                                      {
                                        ["Activ","Inactiv"].map((par,i)=>(
                                          <li key={i} className='border border-button/30 px-3 py-1 cursor-pointer hover:bg-button/60 transition-all duration-300 ease-in-out'>
                                            {par}
                                          </li>
                                        ))
                                      }
                                    </ul>
                                  </div>
                                </div>

                                <div className='flex flex-col items-start mt-1 '>
                                  <p>Hoteluri accesibile</p>
                                  <div className='w-full mt-1 relative'>
                                    <div>
                                      <button onClick={()=>{setVisibleHotelAng(!visibleHotelAng); setVisibleRolAng(false); setVisibleStatusAng(false)}} className={`border cursor-pointer w-full border-button/30  px-3 py-1 ${visibleHotelAng?"rounded-t-lg bg-button/60":"bg-transparent rounded-lg"} outline-0 text-white text-start transition-all hover:bg-button/60 duration-300 ease-in-out`}>
                                        {modalAng.angajat.hotAccesibile}
                                      </button>
                                    </div>
                                    <ul className={`absolute overflow-hidden  overflow-y-scroll scrollbar-none bg-background ${visibleHotelAng? "max-h-50 opacity-100": "max-h-0 opacity-0"} transition-all   duration-500 ease-in-out w-full  text-white text-start `}>
                                      {
                                        hotels.map((par,i)=>(
                                          <li key={i} className='border border-button/30 px-3 py-1 cursor-pointer hover:bg-button/60 transition-all duration-300 ease-in-out'>
                                            {par.nume}
                                          </li>
                                        ))
                                      }
                                    </ul>
                                  </div>
                                </div>




                                
                              </div>
                            </div>

                            <div>
                              <p className='text-white'>Permisiuni</p>
                              <p>Configureaza permisiunile angajatului in platforma.</p>

                              <ul className='mt-1 grid grid-cols-2 max-modf8:grid-cols-1 gap-1'>
                                {
                                  check.map((par,i)=>
                                  <li onClick={()=>toggCheck(i)} key={i} className='flex items-center space-x-3 cursor-pointer hover:bg-button/60 px-1.5 rounded-lg transition-all duration-300 ease-in-out border border-button/30'>
                                    
                                    <input type="checkbox" onChange={()=>toggCheck(i)} checked={par.check} name="" id="" />
                                    <div>
                                      <p>{par.nume}</p>
                                      <p>{par.text}</p>
                                    </div>
                                    
                                  </li>)
                                }
                              </ul>
                            </div>

                            <div className='flex text-white modf8:space-x-3 mt-2 modf8:justify-end max-modf8:flex-col max-modf8:space-y-3 '>
                              <button onClick={()=>{setModalAng(null); document.body.classList.remove("overflow-hidden")}} className='px-3 py-1 border border-button/30 hover:bg-button/60 transition-all duration-300 ease-in-out cursor-pointer rounded-sm'>Anuleaza</button>
                              <button onClick={()=>{setModalAng(null); document.body.classList.remove("overflow-hidden")}} className='px-3 py-1 border border-button/30 bg-button hover:bg-button/60 transition-all duration-300 ease-in-out cursor-pointer rounded-sm'>Salveaza modificarile</button>
                            </div>
                          </div>
                        )
                      }

                      

                      {
                        modalAng.actiune === 1 && (
                          <div className='border border-button px-3 py-3  bg-background overflow-y-auto overflow-hidden  rounded-lg max-h-[95vh] scrollbar-thin w-160'>
                            <div className='flex justify-between'>
                              <p className='text-[19px] text-white'>Detalii angajat</p>
                              <IoClose onClick={()=>{setModalAng(null); document.body.classList.remove("overflow-hidden")}}  className='text-[18px] cursor-pointer'/>
                            </div>


                            <div className='grid grid-cols-2 max-modf2:grid-cols-1 mt-3 gap-3'>
                              <div className='max-modf2:flex max-modf2:space-x-3 max-modf8:flex-col'>
                                <div className='flex space-x-3'>
                                  <img className='shrink-0 w-15 h-15 rounded-full' src={modalAng.angajat.img} alt="" />
                                  <div className='flex flex-col items-start'>
                                    <p className='text-[16px] text-white'>{modalAng.angajat.nume} <span className={`text-[14px] ml-3 px-1.25 ${modalAng.angajat.status==="Activ"?"bg-green-400/30 text-green-400": "bg-red-400/30 text-red-400"}`}>{modalAng.angajat.status}</span></p>
                                    <p className={`${modalAng.angajat.rol ==="Manager"?"bg-green-400/30 text-green-400":modalAng.angajat.rol==="Administrator"?"bg-button/30 text-button":"bg-blue-400/30 text-blue-400"} px-1.5 py-0.5 rounded-sm mt-1`}>{modalAng.angajat.rol}</p>
                                    <div className='flex space-x-2 items-center'><IoIosMail size={18}/> <p>{modalAng.angajat.email}</p></div>
                                    <div className='flex items-center space-x-2'><FaPhone/> <p>{modalAng.angajat.nr}</p></div>
                                    <p>Membru din 15 februarie 2024, 9:30</p>
                                  </div>
                                </div>

                                <div className='border border-button/30 px-3 py-1.5 rounded-sm modf2:mt-2 max-modf8:mt-2'>
                                  <div className='flex items-center space-x-2'>
                                    <FaHotel className='text-button shrink-0'/>
                                    <p className='text-white'>Hoteluri accesibile ({modalAng.angajat.hotAccesibile})</p>
                                    
                                  </div>
                                  <p>Poate accesa toate hoteluril din platforma</p>
                                  <p>Total hoteluri: {hotels.length}</p>
                                </div>  
                              </div>

                              <div>
                                <div className='border border-button/30 rounded-sm px-3 py-3'>
                                  <p className='text-white'> Infomratii cont</p>
                                  <div className='grid mt-1.5 grid-cols-2 gap-3'>
                                    <p>Id angajat:</p>
                                    <p>{modalAng.angajat.id}</p>
                                  </div>
                                  <div className='grid grid-cols-2 items-center gap-3'>
                                    <p>Rol:</p>
                                    <p>{modalAng.angajat.rol}</p>
                                  </div>
                                  <div className='grid grid-cols-2 items-center gap-3'>
                                    <p>Status:</p>
                                    <p>{modalAng.angajat.status}</p>
                                  </div>
                                  <div className='grid grid-cols-2 items-center gap-3'>
                                    <p>Ultima autentificare:</p>
                                    <p>{modalAng.angajat.ultimaAutentificare}</p>
                                  </div>

                                  <div className='mt-2'>
                                    <div className='flex items-center-safe space-x-3'>
                                      <BsShieldExclamation className='shrink-0 text-button text-[16px]'/>
                                      <p className='text-white'>Permisiuni</p>
                                    </div>
                                    <ul className='mt-1.5 list-disc ml-5 marker:text-button'>
                                      <li>Gestionare hoteluri</li>
                                      <li>Gestionare camere</li>
                                      <li>Gestionare rezervari</li>
                                      <li>Gestionare clienti</li>
                                      <li>Gestionare oferte</li>
                                      <li>Vizualizare dashboard</li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className='mt-3'>
                              <p className='text-white text-[15px]'>Activitate recenta</p>

                              <div className='border border-button/30 rounded-sm  py-3 overflow-x-auto scrollbar-thin min-w-0'>
                                <div className='flex space-x-3 '>
                                  <div className={`shrink-0  px-3 w-40`}>Actiune</div>
                                  <div className={`shrink-0 px-3 w-60`}>Detalii</div>
                                  <div className={`shrink-0 px-3 w-39.5`}>Data</div>
                                  
                                </div>
                                <ul className=' mt-3'>
                                  {
                                    modalAng.angajat.activitate.map((activitatea,iActivitate)=>(
                                      <li key={iActivitate} className='flex items-center py-3 space-x-3 border-y border-y-button/30 min-w-max'>
                                        <div className={`shrink-0 px-3 w-40`}><p>{activitatea.numeActiune}</p></div>
                                        <div className={`shrink-0  px-3 w-60`}><p>{activitatea.detaliiActiune}</p></div>
                                        <div className={`shrink-0  px-3 w-39.5 `}><p>{activitatea.dataActiune}</p></div>
                                      </li>
                                    ))
                                  }
                                </ul>
                              </div>
                            </div>



                            <div className='flex text-white modf8:space-x-3 mt-2 modf8:justify-end max-modf8:flex-col max-modf8:space-y-3 '>
                              <button onClick={()=>{setModalAng(null); document.body.classList.remove("overflow-hidden")}} className='px-3 py-1 border border-button/30 hover:bg-button/60 transition-all duration-300 ease-in-out cursor-pointer rounded-sm'>Anuleaza</button>
                              <button onClick={()=>{setModalAng(prev=>({...prev,actiune:4})); }} className='px-3 py-1 border border-button/30 bg-red-600 hover:bg-red-600/60 transition-all duration-300 ease-in-out cursor-pointer rounded-sm'>Dezactiveaza angajat</button>
                            </div>
                          </div>
                        )
                      }

                      {
                        modalAng.actiune === 2 && (
                          <div className='border border-button px-3 py-3  bg-background overflow-y-auto overflow-hidden  rounded-lg max-h-[95vh] scrollbar-thin w-110'>
                            <div className='flex justify-between'>
                              <p className='text-[19px] text-white'>Schimba rol angajat</p>
                                <IoClose onClick={()=>{setModalAng(null); document.body.classList.remove("overflow-hidden")}}  className='text-[18px] cursor-pointer'/>
                            </div>


                            <div className='flex mt-3 items-center space-x-3'>
                              <img className='w-15 h-15 rounded-full shrink-0' src={modalAng.angajat.img} alt="" />
                              <div >
                                <p className='text-white'>{modalAng.angajat.nume}</p>
                                <p>{modalAng.angajat.email}</p>
                              </div>
                            </div>

                            <div className='border px-3 py-1.5 rounded-lg mt-3 border-button/30'>
                              <div className='flex items-center space-x-3 mb-1.5'>
                                <p className='text-button'>Rol curent:</p>
                                <p className='text-button bg-button/15 px-3'>{modalAng.angajat.rol}</p>
                              </div>
                              <p>Angajatul are acces la proprietati si permisiuni specifice acestui rol.</p>
                            </div>

                            <div className='text-white mt-2 border-button/30 border px-3 py-1.5 rounded-lg'>
                              <p className='font-medium'>Selecteaza rol nou</p>
                              <ul className='mt-1 space-y-1.5'>
                                {
                                  [
                                    {nume:"Administrator",acces:"Acces complet la toate modulele si setarile platformei."},
                                    {nume:"Manager",acces:"Poate gestiona hoteluri, clienti, rezervari si rapoarte."},
                                    {nume:"Receptioner",acces:"Poate gestiona rezervari, check-in/check-out si clienti."},
                                  ].map((rol,iRol)=>(
                                    <li key={iRol} onClick={()=>setCheckRolMod(iRol)} className='border border-button/30 cursor-pointer hover:bg-button/60 transition-all duration-500 ease-in-out rounded-lg px-3 py-1.5 flex items-center space-x-3'>
                                      <div>
                                        <input type="checkbox" onChange={()=>setCheckRolMod(iRol)} checked={checkRolMod===iRol} />
                                      </div>

                                      <div>
                                        <p>{rol.nume}</p>
                                        <p className='text-gray-400'>{rol.acces}</p>
                                      </div>
                                    </li>
                                  ))
                                }
                              </ul>
                            </div>

                            <div className='flex items-center space-x-3 border border-blue-600/50 mt-3 px-3 py-2 rounded-sm'>
                              <IoInformationCircleOutline className='shrink-0 text-[25px] text-blue-500'/>
                              <div>
                                <p>Schimbarea rolului va afecta imediat permisiunile angajatului.</p>
                                <p>Angajatul va fi notificat depsre aceasta modificare.</p>
                              </div>
                            </div>





                            <div className='flex text-white modf8:space-x-3 mt-2 modf8:justify-end max-modf8:flex-col max-modf8:space-y-3 '>
                              <button onClick={()=>{setModalAng(null); document.body.classList.remove("overflow-hidden")}} className='px-3 py-1 border border-button/30 hover:bg-button/60 transition-all duration-300 ease-in-out cursor-pointer rounded-sm'>Anuleaza</button>
                              <button onClick={()=>{setModalAng(null); document.body.classList.remove("overflow-hidden")}} className='px-3 py-1 border border-button/30 bg-button hover:bg-button/60 transition-all duration-300 ease-in-out cursor-pointer rounded-sm'>Salveaza modificarile</button>
                            </div>
                          </div>
                        )
                      }

                      {
                        modalAng.actiune === 3 && (
                          <div className='border border-button px-3 py-3  bg-background overflow-y-auto overflow-hidden  rounded-lg max-h-[95vh] scrollbar-thin w-110'>
                            <div className='flex justify-end'>
                              
                                <IoClose onClick={()=>{setModalAng(null); document.body.classList.remove("overflow-hidden")}}  className='text-[18px] cursor-pointer'/>
                            </div>

                            <div className='flex space-x-3 mt-1 items-center'>
                              <div className='text-green-400 bg-green-400/30 px-2 py-2 rounded-full shrink-0'>
                                <LuCircleCheck className='shrink-0' size={23}/>
                              </div>
                              <p className='text-white text-[18px] font-medium'>Activeaza angajat</p>
                            </div>

                            <div className='mt-3 flex items-center space-x-3'>
                              <div>
                                <img className='w-15 h-15 shrink-0 rounded-full' src={modalAng.angajat.img} alt="" />
                              </div>
                              <div>
                                <p className='text-white text-[16px]'>{modalAng.angajat.nume}</p>
                                <p>{modalAng.angajat.email}</p>
                              </div>
                            </div>

                            <p className='mt-3'>Angajatul va fi activat si va putea accesa platforma conform rolului si permisiunilor sale.</p>





                            <div className='flex text-white modf8:space-x-3 mt-2 modf8:justify-end max-modf8:flex-col max-modf8:space-y-3 '>
                              <button onClick={()=>{setModalAng(null); document.body.classList.remove("overflow-hidden")}} className='px-3 py-1 border border-button/30 hover:bg-button/60 transition-all duration-300 ease-in-out cursor-pointer rounded-sm'>Anuleaza</button>
                              <button onClick={()=>{setModalAng(null); document.body.classList.remove("overflow-hidden");
                                setAngajati(prev=>
                                  prev.map(angajat=>angajat.id===modalAng.angajat.id ?{...angajat,stareActivareAngajat:true}:angajat)
                                )
                              }} className='px-3 py-1 border border-button/30 bg-green-600 hover:bg-green-600/60 transition-all duration-300 ease-in-out cursor-pointer rounded-sm'>Activeaza angajat</button>
                            </div>
                          </div>
                        )
                      }

                      {
                        modalAng.actiune === 4 && (
                          <div className='border border-button px-3 py-3  bg-background overflow-y-auto overflow-hidden  rounded-lg max-h-[95vh] scrollbar-thin w-110'>
                            <div className='flex justify-end'>
                              
                                <IoClose onClick={()=>{setModalAng(null); document.body.classList.remove("overflow-hidden")}}  className='text-[18px] cursor-pointer'/>
                            </div>

                            <div className='flex space-x-3 mt-1 items-center'>
                              <div className='text-red-600 bg-red-600/30 px-2 py-2 rounded-full shrink-0'>
                                <LuCirclePause className='shrink-0' size={23}/>
                              </div>
                              <p className='text-white text-[18px] font-medium'>Dezactiveaza angajat</p>
                            </div>

                            <div className='mt-3 flex items-center space-x-3'>
                              <div>
                                <img className='w-15 h-15 shrink-0 rounded-full' src={modalAng.angajat.img} alt="" />
                              </div>
                              <div>
                                <p className='text-white text-[16px]'>{modalAng.angajat.nume}</p>
                                <p>{modalAng.angajat.email}</p>
                              </div>
                            </div>

                            <p className='mt-3'>Angajatul va fi dezactivat si nu se va mai putea autentifica in platforma pana la reactivare.</p>


                            <div className='flex items-start space-x-3 border border-orange-400/60 px-3 bg-orange-400/10 rounded-lg  py-3 mt-3'>
                              <div className='shrink-0 mt-1 text-orange-400'>
                                <FaTriangleExclamation className='shrink-0' size={20}/>
                              </div>
                              <div className='text-[12px]'>
                                <p>Angajatul va pierde accesul la toate hotelurile si functionalitatile.</p>
                                <p>Aceasta actiune poate fi anulata ulterior.</p>
                              </div>
                            </div>




                            <div className='flex text-white modf8:space-x-3 mt-2 modf8:justify-end max-modf8:flex-col max-modf8:space-y-3 '>
                              <button onClick={()=>{setModalAng(null); document.body.classList.remove("overflow-hidden")}} className='px-3 py-1 border border-button/30 hover:bg-button/60 transition-all duration-300 ease-in-out cursor-pointer rounded-sm'>Anuleaza</button>
                              <button onClick={()=>{setModalAng(null); document.body.classList.remove("overflow-hidden");
                                setAngajati(prev=>
                                  prev.map(angajat=>(
                                    angajat.id === modalAng.angajat.id ? {...angajat, stareActivareAngajat:false} : angajat
                                  ))
                                )
                              }} className='px-3 py-1 border border-button/30 bg-red-600 hover:bg-red-600/60 transition-all duration-300 ease-in-out cursor-pointer rounded-sm'>Dezactiveaza angajatul</button>
                            </div>
                          </div>
                        )
                      }

                      {
                        modalAng.actiune === 5 && (
                          <div className='border border-button px-3 py-3  bg-background overflow-y-auto overflow-hidden  rounded-lg max-h-[95vh] scrollbar-thin w-110'>
                            <div className='flex justify-end'>
                              
                                <IoClose onClick={()=>{setModalAng(null); document.body.classList.remove("overflow-hidden")}}  className='text-[18px] cursor-pointer'/>
                            </div>

                            <div className='flex items-center space-x-2'>
                              <div className='shrink-0 px-2 py-2 rounded-full bg-red-600/30 text-red-600 text-[22px]'>
                                <BsExclamationCircle className='shrink-0'/>
                                
                              </div>
                              <p className='text-white text-[18px]'>Sterge angajat</p>
                            </div>

                            <div className='flex mt-3 items-center space-x-3'>
                              <img className='w-15 h-15 rounded-full shrink-0' src={modalAng.angajat.img} alt="" />
                              <div>
                                <p>{modalAng.angajat.nume}</p>
                                <p className={`flex max-modf8:flex-col max-modf8:items-start items-center`}>{modalAng.angajat.email} <span className={`${modalAng.angajat.rol ==="Manager"?"bg-green-400/30 text-green-400":modalAng.angajat.rol==="Administrator"?"bg-button/30 text-button":"bg-blue-400/30 text-blue-400"} modf8:ml-1.5 px-1.5 py-0.5`}>{modalAng.angajat.rol}</span></p>
                              </div>
                            </div>


                            <div className='border border-red-600/30 px-3 py-3 rounded-lg mt-3 flex items-start space-x-3'>
                              <div className='mt-2 shrink-0'>
                                <FaTriangleExclamation  className='text-red-600 text-[25px] shrink-0'/>
                              </div>
                              <div>
                                <p>Aceasta actiune este ireversibila!</p>
                                <p>Toate datele asociate acestui utilizator vor fi sterse definitiv, inclusiv rezervarile, rapoartele si setari personale.</p>
                              </div>
                            </div>

                            <div className='mt-3 text-white'>
                              <p>Pentru a confirma, scrie codul: <span className='text-red-600'>Sterg angajat</span> in campul de mai jos:</p>
                              <label className='relative '>
                                <input className='border w-full mt-3 border-button/30 px-3 py-1.5 outline-0 rounded-sm text-red-600 peer' type="text" name="" id="" placeholder=''/>
                                <span className='absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none transition-all duration-300 ease-in-out bg-background px-3 text-button
                                peer-placeholder-shown:top-1/2
                                peer-placeholder-shown:-translate-y-1/2
                                peer-not-placeholder-shown:-top-2
                                peer-not-placeholder-shown:text-[10px]
                                
                                peer-focus:-top-2
                                peer-focus:text-[10px]
                                '>Introdu codul</span>
                              </label>
                              
                            </div>





                            <div className='flex text-white modf8:space-x-3 mt-2 modf8:justify-end max-modf8:flex-col max-modf8:space-y-3 '>
                              <button onClick={()=>{setModalAng(null); document.body.classList.remove("overflow-hidden")}} className='px-3 py-1 border border-button/30 hover:bg-button/60 transition-all duration-300 ease-in-out cursor-pointer rounded-sm'>Anuleaza</button>
                              <button onClick={()=>{setModalAng(null); document.body.classList.remove("overflow-hidden")}} className='px-3 py-1 border border-button/30 bg-red-600 hover:bg-red-600/60 transition-all duration-300 ease-in-out cursor-pointer rounded-sm flex items-center space-x-1'><BsTrash/> <p>Sterge angajat</p></button>
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

      <Outlet context={{visibleBara, angajati, hotels}}/>
    </div>
  )
}

export default AdminAngajati
