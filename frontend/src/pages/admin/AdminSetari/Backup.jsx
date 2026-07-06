import React from 'react'
import { MdOutlineBackup } from "react-icons/md";
import { GoPencil, GoShield } from "react-icons/go";
import { FaRegClock } from "react-icons/fa6";
import { FaRegCalendarCheck } from "react-icons/fa";
import { useOutletContext } from 'react-router-dom';
import backup from './backup'
import { BsThreeDotsVertical } from 'react-icons/bs';

const Backup = () => {
  const {visibleBara} = useOutletContext();
  const iconMap = {
    siguranta:GoShield,
    rest: FaRegClock,
    auto:FaRegCalendarCheck
  }
  return (
    <div>

      <div className='border px-3 py-3  rounded-lg border-button/30 space-y-3'>
        <div className='flex items-center justify-between space-x-3 max-modf:flex-col max-modf:items-start max-modf:space-y-3 '>
          <div className='flex items-center space-x-3'>
            <div className='text-[24px] bg-button/30 text-button px-2 py-2 rounded-lg'>
              <MdOutlineBackup />
            </div>
            <div>
              <p className='text-[20px] font-medium'> Backup automat</p>
              <p className='text-gray-400 text-[15px]'>Datele tale sunt salvate automat si in siguranta. Poti crea backup manual oricand doresti.</p>
            </div>
          </div>

          <div className='shrink-0'>
            <button className='bg-button flex items-center space-x-3 px-3 py-1 rounded-lg hover:bg-button/60 transition-all duration-300 ease-in-out cursor-pointer'>
              <MdOutlineBackup/>
              <p>Creeaza backup acum</p>
            </button>
          </div>
        </div>

        <div className=' modf7:w-[90%]  text-[14px] py-3'>
          <div className='grid grid-cols-2 gap-3'>
            <div>
              <p className='text-gray-400'>Frecventa backup-urilor</p>
              <p>Backup zilnic</p>
            </div>
            <div>
              <p className='text-gray-400'>Ultimul backup</p>
              <p>24 mai 2026, 03:15</p>
            </div>
            <div>
              <p className='text-gray-400'>Pastrare backup-uri</p>
              <p>30 zile</p>
            </div>
            <div>
              <p className='text-gray-400'>Urmatorul backup</p>
              <p>25 mai 2026, 03:15</p>
            </div>
          </div>
        </div>

        <div>
          <p>Despre backup-uri</p>
          <ul className='grid grid-cols-2 max-modf1:grid-cols-1 gap-3 mt-3'>
            {
              [
                {icon:"siguranta",nume:"Date in siguranta",text:"Backup-urile sunt stocate in siguranta si criptate."},
                {icon:"rest",nume:"Restaureaza usor",text:"Poti restaura oricand datele dintr-un backup anterior."},
                {icon:"auto",nume:"Backup automat",text:"Backup-urile se realizeaza automat zilnic."},
              ].map((par,i)=>{
                const Icon = iconMap[par.icon];
                return (
                  <li key={i} className='text-[14px] flex border border-button/30 rounded-lg px-3 py-3 items-center space-x-3'>
                    <div className='px-2 py-2 bg-button/30 text-button text-[24px] rounded-lg'>
                      {Icon && <Icon/>}
                    </div>

                    <div>
                      <p>{par.nume}</p>
                      <p className='text-gray-400'>{par.text}</p>
                    </div>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>

      <div className='border  py-3 rounded-lg border-button/30 space-y-3'>
        <div className='px-3'>
          <p className='text-[20px] font-medium'> Backup existente</p>
          <p className='text-gray-400 text-[15px]'>Descarca sau restaureaza backup-urile existente..</p>
        </div>

        <div className=' py-2  border border-button/30'>
          <div className=' overflow-x-auto min-w-0 scrollbar-thin text-[15px] space-y-3 '>

            <div className={`flex space-x-3 px-3`}>
              <div className={`${visibleBara?"max-modf7:w-62": "max-modf7:w-73"} transition-[width] duration-300 ease-in-out modf7:flex-2  shrink-0`}><p>Data creare</p></div>
              <div className={`${visibleBara?"max-modf7:w-62": "max-modf7:w-73"} transition-[width] duration-300 ease-in-out modf7:flex-2  shrink-0`}><p>Dimensiune</p></div>
              <div className={`${visibleBara?"max-modf7:w-40": "max-modf7:w-48"} transition-[width] duration-300 ease-in-out modf7:flex-1  shrink-0`}><p>Tip</p></div>
              <div className={`${visibleBara?"max-modf7:w-40": "max-modf7:w-48"} transition-[width] duration-300 ease-in-out modf7:flex-1  shrink-0`}><p>Status</p></div>
              <div className={`${visibleBara?"max-modf7:w-40": "max-modf7:w-48"} transition-[width] duration-300 text-center ease-in-out modf7:flex-1  shrink-0`}><p>Actiuni</p></div>
            </div>
            <ul className='min-w-max '>
              {
                backup.map((par,i)=>(
                  <li key={i} className='flex space-x-3 px-3 py-3 border-y border-y-button/30'>
                    <div className={`${visibleBara?"max-modf7:w-62": "max-modf7:w-73"} transition-[width] duration-300 ease-in-out modf7:flex-2  shrink-0`}><p>{par.data}</p></div>
                    <div className={`${visibleBara?"max-modf7:w-62": "max-modf7:w-73"} transition-[width] duration-300 ease-in-out modf7:flex-2  shrink-0`}><p>{par.dimensiune}</p></div>
                    <div className={`${visibleBara?"max-modf7:w-40": "max-modf7:w-48"} transition-[width] duration-300 ease-in-out modf7:flex-1  shrink-0`}><p className='text-gray-400'>{par.tip}</p></div>
                    <div className={`${visibleBara?"max-modf7:w-40": "max-modf7:w-48"} transition-[width] duration-300 ease-in-out modf7:flex-1  shrink-0`}><p>{par.status}</p></div>
                    <div className={`${visibleBara?"max-modf7:w-40": "max-modf7:w-48"} transition-[width] duration-300 text-center ease-in-out modf7:flex-1  shrink-0`}>
                      <div className='flex justify-center space-x-3'>
                        <button className='px-1.5 py-1.5 cursor-pointer border rounded-sm border-button/30'>
                          <GoPencil className='text-button' />
                        </button>
                        <button className='px-1.5 py-1.5 border cursor-pointer rounded-sm border-button/30'>
                          <BsThreeDotsVertical />
                        </button>
                      </div>
                    </div>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>

        <div className='px-3'>
          <button className='text-button hover:text-button/60 cursor-pointer transition-all duration-300 ease-in-out'>Vezi toate backup-urile</button>
        </div>
      </div>


    </div>
  )
}

export default Backup
