import React, { useState } from 'react'
import { RiArrowRightSLine } from 'react-icons/ri';
import { Link, useNavigate, useOutletContext } from 'react-router-dom';
import { LuFileImage } from "react-icons/lu";
import hotels from '../hotels/Hotel/hotels'
import { LuClock4 } from "react-icons/lu";
import { IoClose } from "react-icons/io5";

const AdminAdaugaHotel = () => {
  const {visibleBara} = useOutletContext();
  const navigate = useNavigate();
  const [anulareButon,setAnulareButon] = useState(false);
  const [activareButon,setActivareButon] = useState(false);
  return (
    <div>

      <div className='flex items-center space-x-3 text-gray-400'>
        <Link to={"/admin/admin-angajati"} className='hover:text-white text-gray-400 transition-all duration-300 ease-in-out'>Hoteluri</Link>
        <RiArrowRightSLine className='text-[18px] mt-0.5'/>
        <p className='text-button'>Adauga hotel</p>
      </div>
      <div>
        <p className='mt-3 text-[18px] font-medium'>Adauga hotel</p>
        <p className='text-gray-400'>Completeaza infomratiile pentru a adauga un hotel nou.</p>
      </div>

      <div className='border border-button/30  py-3 mt-3 rounded-lg'>
        <p>Infomratii generale</p>
        <div className={`grid grid-cols-2 px-3 gap-3 pb-3 border-b-button/30 text-gray-400 border-b ${visibleBara?"max-modf1:grid-cols-1":" max-modf2:grid-cols-1"}`}>
          <div>
            <p className='mt-2'>Nume hotel <span className='text-red-600'>*</span></p>
            <input className='border border-button/30 w-full px-3 outline-0 text-white py-2 mt-2' type="text" placeholder='Ex: water vila resort' name="" id="" />
          </div>

          

          <div>
            <p className='mt-2'>Locatie <span className='text-red-600'>*</span></p>
            <input className='border border-button/30 w-full text-white px-3 outline-0 py-2 mt-2' type="text" placeholder='Ex: Strada principala, Bulevardul eroilor' name="" id="" />
          </div>

          <div>
            <p className='mt-2'>Oras <span className='text-red-600'>*</span></p>
            <input className='border border-button/30 w-full text-white px-3 outline-0 py-2 mt-2' type="text" placeholder='Ex: Timisoara' name="" id="" />
          </div>

          <div>
            <p className='mt-2'>Judet <span className='text-red-600'>*</span></p>
            <input className='border border-button/30 w-full text-white px-3 outline-0 py-2 mt-2' type="text" placeholder='Ex: Mehedinti' name="" id="" />
          </div>

          <div>
            <p className='mt-2'>Cod postal</p>
            <input className='border border-button/30 w-full text-white px-3 outline-0 py-2 mt-2' type="text" placeholder='Ex: 20100' name="" id="" />
          </div>


        </div>

        <p className='mt-3 px-3'>Imagini hotel</p>
        <div className='flex modf1:space-x-3 mt-3 max-modf1:flex-col max-modf1:space-y-3 max-modf1:px-3'>
          <div className='w-50  h-50 border px-3 py-3 modf1:ml-3 max-modf1:w-full border-button rounded-sm shrink-0 flex justify-center items-center flex-col space-y-1'>
            <LuFileImage className='shrink-0 text-button text-[30px]'/>
            <p>Incarca imagini</p>
            <p className='text-gray-400 text-[15px]'>PNG sau JPG, max 5MB</p>

            <button className=' px-3 py-1.5 rounded-sm bg-button hover:bg-button/60 transition-all duration-300 ease-in-out cursor-pointer'>Adauga imagine</button>
          </div>
          <ul className=' mr-3 w-full max-modf1:px-1.5 overflow-x-scroll overflow-hidden flex space-x-3 pb-3 scrollbar-thin'>
            <li className='shrink-0 w-58'>
              <img className='w-full h-full shrink-0' src={hotels[0].img} alt="" />
            </li>
            <li className='shrink-0 w-58'>
              <img className='w-full h-full shrink-0' src={hotels[0].img} alt="" />
            </li>
            <li className='shrink-0 w-58'>
              <img className='w-full h-full shrink-0' src={hotels[0].img} alt="" />
            </li>
            <li className='shrink-0 w-58'>
              <img className='w-full h-full shrink-0' src={hotels[0].img} alt="" />
            </li>
            <li className='shrink-0 w-58'>
              <img className='w-full h-full shrink-0' src={hotels[0].img} alt="" />
            </li>
            <li className='shrink-0 w-58'>
              <img className='w-full h-full shrink-0' src={hotels[0].img} alt="" />
            </li>
            <li className='shrink-0 w-58'>
              <img className='w-full h-full shrink-0' src={hotels[0].img} alt="" />
            </li>
            
          </ul>
        </div>



        <div className={`mt-6 px-3 grid grid-cols-3 ${visibleBara?"max-modf4:grid-cols-2 max-modf1:grid-cols-1":"max-modf:grid-cols-2 max-modf2:grid-cols-1"} gap-3`}>
          


          <div className='px-3 py-3 border border-button/60 rounded-sm'>
            <p>Anulare gratuita</p>
            <div className='mt-2 flex space-x-3 items-center text-gray-400'>
              <button onClick={()=>setAnulareButon(!anulareButon)} className={`w-10 h-5 cursor-pointer shrink-0 rounded-full relative transition-all duration-300 ease-in-out ${anulareButon===false?"bg-gray-400":"bg-button"}`}>
                <div className={`w-[50%] h-full top-1/2 -translate-y-1/2 bg-white rounded-full transition-all duration-300 ease-in-out ${anulareButon===false?"translate-x-0":"translate-x-full"} absolute`}></div>
              </button>
              <p>Hotelul ofera anulare gratuita.</p>
            </div>

            <p className='text-gray-400 mt-2'>Pana la </p>
            <input type="date" className='rounded-sm outline-0 border [&::-webkit-calendar-picker-indicator]:invert border-button/30 px-3 py-1.5 mt-2 w-full ' name="" id="" />
            <p className='text-gray-400 mt-2'>Data limita pana la care anularea este gratuita.</p>
          </div>



          <div className='px-3 py-3 border border-button/60 rounded-sm'>
            <p>Receptie</p>

            <div className='mt-2 text-gray-400'>
              <p>Program receptie</p>
              <div className='relative mt-3'>
                <input type="text" className='border border-button/30 px-3 py-1.5  w-full rounded-sm outline-0 peer text-white' placeholder='' name="" id="" />
                <span className='text-white top-1/2 -translate-y-1/2 absolute left-3 pointer-events-none transition-all duration-300 ease-in-out
                peer-placeholder-shown:top-1/2
                peer-placeholder-shown:-translate-y-1/2
                peer-not-placeholder-shown:text-[10px]
                peer-not-placeholder-shown:-top-0.5
                peer-not-placeholder-shown:px-2
                peer-not-placeholder-shown:bg-background
                peer-not-placeholder-shown:text-button
                peer-focus:text-[10px]
                peer-focus:-top-0.5
                peer-focus:px-2
                peer-focus:bg-background
                peer-focus:text-button
                '>Indroduceti programul</span>
              </div>

              <p className='mt-2'>Interval orar</p>
              <div className='grid max-modf8:grid-cols-1 grid-cols-2 gap-3 '>
                <input type="time" className='rounded-sm outline-0 border [&::-webkit-calendar-picker-indicator]:invert border-button/30 px-3 py-1.5 mt-2 w-full ' name="" id="" />
                <input type="time" className='rounded-sm outline-0 border [&::-webkit-calendar-picker-indicator]:invert border-button/30 px-3 py-1.5 mt-2 w-full ' name="" id="" />
              </div>
              <p className='text-gray-400 mt-2'>Orele in care receptia este deschisa.</p>
            </div>
          </div>

          <div className='px-3 py-3 border border-button/60 rounded-sm'>
            <p>Activeaza hotelul</p>

            <div className='mt-2 text-gray-400'>
               <div className='mt-2 flex space-x-3 items-center text-gray-400'>
                  <button onClick={()=>setActivareButon(!activareButon)} className={`w-10 h-5 cursor-pointer  shrink-0  rounded-full relative transition-all duration-300 ease-in-out ${activareButon===false?"bg-gray-400":"bg-button"}`}>
                    <div className={`w-[50%] h-full top-1/2 -translate-y-1/2 bg-white rounded-full transition-all duration-300 ease-in-out ${activareButon===false?"translate-x-0":"translate-x-full"} absolute`}></div>
                  </button>
                  <p>Prin activarea hotelului, acesta va fi vizibil pe toate paginile tuturor utilizatorilor.</p>
                </div>
              
            </div>
          </div>
        </div>


        <div className='mt-6 '>
          
          <div className='border-y  py-3 border-button/30 px-3'>
            <p className=''>Limbi vorbite</p>

            <div className={`flex ${visibleBara?"max-modf:flex-col max-modf:items-start max-modf:space-y-3":"max-modf2:flex-col max-modf2:items-start max-modf2:space-y-3"} space-x-3 items-center`}>
              <div>
                <p className='text-gray-400'>Introduceti cate o limba care se vorbeste in hotel:</p>
              </div>
              <div className={` relative ${visibleBara?"flex-2 max-modf:w-full":"flex-2 max-modf2:w-full"}`}>
                <input type="text" className='border w-full border-button/30 px-3 py-1.5 rounded-sm outline-0 peer' placeholder='' name="" id="" />
                <span className='absolute left-3 top-1/2 -translate-y-1/2  pointer-events-none transition-all duration-300 ease-in-out text-white
                peer-placeholder-shown:top-1/2
                peer-placeholder-shown:-translate-y-1/2
                peer-not-placeholder-shown:-top-0.5
                peer-not-placeholder-shown:text-[10px]
                peer-not-placeholder-shown:bg-background
                peer-not-placeholder-shown:px-1
                peer-not-placeholder-shown:text-button
                peer-focus:-top-0.5
                peer-focus:text-[10px]
                peer-focus:bg-background
                peer-focus:px-1
                peer-focus:text-button
                '>Introduceti limba</span>
              </div>
            </div>
             


            <p className='mt-1 text-gray-400'>Lista limbilor selectate:</p>
            <ul className='overflow-x-auto overflow-hidden scrollbar-thin flex space-x-3 pb-3 mt-3'>
              <li className='flex space-x-3 items-center py-0.5 rounded-sm bg-button/30 px-3'>
                <p>Romana</p>
                <IoClose className='mt-0.5 cursor-pointer'/>
              </li>
            
            </ul>
          </div>
        </div>

        <div className='mt-6 border-y border-y-button/30 py-3'>
          <div className='px-3 '>
            <p>Politicile hotelului</p>
            <p className='text-gray-400'>Completati in casetele de mai jos numele politici pe care doriti sa o introduceti si cate o informatie despre acea politica:</p>
          </div>

          <div className={`grid mt-4 grid-cols-2 ${visibleBara?"max-modf:grid-cols-1":"max-modf1:grid-cols-1"} px-3 gap-3 max-modf8:text-[14px]`}>
            <div className=' relative'>
              <input className='border border-button/30 px-3 py-1.5 rounded-sm outline-0 peer w-full' type="text" placeholder='' name="" id="" />
              <span className='absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none transition-all duration-300 ease-in-out
              peer-placeholder-shown:top-1/2
              peer-placeholder-shown:-translate-y-1/2
              peer-not-placeholder-shown:-top-0.5
              peer-not-placeholder-shown:text-[10px]
              peer-not-placeholder-shown:px-2
              peer-not-placeholder-shown:bg-background
              peer-not-placeholder-shown:text-button
              peer-focus:-top-0.5
              peer-focus:text-[10px]
              peer-focus:px-2
              peer-focus:bg-background
              peer-focus:text-button
              '>Indroduceti numele politicii</span>
            </div>
            <div className=' relative'>
              <input className='border border-button/30 px-3 py-1.5 rounded-sm outline-0 peer w-full' type="text" placeholder='' name="" id="" />
              <span className='absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none transition-all duration-300 ease-in-out
              peer-placeholder-shown:top-1/2
              peer-placeholder-shown:-translate-y-1/2
              peer-not-placeholder-shown:-top-0.5
              peer-not-placeholder-shown:text-[10px]
              peer-not-placeholder-shown:px-2
              peer-not-placeholder-shown:bg-background
              peer-not-placeholder-shown:text-button
              peer-focus:-top-0.5
              peer-focus:text-[10px]
              peer-focus:px-2
              peer-focus:bg-background
              peer-focus:text-button
              '>Indroduceti o informatie despre politica</span>
            </div>
          </div>
          <p className='px-3 mt-3 text-gray-400'>Lista politicilor si informatiilor selectate:</p>
          <ul className='overflow-x-auto overflow-hidden scrollbar-thin pb-3 flex space-x-3 px-3 mt-3'>
            <li className='shrink-0 text-gray-400'>
              <p className='flex space-x-3'><span>Nume politica:</span> <span className='bg-button/30 px-3 rounded-sm flex items-center space-x-3'><p>Check-In / Check-Out</p> <IoClose className='mt-0.5 cursor-pointer'/></span></p>
              
              <ul className='flex space-x-3 mt-2'>
                <p className='mt-1.5 '>Lista informatiilor despre aceasta politica:</p>
                <li className='shrink-0 flex items-center space-x-3 bg-button/30 px-3 rounded-sm'>
                  <p>Check-in: de la 14</p>
                  <IoClose className='mt-0.5 cursor-pointer'/>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className='my-6 border-y border-y-button/30 py-3'>
          <div className='px-3 '>
            <p>Facilitatile hotelului</p>
            <p className='text-gray-400'>Completati in casetele de mai jos numele facilitatii pe care doriti sa o introduceti si cate o informatie despre aceasta facilitate:</p>
          </div>

          <div className={`grid mt-4 grid-cols-2 ${visibleBara?"max-modf:grid-cols-1":"max-modf1:grid-cols-1"} px-3 gap-3 max-modf8:text-[14px]`}>
            <div className=' relative'>
              <input className='border border-button/30 px-3 py-1.5 rounded-sm outline-0 peer w-full' type="text" placeholder='' name="" id="" />
              <span className='absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none transition-all duration-300 ease-in-out
              peer-placeholder-shown:top-1/2
              peer-placeholder-shown:-translate-y-1/2
              peer-not-placeholder-shown:-top-0.5
              peer-not-placeholder-shown:text-[10px]
              peer-not-placeholder-shown:px-2
              peer-not-placeholder-shown:bg-background
              peer-not-placeholder-shown:text-button
              peer-focus:-top-0.5
              peer-focus:text-[10px]
              peer-focus:px-2
              peer-focus:bg-background
              peer-focus:text-button
              '>Indroduceti numele facilitatii</span>
            </div>
            <div className=' relative'>
              <input className='border border-button/30 px-3 py-1.5 rounded-sm outline-0 peer w-full' type="text" placeholder='' name="" id="" />
              <span className='absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none transition-all duration-300 ease-in-out
              peer-placeholder-shown:top-1/2
              peer-placeholder-shown:-translate-y-1/2
              peer-not-placeholder-shown:-top-0.5
              peer-not-placeholder-shown:text-[10px]
              peer-not-placeholder-shown:px-2
              peer-not-placeholder-shown:bg-background
              peer-not-placeholder-shown:text-button
              peer-focus:-top-0.5
              peer-focus:text-[10px]
              peer-focus:px-2
              peer-focus:bg-background
              peer-focus:text-button
              '>Indroduceti o informatie despre facilitate</span>
            </div>
          </div>
          <p className='px-3 mt-3 text-gray-400'>Lista facilitatilor si informatiilor selectate:</p>
          <ul className='overflow-x-auto overflow-hidden scrollbar-thin pb-3 flex space-x-3 px-3 mt-3'>
            <li className='shrink-0 text-gray-400'>
              <p className='flex space-x-3'><span>Nume facilitate:</span> <span className='bg-button/30 px-3 rounded-sm flex items-center space-x-3'><p>Piscina si wellness</p> <IoClose className='mt-0.5 cursor-pointer'/></span></p>
              
              <ul className='flex space-x-3 mt-2'>
                <p className='mt-1.5 '>Lista informatiilor despre aceasta facilitate:</p>
                <li className='shrink-0 flex items-center space-x-3 bg-button/30 px-3 rounded-sm'>
                  <p>Piscina in aer liber</p>
                  <IoClose className='mt-0.5 cursor-pointer'/>
                </li>
              </ul>
            </li>
          </ul>
        </div>



        <div className='flex mt-3 px-3 space-x-3 justify-end'>
          <button onClick={()=>{navigate("/admin/admin-hoteluri"); window.scrollTo(0,0)}} className='border border-button/30 px-3  py-1.5 rounded-sm hover:bg-button/60 transition-all duration-300 ease-in-out cursor-pointer'>Inchide</button>
          <button onClick={()=>{navigate("/admin/admin-hoteluri"); window.scrollTo(0,0)}} className='border border-button/30 px-3  py-1.5 rounded-sm hover:bg-button/60 transition-all bg-button duration-300 ease-in-out cursor-pointer'>Salveaza modificari</button>
        </div>
        

      </div>
      
      
      
    </div>
  )
}

export default AdminAdaugaHotel
