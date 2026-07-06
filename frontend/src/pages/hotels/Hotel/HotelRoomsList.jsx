import React, { useState } from 'react'
import { Link, useNavigate, useOutletContext, useParams } from 'react-router-dom'
import RoomSideBar1 from './RoomSideBar1';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { FiWind } from "react-icons/fi";
import { FaWifi } from "react-icons/fa";
import { BiCabinet } from "react-icons/bi";
import { IoTvOutline } from "react-icons/io5";
import { AiFillBank } from "react-icons/ai";
import { PiHairDryer } from "react-icons/pi";
import { useEffect } from 'react';


const HotelRoomsList = () => {
  const {slug} = useParams();
  const [rooms,setRooms] = useState([]);
  useEffect(()=>{
    fetch(`${import.meta.env.VITE_API_URL}/rooms/${slug}`)
    .then(res=>res.json())
    .then(data=>setRooms(data))
    .catch(err=>console.error(err));
  },[slug]);
  const [visibleSide, setVisibleSide] = useState(false);
  const iconMap = {
    Aer:FiWind,
    WIFI: FaWifi,
    Minibar:BiCabinet,
    TV:IoTvOutline,
    Seif:AiFillBank,
    Uscator:PiHairDryer
  }
  const navigate = useNavigate()
  return (
    <div className='max-w-screen-2xl mx-auto px-15 max-modf:px-10 max-modf1:px-8 max-modf8:px-3'>
      <div className=' bg-button1 border border-button/40 rounded-b-xl px-4 py-4'>
        <p className='text-[24px] font-medium'>Alege camera perfecta pentru tine</p>
        <div className='mt-4 '>
          <div className='relative flex justify-between'>
            <button className='cursor-pointer px-4 border py-1 rounded-sm border-button/50 ' onClick={()=>setVisibleSide(!visibleSide)} >Filtreaza camerele</button>
            <RoomSideBar1 visibleSide={visibleSide}/>
            <div className=' flex items-center space-x-4 max-modf2:hidden'>
              <p className=''>Sorteaza dupa:</p>
              <button className='px-4 border py-1 rounded-sm border-button/50 flex cursor-pointer items-center space-x-4'><p>Recomandate</p> <IoIosArrowDown/></button>
            </div>
          </div>
          <div className='flex max-modf1:space-x-4 relative'>
          
            <div className='w-full '>
            
                <ul>
                  {
                    rooms.map((room,i)=>(
                      <li key={room.id} className=' border flex max-modf1:flex-col modf1:space-x-4 px-4 py-4 mt-3 rounded-lg  border-button/30 relative'>
                        <div className='absolute top-3 right-0 max-modf1:right-3'>
                          <FaRegHeart className='cursor-pointer'/>
                        </div>
                        <div className='modf1:flex-3 flex max-modf2:flex-col space-x-3 modf1:border-r modf1:border-r-button/30 items-center'>

                          <div className='flex-1 h-40 max-modf2:mt-6 w-full'>
                            <div className='overflow-hidden relative border max-modf1:h-40 max-modf2:h-60 h-full border-button/40 rounded-lg'>
                              <img className='w-full h-full object-center rounded-lg  hover:scale-110 transition-all duration-400 ' src={
    room.image.startsWith("http")
      ? room.image
      : `${import.meta.env.BASE_URL}${room.image}`
  }
 alt="" /> 

                               
                              {
                                room?.oferta?.stare_activare_oferta ===true && <div className='absolute top-1.5  left-1.5 '>
                                  <p className='bg-green-600 px-3 rounded-sm py-1.5 text-[14px] '>{room?.oferta?.reducerea*100}%</p>
                                </div>
                              }
                              
                              
                            </div>
                          </div>

                          <div className='flex-2'>
                            <Link to={room.slugs} className='font-medium text-[18px] max-modf1:mt-3'>{room.title}</Link>

                            <div className='flex text-gray-400 text-[14px] space-x-5 max-modf:space-x-1.5 mt-1 items-end flex-wrap'>
                              <p className=''>{room.dimensiune}m<sapn className="align-super text-[10px]">2</sapn></p>
                              <p>{room.tip_vedere}</p>
                              <p>Max: {room.capacitate_camera}</p>
                              <p>{room.tipul_patului}</p>
                            </div>
                            <div>
                              <p className='text-gray-400 text-[14px] my-3'>{room.scurta_descriere}</p>
                            </div>

                            <div>
                              <ul className='grid grid-cols-3 max-modf:grid-cols-2 max-modf1:1'>
                                {room?.facilitati?.slice(0,6).map((facil)=>{
                                const Icon = iconMap[facil.icon_facilitate]
                                return(
                                  <li className='text-[14px] mr-1 text-gray-400'>
                                    <div className='flex items-center space-x-1'>
                                      {Icon && <Icon  className="text-button"/>}
                                      <p>{facil.nume_facilitate}</p>
                                    </div>
                                  </li>
                                )})}
                              </ul>
                            </div>
                            
                          </div>
                        </div>

                        <div className='flex modf1:flex-1 flex-col   justify-center text-[14px]'>
                          
                          <div className='mt-5'>
                            <p className='text-gray-400'>{room.camera_include}</p>
                            
                            <p className='mt-2 text-lime-600'>{room.anulare_gratuita}</p>
                            <p className={`text-gray-400 mt-2 ${room?.oferta?.stare_activare_oferta===true?"line-through text-[14px]":""}`}><span className={` font-medium  ${room?.oferta?.stare_activare_oferta===true?"text-[14px] text-gray-400":"text-[26px] text-white"}`}>{room.tarife[1].pret_tarif}</span> <span className={`${room?.oferta?.stare_activare_oferta===true?"text-[14px]":"text-[18px]"}`}>RON</span> / noapte</p>
                           
                           {
                            room?.oferta?.stare_activare_oferta ===true &&  <p className='text-gray-400 mt-2'><span className='text-white font-medium text-[26px]'>{Math.round((room?.tarife[1].pret_tarif-room?.tarife[1].pret_tarif*room?.oferta?.reducerea)*100)/100}</span> <span className='text-[18px]'>RON</span> / noapte</p>
                           }

                            <div>
                              <button onClick={()=>navigate(room.slugs)} className='bg-button w-full rounded-lg py-2 mt-3 cursor-pointer'>
                                Selecteaza
                              </button>
                            </div>
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
    </div>
  )
}

export default HotelRoomsList
