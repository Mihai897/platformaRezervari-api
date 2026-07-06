import React from 'react'
import { PiHandWavingFill } from "react-icons/pi";
import { Link, useOutletContext } from 'react-router-dom';
import { FaBuilding } from "react-icons/fa";
import { IoCalendarSharp } from "react-icons/io5";
import { LuChartColumnIncreasing } from "react-icons/lu";
import { IoBed } from "react-icons/io5";
import { MdPeopleAlt } from "react-icons/md";
import { TbCalendarCancel } from "react-icons/tb";
import hotels from '../hotels/Hotel/hotels';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const AdminDashboard = () => {
  const {visibleBara,setVisibileBara} =useOutletContext();
  const iconMap = {
    Hotel: FaBuilding,
    Calendar: IoCalendarSharp,
    Venit: LuChartColumnIncreasing,
    Ocupare: IoBed,
    Clienti: MdPeopleAlt,
    Anulare: TbCalendarCancel
  }
  const procent = 10;
   const data = [
  { luna: "Ian", venit: 2400 },
  { luna: "Feb", venit: 1398 },
  { luna: "Mar", venit: 9800 },
  { luna: "Apr", venit: 3908 },
];
  return (
    <div className='mt-18'>
     
      <p className='text-[22px] font-medium'>Dashboard</p>
      <div className='flex  items-center space-x-3'>
        <p>Bun venit inapoi, Andrei</p>
        <PiHandWavingFill className='text-yellow-500'/>
      </div>
      <p className='text-gray-400'>Iata ce se intampla astazi.</p>

      <ul className={`mt-3 ${visibleBara? "grid modf4:grid-cols-5 max-modf2:grid-cols-1  gap-3 max-modf4:grid-cols-4 max-modf:grid-cols-3 max-modf1:grid-cols-2": "grid grid-cols-5 max-modf:grid-cols-3 max-modf1:grid-cols-2 max-modf8:grid-cols-1 gap-3"}`}>
        {
          [ {nume:"Hoteluri",nr:"11",inPlus:"+3",icon:"Hotel"},
            {nume:"Rezervari (luna curenta)",nr:"148",inPlus:"+18%",icon:"Calendar"},
            {nume:"Venituri",nr:"8.400 RON",inPlus:"+33%",icon:"Venit"},
            {nume:"Grad de ocupare",nr:"68%",inPlus:"+8%",icon:"Ocupare"},
            {nume:"Clienti",nr:"1.481",inPlus:"+156",icon:"Clienti"}
          ].map((par,i)=>{
            
            const Icon = iconMap[par.icon]
            return(
            <li key={i} className='flex items-center border px-3 py-1.5 rounded-lg border-button/30 text-[12px] text-gray-400 space-x-3'>
              <div className='bg-button/30 px-1.5 py-1.5 rounded-full'>
                {Icon && <Icon className="text-button" size={19}/>}
              </div>
              <div>
                <p>{par.nume}</p>
                <p className='text-white text-[19px]'>{par.nr}</p>
                <p><span className='text-green-600'>{par.inPlus}</span> fata de luna trecuta</p>
              </div>
            </li>
          )})

        }
      </ul>


      <div className='grid grid-cols-2 max-modf4:grid-cols-1 gap-3 mt-4'>
        <div className='border px-3 py-3 rounded-lg border-button/30 text-[14px]'>
          <div className=' flex justify-between
          '>
            <p className='text-[16px] font-medium'>Rezervari recente </p>
            <Link className='text-button hover:text-button/60 transition-all duration-300 ease-in-out'>Vezi toate</Link>
          </div>
          <ul className='mt-3 space-y-1.5'>
            {hotels?.slice(0,5).map((par,i)=>
            
             ( 
              <ul key={i}  >
                {par?.rooms?.slice(0,1).map((par1,i1)=>(
                  <li key={i1} className='flex items-center  space-x-3'>
                    <div className='border h-20 w-20 rounded-lg border-button/30'>
                      <img className='w-20 object-center h-20 rounded-lg' src={par.img} alt="" />
                    </div>

                    <div className='flex  justify-between items-center flex-2 space-x-3'>
                      <div>
                        <p>{par.nume}</p>
                        <p className='text-gray-400'>{par1.title}</p>
                        <p className='text-gray-400'>Maria popa</p>
                        <p className='text-gray-400'>20-23 mai 2026</p>
                      </div>

                      <div >
                        <p className='bg-green-400/30 px-3 text-green-600 rounded-sm'>Confirmata</p>
                      </div>

                      <div>
                        <p className='font-medium'>{par1.price} RON</p>
                      </div>
                    </div>
                </li>))}
                
              </ul>
            ))}
          </ul>
        </div>


        <div className='border px-3 py-3 rounded-lg border-button/30 text-[14px]'>
          <div className=' flex justify-between
          '>
            <p className='text-[16px] font-medium'>Top hoteluri dupa venituri </p>
            <Link className='text-button hover:text-button/60 transition-all duration-300 ease-in-out'>Vezi raport</Link>
          </div>
          <ul className=' ml-3 space-y-3 mt-3 '>
            {hotels.slice(0,5).map((par,i)=>(
              <li key={i} className='flex space-x-3'>
                <div className=' flex items-center'>
                  <p className='font-medium'>{i+1}</p>
                </div>
                <div className='flex space-x-3 w-full items-center'>
                  <div className='border h-20 w-20 rounded-lg border-button/30 '>
                    <img className='w-20 object-center h-20 rounded-lg' src={par.img} alt="" />
                  </div>

                  <div className='flex-1 '>
                    <div className='flex justify-between space-y-3'>
                      <p>{par.nume}</p>
                      <p>34.680 RON</p>
                    </div>
                    <div className=' flex space-x-8 items-center'>
                      <p className='flex-1 text-gray-400 '>{par.locatie} </p>
                      <div className=' flex-2 border border-button/30 bg-background rounded-full w-full h-1'>
                        <div className='bg-amber-300 h-1 w-[90%] rounded-full'>

                        </div>
                      </div>
                    </div>
                  </div>
                  
                </div>
                
              </li>
            ))}
          </ul>
        </div>
      </div>


      <div className='grid grid-cols-2 max-modf4:grid-cols-1 gap-3 mt-4'>
        <div className='border px-3 py-3 rounded-lg border-button/30 text-[14px]'>
          <div className='flex justify-between'>
            <p className='text-[16px] font-medium'>Activitate recenta</p>
            <Link className='text-button'>Vezi raport</Link>
          </div>

          <ul className='mt-4 space-y-3'>
            {
              [
                {icon: "Calendar", nume:"Rezervare noua", text:"Maria popa a rezervat Water Vila",timp:"5 minute",culoareBg:"bg-lime-400/10",culoareText:"text-lime-400"},
                {icon: "Hotel", nume:"Hotel actualizat", text:"Beach Paradise resort a fost actualizat",timp:"1 ora",culoareBg:"bg-blue-500/30",culoareText:"text-blue-500"},
                {icon: "Clienti", nume:"Client nou", text:"Mihai Stan s-a inregistrat",timp:"2 ore",culoareBg:"bg-button/30",culoareText:"text-button"},
                {icon: "Anulare", nume:"Rezervare anulata", text:"Rezervarea #1245 a fost anulata",timp:"3 ore",culoareBg:"bg-orange-400/30",culoareText:"text-orange-400"},
              ].map((par,i)=>{
                const Icon = iconMap[par.icon]
                return(
                <li key={i} className='flex items-center space-x-3'>
                  
                  <div className={`${par.culoareBg} rounded-lg px-2 py-2`}>
                    {Icon && <Icon className={`${par.culoareText}`} size={19}/>}
                  </div>

                  <div className='flex justify-between w-full'>
                    <div>
                      <p >{par.nume}</p>
                      <p className='text-gray-400'>{par.text}</p>
                    </div>
                    <div className='text-gray-400'><p>Acum {par.timp}</p></div>
                  </div>
                  
                </li>
              )})
            }
          </ul>
        </div>

        <div className='border px-3 py-3 rounded-lg border-button/30 text-[14px]'>
          <div className='flex justify-between'>
            <p className='text-[16px] font-medium'>Grad de ocupare</p>
            <Link className='text-button'>Vezi raport</Link>
          </div>
          <div className='mt-7 flex space-x-20 items-center'>
            <div className='relative w-45 h-45'>
              <div className='w-full h-full rounded-full' style={
                {
                  background: `conic-gradient(
                  #7c3aed 0% ${procent}%,
                  #1f2937 ${procent}% 100%
                  )`,
                  boxShadow: "0 0 20px rgba(124,58,237,0.35)"
                }
              }></div>

              <div className='absolute inset-4 rounded-full flex flex-col justify-center text-center bg-background'>
                <p className='text-[40px]'>{procent}%</p>
                <p className='text-gray-400'>Total ocupare</p>
              </div>
            </div>

            <div className='space-y-3'>

              <div className='flex  space-x-3'>
                <div className='w-3 mt-1.5 h-3 bg-button rounded-full'></div>
                <div>
                  <p>Ocupate</p>
                  <p className='text-gray-400'>{procent}% (36 camere)</p>
                </div>
              </div>

              <div className='flex  space-x-3'>
                <div className='w-3 mt-1.5 h-3 bg-blue-500 rounded-full'></div>
                <div>
                  <p>Disponibile</p>
                  <p className='text-gray-400'>{procent+58}% (248 camere)</p>
                </div>
              </div>

              <div className='flex  space-x-3'>
                <div className='w-3 mt-1.5 h-3 bg-orange-400 rounded-full'></div>
                <div>
                  <p>Blocate</p>
                  <p className='text-gray-400'>{100-68-procent}% (80 camere)</p>
                </div>
              </div>


            </div>
          </div>


        </div>

        <div className='border px-3 py-3 rounded-lg border-button/30 text-[14px]'>
           

  <div className='flex justify-between items-center mb-4'>
    <p className='text-[16px] font-medium'>Venituri lunare</p>
    <p className='text-green-500 text-[14px]'>+18% luna aceasta</p>
  </div>

  <div style={{ width: "100%", height: 300 }}>
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 " stroke="#374151" />
        <XAxis dataKey="luna" stroke="#9ca3af" />
        <YAxis stroke="#9ca3af" />
        <Tooltip />
        <Line type="monotone" dataKey="venit" stroke="#7c3aed" strokeWidth={3} />
      </LineChart>
    </ResponsiveContainer>
  </div>

          </div>
        </div>
      



      

    </div>
  )
}

export default AdminDashboard
