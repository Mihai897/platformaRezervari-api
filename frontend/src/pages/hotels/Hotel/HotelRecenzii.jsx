import React, { useEffect, useState } from 'react'
import { CiStar } from 'react-icons/ci';
import { FaStar } from 'react-icons/fa';
import { useOutletContext, useParams } from 'react-router-dom'
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import HotelRecenziiLista from './HotelRecenziiLista';

const HotelRecenzii = () => {
  const {hotel} = useOutletContext();
  const {slug}= useParams();
  const [stats,setStats] = useState(null);
  const [rooms,setRooms] = useState([]);
  useEffect(()=>{
    fetch(`${import.meta.env.VITE_API_URL}/rooms/${slug}/recenzii/stats`)
    .then(res=>res.json())
    .then(data=>setStats(data))
    .catch(err=>console.error(err))
  },[slug]);

  useEffect(()=>{
    fetch(`${import.meta.env.VITE_API_URL}/rooms/${slug}`)
    .then(res=>res.json())
    .then(data=>setRooms(data))
    .catch(err=>console.error(err))
  },[slug])



  const [visible, setVisible] = useState(false);
  const [visibleButton, setVisibleButton] = useState(false);
  const [visibleButton1, setVisibleButton1] = useState(false);
  const travelerTypes = [
  "Singur",
  "Cuplu",
  "Familie",
  "Familie cu copii mici"
];

  const procent5 = stats?.total_recenzii>0 ?(stats?.stele_5 / stats?.total_recenzii) * 100 :0
  const procent4 = stats?.total_recenzii>0 ?(stats?.stele_4 / stats?.total_recenzii) * 100 :0
  const procent3 = stats?.total_recenzii>0 ?(stats?.stele_3 / stats?.total_recenzii) * 100 :0
  const procent2 = stats?.total_recenzii>0 ?(stats?.stele_2 / stats?.total_recenzii) * 100 :0
  const procent1 = stats?.total_recenzii>0 ?(stats?.stele_1 / stats?.total_recenzii) * 100 :0
  return (
    <div className='max-w-screen-2xl mx-auto px-15 max-modf:px-10 max-modf1:px-8 max-modf8:px-3'>
      <div className='bg-button1 border border-button/40 rounded-b-xl px-4 py-4'>
        <p className='text-[24px] font-medium'>Recenzii de la oaspeti</p>
        <p className='text-[14px] text-gray-400'>Afla ce spun oaspetii care au stat la {hotel?.nume}.</p>


        {/* Bara de recenzii */}

        <div className='border  max-modf1:flex-col rounded-lg px-4 mt-4 border-button/20 py-4 flex items-center space-x-4'>
          <div className='space-y-4 flex-1 modf1:border-r modf1:border-r-button/20 flex flex-col items-center'>
            <p className='text-[34px] font-medium'>{stats?.rating_mediu}</p>
            <ul className='flex space-x-1'>
              {[1,2,3,4,5].map(star=>(
                <FaStar className={star<=Math.round(stats?.rating_mediu)? "text-yellow-400": "text-gray-400"}/>
              ))}
            </ul>
            <p className='text-gray-400'>{stats?.total_recenzii} recenzii</p>
          </div>
          <div className='flex-2 max-modf1:w-full'>
            
            <div className='max-modf1:mt-2'>
              
                <div className='flex justify-between items-center space-x-3 '>
                <p className='w-30 max-modf:w-20'>5 stele</p>
                <div className='w-[80%] mt-0.5 bg-gray-400 rounded-lg h-3'>
                  <div className={` h-full rounded-lg bg-amber-400`} style={{width:`${procent5}%`}}></div>
                </div>
                <p className='w-30 max-modf:w-20 text-center'>{stats?.stele_5}</p>
              </div>
             
            </div>

            <div className='max-modf1:mt-2'>
              
                <div className='flex justify-between items-center space-x-3 '>
                <p className='w-30 max-modf:w-20'>4 stele</p>
                <div className='w-[80%] mt-0.5 bg-gray-400 rounded-lg h-3'>
                  <div className={` h-full rounded-lg bg-amber-400`} style={{width:`${procent4}%`}}></div>
                </div>
                <p className='w-30 max-modf:w-20 text-center'>{stats?.stele_4}</p>
              </div>
             
            </div>

            <div className='max-modf1:mt-2'>
              
                <div className='flex justify-between items-center space-x-3 '>
                <p className='w-30 max-modf:w-20'>3 stele</p>
                <div className='w-[80%] mt-0.5 bg-gray-400 rounded-lg h-3'>
                  <div className={` h-full rounded-lg bg-amber-400`} style={{width:`${procent3}%`}}></div>
                </div>
                <p className='w-30 max-modf:w-20 text-center'>{stats?.stele_3}</p>
              </div>
             
            </div>

            <div className='max-modf1:mt-2'>
              
                <div className='flex justify-between items-center space-x-3 '>
                <p className='w-30 max-modf:w-20'>2 stele</p>
                <div className='w-[80%] mt-0.5 bg-gray-400 rounded-lg h-3'>
                  <div className={` h-full rounded-lg bg-amber-400`} style={{width:`${procent2}%`}}></div>
                </div>
                <p className='w-30 max-modf:w-20 text-center'>{stats?.stele_2}</p>
              </div>
             
            </div>

            <div className='max-modf1:mt-2'>
              
                <div className='flex justify-between items-center space-x-3 '>
                <p className='w-30 max-modf:w-20'>1 stele</p>
                <div className='w-[80%] mt-0.5 bg-gray-400 rounded-lg h-3'>
                  <div className={` h-full rounded-lg bg-amber-400`} style={{width:`${procent1}%`}}></div>
                </div>
                <p className='w-30 max-modf:w-20 text-center'>{stats?.stele_1}</p>
              </div>
             
            </div>





          </div>
        </div>




        {/* creare recenzie */}
        <div className='border  max-modf1:flex-col rounded-lg px-4 mt-4 border-button/20 py-4'>
          <p className='font-medium text-[19px]'>Lasa o recenzie despre sejurul tau</p>
          <p className='text-gray-400'>Impartaseste experiena ta si ajuta alti calatori sa faca alegerea potrivita.</p>


          <div className='mt-4 flex max-modf2:flex-col '>


            <div className='flex-1 modf2:border-r modf2:border-r-button/20'>
              <p className='text-gray-400'>Cum evaluezi sejurul tau? <span className='text-red-600'>*</span></p>


              <div className='flex space-x-1 mt-3 text-[30px] text-button'>
                {[1,2,3,4,5].map(star=>(<button className='cursor-pointer'>
                  <CiStar />
                </button>))}
              </div>

              <p className='text-gray-400 my-3'>Rcenzia ta <span className='text-red-600'>*</span></p>
              <textarea className='w-[90%] max-modf2:w-full border border-button/30 rounded-lg h-40 outline-0 py-1 px-3 resize-none' name="" id="" placeholder={`Spune-ne depsre experienta ta la ${hotel?.nume} ...`}></textarea>
            </div>




            <div className='flex-1 modf2:ml-4'>
              <p className='text-gray-400 max-modf2:mt-4'>Titlu recenzie <span className='text-red-600'>*</span></p>
              <input className='mt-3 border w-full rounded-lg py-1 px-3 outline-0 border-button/30' type="text" name="" id="" placeholder='Ex: O experienta de neuitat!' />

              <p className='my-3 text-gray-400'>Camera in care ai stat <span className='text-red-600'>*</span></p>

              
              <div className=' relative'>

                <button onClick={()=>setVisible(!visible)} className={`border border-button/30 ${visible? "rounded-t-lg": "rounded-lg"} px-3 py-2 flex justify-between items-center cursor-pointer w-full`}>
                  <div className='flex items-center space-x-2'>
                    <div className='w-25 h-13 rounded-lg'>
                      <img className='w-full h-full rounded-lg object-cover ' src={`${import.meta.env.BASE_URL}${rooms[0]?.image}`} alt="" />
                    </div>

                    <div className='text-[14px] text-start'>
                      <p>{rooms[0]?.title}</p>
                      <p className='text-gray-400'>{rooms[0]?.cod_camera}</p>
                    </div>
                  </div>

                  <div className='ml-3 text-button'>
                    {visible? <IoIosArrowUp /> : <IoIosArrowDown />}
                  </div>
                </button>

                <div className={`absolute w-full  z-300  left-0 `}>
                  <ul className={`flex  overflow-hidden bg-button1 overflow-y-scroll scrollbar-thin  transition-all duration-500 ease-in-out ${visible? "max-h-40 opacity-100": "max-h-0 opacity-0"}  flex-col `}>


                    {
                      rooms?.map((room,i)=>(
                        <li key={room.id} className='border border-button/30 px-3 py-2 bg-button1 cursor-pointer hover:bg-button/60'>
                      
                          <div className='flex items-center space-x-2'>
                            <div className='w-25 h-13 rounded-lg'>
                              <img className='w-full h-full rounded-lg object-cover ' src={`${import.meta.env.BASE_URL}${room?.image}`} alt="" />
                            </div>

                            <div className='text-[14px]'>
                              <p>{room?.title}</p>
                              <p className='text-gray-400'>{room.cod_camera} </p>
                            </div>
                          </div>
                        </li>
                      ))
                    }
                    
                    
                    
                  </ul>
                </div>

              </div>

            </div>
          </div>
          

          <div className='mt-4 '>
            <p className='text-gray-400'>Tip Calator (optional)</p>
            <div className='flex justify-between modf2:items-center mt-3 max-modf2:flex-col max-modf2:space-y-4'>  

              <div className=' '>
                
                <div className='relative modf1:inline-block'> 
                  <button onClick={()=>setVisibleButton(!visibleButton)} className={`max-modf1:w-full text-gray-400 border border-button/30 px-3 py-1  flex items-center cursor-pointer hover:border-button/70 active:border-button transition-all duration-600 ease-in-out max-modf2:justify-between modf2:space-x-4 ${visibleButton ? "rounded-t-lg": "rounded-lg"}`}>
                    <p>Alege tipul de calator</p>
                    {visibleButton ? <IoIosArrowUp className='mt-0.5 text-button'/>: <IoIosArrowDown className='mt-0.5 text-button'/>}
                  </button>
                  <div className='absolute w-full z-10'>
                      <ul className={`overflow-hidden transition-all duration-600 ease-in-out ${visibleButton ? "max-h-60 opacity-100": "max-h-0 opacity-0"}`}>
                        {travelerTypes.map((par,i)=>(
                          <li className='bg-b'>
                            <button className='bg-button1 text-gray-400 border border-button/30 px-3 py-1 cursor-pointer w-full text-start hover:border-button/70 active:border-button transition-all duration-600 ease-in-out'>{par}</button>
                          </li>
                        ))}
                      </ul>
                  </div>
                </div>   


                

              </div>



              <div className='max-modf1:flex max-modf1:justify-center'>
                <button className=' bg-button px-8 py-1 rounded-lg cursor-pointer'>Trimite recenzia</button>
              </div>    
            </div>

            


          </div>

        </div>

        
        {/* Lista recenziilor */}
        <div className='border rounded-lg px-4 mt-4 border-button/20 py-6'>
          
          <HotelRecenziiLista />

        </div>

        
      </div>
    </div>
  )
}

export default HotelRecenzii
