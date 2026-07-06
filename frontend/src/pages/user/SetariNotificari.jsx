import React, { useState } from 'react'
import { MdEditCalendar } from "react-icons/md";
import { FaRegCalendarCheck } from "react-icons/fa6";
import { MdOutlineLocalOffer } from "react-icons/md";
import { FiPackage } from "react-icons/fi";
import { RiMegaphoneLine } from "react-icons/ri";
import { MdOutlineEmail } from "react-icons/md";
import { MdWebhook } from "react-icons/md";
import { GoBell } from "react-icons/go";


const SetariNotificari = () => {
  const [tipuriNotificar,setTipuriNotificar] = useState([
    {icon:"confirmari",nume:"Confirmari rezervari",text:"Primeste notificari cand rezervarea ta este confirmata.",visible:false},
    {icon:"modificari",nume:"Modificari rezervari",text:"Fii la curent cu orice modificare a rezervarilor tale.",visible:false},
    {icon:"oferte",nume:"Oferte personalizate",text:"Primeste oferte si promotii adaptade preferintelor tale.",visible:false},
    {icon:"reduceri",nume:"Reduceri si promotii",text:"Fii primul care afla despre reducerile speciale.",visible:false},
    {icon:"noutati",nume:"Noutati si actualizri",text:"Afla despre cele mai noi functionalitati si imbunatatiri.",visible:false}
  ])
  const iconMap ={
    confirmari: FaRegCalendarCheck,
    modificari:MdEditCalendar,
    oferte: MdOutlineLocalOffer,
    reduceri: FiPackage,
    noutati:RiMegaphoneLine
  };
  const iconMapPrimire = {
    email:MdOutlineEmail,
    push:MdWebhook
  }
  const iconSumar = {
    notif:GoBell,
    email:MdOutlineEmail,
    push:MdWebhook
  }

  const toggleTipNotificare = (index)=>{
    setTipuriNotificar(prev=>
      prev.map((tip,i)=>
      i===index? {...tip, visible: !tip.visible}: tip
      )
    )
  };

  const [metodaPrimire,setMetodaPrimire] = useState([
    {icon:"email",nume:"Notificari prin email",text:"Primeste notificari pe adresa ta de email.",visibil:false},
    {icon:"push",nume:"Notificari push",text:"Primeste notificari push in browser.",visibil:false}
  ])

  const togglePrimire = (index)=>{
    setMetodaPrimire(prev=>
      prev.map((metoda,i)=>
        i === index ? {...metoda, visibil: !metoda.visibil}: metoda
      )
    )
  }

  return (
    <div>


      <div className='space-y-6'>
        <div>
          <p>Preferinte notificari</p>
          <p className='text-gray-400'>Alege tipurile de notificari pe care doresti sa le primesti.</p>

          <ul className='space-y-3 mt-3'>
            {
              tipuriNotificar.map((notificare, iNotificare)=>{


                const Icon = iconMap[notificare.icon];
                return (
                  <li key={iNotificare} className=' flex space-x-3 justify-between items-center'>
                    <div className='flex space-x-3 items-center '>
                      <div className='shrink-0 px-2 py-2 bg-button/30 text-button text-[23px] rounded-full'>
                        {Icon && <Icon className="shrink-0"/>}
                      </div>
                      <div>
                        <p>{notificare.nume}</p>
                        <p className='text-gray-400'>{notificare.text}</p>
                      </div>
                    </div>

                    <button onClick={()=>toggleTipNotificare(iNotificare)} className={`w-10 transition-all duration-300 ease-in-out h-5 ${notificare.visible===false?"bg-gray-400":"bg-green-500"} shrink-0  cursor-pointer rounded-full relative `}>
                      <div className={`absolute w-[50%] h-full transition-all shrink-0 duration-300 ease-in-out bg-white ${notificare.visible===false?"translate-x-0":"translate-x-full"} rounded-full top-1/2 -translate-y-1/2`}></div>
                    </button>
                  </li>
                )
              })
            }
          </ul>
        </div>


        <div>
          <p>Metode de livrare</p>
          <p className='text-gray-400'>Alege cum odresti sa primesti notificarile.</p>

          <ul className='space-y-3 mt-3'>
            {
              metodaPrimire.map((notificarePrimire, iNotificarePrimire)=>{


                const IconPrimire = iconMapPrimire[notificarePrimire.icon];
                return (
                  <li key={iNotificarePrimire} className=' flex space-x-3 justify-between items-center'>
                    <div className='flex space-x-3 items-center '>
                      <div className='shrink-0 px-2 py-2 bg-button/30 text-button text-[23px] rounded-full'>
                        {IconPrimire && <IconPrimire className="shrink-0"/>}
                      </div>
                      <div>
                        <p>{notificarePrimire.nume}</p>
                        <p className='text-gray-400'>{notificarePrimire.text}</p>
                      </div>
                    </div>

                    <button onClick={()=>togglePrimire(iNotificarePrimire)} className={`w-10 transition-all duration-300 ease-in-out h-5 ${notificarePrimire.visibil===false?"bg-gray-400":"bg-green-500"} shrink-0  cursor-pointer rounded-full relative `}>
                      <div className={`absolute w-[50%] h-full transition-all duration-300 ease-in-out bg-white ${notificarePrimire.visibil===false?"translate-x-0":"translate-x-full"} shrink-0 rounded-full top-1/2 -translate-y-1/2`}></div>
                    </button>
                  </li>
                )
              })
            }
          </ul>
        </div>

        <div>
          <p>Sumar preferinte</p>
          <p className='text-gray-400'>Iata un sumar al preferintelor tale actuale.</p>
          <ul className='space-y-2 mt-2'>
            {[
              {icon:"notif",nume:"5 tipuri de notificari active"},
              {icon:"email",nume:"Email activat"},
              {icon:"push",nume:"Push activat"},
            ].map((sumar,iSumar)=>{
              const IconSumar = iconSumar[sumar.icon];
              return (
                <li key={iSumar} className='flex items-center space-x-3 text-gray-400'>
                  {
                    IconSumar && <IconSumar className="mt-0.5 text-[18px]" />
                  }
                  <p>{sumar.nume}</p>
                </li>
              )
            })
            }
          </ul>
        </div>


        <div>
          <p>Nu mai vrei notificari?</p>
          <p className='text-gray-400'>Poti dezactiva toate notificarile.</p>
          <button className='border border-red-400/30 text-red-600 hover:bg-red-600/30 transition-all duration-300 ease-in-out px-3 py-1.5 rounded-sm cursor-pointer mt-3'>Dezactiveaza toate notificarile</button>
        </div>
      </div>


    </div>
  )
}

export default SetariNotificari
