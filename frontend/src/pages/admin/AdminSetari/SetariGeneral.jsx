import React, { useState } from 'react'
import { GiBeastEye } from "react-icons/gi";
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { MdOutlineFileDownload } from "react-icons/md";
import { useOutletContext } from 'react-router-dom';
import hotels from '../../hotels/Hotel/hotels'
import { FaMagento } from 'react-icons/fa6';
const SetariGeneral = () => {
  const [visibleOras,setVisibleOras]= useState(false);
  const [visibleJudet,setVisibleJudet]= useState(false);
  const [visibleLimba,setVisibleLimba]= useState(false);
  const [visibleMoneda,setVisibleMoneda]= useState(false);
  const [visibleData,setVisibleData]= useState(false);
  const [visibleOra,setVisibleOra]= useState(false);
  const { visibleBara } = useOutletContext();
  const maxLitere =300;
  const [text,setText] = useState('');

  let nrTotalCamere =0;
  hotels?.forEach(hotel=>nrTotalCamere+=hotel?.rooms?.length ||0
  );
  let nrTotalVenituri = 0;
  hotels?.forEach(hotel=>
    hotel?.rooms?.forEach(room=>nrTotalVenituri += room?.venitTotal)
  )


  return (
    <div className='mt-4'>
      <div className='border border-button/30 px-3 py-3 rounded-lg'>
        <div className={`flex items-center justify-between max-modf1:flex-col max-modf1:items-start max-modf1:space-y-3`}>
          <div>
            <p className='text-[19px] font-medium'>Informatii generale</p>
            <p className='text-gray-400 text-[15px]'>Editeaza informatiile generale ale contului si preferintele de limba si moneda.</p>
          </div>
          <div>
            <button className='bg-button px-3 py-1 rounded-lg hover:bg-button/60 cursor-pointer transition-all duration-300 ease-in-out'>Salveaza modificarile</button>
          </div>
        </div>

        <div className='mt-2 border-t py-3 border-t-button/30'>
          <p className='font-medium'>Detalii site</p>
          <div className={`  flex space-x-3 text-gray-400 text-[14px] items-start  ${visibleBara? " max-modf1:items-center max-modf1:flex-col": "max-modf2:items-center  max-modf2:flex-col "}`}>
            <div className='modf2:flex-1 '>
              <p>Logo site</p>
              <div className='border border-button/30 rounded-lg  flex flex-col px-10 py-3 mt-1.5'>
                <div className='bg-white w-40 h-40 items-center mx-auto rounded-lg flex justify-center'>
                  <FaMagento size={55} className='text-button'/>
                </div>

                <div className='mt-3 space-y-3'>
                  <button className='border w-full border-button/30 text-white flex items-center justify-center space-x-1.5 px-3 py-1.5 rounded-lg hover:bg-button/60 transition-all duration-300 ease-in-out cursor-pointer'>
                    <MdOutlineFileDownload/>
                    <p>Schimba logo</p>
                  </button>
                  <button className='w-full border border-red-400 px-3 py-1.5 rounded-lg text-red-400 hover:bg-red-400/30 duration-300 ease-in-out cursor-pointer'>Elimina logo</button>
                </div>
                
              </div>
            </div>

            <div className='modf2:flex-3 max-modf3:w-full'>
              <div className={`grid modf6:grid-cols-3 gap-3 ${visibleBara? "max-modf6:grid-cols-2 max-modf:grid-cols-1":"max-modf6:grid-cols-3 max-modf:grid-cols-2 max-modf1:grid-cols-1"}`}>
                <div>
                  <p>Nume Site</p>
                  <input className='border border-button/30 w-full px-3 py-1 outline-0 rounded-lg mt-1.5' type="text" placeholder='NumeleSiteului' name="" id="" />
                </div>
                <div>
                  <p>CUI</p>
                  <input className='border mt-1.5 outline-0 border-button/30 w-full px-3 py-1 rounded-lg' type="text" placeholder='RO13456789' name="" id="" />
                </div>
                <div>
                  <p>Reg. Com.</p>
                  <input className='border mt-1.5 outline-0 border-button/30 w-full px-3 py-1 rounded-lg' type="text" placeholder='J40/1234/2020' name="" id="" />
                </div>
                <div>
                  <p>Email</p>
                  <input className='border mt-1.5 outline-0 border-button/30 w-full px-3 py-1 rounded-lg' type="email" placeholder='contact@numesite.ro' name="" id="" />
                </div>
                <div>
                  <p>Telefon</p>
                  <input className='border mt-1.5 outline-0 border-button/30 w-full px-3 py-1 rounded-lg' type="tel" placeholder='+40 713 456 678' name="" id="" />
                </div>
                <div>
                  <p>Website</p>
                  <input className='border mt-1.5 outline-0 border-button/30 w-full px-3 py-1 rounded-lg' type="text" placeholder='https://numesite.ro' name="" id="" />
                </div>
                <div>
                  <p>Adresa</p>
                  <input className='border mt-1.5 outline-0 border-button/30 w-full px-3 py-1 rounded-lg' type="text" placeholder='Str.Trim nr.34' name="" id="" />
                </div>
                <div>
                  <p>Oras</p>
                  <div className='relative'>
                    <button onClick={()=>setVisibleOras(!visibleOras)} className={`border mt-1.5 outl border-button/30 text-start w-full px-3 py-1  flex items-center justify-between hover:bg-button/60 transition-all duration-300 ease-in-out cursor-pointer ${visibleOras?"bg-button/60 rounded-t-lg": "bg-transparent rounded-lg"}`} >
                      <p>Bucuresti</p>
                      {visibleOras?<IoIosArrowUp />:<IoIosArrowDown />}
                    </button>
                    <ul className={`absolute bg-background overflow-y-scroll overflow-hidden z-100 scrollbar-none ${visibleOras?"max-h-31 opacity-100": "max-h-0 opacity-0"}  w-full transition-all ease-in-out duration-500`}>
                      {
                        ["Bucuresti","Timisoara","Dr.Tr Severin","Suceava","Galati","Orsova"].map((par,i)=>(
                          <li key={i} className={`border px-3 py-1 border-button/30 cursor-pointer hover:bg-button/60 transition-all duration-300 ease-in-out`}>
                            <p>{par}</p>
                          </li>
                        ))
                      }
                    </ul>
                  </div>
                </div>
                <div>
                  <p>Judet</p>
                  <div className='relative'>
                    <button onClick={()=>setVisibleJudet(!visibleJudet)} className={`border mt-1.5 outl border-button/30 text-start w-full px-3 py-1  flex items-center justify-between hover:bg-button/60 transition-all duration-300 ease-in-out cursor-pointer ${visibleJudet?"bg-button/60 rounded-t-lg": "bg-transparent rounded-lg"}`} >
                      <p>Bucuresti</p>
                      {visibleJudet?<IoIosArrowUp />:<IoIosArrowDown />}
                    </button>
                    <ul className={`absolute overflow-y-scroll bg-background overflow-hidden z-100 scrollbar-none ${visibleJudet?"max-h-31 opacity-100": "max-h-0 opacity-0"}  w-full transition-all ease-in-out duration-500`}>
                      {
                        ["Timis","Mehedinti","Ilfov","Gorj","Dolj","As"].map((par,i)=>(
                          <li key={i} className={`border px-3 py-1 border-button/30 cursor-pointer hover:bg-button/60 transition-all duration-300 ease-in-out`}>
                            <p>{par}</p>
                          </li>
                        ))
                      }
                    </ul>
                  </div>
                </div>

                
                
              </div>
              <div className='mt-3'>
                  <p>Descriere site (optional)</p>
                  <div className='relative'>
                    <textarea className='w-full border border-button/30 pl-3 pr-12 py-3 rounded-lg mt-3 outline-0 resize-none h-25'
                    value={text}
                    onChange={(e)=>setText(e.target.value)}
                    placeholder='Scrie descrierea aici...'
                    maxLength={maxLitere}
                    />
                    <p className='absolute bottom-3 right-3'><span className={`${text.length>=250 && text.length<=299?"text-orange-300":text.length===300?"text-red-400":"text-green-400"}`}>{text.length}</span>/{maxLitere}</p>
                  </div>
                </div>
            </div>

          </div>
        </div>

        <div className={`border-t grid grid-cols-2 ${visibleBara? "max-modf:grid-cols-1 modf:space-x-3 max-modf:space-y-3":"max-modf1:grid-cols-1 modf1:space-x-3 max-modf1:space-y-3"} border-t-button/30 py-3 `} >
          <div className='border px-3 py-3 border-button/30 rounded-lg'>
            <p className='font-medium'>Preferinte cont</p>
            <div className='space-y-3 mt-3'>


              <div className='flex items-center'>
                <p className='flex-1 text-gray-400'>Limba</p>
                <div className='flex-2 '>
                  <div className='relative'>
                    <button onClick={()=>setVisibleLimba(!visibleLimba)} className={`border border-button/30 w-full text-start px-3 py-1 ${visibleLimba? "bg-button/60 rounded-b-lg": "bg-transparent rounded-lg"} cursor-pointer hover:bg-button/60 transition-all duration-300 flex items-center justify-between ease-in-out
                  `}>
                    <p>Romana</p>
                    {
                      visibleLimba? <IoIosArrowUp className='mt-0.5'/> : <IoIosArrowDown className='mt-0.5'/>
                    }
                  </button>
                  <ul className={`absolute bottom-8 z-100 w-full bg-background transition-all duration-500 ease-in-out overflow-hidden ${visibleLimba? "max-h-40 opacity-100":"max-h-0 opacity-0"}`}>
                    {
                      ["Romana","Engleza","Franceza","Germana"].map((par,i)=>(
                        <li key={i} className={`border border-button/30 px-3 py-1 hover:bg-button/60 cursor-pointer transition-all duration-300 ease-in-out`}>
                          <p>{par}</p>
                        </li>
                      ))
                    }
                  </ul>
                  </div>
                </div>
              </div>

              
              <div className='flex items-center'>
                <p className='flex-1 text-gray-400'>Moneda</p>
                <div className='flex-2 '>
                  <div className='relative'>
                    <button onClick={()=>setVisibleMoneda(!visibleMoneda)} className={`border border-button/30 w-full text-start px-3 py-1 ${visibleMoneda? "bg-button/60 rounded-b-lg": "bg-transparent rounded-lg"} cursor-pointer hover:bg-button/60 transition-all duration-300 flex items-center justify-between ease-in-out
                  `}>
                    <p>RON</p>
                    {
                      visibleMoneda? <IoIosArrowUp className='mt-0.5'/> : <IoIosArrowDown className='mt-0.5'/>
                    }
                  </button>
                  <ul className={`absolute bottom-8 z-100 w-full bg-background transition-all duration-500 ease-in-out overflow-hidden ${visibleMoneda? "max-h-40 opacity-100":"max-h-0 opacity-0"}`}>
                    {
                      ["RON","EURO","DOLAR"].map((par,i)=>(
                        <li key={i} className={`border border-button/30 px-3 py-1 hover:bg-button/60 cursor-pointer transition-all duration-300 ease-in-out`}>
                          <p>{par}</p>
                        </li>
                      ))
                    }
                  </ul>
                  </div>
                </div>
              </div>

              <div className='flex items-center'>
                <p className='flex-1 text-gray-400'>Format data</p>
                <div className='flex-2 '>
                  <div className='relative'>
                    <button onClick={()=>setVisibleData(!visibleData)} className={`border border-button/30 w-full text-start px-3 py-1 ${visibleData? "bg-button/60 rounded-b-lg": "bg-transparent rounded-lg"} cursor-pointer hover:bg-button/60 transition-all duration-300 flex items-center justify-between ease-in-out
                  `}>
                    <p>DD MM YYYY</p>
                    {
                      visibleData? <IoIosArrowUp className='mt-0.5'/> : <IoIosArrowDown className='mt-0.5'/>
                    }
                  </button>
                  <ul className={`absolute bottom-8 z-100 w-full bg-background transition-all duration-500 ease-in-out overflow-hidden ${visibleData? "max-h-40 opacity-100":"max-h-0 opacity-0"}`}>
                    {
                      ["DD MM YYYY","DD MM","MM YYYY"].map((par,i)=>(
                        <li key={i} className={`border border-button/30 px-3 py-1 hover:bg-button/60 cursor-pointer transition-all duration-300 ease-in-out`}>
                          <p>{par}</p>
                        </li>
                      ))
                    }
                  </ul>
                  </div>
                </div>
              </div>

              <div className='flex items-center'>
                <p className='flex-1 text-gray-400'>Format ora</p>
                <div className='flex-2 '>
                  <div className='relative'>
                    <button onClick={()=>setVisibleOra(!visibleOra)} className={`border border-button/30 w-full text-start px-3 py-1 ${visibleOra? "bg-button/60 rounded-t-lg": "bg-transparent rounded-lg"} cursor-pointer hover:bg-button/60 transition-all duration-300 flex items-center justify-between ease-in-out
                  `}>
                    <p>24 ore (14:30)</p>
                    {
                      visibleOra? <IoIosArrowUp className='mt-0.5'/> : <IoIosArrowDown className='mt-0.5'/>
                    }
                  </button>
                  <ul className={`absolute  z-100 w-full bg-background transition-all duration-500 ease-in-out overflow-hidden ${visibleOra? "max-h-40 opacity-100":"max-h-0 opacity-0"}`}>
                    {
                      ["24 ore (14:30)","24 ore (2:30 PM)"].map((par,i)=>(
                        <li key={i} className={`border border-button/30 px-3 py-1 hover:bg-button/60 cursor-pointer transition-all duration-300 ease-in-out`}>
                          <p>{par}</p>
                        </li>
                      ))
                    }
                  </ul>
                  </div>
                </div>
              </div>


            </div>
          </div>
          <div className='border px-3 py-3 border-button/30 rounded-lg'>
            <p className='font-medium'>Informatii</p>
            <div className='text-gray-400 space-y-3 mt-3'>
              <div className='flex justify-between'> 
                <p>Utilizatori</p>
                <p>10/15</p>
              </div>
              <div className='flex justify-between'> 
                <p>Hoteluri</p>
                <p>{hotels.length}</p>
              </div>
              <div className='flex justify-between'> 
                <p>Camere</p>
                <p>{nrTotalCamere}</p>
              </div>
              <div className='flex justify-between'> 
                <p>Venituri</p>
                <p>{nrTotalVenituri} RON</p>
              </div>
              <div className='flex justify-between'> 
                <p>Ultima actualizare</p>
                <p>20 mai 2026</p>
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}

export default SetariGeneral
