import React from 'react'
import { useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import { RiArrowRightSLine } from 'react-icons/ri'
import { Link, useNavigate, useOutletContext } from 'react-router-dom'
const AdminAdaugaAngajati = () => {
  const {visibleBara,angajati, hotels} = useOutletContext();
  const [visibleNrTelList,setVisibleNrTelList] = useState(false);
  const [visibleRolList,setVisibleRolList] = useState(false);
  const [visibleHotelList,setVisibleHotelList] = useState(false);
  const [visibleStatusList,setVisibleStatusList] = useState(false);
  const navigate = useNavigate();
  const [permisiuni,setPermisiuni] = useState(
    [
    {nume: "Dashboard",info:"Poate vizualiza dashboard-ul",check:false},
    {nume: "Rezervari",info:"Poate crea, edita si anula rezervari",check:false},
    {nume: "Clienti",info:"Poate gestiona clienti",check:false},
    {nume: "Hoteluri",info:"Poate gestiona hotelurile si informatiile",check:false},
    {nume: "Camere",info:"Poate gestiona camere",check:false},
    {nume: "Oferte",info:"Poate crea si edita oferte",check:false},
  ]
  )
  const togglePermisiuni=(index)=>{
    setPermisiuni(prev=>
      prev.map((permisiune,i)=>
      i===index?{...permisiune,check:!permisiune.check}:permisiune)
    )
  }
  return (
    <div>
      <div className='flex items-center space-x-3 text-gray-400'>
        <Link to={"/admin/admin-angajati"} className='hover:text-white text-gray-400 transition-all duration-300 ease-in-out'>Angajati</Link>
        <RiArrowRightSLine className='text-[18px] mt-0.5'/>
        <p className='text-button'>Adauga angajat</p>
      </div>
      <div>
        <p className='mt-3 text-[18px] font-medium'>Adauga angajat</p>
        <p className='text-gray-400'>Completeaza infomratiile pentru a adauga un angajat nou.</p>
      </div>


      <div className='border border-button/30  py-3 mt-3 rounded-lg'>
        <div className='px-3 pb-3'>
          <p>Informatii personale</p>
          <div className={`grid text-gray-400 grid-cols-3 ${visibleBara?"max-modf6:grid-cols-2 max-modf1:grid-cols-1":"max-modf:grid-cols-2 max-modf2:grid-cols-1"} gap-3`}>
            <div className='mt-1'>
              <p>Nume complet <span className='text-red-600'>*</span></p>
              <input className='border border-button/30 outline-0 w-full rounded-sm text-white px-3 py-1.5 mt-2' type="text" placeholder='Ex: Ana Popescu' name="" id="" />
            </div>
            <div className='mt-1'>
              <p>Email <span className='text-red-600'>*</span></p>
              <input className='border border-button/30 outline-0 w-full rounded-sm text-white px-3 py-1.5 mt-2' type="text" placeholder='Ex: ana.popescu@email.com' name="" id="" />
            </div>
            <div className='mt-1'>
              <p>Telefon <span className='text-red-600'>*</span></p>
              <div className='flex items-center space-x-3 mt-2'>
                <div className='relative'>
                  <button onClick={()=>{setVisibleNrTelList(!visibleNrTelList)}} className={`flex items-center space-x-3 border border-button/30 px-1.5 py-1.5 hover:bg-button/30 cursor-pointer transition-all duration-300 ease-in-out ${visibleNrTelList?"bg-button/30 rounded-t-sm":"bg-background rounded-sm"}`}>
                    <p>+40</p>
                    {visibleNrTelList? <IoIosArrowUp />:<IoIosArrowDown />}
                  </button>
                  <ul className={`absolute z-30 transition-all duration-500 ease-in-out ${visibleNrTelList?"max-h-30 opacity-100":"max-h-0 opacity-0"} overflow-hidden overflow-y-auto scrollbar-thin bg-background w-full `}>
                    {
                      ["+40","+30","+99"].map((tel,iTel)=>(
                        <li className='px-1.5 py-1.5 border border-button/30 cursor-pointer hover:bg-button/30 transition-all duration-300 ease-in-out' key={iTel}>
                          <p>{tel}</p>
                        </li>
                      ))
                    }
                  </ul>
                </div>
                <input className='border border-button/30 outline-0 w-full rounded-sm text-white px-3 py-1.5 ' type="tel" placeholder='Ex: 712 345 678' name="" id="" />
              </div>
            </div>
            
          </div>
        </div>

        <div className='px-3 border-t mt-3 border-t-button/30 py-3'>
          <p>Rol si permisiuni</p>
          <div className={`mt-2 text-gray-400 grid grid-cols-3 gap-3 ${visibleBara?"max-modf4:grid-cols-2 max-modf1:grid-cols-1":"max-modf1:grid-cols-2 max-modf2:grid-cols-1"}`}>
            <div>
              <p>Rol <span className='text-red-600'>*</span></p>
              <div className='relative mt-1.5 text-white'>
                <button onClick={()=>setVisibleRolList(!visibleRolList)} className={`flex items-center w-full  ${visibleRolList?"rounded-t-lg bg-button/30":"bg-background rounded-lg"} justify-between border-button/30 hover:bg-button/30 cursor-pointer transition-all duration-300 ease-in-out border px-3 py-1.5`}>
                  <p>Selecteaza rolul</p>
                  {visibleRolList?<IoIosArrowUp />:<IoIosArrowDown />}
                </button>
                <ul className={`z-30 absolute  bg-background w-full transition-all duration-500 ease-in-out overflow-hidden overflow-y-auto scrollbar-none ${visibleRolList?"max-h-30 opacity-100":"max-h-0 opacity-0"}`}>
                  {
                    ["Administrator","Manager","Receptioner"].map((rol,iRol)=>(
                      <li className='border border-button/30 px- w-full  px-3 py-1.5 hover:bg-button/30 cursor-pointer transition-all duration-300 ease-in-out' key={iRol}>
                        <p>{rol}</p>
                      </li>
                    ))
                  }
                </ul>
              </div>
            </div>
            <div>
              <p>Hoteluri accesibile <span className='text-red-600'>*</span></p>
              <div className='relative mt-1.5 text-white'>
                <button onClick={()=>setVisibleHotelList(!visibleHotelList)} className={`flex items-center w-full  ${visibleHotelList?"rounded-t-lg bg-button/30":"bg-background rounded-lg"} justify-between border-button/30 hover:bg-button/30 cursor-pointer transition-all duration-300 ease-in-out border px-3 py-1.5`}>
                  <p>Toate hotelurile</p>
                  {visibleHotelList?<IoIosArrowUp />:<IoIosArrowDown />}
                </button>
                <ul className={`z-30 absolute  bg-background w-full transition-all duration-500 ease-in-out overflow-hidden overflow-y-auto scrollbar-thin ${visibleHotelList?"max-h-30 opacity-100":"max-h-0 opacity-0"}`}>
                  {
                    hotels.map((hotel,iHotel)=>(
                      <li className='border border-button/30 px- w-full  px-3 py-1.5 hover:bg-button/30 cursor-pointer transition-all duration-300 ease-in-out' key={iHotel}>
                        <p>{hotel.nume}</p>
                      </li>
                    ))
                  }
                </ul>
              </div>
            </div>

            <div>
              <p>Status <span className='text-red-600'>*</span></p>
              <div className='relative mt-1.5 text-white'>
                <button onClick={()=>setVisibleStatusList(!visibleStatusList)} className={`flex items-center w-full  ${visibleStatusList?"rounded-t-lg bg-button/30":"bg-background rounded-lg"} justify-between border-button/30 hover:bg-button/30 cursor-pointer transition-all duration-300 ease-in-out border px-3 py-1.5`}>
                  <p>Activ</p>
                  {visibleStatusList?<IoIosArrowUp />:<IoIosArrowDown />}
                </button>
                <ul className={`z-30 absolute  bg-background w-full transition-all duration-500 ease-in-out overflow-hidden overflow-y-auto scrollbar-none ${visibleStatusList?"max-h-30 opacity-100":"max-h-0 opacity-0"}`}>
                  {
                    ["Activ","Inactiv"].map((status,iStatus)=>(
                      <li className='border border-button/30 px- w-full  px-3 py-1.5 hover:bg-button/30 cursor-pointer transition-all duration-300 ease-in-out' key={iStatus}>
                        <p>{status}</p>
                      </li>
                    ))
                  }
                </ul>
              </div>
            </div>
          </div>


          <div className='mt-3 text-gray-400'>
            <p>Permisiuni:</p>
            <ul className={`mt-2 grid grid-cols-2 max-modf1:grid-cols-1 modf3:grid-cols-3 gap-3`}>
              {
                permisiuni.map((permisiuni,iPermisiuni)=>(
                  <li onClick={()=>togglePermisiuni(iPermisiuni)} key={iPermisiuni} className='border border-button/30 px-3 py-2 rounded-lg hover:bg-button/30 cursor-pointer transition-all duration-300 ease-in-out flex items-center space-x-3'>
                    <input type="checkbox" name="" onChange={()=>togglePermisiuni(iPermisiuni)} checked={permisiuni.check}   id="" />
                    <div className=''>
                      <p>{permisiuni.nume}</p>
                      <p>{permisiuni.info}</p>
                    </div>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>


        <div className='flex my-4 mr-3 space-x-3 justify-end'>
          <button onClick={()=>{navigate("/admin/admin-angajati"); window.scrollTo(0,0)}} className='border border-button/30 px-3  py-1.5 rounded-sm hover:bg-button/60 transition-all duration-300 ease-in-out cursor-pointer'>Inchide</button>
          <button onClick={()=>{navigate("/admin/admin-angajati"); window.scrollTo(0,0)}} className='border border-button/30 px-3  py-1.5 rounded-sm hover:bg-button/60 transition-all bg-button duration-300 ease-in-out cursor-pointer'>Salveaza modificari</button>
        </div>
      </div>
    </div>
  )
}

export default AdminAdaugaAngajati
