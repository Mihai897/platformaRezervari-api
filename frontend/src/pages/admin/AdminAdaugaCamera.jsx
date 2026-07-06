import React, { useState } from 'react'
import { useEffect } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { IoClose } from 'react-icons/io5';
import { RiArrowRightSLine, RiGalleryUploadLine } from 'react-icons/ri'
import { Link, useNavigate, useOutletContext } from 'react-router-dom'

const AdminAdaugaCamera = () => {

  const [hotelss,setHotelss] = useState([]);
    const [hetelurile, setHotelurile] = useState([]);
    useEffect(()=>{
      fetch(`${import.meta.env.VITE_API_URL}/hotels`)
      .then(res=>res.json())
      .then(data=>setHotelurile(data))
      .catch(err=>console.error(err))
    },[])


  const {hotels,visibleBara} = useOutletContext();
  const [visibleSelectHotel,setVisibleSelectHotel] = useState(false);
  const navigate = useNavigate();
  const [text,setText] = useState("");
  const [text1,setText1] = useState("");
  return (
    <div>
      <div className='flex items-center space-x-3 text-gray-400'>
        <Link to={"/admin/admin-camere"} className='hover:text-white text-gray-400 transition-all duration-300 ease-in-out'>Camere</Link>
        <RiArrowRightSLine className='text-[18px] mt-0.5'/>
        <p className='text-button'>Adauga camera</p>
      </div>

      <div>
        <p className='mt-3 text-[18px] font-medium'>Adauga camera</p>
        <p className='text-gray-400'>Completeaza infomratiile despre camera. Aceasta va fi asociata hotelului selectat.</p>
        
      </div>

      <div className={`grid grid-cols-2 ${visibleBara?"max-modf3:grid-cols-1":"max-modf6:grid-cols-1"} gap-3 mt-3 border border-button/30 px-3 py-3 rounded-lg`}>
        <div>
          
          <div>
            <p className='font-medium'>1. Selecteaza hotelul <span className='text-red-600'>*</span></p>
            <p className='mt-3 text-gray-400'>Hotel</p>
            <div className='mt-1 relative'>
              <button onClick={()=>setVisibleSelectHotel(!visibleSelectHotel)} className={`${visibleSelectHotel?"rounded-t-sm bg-button/30":"rounded-sm bg-background"} border border-button/30 w-full px-3 py-1.5  flex items-center space-x-3 justify-between cursor-pointer hover:bg-button/30 transition-all duration-300 ease-in-out`}>
                <div className='flex items-center space-x-3'>
                  <div className='shrink-0'>
                    <img className='w-15 shrink-0 h-10 rounded-sm' src={`${import.meta.env.BASE_URL}${hetelurile[0]?.img}`} alt="" />
                  </div>
                  <div className='text-start'>
                    <p>{hetelurile[0]?.nume}</p>
                    <p>{hotels[0]?.locatie}</p>
                  </div>
                </div>
                <div>
                  {visibleSelectHotel?<IoIosArrowUp />:<IoIosArrowDown />}
                </div>
              </button>
              <ul className={`absolute left-0 bg-background w-full z-100 overflow-y-auto overflow-hidden transition-all duration-500 ease-in-out  scrollbar-thin ${visibleSelectHotel?"max-h-40 opacity-100" :"max-h-0 opacity-0"}`}>
                {
                  hetelurile.map((hotel,iHotel)=>(
                    <li key={hotel.id} className='border border-button/30 w-full px-3 py-1.5  flex items-center space-x-3  cursor-pointer hover:bg-button/30 transition-all duration-300 ease-in-out'>
                      <div className='flex items-center space-x-3'>
                        <div className='shrink-0'>
                          <img className='w-15 shrink-0 h-10 rounded-sm' src={`${import.meta.env.BASE_URL}${hotel?.img}`} alt="" />
                        </div>
                        <div className='text-start'>
                          <p>{hotel.nume}</p>
                          <p>{hotel.locatie}</p>
                        </div>
                      </div>
                      
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>


          <div className='mt-3'>
            <p className='font-medium'>2. Informatii generale</p>

            <div className={`grid grid-cols-2 ${visibleBara?"max-modf:grid-cols-1":"max-modf1:grid-cols-1"} gap-1.5`}>
              <div className='space-y-1.5'>
                <div>
                  <p className='text-gray-400'>Numar camera <span className='text-red-600'>*</span></p>

                  <label className='relative' htmlFor="">
                    <input className='border border-button/30 outline-0 px-3 peer py-1  w-full rounded-sm mt-3 ' type="text" placeholder='' />
                    <span className='absolute top-1/2 -translate-y-1/2 left-4 pointer-events-none transition-all duration-300 ease-in-out
                    peer-placeholder-shown:top-1/2
                    peer-placeholder-shown:-translate-y-1/2
                    peer-not-placeholder-shown:-top-2
                    peer-not-placeholder-shown:bg-background
                    peer-not-placeholder-shown:text-[12px]
                    peer-not-placeholder-shown:px-3
                    peer-not-placeholder-shown:text-button
                    peer-focus:-top-2
                    peer-focus:bg-background
                    peer-focus:text-[12px]
                    peer-focus:px-3
                    peer-focus:text-button
                    '>Introduceti numarul camerei</span>
                  </label>
                  
                </div>
                <div>
                  <p className='text-gray-400'>URL camera <span className='text-red-600'>*</span></p>

                  <label className='relative' htmlFor="">
                    <input className='border border-button/30 outline-0 px-3 peer py-1  w-full rounded-sm mt-3 ' type="text" placeholder='' />
                    <span className='absolute top-1/2 -translate-y-1/2 left-4 pointer-events-none transition-all duration-300 ease-in-out
                    peer-placeholder-shown:top-1/2
                    peer-placeholder-shown:-translate-y-1/2
                    peer-not-placeholder-shown:-top-2
                    peer-not-placeholder-shown:bg-background
                    peer-not-placeholder-shown:text-[12px]
                    peer-not-placeholder-shown:px-3
                    peer-not-placeholder-shown:text-button
                    peer-focus:-top-2
                    peer-focus:bg-background
                    peer-focus:text-[12px]
                    peer-focus:px-3
                    peer-focus:text-button
                    '>Introduceti url camerei</span>
                  </label>
                  
                </div>
                <div>
                  <p className='text-gray-400'>Disponibilitate camera <span className='text-red-600'>*</span></p>

                  <label className='relative' htmlFor="">
                    <input className='border border-button/30 outline-0 px-3 peer py-1  w-full rounded-sm mt-3 ' type="text" placeholder='' />
                    <span className='absolute top-1/2 -translate-y-1/2 left-4 pointer-events-none transition-all duration-300 ease-in-out
                    peer-placeholder-shown:top-1/2
                    peer-placeholder-shown:-translate-y-1/2
                    peer-not-placeholder-shown:-top-2
                    peer-not-placeholder-shown:bg-background
                    peer-not-placeholder-shown:text-[12px]
                    peer-not-placeholder-shown:px-3
                    peer-not-placeholder-shown:text-button
                    peer-focus:-top-2
                    peer-focus:bg-background
                    peer-focus:text-[12px]
                    peer-focus:px-3
                    peer-focus:text-button
                    '>Introduceti disponibilitatea camerei</span>
                  </label>
                  
                </div>

                <div>
                  <p className='text-gray-400'>Cod camera <span className='text-red-600'>*</span></p>
                  <label className='relative' htmlFor="">
                    <input className='border border-button/30 outline-0 px-3 peer py-1  w-full rounded-sm mt-3 ' type="text" placeholder='' />
                    <span className='absolute top-1/2 -translate-y-1/2 left-4 pointer-events-none transition-all duration-300 ease-in-out
                    peer-placeholder-shown:top-1/2
                    peer-placeholder-shown:-translate-y-1/2
                    peer-not-placeholder-shown:-top-2
                    peer-not-placeholder-shown:bg-background
                    peer-not-placeholder-shown:text-[12px]
                    peer-not-placeholder-shown:px-3
                    peer-not-placeholder-shown:text-button
                    peer-focus:-top-2
                    peer-focus:bg-background
                    peer-focus:text-[12px]
                    peer-focus:px-3
                    peer-focus:text-button
                    '>Introduceti codul camerei</span>
                  </label>
                </div>

                <div>
                  <p className='text-gray-400'>Tip vedere (optional)</p>

                  <label className='relative' htmlFor="">
                    <input className='border border-button/30 outline-0 px-3 peer py-1  w-full rounded-sm mt-3 ' type="text" placeholder='' />
                    <span className='absolute top-1/2 -translate-y-1/2 left-4 pointer-events-none transition-all duration-300 ease-in-out
                    peer-placeholder-shown:top-1/2
                    peer-placeholder-shown:-translate-y-1/2
                    peer-not-placeholder-shown:-top-2
                    peer-not-placeholder-shown:bg-background
                    peer-not-placeholder-shown:text-[12px]
                    peer-not-placeholder-shown:px-3
                    peer-not-placeholder-shown:text-button
                    peer-focus:-top-2
                    peer-focus:bg-background
                    peer-focus:text-[12px]
                    peer-focus:px-3
                    peer-focus:text-button
                    '>Introduceti tipul vederii</span>
                  </label>
                </div>



              </div>

              <div className='space-y-1.5'>
                <div>
                  <p className='text-gray-400'>Dimensiune <span className='text-red-600'>*</span></p>

                  <label className='relative' htmlFor="">
                    <input className='border border-button/30 outline-0 pl-3 pr-8 peer py-1  w-full rounded-sm mt-3 ' type="text" placeholder='' />
                    <span className='absolute top-1/2 -translate-y-1/2 left-4 pointer-events-none transition-all duration-300 ease-in-out
                    peer-placeholder-shown:top-1/2
                    peer-placeholder-shown:-translate-y-1/2
                    peer-not-placeholder-shown:-top-2
                    peer-not-placeholder-shown:bg-background
                    peer-not-placeholder-shown:text-[12px]
                    peer-not-placeholder-shown:px-3
                    peer-not-placeholder-shown:text-button
                    peer-focus:-top-2
                    peer-focus:bg-background
                    peer-focus:text-[12px]
                    peer-focus:px-3
                    peer-focus:text-button
                    '>Introduceti dimensiunea</span>
                    <p className='text-gray-400 absolute right-3 top-1/2 -translate-y-1/2'>m<span className='align-super text-[8px]'>2</span></p>
                  </label>
                  
                </div>

                
                <div>
                  <p className='text-gray-400'>Capacitate <span className='text-red-600'>*</span></p>

                  <label className='relative' htmlFor="">
                    <input className='border border-button/30 outline-0 px-3 peer py-1  w-full rounded-sm mt-3 ' type="text" placeholder='' />
                    <span className='absolute top-1/2 -translate-y-1/2 left-4 pointer-events-none transition-all duration-300 ease-in-out
                    peer-placeholder-shown:top-1/2
                    peer-placeholder-shown:-translate-y-1/2
                    peer-not-placeholder-shown:-top-2
                    peer-not-placeholder-shown:bg-background
                    peer-not-placeholder-shown:text-[12px]
                    peer-not-placeholder-shown:px-3
                    peer-not-placeholder-shown:text-button
                    peer-focus:-top-2
                    peer-focus:bg-background
                    peer-focus:text-[12px]
                    peer-focus:px-3
                    peer-focus:text-button
                    '>Introduceti nr total de persoane</span>
                  </label>
                  
                </div>

                <div>
                  <p className='text-gray-400'>Tip pat <span className='text-red-600'>*</span></p>

                  <label className='relative' htmlFor="">
                    <input className='border border-button/30 outline-0 px-3 peer py-1  w-full rounded-sm mt-3 ' type="text" placeholder='' />
                    <span className='absolute top-1/2 -translate-y-1/2 left-4 pointer-events-none transition-all duration-300 ease-in-out
                    peer-placeholder-shown:top-1/2
                    peer-placeholder-shown:-translate-y-1/2
                    peer-not-placeholder-shown:-top-2
                    peer-not-placeholder-shown:bg-background
                    peer-not-placeholder-shown:text-[12px]
                    peer-not-placeholder-shown:px-3
                    peer-not-placeholder-shown:text-button
                    peer-focus:-top-2
                    peer-focus:bg-background
                    peer-focus:text-[12px]
                    peer-focus:px-3
                    peer-focus:text-button
                    '>Introduceti tipul patului</span>
                  </label>
                  
                </div>


              </div>
            </div>


            <div className='mt-3'>
              <p className='font-medium'>3. Pret si disponibilitate</p>
              <div>
                  <p className='text-gray-400'>Tip tarif camera <span className='text-red-600'>*</span></p>

                  <label className='relative' htmlFor=""> 
                    <input className='border border-button/30 outline-0 px-3 peer py-1  w-[70%] max-modf2:w-full rounded-sm mt-3 ' type="text" placeholder='' />
                    <span className='absolute top-1/2 -translate-y-1/2 left-4 pointer-events-none transition-all duration-300 ease-in-out
                    peer-placeholder-shown:top-1/2
                    peer-placeholder-shown:-translate-y-1/2
                    peer-not-placeholder-shown:-top-2
                    peer-not-placeholder-shown:bg-background
                    peer-not-placeholder-shown:text-[12px]
                    peer-not-placeholder-shown:px-3
                    peer-not-placeholder-shown:text-button
                    peer-focus:-top-2
                    peer-focus:bg-background
                    peer-focus:text-[12px]
                    peer-focus:px-3
                    peer-focus:text-button
                    '>Introduceti tipul tarifului</span>
                  </label>
                  
              </div>
              <div>
                  <p className='text-gray-400'>Pret tarif <span className='text-red-600'>*</span></p>

                  <label className='relative' htmlFor=""> 
                    <input className='border border-button/30 outline-0 px-3 peer py-1  w-[70%] max-modf2:w-full rounded-sm mt-3 ' type="text" placeholder='' />
                    <span className='absolute top-1/2 -translate-y-1/2 left-4 pointer-events-none transition-all duration-300 ease-in-out
                    peer-placeholder-shown:top-1/2
                    peer-placeholder-shown:-translate-y-1/2
                    peer-not-placeholder-shown:-top-2
                    peer-not-placeholder-shown:bg-background
                    peer-not-placeholder-shown:text-[12px]
                    peer-not-placeholder-shown:px-3
                    peer-not-placeholder-shown:text-button
                    peer-focus:-top-2
                    peer-focus:bg-background
                    peer-focus:text-[12px]
                    peer-focus:px-3
                    peer-focus:text-button
                    '>Introduceti pretul tarifului</span>
                  </label>
                  
              </div>

              <div className=' mt-3'>
                <p className='font-medium'>Lista tarifurilor:</p>
                <ul className='mt-2 overflow-hidden py-3  overflow-x-auto scrollbar-thin flex space-x-3 '>
                  <li className='shrink-0'>
                    <button className='flex space-x-3 items-center bg-button/50 px-3 py-0.5'>
                      <p>Tarif standard</p>
                      <IoClose className='mt-1 cursor-pointer'/>
                    </button>
                    <ul className='mt-2 overflow-hidden  overflow-x-auto scrollbar-thin flex space-x-3 '>
                      <button className='flex space-x-3 items-center bg-button/50 px-3 py-0.5'>
                        <p>Pret tarif: 30 RON</p>
                        <IoClose className='mt-1 cursor-pointer'/>
                      </button>
                    </ul>
                  </li>
                  <li className='shrink-0'>
                    <button className='flex space-x-3 items-center bg-button/50 px-3 py-0.5'>
                      <p>Tarif flexibil</p>
                      <IoClose className='mt-1 cursor-pointer'/>
                    </button>
                    <ul className='mt-2 overflow-hidden  overflow-x-auto scrollbar-thin flex space-x-3 '>
                      <button className='flex space-x-3 items-center bg-button/50 px-3 py-0.5'>
                        <p>Pret tarif: 20 RON</p>
                        <IoClose className='mt-1 cursor-pointer'/>
                      </button>
                    </ul>
                  </li>
                  <li className='shrink-0'>
                    <button className='flex space-x-3 items-center bg-button/50 px-3 py-0.5'>
                      <p>Tarif premium</p>
                      <IoClose className='mt-1 cursor-pointer'/>
                    </button>
                    <ul className='mt-2 overflow-hidden  overflow-x-auto scrollbar-thin flex space-x-3 '>
                      <button className='flex space-x-3 items-center bg-button/50 px-3 py-0.5'>
                        <p>Pret tarif: 50 RON</p>
                        <IoClose className='mt-1 cursor-pointer'/>
                      </button>
                    </ul>
                  </li>
                </ul>
              </div>


              <div className={`mt-3 grid grid-cols-2 ${visibleBara?"max-modf:grid-cols-1":"max-modf1:grid-cols-1"} gap-3`}>
                
                <div className='flex items-center space-x-3 '>
                  <input type="checkbox" name="" id="" />
                  <div>
                    <p>Anulare gratuita</p>
                    <p className='text-gray-400'>Oaspetii pot anula gratuit pana la 24h inainte de check-in.</p>
                  </div>
                </div>
                <div className='flex items-center space-x-3 '>
                  <input type="checkbox" name="" id="" />
                  <div>
                    <p>Mic dejun inclus</p>
                    <p className='text-gray-400'>Pretul camerei include mic dejun.</p>
                  </div>
                </div>
                <div className='flex items-center space-x-3 '>
                  <input type="checkbox" name="" id="" />
                  <div>
                    <p>Activare camera</p>
                  </div>
                </div>
              </div>
            </div>


            <div className='mt-3 '>
              <p className='font-medium'>4. Facilitati camera</p>
              <ul className='mt-1 flex items-center overflow-x-auto overflow-hidden scrollbar-thin space-x-3 pb-3'>
                <li className='shrink-0'>
                  <button className='flex items-center space-x-1.5 cursor-pointer  bg-button/30 rounded-sm px-3'>
                    <p>Piscina privata</p>
                    <IoClose className='mt-0.5'/>
                  </button>
                </li>
                
              
              </ul>


              <div>
                <p className='text-gray-400'>Introdu cate o facilitate:</p>

                <label className='relative' htmlFor="">
                  <input className='border border-button/30 outline-0 px-3 peer py-1  w-[70%] max-modf2:w-full rounded-sm mt-3 ' type="text" placeholder='' />
                  <span className='absolute top-1/2 -translate-y-1/2 left-4 pointer-events-none transition-all duration-300 ease-in-out
                  peer-placeholder-shown:top-1/2
                  peer-placeholder-shown:-translate-y-1/2
                  peer-not-placeholder-shown:-top-2
                  peer-not-placeholder-shown:bg-background
                  peer-not-placeholder-shown:text-[12px]
                  peer-not-placeholder-shown:px-3
                  peer-not-placeholder-shown:text-button
                  peer-focus:-top-2
                  peer-focus:bg-background
                  peer-focus:text-[12px]
                  peer-focus:px-3
                  peer-focus:text-button
                  '>Facilitatea</span>
                </label>
                
              </div>

            </div>
          </div>
        </div>

        <div>
          <div>
            <p className='font-medium'>5. Descriere scurta</p>
            <p className='mt-3 text-gray-400'>O scurta descriere a camerei. </p>
            <div className='relative'>
              <textarea name="" className='border border-button/30 w-full h-20 resize-none outline-0 mt-1 rounded-sm pl-3 pr-12.5 scrollbar-thin py-1.5' value={text} onChange={e=>setText(e.target.value)} placeholder='' maxLength={150} id=""></textarea>
              <p className='absolute text-[11.5px] text-gray-400 right-3.5 bottom-1.5'><span className={`${text.length>=100 && text.length<=149?"text-orange-300":text.length===150?"text-red-400":"text-green-400"}`}>{text.length}</span>/150</p>
            </div>
          </div>

          
          <div className='mt-3'>
            <p className='font-medium'>6. Descriere detaliata</p>
            <p className='mt-3 text-gray-400'>Descriere completa a camerei si avantajele acesteia. </p>
            <div className='relative'>
              <textarea name="" className='border border-button/30 w-full h-35 resize-none outline-0 mt-1 rounded-sm pl-3 pr-14 scrollbar-thin py-1.5' onChange={e=>setText1(e.target.value)} value={text1}  placeholder='' maxLength={1000} id=""></textarea>
              <p className='absolute text-gray-400 right-3.5 text-[11.5px] bottom-1.5'><span className={`${text1.length>=800 && text1.length<=999?"text-orange-300":text1.length===1000?"text-red-400":"text-green-400"}`}>{text1.length}</span>/1000</p>
            </div>
          </div>
          
          <div className='mt-3'>
            <p className='font-medium'>7. Imagini camera</p>

            <p className='mt-3'>Imaginea principala a camerei</p>
            <div className='mt-3 flex modf8:space-x-3 max-modf8:space-y-3 max-modf8:flex-col'>
              
              <div className='flex flex-1 justify-center'>
                <button className='flex w-full justify-center items-center space-x-3 border border-button/30 px-3 py-1.5 rounded-sm cursor-pointer hover:bg-button/60 transition-all text-center duration-300 ease-in-out'>
                    <RiGalleryUploadLine className='text-button text-[19.5px]'/>
                    <p>Adauga imaginea principala</p>
                  </button>
              </div>
              <div className='shrink-0 flex-1   border border-button/40 rounded-sm relative'>
                <img className='shrink-0 w-full rounded-sm h-full' src={hotels[0].rooms[0].image} alt="" />
              </div>
            </div>

            <p className='text-gray-400 mt-3'>Adauga imagini relevante pentru aceasta camera.</p>

            <ul className='overflow-x-auto overflow-hidden  mt-3 flex space-x-3 scrollbar-thin pb-3'>
              <li className='shrink-0 w-50 h-40 border border-button/40 rounded-sm relative'>
                <img className='shrink-0 w-full rounded-sm h-full' src={hotels[0].rooms[0].image} alt="" />
                <button className='absolute bg-black px-1.5 rounded-lg hover:bg-button/60 transition-all duration-300 ease-in-out py-1.5 right-1.5 top-1.5 z-600 cursor-pointer text-white'>
                  <IoClose/>
                </button>
              </li>
              
            </ul>

           <div className='flex justify-center'>
             <button className='flex items-center space-x-3 border border-button/30 px-3 py-1.5 rounded-sm cursor-pointer hover:bg-button/60 transition-all duration-300 ease-in-out'>
                <RiGalleryUploadLine className='text-button text-[19.5px]'/>
                <p>Adauga mai multe imagini</p>
              </button>
           </div>

          </div>


        </div>
      </div>


      <div className='flex my-4 space-x-3 justify-end'>
        <button onClick={()=>{navigate("/admin/admin-camere"); window.scrollTo(0,0)}} className='border border-button/30 px-3  py-1.5 rounded-sm hover:bg-button/60 transition-all duration-300 ease-in-out cursor-pointer'>Inchide</button>
        <button onClick={()=>{navigate("/admin/admin-camere"); window.scrollTo(0,0)}} className='border border-button/30 px-3  py-1.5 rounded-sm hover:bg-button/60 transition-all bg-button duration-300 ease-in-out cursor-pointer'>Salveaza modificari</button>
      </div>
    </div>
  )
}

export default AdminAdaugaCamera
