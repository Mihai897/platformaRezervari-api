import React, { useState } from 'react'
import { FaRegUser } from 'react-icons/fa6'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { IoEyeOutline } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

const Register = () => {
  const [selectId, setSelectId] = useState(null);
  const [visib, setVisib] = useState(false);
  const [visibLimb, setVisibLimb] = useState(false);
  const [visibNrTel,setVisibNrTel] = useState(false);
  const [visibleIntreb, setvisibleIntreb] = useState(false);
  const [visibleTara,setVisibleTara] = useState(false);
  const navigate = useNavigate();
  return (
    <div className='bg-background text-white min-h-screen flex justify-center items-center py-7'>
      <div className='border w-[90%] px-4 py-4 rounded-lg bg-button1 border-button/30'>
        
        <div className='flex items-center space-x-3 pb-1.5'>
          <div className=' px-2 rounded-full py-2 bg-button/30'>
            <FaRegUser className='text-button'/>
          </div>
          <div>
            <p className='font-medium'>Creeaza cont nou</p>
            <p className='text-gray-400 text-[14px]'>Completeaza formularul de mai jos pentru a te inregistra</p>
          </div>
        </div>

        <div className=' border-y border-y-button/30 py-2.5 text-[14px]'>
          <p className='text-button'>Informatii personale</p>

          <div className='grid grid-cols-3 max-modf8:grid-cols-1 max-modf1:grid-cols-2 gap-x-5 gap-y-3 mt-1'>


            <div className=''>
              <p className='text-gray-400'>Nume  <span className='text-red-700'>*</span></p>
              <input className='border w-full border-button/30 px-3 py-1 rounded-lg outline-0 mt-1' type="text" placeholder='Ex:  Popescu'/>
            </div>
            <div className=''>
              <p className='text-gray-400'>Prenume <span className='text-red-700'>*</span></p>
              <input className='border w-full border-button/30 px-3 py-1 rounded-lg outline-0 mt-1' type="text" placeholder='Ex: Andrei '/>
            </div>

            <div className=''>
              <p className='text-gray-400'>Data nasterii <span className='text-red-700'>*</span></p>
              <input className='border w-full border-button/30 px-3 py-1 rounded-lg outline-0 mt-1' type="date" placeholder='Selecteaza data'/>
            </div>

            <div className=''>
              <p className='text-gray-400'>Gen <span className='text-red-700'>*</span></p>
              <ul className='flex space-x-5 mt-2'>
                
                {["Masculin","Feminin"].map((par,i)=>(
                  <li key={i} className='flex space-x-1.5 items-center'>
                    <input onClick={()=>setSelectId(i)} type="checkbox" checked={selectId===i}/>
                    <p>{par}</p>
                  </li>
                ))}
                
              </ul>
            </div>

            <div className=''>
              <p className='text-gray-400'>Nationalitate <span className='text-red-700'>*</span></p>
              <div className='relative'>

                <button onClick={()=>setVisib(!visib)} className={`border  w-full border-button/30 px-3 py-1 ${visib? "rounded-t-lg bg-button/30": "rounded-lg bg-transparent"}  mt-1 text-gray-400 flex items-center justify-between  text-start hover:bg-button/30 cursor-pointer transition-all duration-500 ease-in-out`}>
                <p>Selecteaza nationalitatea</p>
                {visib? <MdKeyboardArrowUp className='text-button' size={19}/>: <MdKeyboardArrowDown className='text-button' size={19}/>}

              </button>
                <ul className={`${visib? "max-h-100 opacity-100": "max-h-0 opacity-0" } absolute transition-all duration-500 ease-in-out overflow-hidden  text-gray-400 bg-button1 z-10 w-full `}>
                  {["Romana","Maghiara","Italiana"].map((par,i)=>(
                    <li key={i} className='border w-full hover:bg-button/30 cursor-pointer transition-all duration-500 ease-in-out border-button/30 px-3 py-1 ' key={i}>{par}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className=''>
              <p className='text-gray-400'>Limba Preferata  <span className='text-red-700'>*</span></p>
              <div className='relative'>
                <button onClick={()=>setVisibLimb(!visibLimb)} className={`border w-full border-button/30 px-3 py-1 ${visibLimb? "rounded-t-lg bg-button/30": "rounded-lg bg-transparent"}  mt-1  text-gray-400 flex items-center justify-between  text-start hover:bg-button/30 cursor-pointer transition-all duration-500 ease-in-out`}>
                <p>Limba preferata</p>
                {visibLimb? <MdKeyboardArrowUp className='text-button' size={19}/>: <MdKeyboardArrowDown className='text-button' size={19}/>}
                
              </button>
              <ul className={`${visibLimb? "max-h-100 opacity-100": "max-h-0 opacity-0" } absolute z-10 transition-all duration-500 ease-in-out overflow-hidden  text-gray-400 bg-button1 w-full `}>
                {["Romana","Engleza","Italiana"].map((par,i)=>(
                  <li key={i} className='border w-full hover:bg-button/30 cursor-pointer transition-all duration-500 ease-in-out border-button/30 px-3 py-1 ' key={i}>{par}</li>
                ))}
              </ul>
              </div>
            </div>

            

            <div className=''>
              <p className='text-gray-400'>Email <span className='text-red-700'>*</span></p>
              <input className='border w-full border-button/30 px-3 py-1 rounded-lg outline-0 mt-1' type="email" placeholder='Ex: exemplu@email.com'/>
            </div>

            <div className=''>
              <p className='text-gray-400'>Numar de telefon <span className='text-red-700'>*</span></p>
              <div className='relative'>
                <div className='absolute   top-1.25 '>
                  <div className='relative'>
                    <button onClick={()=>setVisibNrTel(!visibNrTel)} className={` flex text-start items-center space-x-1.5 border-r border-r-button/30 py-1 hover:bg-button/30 cursor-pointer  transition-all duration-500 ease-in-out px-1.5 ${visibNrTel? "bg-button/30 rounded-tl-lg": "rounded-l-lg bg-transparent"}`}>
                    
                      <p>+40</p>
                      {visibNrTel ? <MdKeyboardArrowUp className='text-button' size={19}/>: <MdKeyboardArrowDown className='text-button' size={19}/>}
                    
                  </button>
                  <ul className={`absolute  w-full bg-button1 left-0 overflow-hidden transition-all duration-500 ease-in-out  ${visibNrTel? "max-h-100 opacity-100": "max-h-0 opacity-0"} `}>
                    {["+30","+50"].map((par,i)=>(
                      <li key={i} className='px-1.5 py-1 border border-button/30 hover:bg-button/30 cursor-pointer transition-all duration-500 ease-in-out'>
                        {par}
                      </li>
                    ))}
                  </ul>
                  </div>
                </div>
                <input className={` w-full border border-button/30 pl-16 pr-3 py-1 ${visibNrTel? "rounded-t-lg": "rounded-lg"} outline-0 mt-1`} type="text" placeholder='0749'/>
              </div>
            </div>


          </div>
        </div>

        <div className='border-b border-b-button/30 py-2.5 text-[14px]'>
          <div>
            <p className='text-button'>Detalii cont</p>
            <div className='grid grid-cols-3 max-modf8:grid-cols-1 max-modf1:grid-cols-2 gap-x-5 gap-y-3 mt-1'>

              <div className=''>
                <p className='text-gray-400'>Parola <span className='text-red-700'>*</span></p>
                <div className='relative'>
                  <IoEyeOutline className='absolute right-2.5 cursor-pointer top-1/2 mt-0.5 text-[17px] -translate-y-1/2'/>
                  <input className='border w-full border-button/30 pl-3 pr-8 py-1 rounded-lg outline-0 mt-1' type="password" placeholder='Creaza o parola puternica'/>
                </div>
              </div>
              
              <div className=''>
                <p className='text-gray-400'>Confirma parola <span className='text-red-700'>*</span></p>
                <div className='relative'>
                  <IoEyeOutline className='absolute right-2.5 cursor-pointer top-1/2 mt-0.5 text-[17px] -translate-y-1/2'/>
                  <input className='border w-full border-button/30 pl-3 pr-8 py-1 rounded-lg outline-0 mt-1' type="password" placeholder='Reintrodu parola'/>
                </div>
              </div>
              
              <div className=' text-gray-400'>
                <p className=''>Intrebari de securitate <span className='text-red-700'>*</span></p>
                <div className='relative mt-1'>
                  
                  <button onClick={()=>setvisibleIntreb(!visibleIntreb )} className={`flex  text-start border items-center justify-between px-3 ${visibleIntreb? "rounded-t-lg bg-button/30": "rounded-lg bg-transparent"} border-button/30 py-1 cursor-pointer w-full hover:bg-button/30 transition-all duration-500 ease-in-out`}>
                    
                    <p>Selecteaza o intrebare</p>
                    {visibleIntreb ? <MdKeyboardArrowUp className='text-button' size={19}/>: <MdKeyboardArrowDown className='text-button' size={19}/>}
                  </button>
                  <ul className={`absolute bg-button1 w-full  overflow-hidden transition-all duration-500 ease-in-out  ${visibleIntreb? "max-h-100 opacity-100": "max-h-0 opacity-0"}`}>
                    {["Animalul preferat?","Caini sau pisici"].map((par,i)=>(
                      <li key={i} className='border border-button/30 px-3 py-1 hover:bg-button/30 cursor-pointer transition-all duration-500 ease-in-out'>{par}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className=''>
                <p className='text-gray-400'>Raspuns <span className='text-red-700'>*</span></p>
                <input className='border w-full border-button/30 px-3 py-1 rounded-lg outline-0 mt-1' type="text" placeholder='Scrie raspunsul la intrebare'/>
              </div>
              
              
            </div>
          </div>
        </div>

        <div className='border-b border-b-button/30 py-2.5 text-[14px]'>
          <p className='text-button'>Adresa</p>
          <div className='grid grid-cols-3 max-modf8:grid-cols-1 max-modf1:grid-cols-2 gap-x-5 gap-y-3 mt-1'>

            <div className=''>
              <p className='text-gray-400'>Tara <span className='text-red-700'>*</span></p>
              <div className='w-full relative'>
                <ul className={`absolute bottom-7.25 bg-button1 w-full overflow-hidden transition-all duration-500 ease-in-out ${visibleTara ? "max-h-100 opacity-100": "max-h-0 opacity-0"}`}>
                  {
                    ["Romania","italia","grecia"].map((par,i)=>(
                      <li key={i} className='border border-button/30 hover:bg-button/30 transition-all duration-500 ease-in-out cursor-pointer px-3 py-1'>
                        <p>{par}</p>
                      </li>
                    ))
                  }
                </ul>
                <button onClick={()=>setVisibleTara(!visibleTara)} className={`cursor-pointer hover:bg-button/30 transition-all duration-500 ease-in-out flex w-full justify-between border mt-1 px-3 py-1 ${visibleTara? "rounded-b-lg bg-button/30" : "rounded-lg bg-transparent"} items-center border-button/30`}>
                  <p>Selecteaza tara</p>
                  {
                    visibleTara ? <MdKeyboardArrowUp className='text-button' size={19}/> : <MdKeyboardArrowDown className='text-button' size={19}/>
                  }
                </button>
                
              </div>
            </div>


            <div className=''>
              <p className='text-gray-400'>Oras <span className='text-red-700'>*</span></p>
              <input className='border w-full border-button/30 px-3 py-1 rounded-lg outline-0 mt-1' type="text" placeholder='Ex: Timisoara'/>
            </div>


            <div className=''>
              <p className='text-gray-400'>Adresa <span className='text-red-700'>*</span></p>
              <input className='border w-full border-button/30 px-3 py-1 rounded-lg outline-0 mt-1' type="text" placeholder='Strada, numar, apartament etc'/>
            </div>


          </div>
        </div>

        <div className='py-2.5 text-[14px]'>
          <div className='flex space-x-3 items-start'>
            <input type="checkbox"  className='mt-1.5'/>
            <div>
              <p>Vreau sa primesc oferte si noutati pe email.</p>
              <p className='text-gray-400'>Te poti dezabona oricand.</p>
            </div>
          </div>
          <div className='flex space-x-3 items-start'>
            <input type="checkbox"  className='mt-1.5'/>
            <div>
              <p>Am citit si sunt de acord cu <Link className='text-button'>Termenii si conditiile</Link> si <Link className='text-button'>Politica de confidentialitate.</Link>. <span className='text-red-700'>*</span></p>
              
            </div>
          </div>

          <button onClick={()=> navigate("/")} className='bg-button w-full py-2 rounded-lg mt-3 cursor-pointer font-medium'>Creaza cont</button>
        </div>

        <div className='relative border-t mt-3'>
          <div className='absolute -top-4 bg-button1 px-3 flex left-1/2 max-modf8:text-[12.5px] text-center -translate-x-1/2'><p>sau inregistreaza-te cu</p></div>
        </div>

        <div className='grid grid-cols-2 max-modf8:grid-cols-1 gap-3 max-modf8:mt-9 mt-6 '>
          <div>
            <button className='border w-full px-3 py-1 rounded-sm border-button/30 flex items-center justify-center space-x-1.5 cursor-pointer hover:bg-button/30 transition-all duration-300 ease-in-out'>
              <FcGoogle size={19}/>
              <p>Continua cu Google</p>
            </button>
          </div>
          <div>
            <button className='border w-full px-3 py-1 rounded-sm border-button/30 flex items-center justify-center space-x-1.5 cursor-pointer hover:bg-button/30 transition-all duration-300 ease-in-out'>
              <FaFacebook className='text-blue-500' size={19}/>
              <p>Continua cu Facebook</p>
            </button>
          </div>

          
        </div>


      </div>
    </div>
  )
}

export default Register
