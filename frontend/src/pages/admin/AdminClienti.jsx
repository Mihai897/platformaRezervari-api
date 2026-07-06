import React, { useState } from 'react'
import { LuUsers } from "react-icons/lu";
import { FaRegCheckCircle ,FaSearch} from "react-icons/fa";
import { RiUserStarLine } from "react-icons/ri";
import { TbMoneybagPlus, TbTrash } from "react-icons/tb";
import { useOutletContext } from 'react-router-dom';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import clienti from './clienti'
import hotels from '../hotels/Hotel/hotels'
import { BsEye, BsThreeDotsVertical } from 'react-icons/bs';
import { FaRegEye } from "react-icons/fa6";
import { IoIosTimer } from "react-icons/io";

import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { FaRegCalendarCheck } from "react-icons/fa";


import { MdOutlineEmail } from "react-icons/md";
import { MdOutlineSms } from "react-icons/md";
import { FaRegTrashCan } from "react-icons/fa6";
import rezervare from './rezervare'
import { IoClose } from 'react-icons/io5';

import { RxExclamationTriangle } from "react-icons/rx";
import { useEffect } from 'react';

const AdminClienti = () => {

  const [userss,setUserss] = useState([]);
  useEffect(()=>{
    fetch("http://localhost:5000/api/users")
    .then(res=>res.json())
    .then(data=>setUserss(data))
    .catch(err=>console.error(err))
  },[])



  const {visibleBara} = useOutletContext();
  const [visibleToateHot, setVisiibleToateHot] = useState(false);
  const [visibleDimensiuni, setVisiibleDimensiuni] = useState(false);
  const [visibleStats, setVisiibleStats] = useState(false);
  const iconMap = {
    total: LuUsers,
    noi:FaRegCheckCircle,
    fideli:RiUserStarLine,
    venituri:TbMoneybagPlus
  }
  const [visibleActiuni, setVisibleActiuni] = useState(null);
  const iconActiuni = {
    vizualizeaza: FaRegEye,
    istoric: IoIosTimer,
    mail: MdOutlineEmail,
    sms: MdOutlineSms,
    sterge: FaRegTrashCan
  };
  const listaActiuni =[
    {icon:"vizualizeaza",nume:"Vizualizeaza detalii"},
    {icon:"istoric",nume:"Istoric rezervari"},
    {icon:"mail",nume:"Trimite email"},
    {icon:"sms",nume:"Trimite SMS"},
    {icon:"sterge",nume:"Sterge client"}
  ];
  const [visibleTemplate,setVisibleTemplate] = useState(false);
  const [visibleFont,setVisibleFont] = useState(false);
  const [visibleFontSms,setVisibleFontSms] = useState(false);
  const [visibleTemplateSms,setVisibleTemplateSms] = useState(false);
  const [modalClienti,setModalClienti] = useState(false);
  
  
  const bold = "font-bold";
  const italic = "italic ";
  const underline = "underline"; 
  const normal = "font-normal"; 

  const [textFont, setTextFont] = useState(normal);
  const [textFontSms, setTextFontSms] = useState(normal);


  const totalClienti = userss.filter(client=>client.rol ==='user').length ||0;
  const totalClientiNoi7zile = userss.filter(client=>client.client_nou===true && client.rol==='user').length || 0;
  const totalClientiFideli = userss.filter(client=>client.client_fidel===true && client.rol==='user').length || 0;

  const totalVenit = Math.round((userss.reduce((sum,client)=>{
    return sum + Number(client.total_cheltuit ||0);
  },0))*100)/100



  clienti.forEach(client=>
  {let valoareaTotalaRezervari = 0; 
    client.rezervari.forEach(rezervare=>
    {
      valoareaTotalaRezervari += rezervare.pretRez;
    }
    )
    client.totalClient = valoareaTotalaRezervari;
  }
  )
  return (
    <div className='mt-18'>
      <div>
        <p className='text-[22px] font-medium'>Clienti</p>
        <p className='text-[14px] text-gray-400'>Gestioneaza si monitorieaza toti clientii care au efectuat rezervari.</p>
      </div>

      <ul className={`mt-4 grid grid-cols-4  gap-3 text-[14px] ${visibleBara?"max-modf3:grid-cols-2 max-modf1:grid-cols-1":" max-modf:grid-cols-2 max-modf2:grid-cols-1"}`}>
      
        {
          [
            {icon:"total",textIc:"text-button",bgIc:"bg-button/30",nume:"Total clienti",nr:totalClienti},
            {icon:"noi",textIc:"text-green-400",bgIc:"bg-green-400/30",nume:"Clienti noi",nr:totalClientiNoi7zile},
            {icon:"fideli",textIc:"text-blue-400",bgIc:"bg-blue-400/30",nume:"Clienti fideli",nr:totalClientiFideli},
            {icon:"venituri",textIc:"text-orange-400",bgIc:"bg-orange-400/30",nume:"Valoarea totala generata",nr:`${totalVenit} RON`,},
          ].map((par,i)=>{
            const Icon = iconMap[par.icon]
            return(
              <li key={i} className='border space-x-3 border-button/30 flex items-center px-3 py-3 rounded-lg'>
                <div className={`px-2 py-2 rounded-full ${par.bgIc}`}>
                  {Icon && <Icon className={`${par.textIc} text-[23px]`}/>}
                </div>
                <div className='text-gray-400'>
                  <p >{par.nume}</p>
                  <p className='text-white text-[19px]'>{par.nr}</p>
                  <p><span className={`${par.culProcent}`}>{par.procent}</span> {par.text}</p>
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
            <input className='border  outline-0 border-button/30 w-full pl-3 pr-8 py-1 rounded-lg ' placeholder='Cauta clien dupa nume, email...' type="text" name="" id="" />
          </div>
          
        </div>
        
        <div className=''>
          <div className='relative'>
            <button onClick={()=>setVisiibleToateHot(!visibleToateHot)} className={`${visibleToateHot?"bg-button/60 rounded-t-lg":"rounded-lg bg-transparent"} flex items-center border px-3 py-1  border-button/30 justify-between w-full cursor-pointer hover:bg-button/60 transition-all duration-300 ease-in-out`}>
              <p>Toate tarile</p>
              <div>
                {visibleToateHot? <IoIosArrowUp />:<IoIosArrowDown />}
              </div>
            </button>
            
            <ul className={`absolute z-100 overflow-hidden overflow-y-scroll scrollbar-hide w-full ${visibleToateHot? "max-h-60 opacity-100": "max-h-0 opacity-0"} transition-all duration-500 ease-in-out bg-background`}>
              <div className='border px-3 py-1 w-full border-button/30 hover:bg-button/60 cursor-pointer transition-all duration-300 ease-in-out'>
                <p> Toate tarile</p>
              </div>
              {
                ["Romania","Italia","Belgia","Franta","Germania","Austria","Danemarca"].map((tari,i)=>(
                  <li key={i} className='border px-3 py-1 w-full border-button/30 hover:bg-button/60 cursor-pointer transition-all duration-300 ease-in-out'>
                    <p>{tari}</p>
                  </li>
                ))
              }
            </ul>
            
          </div>
        </div>

        
        <div className=''>
          <div className='relative'>
            <button onClick={()=>setVisiibleDimensiuni(!visibleDimensiuni)} className={`${visibleDimensiuni?"bg-button/60 rounded-t-lg":"rounded-lg bg-transparent"} flex items-center border px-3 py-1  border-button/30 justify-between w-full cursor-pointer hover:bg-button/60 transition-all duration-300 ease-in-out`}>
              <p>Toate rezervarile</p>
              <div>
                {visibleDimensiuni? <IoIosArrowUp />:<IoIosArrowDown />}
              </div>
            </button>
            
            <ul className={`absolute  overflow-hidden overflow-y-scroll scrollbar-hide w-full ${visibleDimensiuni? "max-h-60 opacity-100": "max-h-0 opacity-0"} transition-all duration-500 ease-in-out z-100 bg-background`}>
              <div className='border px-3 py-1 w-full border-button/30 hover:bg-button/60 cursor-pointer transition-all duration-300 ease-in-out'>
                <p> Toate rezervarile</p>
              </div>
              {
                ["Ultima luna","Ultimele 6 luni","Ultimul an"].map((datele,i)=>
                (<li key={i} className='border px-3 py-1 w-full border-button/30 hover:bg-button/60 cursor-pointer transition-all duration-300 ease-in-out'>
                    <p>{datele}</p>
                  </li>
                )
                )
              }
            </ul>
            
          </div>
        </div>

        
        <div className=''>
          <div className='relative'>
            <button onClick={()=>setVisiibleStats(!visibleStats)} className={`${visibleStats?"bg-button/60 rounded-t-lg":"rounded-lg bg-transparent"} flex items-center border px-3 py-1  border-button/30 justify-between w-full cursor-pointer hover:bg-button/60 transition-all duration-300 ease-in-out`}>
              <p>Toate incasarile</p>
              <div>
                {visibleStats? <IoIosArrowUp />:<IoIosArrowDown />}
              </div>
            </button>
            
            <ul className={`absolute  overflow-hidden w-full ${visibleStats? "max-h-100 opacity-100": "max-h-0 opacity-0"} transition-all duration-500 ease-in-out z-100 bg-background`}>
              <div className='border px-3 py-1 w-full border-button/30 hover:bg-button/60 cursor-pointer transition-all duration-300 ease-in-out'>
                <p> Toate incasarile</p>
              </div>
              {
                ["Mai mici de 3000 RON","Intre 3000 RON si 6000 RON","Peste 6000 RON"].map((par,i)=>(
                  <li key={i} className='border px-3 py-1 w-full border-button/30 hover:bg-button/60 cursor-pointer transition-all duration-300 ease-in-out'>
                    <p>{par}</p>
                  </li>
                ))
              }
            </ul>
            
          </div>
        </div>

        

        


      </div>
      
      <div className='mt-4'>
        <div>
          <p className='text-[19px] font-medium'>Clienti (1.248)</p>
        </div>

        <div className={`border py-3 mt-4 rounded-lg border-button/30`}>
          
          <div className={`overflow-x-auto scrollbar-thin text-[14px] min-w-0`}>
            <div className={`flex text-gray-400 space-x-3 px-3 `}>
              <div className={`${visibleBara? "max-modf7:w-60":"max-modf7:w-70"} modf7:flex-2 shrink-0 transition-[width] duration-300 ease-in-out`}>Client</div>
              <div className={`${visibleBara? "max-modf7:w-55":"max-modf7:w-63"} modf7:flex-2 shrink-0 transition-[width] duration-300 ease-in-out`}>Contact</div>
              <div className={`${visibleBara? "max-modf7:w-28":"max-modf7:w-33"} modf7:flex-1 shrink-0 transition-[width] duration-300 ease-in-out `}>Tara</div>
              <div className={`${visibleBara? "max-modf7:w-25":"max-modf7:w-31"} modf7:flex-1 shrink-0 transition-[width] duration-300 ease-in-out `}>Rezervari</div>
              <div className={`${visibleBara? "max-modf7:w-27":"max-modf7:w-33"} modf7:flex-1 shrink-0 transition-[width] duration-300 ease-in-out`}>Total rezervari</div>
              <div className={`${visibleBara? "max-modf7:w-27":"max-modf7:w-33"} modf7:flex-1 shrink-0 transition-[width] duration-300 ease-in-out text-center`}>Ultima rezervare</div>
              <div className={`${visibleBara? "max-modf7:w-17":"max-modf7:w-22"} modf7:flex-1 shrink-0 transition-[width] duration-300 ease-in-out text-center`}>Actiuni</div>
            </div>
            
            <ul className={`space-y-3 mt-3 text-gray-400`}>
              {
                userss?.filter(user=>user.rol==='user')?.map((client,i)=>{
                  
                  
                  return(
                  <li key={client.id} className='flex relative space-x-3 px-3 py-3 border-y border-y-button/30 min-w-max items-center '>

                    

                    <div className={`${visibleBara? "max-modf7:w-60":"max-modf7:w-70"} modf7:flex-2 shrink-0 transition-[width] duration-300 ease-in-out flex space-x-3 items-center`}>

                      <div className='w-15 h-15 rounded-full '>
                        <img className='w-full h-full object-center rounded-full' src={`${import.meta.env.BASE_URL}${client.poza_profil}`} alt="" />
                      </div>
                        <p className='text-white font-medium'>{client.nume} {client.prenume}</p>
                    </div>
                    <div className={`${visibleBara? "max-modf7:w-55":"max-modf7:w-63"} modf7:flex-2 shrink-0 transition-[width] duration-300 ease-in-out`}>
                      <p>{client.email}</p>
                      <p>{client.telefon}</p>

                    </div>
                    <div className={`${visibleBara? "max-modf7:w-28":"max-modf7:w-33"} modf7:flex-1 shrink-0 transition-[width] duration-300 ease-in-out `}>
                      <p className='text-white'>{client.tara}</p>

                    </div>
                    <div className={`${visibleBara? "max-modf7:w-25":"max-modf7:w-31"} modf7:flex-1 shrink-0 transition-[width] duration-300 ease-in-out `}>
                      <p>{client.numar_rezervari} rezervari</p>

                    </div>
                    <div className={`${visibleBara? "max-modf7:w-27":"max-modf7:w-33"} modf7:flex-1 shrink-0 transition-[width] duration-300 ease-in-out`}>
                      <p className='text-white'>{Math.round(client.total_cheltuit*100)/100} RON</p>

                    </div>
                    <div className={`${visibleBara? "max-modf7:w-27":"max-modf7:w-33"} modf7:flex-1 shrink-0 transition-[width] duration-300 ease-in-out text-center`}>
                      <p>
                        {new Date(client?.utlima_rezervare).toISOString().split("T")[0]}
                        
                      </p>

                    </div>
                    <div className={`${visibleBara? "max-modf7:w-17":"max-modf7:w-22"} modf7:flex-1 shrink-0 transition-[width] duration-300 ease-in-out text-center`}>
                      <div className='flex justify-center space-x-3'>
                      
                        <div className='relative'>
                          <button onClick={()=>setVisibleActiuni(visibleActiuni === client.id ? null : client.id)} className='px-1.5 py-1.5 border cursor-pointer rounded-sm border-button/30'>
                            <BsThreeDotsVertical />
                          </button>
                          {
                            visibleActiuni === client.id && (
                              <div className={`absolute right-10 z-800 ${visibleActiuni===userss[userss.length-1].id?"-bottom-3":"top-1/2 -translate-y-1/2"}`}>
                                <div className='border  rounded-lg  px-1 py-0.5 relative border-button bg-background w-46 '>
                                  <ul>
                                    {
                                      listaActiuni.map((par,i)=>{
                                        const IconActiuni = iconActiuni[par.icon];
                                        
                                        return (
                                          
                                          <li onClick={()=>{setVisibleActiuni(null);document.body.classList.add("overflow-hidden"); setModalClienti({actiune:i,client})}} key={i} className={` ${i === listaActiuni.length-1? "text-red-400 hover:bg-red-400/30 border-t border-t-button/30":"text-white hover:bg-button/30"} transition-all duration-300 ease-in-out cursor-pointer flex items-center space-x-3 py-1 px-3`}>
                                            <div>
                                              {IconActiuni && <IconActiuni />}
                                            </div>
                                            <p>{par.nume}</p> 
                                          </li>
                                        )
                                      })
                                    }
                                  </ul>

                                  <div className={`absolute w-3 h-3    bg-button  -right-3 ${visibleActiuni===userss[userss.length-1].id? "bottom-5":"top-1/2 -translate-y-1/2"}`} style={{clipPath:"polygon(0 0,100% 50%,0 100%)",}}></div>
                                  <div className={`absolute w-3 h-3  border-r border-r-button/30 bg-background  -right-2.75 ${visibleActiuni===userss[userss.length-1].id? "bottom-5":"top-1/2 -translate-y-1/2"}`} style={{clipPath:"polygon(0 0,100% 50%,0 100%)",}}></div>
                                </div>
                              </div>
                            )
                          }
                        </div>
                      </div>

                    </div>
                  </li>
                )})
              }

              {
                modalClienti && (
                  <div className='fixed inset-0 bg-gray-400/15 z-400 flex justify-center items-center'>
                    <div className='px-3 flex justify-center  w-full'>
                      
                      {
                        modalClienti.actiune === 0 && (
                          <div className='border border-button w-155 bg-background rounded-lg px-3 py-3 overflow-y-auto overflow-hidden scrollbar-thin max-h-[95vh]'>
                            <div className='flex justify-between'>
                              <p className='text-[18px] text-white'>Detalii client</p>
                              <IoClose onClick={()=>{setModalClienti(null); document.body.classList.remove("overflow-hidden")}}  className='text-[18px] cursor-pointer'/>
                            </div>

                            <div className='mt-2 flex modf8:space-x-3 max-modf8:flex-col '>

                              <div className='text-center max-modf8:mx-auto  w-38 flex flex-col items-center '>
                                <div className='w-25   h-25 rounded-full'>
                                  <img className='w-full h-full rounded-full' src={`${import.meta.env.BASE_URL}${modalClienti.client.poza_profil}`} alt="" />
                                </div>
                                <p className='text-white'>{modalClienti.client.nume} </p>
                                <p className='text-blue-400'>{modalClienti.client?.client_fidel===true?"Client fidel":""}</p>
                                <p className='text-[12px]'>Client din {new Date(modalClienti.client.created_at).toISOString().split("T")[0]}</p>
                              </div>

                              <div className='flex-2 max-modf8:mt-1.5'>
                                <div className='w-[95%] space-y-1.5'>
                                  <p className='text-white'>Informatii generale</p>

                                  <div className='flex justify-between  space-x-3'>
                                    <p>Email</p>
                                    <p>{modalClienti.client.email}</p>
                                  </div>
                                  <div className='flex justify-between  space-x-3'>
                                    <p>Telefon</p>
                                    <p>{modalClienti.client.telefon}</p>
                                  </div>
                                  <div className='flex justify-between  space-x-3'>
                                    <p>Tara</p>
                                    <p>{modalClienti.client.tara}</p>
                                  </div>
                                  <div className='flex justify-between  space-x-3'>
                                    <p>Adresa</p>
                                    <p>{modalClienti.client.email}</p>
                                  </div>
                                  <div className='flex justify-between  space-x-3'>
                                    <p>Data nasterii</p>
                                    <p>{new Date(modalClienti.client.data_nasterii).toISOString().split("T")[0]}</p>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className='mt-2'>
                              <p className='text-white text-[15px]'>Statistici rapide</p>

                              <ul className=' w-[96.5%] grid grid-cols-2 max-modf8:grid-cols-1 gap-3 border px-3 py-2 rounded-lg border-button/30 mt-3'>
                                {
                                  [
                                    {nume:"Rezervari",text:modalClienti.client.rezervari.length},
                                    {nume:'Valoare totala rezervari',text:`${Math.round(modalClienti.client.total_cheltuit*100)/100} RON`},
                                    {nume:'Valoare medie rezervari',text:`${Math.round((modalClienti.client.total_cheltuit/modalClienti.client.rezervari.length)*100)/100} RON`},
                                    {nume:'Ultima rezervare',text:`${new Date(modalClienti.client.utlima_rezervare).toISOString().split("T")[0]}`},
                                  ].map((stat,iStat)=>(
                                    <li key={iStat} className='flex items-center space-x-3 b'>
                                      <div className='shrink-0 bg-button/30 px-2 py-2 rounded-lg text-[22px] text-button'>
                                        {iStat === 1 || iStat === 2 ? <RiMoneyDollarCircleLine/>:<FaRegCalendarCheck/>}
                                      </div>
                                      <div>
                                        <p className='text-white font-medium'>{stat.text}</p>
                                        <p>{stat.nume}</p>
                                      </div>
                                    </li>
                                  ))
                                }
                              </ul>

                              <div className=' w-[96.5%] flex modf8:space-x-3 mt-2 modf8:justify-end max-modf8:flex-col max-modf8:space-y-3'>
                                <button onClick={()=>{setModalClienti(null); document.body.classList.remove("overflow-hidden")}} className='border  border-button px-3 py-1.5 rounded-sm hover:bg-button/60 transition-all duration-300 ease-in-out cursor-pointer  '>Inchide</button>
                                <button onClick={()=>{setModalClienti(prev=>({...prev, actiune:4})); }} className='border  border-red-400 px-3 py-1.5 rounded-sm hover:bg-red-400/60 transition-all duration-300 ease-in-out cursor-pointer flex items-center text-red-400 hover:text-white space-x-1  w-full justify-center'>
                                  <TbTrash />
                                  <p>Sterge client</p></button>
                              </div>
                            </div>
                          </div>
                        )
                      }

                      {
                        modalClienti.actiune === 1 && (
                          <div className='border border-button bg-background w-175 rounded-lg px-3 py-3 overflow-y-auto overflow-hidden scrollbar-thin max-h-[95vh]'>
                            <div className='flex justify-between'>
                              <p className='text-[18px] text-white'>Istoric rezervari</p>
                              <IoClose onClick={()=>{setModalClienti(null); document.body.classList.remove("overflow-hidden")}}  className='text-[18px] cursor-pointer'/>
                            </div>

                            <div className='overflow-x-auto overflow-hidden scrollbar-thin mt-3 min-w-0 border  py-1.5 pb-3 rounded-lg border-button/30'>
                              <div className='flex space-x-3 px-3 py-1.5'>
                                <div className={`w-25  shrink-0`}><p>Rezervare</p></div>
                                <div className={`w-35  shrink-0`}><p>Perioada</p></div>
                                <div className={`w-45  shrink-0`}><p>Hotel/Camera</p></div>
                                <div className={`w-25  shrink-0`}><p>Valoare</p></div>
                                <div className={`w-20 shrink-0 text-center`}><p>Status</p></div>
                              </div>
                              
                              <ul className='space-y-3'>
                                {
                                  modalClienti.client.rezervari.map((rezervariClient, iRez)=>(
                                    <li key={iRez} className='flex space-x-3 px-3 py-3 min-w-max border-y items-center border-y-button/30'>
                                      <div className={`w-25  shrink-0`}>
                                        <p>{rezervariClient.cod_rezervare}</p>
                                        <p>{new Date(rezervariClient.data_rezervare).toISOString().split("T")[0]}</p>
                                      </div>
                                      <div className={`w-35  shrink-0`}>
                                        <p>{rezervariClient.check_in} - {rezervariClient.check_out}</p>
                                      </div>
                                      <div className={`w-45  shrink-0`}>
                                        <p>{rezervariClient.numele_hotel}</p>
                                        <p>{rezervariClient.camera_nume}</p>
                                      </div>
                                      <div className={`w-25  shrink-0`}><p>{Math.round(rezervariClient.total_platit_cu_oferta*100)/100} RON</p></div>
                                      <div className={`w-20  shrink-0 text-center`}>
                                        <p className={`${rezervariClient.status_rezervare==="Finalizata"? "bg-green-400/30 text-green-400":rezervariClient.status_rezervare==="Confirmata"?"bg-button/30 text-button": "bg-red-400/30 text-red-400"}`}>{rezervariClient.status_rezervare}</p>
                                      </div>
                                    </li>
                                  ))
                                }
                              </ul>
                            </div>

                            <div className='flex text-white justify-end mt-3'>
                              <button onClick={()=>{setModalClienti(null); document.body.classList.remove("overflow-hidden")}} className='px-3 py-1.5 rounded-sm border border-button/30 hover:bg-button/60 transition-all duration-300 ease-in-out cursor-pointer'>Inchide</button>
                            </div>
                          </div>
                        )
                      }

                      {modalClienti.actiune === 2 && (
                        <div className='border border-button bg-background w-125 rounded-lg px-3 py-3 overflow-y-auto overflow-hidden scrollbar-thin max-h-[95vh]'>
                          <div className='flex justify-between'>
                            <p className='text-[18px] text-white'>Trimite email</p>
                            <IoClose onClick={()=>{setModalClienti(null); document.body.classList.remove("overflow-hidden")}}  className='text-[18px] cursor-pointer'/>
                          </div>

                          <div>
                            <p className="mb-1">Destinatar</p>

                            <div className="border border-button/30 rounded-sm px-3 py-2 ">
                              {modalClienti.client.nume} {modalClienti.client.prenume} ({modalClienti.client.email})
                            </div>

                            <div className='mt-2'>
                              <p>Subiect</p>
                              <div className='mt-2'>
                               <label className='relative'>
                                 <input className='border  border-button/30 w-full outline-0 rounded-lg peer px-3 text-white py-2' placeholder='' type="text"  />
                                 <span className=' absolute  left-3 transition-all duration-300 ease-in-out top-1/2 -translate-y-1/2 bg-background pointer-events-none
                                 peer-placeholder-shown:top-1/2
                                 peer-placeholder-shown:-translate-y-1/2
                                 peer-not-placeholder-shown:-top-2.75
                                 peer-not-placeholder-shown:text-xs
                                 peer-not-placeholder-shown:text-button
                                 peer-not-placeholder-shown:px-3
                                 peer-focus:-top-2.75
                                 peer-focus:text-xs
                                 peer-focus:text-button
                                 peer-focus:px-3
                                 '>Introduceti titlul rezervarii</span>
                               </label>
                              </div>
                            </div>

                            <div className='mt-2'>
                              <p>Template (optional)</p>

                              <div className='mt-1.5 grid grid-cols-2 max-modf8:grid-cols-1 gap-1.5'>
                                <div className='relative'>
                                  <button onClick={()=>setVisibleTemplate(!visibleTemplate)} className={`border border-button/30 w-full flex justify-between items-center transition-all duration-300 ease-in-out hover:bg-button/60 cursor-pointer px-3 py-1.5  ${visibleTemplate? "bg-button/60 rounded-b-sm":"bg-transparent rounded-sm"}`}><p>Confirmare rezervare</p> {visibleTemplate?<IoIosArrowUp/>:<IoIosArrowDown/>}</button>
                                  
                                  <ul className={`absolute overflow-hidden transition-all duration-500 ease-in-out bottom-8.5 bg-background w-full ${visibleTemplate? "max-h-50 opacity-100": "max-h-0 opacity-0"}`}>
                                    {
                                      ["Confirmare Rezervare","Reminder check-in","Multumire dupa sejur","Solicitare review"].map((temp,iTemp)=>(
                                        <li key={iTemp} className='border px-3 py-1.5 border-button/30 cursor-pointer hover:bg-button/60 transition-all duration-300 ease-in-out'>
                                          {temp}
                                        </li>
                                      ))
                                    }
                                  </ul>

                                </div>
                                <div>
                                  <button className='border border-button/30 flex items-center space-x-2.5 cursor-pointer hover:bg-button/60 transition-all duration-300 ease-in-out hover:text-white w-full px-3 py-1.5 rounded-sm'>
                                    <BsEye/>
                                    <p>Previzualizeaza template</p>
                                  </button>
                                </div>
                              </div>
                            </div>

                            <div className='mt-2'>
                              <p>Mesaj</p>
                              <div className={`border-r border-t border-button/30 w-full   ${visibleFont?"rounded-tr-sm":"rounded-t-sm"} mt-1.5 flex `}>
                                <div className='relative'>
                                  <button onClick={()=>setVisibleFont(!visibleFont)} className={`flex items-center space-x-3 px-3 border-r py-1 hover:bg-button/60 cursor-pointer border-l ${visibleFont?"bg-button/60":"rounded-tl-sm bg-transparent"}  transition-all duration-300 ease-in-out hover:text-white border-button/30`}>
                                    <p>Normal</p>
                                    {visibleFont? <IoIosArrowUp />:<IoIosArrowDown />}
                                  </button>
                                  <ul className={`absolute bottom-7.5 ${visibleFont?"max-h-50 opacity-100": "max-h-0 opacity-0"} bg-background w-full  overflow-hidden transition-all duration-500  ease-in-out`}>
                                    {
                                      ["Normal","Serif","Mono"].map((font,iFont)=>(
                                        <li key={iFont} className='border border-button/30 px-3 py-1 hover:bg-button/60 transition-all duration-300 ease-in-out  cursor-pointer'>
                                          {font}
                                        </li>
                                      ))
                                    }
                                  </ul>
                                </div>
                                <button onClick={()=>setTextFont(bold)} className='flex items-center  px-3 border-r py-1 hover:bg-button/60 cursor-pointer transition-all duration-300 ease-in-out hover:text-white border-button/30'>
                                  <p className='font-bold'>B</p>
                                </button>
                                <button onClick={()=>setTextFont(italic)} className='flex items-center  px-3 border-r py-1 hover:bg-button/60 cursor-pointer transition-all duration-300 ease-in-out hover:text-white border-button/30'>
                                  <p className='italic font-serif'>I</p>
                                </button>
                                <button onClick={()=>setTextFont(underline)} className='flex items-center  px-3 border-r py-1 hover:bg-button/60 cursor-pointer transition-all duration-300 ease-in-out hover:text-white border-button/30'>
                                  <p className='underline'>U</p>
                                  
                                </button>
                                <button onClick={()=>setTextFont(normal)} className='flex items-center  px-3 border-r py-1 hover:bg-button/60 cursor-pointer transition-all duration-300 ease-in-out hover:text-white border-button/30'>
                                  <p className=''>N</p>
                                  
                                </button>
                                
                                
                              </div>
                              <div className='border border-button/30 w-full'>
                                <textarea className={`${textFont===bold?bold:textFont===italic?italic:textFont===underline?underline:normal} outline-0 px-3 py-1.5 w-full h-35 resize-none text-white `}></textarea>
                                
                              </div>
                            </div>

                            <div className='flex modf8:space-x-3 mt-2 modf8:justify-end max-modf8:flex-col max-modf8:space-y-3'>
                              <button onClick={()=>{setModalClienti(null);document.body.classList.remove("overflow-hidden")}} className='hover:bg-button/60 cursor-pointer transition-all duration-300 ease-in-out border px-3 py-1 rounded-sm border-button/30 hover:text-white'>Anuleaza</button>
                              <button onClick={()=>{setModalClienti(null);document.body.classList.remove("overflow-hidden")}} className='hover:bg-button bg-button/60 text-white cursor-pointer transition-all duration-300 ease-in-out border px-3 py-1 rounded-sm border-button/30 hover:text-white'>Trimite Email</button>
                            </div>
                          </div>
                        </div>
                      )}


                      {modalClienti.actiune === 3 && (
                        <div className='border border-button bg-background w-125 rounded-lg px-3 py-3 overflow-y-auto overflow-hidden scrollbar-thin max-h-[95vh]'>
                          <div className='flex justify-between'>
                            <p className='text-[18px] text-white'>Trimite email</p>
                            <IoClose onClick={()=>{setModalClienti(null); document.body.classList.remove("overflow-hidden")}}  className='text-[18px] cursor-pointer'/>
                          </div>

                          <div>
                            <p className="mb-1">Destinatar</p>

                            <div className="border border-button/30 rounded-sm px-3 py-2 ">
                              {modalClienti.client.nume} {modalClienti.client.prenume} ({modalClienti.client.telefon})
                            </div>

                            

                            <div className='mt-2'>
                              <p>Template (optional)</p>

                              <div className='mt-1.5 grid grid-cols-2 max-modf8:grid-cols-1 gap-1.5'>
                                <div className='relative'>
                                  <button onClick={()=>setVisibleTemplateSms(!visibleTemplateSms)} className={`border border-button/30 w-full flex justify-between items-center transition-all duration-300 ease-in-out hover:bg-button/60 cursor-pointer px-3 py-1.5  ${visibleTemplateSms? "bg-button/60 rounded-b-sm":"bg-transparent rounded-sm"}`}><p>Confirmare rezervare</p> {visibleTemplateSms?<IoIosArrowUp/>:<IoIosArrowDown/>}</button>
                                  
                                  <ul className={`absolute overflow-hidden transition-all duration-500 ease-in-out bottom-8.5 bg-background w-full ${visibleTemplateSms? "max-h-50 opacity-100": "max-h-0 opacity-0"}`}>
                                    {
                                      ["Confirmare Rezervare","Reminder check-in","Multumire dupa sejur","Solicitare review"].map((temp,iTemp)=>(
                                        <li key={iTemp} className='border px-3 py-1.5 border-button/30 cursor-pointer hover:bg-button/60 transition-all duration-300 ease-in-out'>
                                          {temp}
                                        </li>
                                      ))
                                    }
                                  </ul>

                                </div>
                                <div>
                                  <button className='border border-button/30 flex items-center space-x-2.5 cursor-pointer hover:bg-button/60 transition-all duration-300 ease-in-out hover:text-white w-full px-3 py-1.5 rounded-sm'>
                                    <BsEye/>
                                    <p>Previzualizeaza template</p>
                                  </button>
                                </div>
                              </div>
                            </div>

                            <div className='mt-2'>
                              <p>Mesaj</p>
                              <div className={`border-r border-t border-button/30 w-full   ${visibleFontSms?"rounded-tr-sm":"rounded-t-sm"} mt-1.5 flex `}>
                                <div className='relative'>
                                  <button onClick={()=>setVisibleFontSms(!visibleFontSms)} className={`flex items-center space-x-3 px-3 border-r py-1 hover:bg-button/60 cursor-pointer border-l ${visibleFontSms?"bg-button/60":"rounded-tl-sm bg-transparent"}  transition-all duration-300 ease-in-out hover:text-white border-button/30`}>
                                    <p>Normal</p>
                                    {visibleFontSms? <IoIosArrowUp />:<IoIosArrowDown />}
                                  </button>
                                  <ul className={`absolute bottom-7.5 ${visibleFontSms?"max-h-50 opacity-100": "max-h-0 opacity-0"} bg-background w-full  overflow-hidden transition-all duration-500  ease-in-out`}>
                                    {
                                      ["Normal","Serif","Mono"].map((font,iFont)=>(
                                        <li key={iFont} className='border border-button/30 px-3 py-1 hover:bg-button/60 transition-all duration-300 ease-in-out  cursor-pointer'>
                                          {font}
                                        </li>
                                      ))
                                    }
                                  </ul>
                                </div>
                                <button onClick={()=>setTextFontSms(bold)} className='flex items-center  px-3 border-r py-1 hover:bg-button/60 cursor-pointer transition-all duration-300 ease-in-out hover:text-white border-button/30'>
                                  <p className='font-bold'>B</p>
                                </button>
                                <button onClick={()=>setTextFontSms(italic)} className='flex items-center  px-3 border-r py-1 hover:bg-button/60 cursor-pointer transition-all duration-300 ease-in-out hover:text-white border-button/30'>
                                  <p className='italic font-serif'>I</p>
                                </button>
                                <button onClick={()=>setTextFontSms(underline)} className='flex items-center  px-3 border-r py-1 hover:bg-button/60 cursor-pointer transition-all duration-300 ease-in-out hover:text-white border-button/30'>
                                  <p className='underline'>U</p>
                                  
                                </button>
                                <button onClick={()=>setTextFontSms(normal)} className='flex items-center  px-3 border-r py-1 hover:bg-button/60 cursor-pointer transition-all duration-300 ease-in-out hover:text-white border-button/30'>
                                  <p className=''>N</p>
                                  
                                </button>
                                
                                
                              </div>
                              <div className='border border-button/30 w-full'>
                                <textarea className={`${textFontSms===bold?bold:textFontSms===italic?italic:textFontSms===underline?underline:normal} outline-0 px-3 py-1.5 w-full h-35 resize-none text-white `}></textarea>
                                
                              </div>
                            </div>

                            <div className='flex modf8:space-x-3 mt-2 modf8:justify-end max-modf8:flex-col max-modf8:space-y-3'>
                              <button onClick={()=>{setModalClienti(null);document.body.classList.remove("overflow-hidden")}} className='hover:bg-button/60 cursor-pointer transition-all duration-300 ease-in-out border px-3 py-1 rounded-sm border-button/30 hover:text-white'>Anuleaza</button>
                              <button onClick={()=>{setModalClienti(null);document.body.classList.remove("overflow-hidden")}} className='hover:bg-button bg-button/60 text-white cursor-pointer transition-all duration-300 ease-in-out border px-3 py-1 rounded-sm border-button/30 hover:text-white'>Trimite SMS</button>
                            </div>
                          </div>
                        </div>
                      )}

                      
                    

                      




                      {
                        modalClienti.actiune === 4 && (
                          <div className='border border-button w-110 bg-background rounded-lg px-3 py-3 overflow-y-auto overflow-hidden scrollbar-thin max-h-[95vh]'>
                            <div className='flex justify-end'>
                              <IoClose onClick={()=>{setModalClienti(null); document.body.classList.remove("overflow-hidden")}}  className='text-[18px] cursor-pointer'/>
                            </div>

                            <div className='flex justify-center flex-col items-center text-center max-modf8:px-0     px-10'>
                              <div className=''>
                                <RxExclamationTriangle className='text-red-600 text-[35px]'/>
                              </div>
                              <p className='text-[22px] text-white'>Sterge client</p>

                              <div className='w-full  mt-1 text-white'>
                                <p>Esti sigur ca doresti sa stergi clientul <span className='font-medium text-red-600'> {modalClienti.client.nume} {modalClienti.client.prenume}</span></p>
                              </div>

                              <div className='border px-3 py-1.5 mt-2 border-red-600/30 rounded-lg'>
                                <p>Aceasta actiune este ireversibila si va sterge toate rezervarile, datele personale si istoricul asociat acestui client.</p>
                              </div>
                            </div>

                            <div className='flex modf8:justify-end max-modf8:flex-col px-10 max-modf8:px-0 mt-3 text-white modf8:space-x-3 max-modf8:space-y-3'>
                              <button onClick={()=>{setModalClienti(null); document.body.classList.remove("overflow-hidden")}} className='border border-button/30 px-3 py-1.5 rounded-sm hover:bg-button/60 transition-all duration-300 ease-in-out cursor-pointer'>Anuleaza</button>
                              <button onClick={()=>{setModalClienti(null); document.body.classList.remove("overflow-hidden")}} className='border border-button/30 px-3 py-1.5 rounded-sm hover:bg-red-600/60 transition-all duration-300 ease-in-out cursor-pointer flex items-center bg-red-600 space-x-1 w-full justify-center'>
                                <TbTrash />
                                <p>Sterge client</p>
                              </button>
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
    </div>
  )
}

export default AdminClienti
