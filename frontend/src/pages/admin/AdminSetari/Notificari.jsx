import React, { useState } from 'react'
import { IoIosAirplane } from 'react-icons/io'
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaRegCalendarCheck } from "react-icons/fa";
import { FaRegCalendarTimes } from "react-icons/fa";
import { FaRegCreditCard } from "react-icons/fa6";
import { FaUserPlus } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlineSms } from "react-icons/md";

const Notificari = () => {
  const iconMap = {
    rezervare:FaRegCalendarAlt,
    modficari:FaRegCalendarCheck,
    anulare:FaRegCalendarTimes,
    plati:FaRegCreditCard,
    inregistrari: FaUserPlus
  }


  const notificariList = [
    {icon:"rezervare",nume:"Rezervari noi",text:"Primeste notificari pentru rezervari noi",email:false,sms:false},
    {icon:"modficari",nume:"Modificari rezervari",text:"Primeste notificari pentru modificari ale rezervarilors",email:false,sms:false},
    {icon:"anulare",nume:"Anulari rezervari",text:"Primeste notificari pentru anulari de rezervari",email:false,sms:false},
    {icon:"plati",nume:"Plati",text:"Primeste notificari pentru plati",email:false,sms:false},
    {icon:"inregistrari",nume:"Inregistrari clienti",text:"Primeste notificari pentru clienti noi",email:false,sms:false},
  ];

   const [selectNotificare, setSelectNotificare] = useState(notificariList);

  const seletctToate = ()=>{
    setSelectNotificare(
      selectNotificare.map(item=>(
      {
        ...item,
        email:true,
        sms: true
      }
    )))
  }
  const selectNiciuna=()=>{
    setSelectNotificare(
      selectNotificare.map(item=>({
        ...item,
        email:false,
        sms:false
      }))
    ) 
  }

  const toggCheck = (index, tip)=>{
    setSelectNotificare(
      selectNotificare.map((item,i)=>
        i===index ?
        {...item, [tip]:!item[tip]}:item
      )
    )
  }

  const [visibEm,setVisibEm] = useState(false);
  const [visibSMS,setVisibSMS] = useState(false);
  const iconMap1 = {
    email:MdOutlineEmail,
    sms: MdOutlineSms
  }
  
  return (
    <div>

      <div className='grid grid-cols-2 max-modf4:grid-cols-1'>
        <div className='border border-button/30 px-3 py-3 rounded-lg'>
          <p className='text-[20px] font-medium'> Canale de notificare</p>
          <p className='text-gray-400 text-[15px]'>Alege prin ce canale doresti sa primesti notificarile.</p>

          <ul className='mt-3 space-y-3'>
            {
              [
                {icon: "email", nume:"Email", text:"Primeste notificari prin email",},
                {icon: "sms", nume:"SMS", text:"Primeste notificari prin SMS"}
              ].map((par,i)=>
              { const activare = par?.nume==="Email"? visibEm: visibSMS;
                const Icon1 = iconMap1[par.icon]
                return(
                <li key={i} className='border-y border-y-button/30 py-3 flex items-center justify-between'>
                  <div className='flex items-center space-x-3'>
                    <div className='text-button px-2 py-2 bg-button/30 rounded-lg'>
                      {Icon1 && <Icon1 size={24}/>}
                    </div>
                    <div>
                      <p>{par.nume}</p>
                      <p className='text-gray-400'>{par.text}</p>
                    </div>
                  </div>
                  
                  <div>
                    <button onClick={()=>par.nume === "Email"? setVisibEm(!visibEm): setVisibSMS(!visibSMS)} className={`w-12 cursor-pointer   h-6 rounded-full border ${activare?"bg-green-500": "bg-gray-400/30"} shrink-0 transition-all duration-300 ease-in-out border-button/30 flex `}>
                      <div className={`w-6 h-full rounded-full  bg-white transition-all shrink-0 duration-300 ease-in-out ${activare?"translate-x-full":"translate-x-0"}`}></div>
                      
                    </button>
                  </div>
                </li>
              )})
            }
          </ul>
        </div>
      </div>
      <div className='mt-4 flex max-modf1:justify-start max-modf1:flex-col justify-between modf1:items-center' >
        
        <div>
          <p className='text-[20px] font-medium'>Tipuri de notificari</p>
          <p className='text-gray-400 text-[15px]'>Alege ce tipuri de notificari doresti sa primesti.</p>
        </div>
        <div className='flex space-x-3'>
          <p>Selecteaza: </p>
          <div className='flex space-x-3 text-button'>
            <button onClick={seletctToate} className='cursor-pointer hover:text-button/60 transition-all duration-300 ease-in-out'>Toate</button>
            <p>|</p>
            <button onClick={selectNiciuna} className='cursor-pointer hover:text-button/60 transition-all duration-300 ease-in-out'>Niciuna</button>
          </div>
        </div>
      </div>
      <div className=' border  py-3 mt-3   rounded-lg border-button/30 px-3'>
        <div className='flex'>
          <div className='flex-3'></div>
          <div className='flex-1  '>
            <div className='flex text-end'>
              <div className='flex-1'><p>Email</p></div>
              <div className='flex-1'><p>SMS</p></div>
            </div>
          </div>
        </div>



        <ul>
          {
            selectNotificare.map((par,i)=>{
              const Icon = iconMap[par.icon]
              return(
              <li key={i} className='flex border-y py-3 mt-3 border-y-button/30 items-center'>
                <div className='flex-3 '>
                  <div className='flex items-center space-x-3'>
                    <div className='bg-button/30 text-button px-3 py-3 rounded-lg text-[19px]'>
                      {Icon && <Icon/>}
                    </div>

                    <div>
                      <p>{par.nume}</p>
                      <p className='text-gray-400'>{par.text}</p>
                    </div>
                  </div>
                </div>

                <div className='flex-1  '>
                  <div className=' flex text-end'>
                    <div className='flex-1 pr-3'>
                      <input type="checkbox" checked={par.email} onChange={()=>toggCheck(i,"email")} name="" id="" />
                    </div>
                    <div className='flex-1 pr-2'>
                      <input  type="checkbox" checked={par.sms} onChange={()=>toggCheck(i,"sms")} name="" id="" />
                    </div>
                  </div>
                  
                </div>
              </li>
            )})
          }
        </ul>

        






      </div>
    </div>
  )
}

export default Notificari
