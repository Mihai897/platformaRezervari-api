import React from 'react'
import roomSidebar from './roomSidebar'
const RoomSideBar1 = ({visibleSide}) => {
  return (
    <div className='absolute top-10  z-10' >
      
      <div className={`  bg-button1   px-6 py-4 border border-button/30 transition-all duration-600 overflow-y-scroll scrollbar-hide ease-in-out rounded-lg ${visibleSide ? "max-h-100  opacity-100": "max-h-0 opacity-0 "}`}>
        <div className='space-y-4 text-[14px] text-gray-400'>
          <div className='border-b pb-3 border-b-button/30'>
            <p className='text-white mb-2'>Capacitate</p>
            {roomSidebar.map((camera,i)=>(
              <ul key={i} className='space-y-2'>
                {camera?.capacitate?.capacitateL?.map((par,i1)=>(

                  <li key={i1} className='flex space-x-1.5'>
                    <input className='' type="checkbox" name="" id="" />
                    <p>{par} ({camera?.capacitate?.nrCcapacitateL[i1]})</p>
                  </li>
                ))}
                
              </ul>
            ))}
          </div>

          
          <div className='border-b pb-3 border-b-button/30'>
            <p className='text-white mb-2'>Tipul patului</p>
            {roomSidebar.map((camera,i)=>(
              <ul key={i} className='space-y-2'>
                {camera?.tipPat?.patL?.map((par,i1)=>(

                  <li key={i1 } className='flex space-x-1.5'>
                    <input className='' type="checkbox" name="" id="" />
                    <p>{par} ({camera?.tipPat?.nrCuPatL[i1]})</p>
                  </li>
                ))}
                
              </ul>
            ))}
          </div>

          <div className='border-b pb-3 border-b-button/30'>
            <p className='text-white mb-2'>Vedere</p>
            {roomSidebar.map((camera,i)=>(
              <ul key={i} className='space-y-2'>
                {camera?.vedere?.vedereL?.map((par,i1)=>(

                  <li key={i1} className='flex space-x-1.5'>
                    <input className='' type="checkbox" name="" id="" />
                    <p>{par} ({camera?.vedere?.nrVedereL[i1]})</p>
                  </li>
                ))}
                
              </ul>
            ))}
          </div>

          <div className='border-b pb-3 border-b-button/30'>
            <p className='text-white mb-2'>Facilitati in camera</p>
            {roomSidebar.map((camera,i)=>(
              <ul key={i} className='space-y-2'>
                {camera?.facilitatiCam?.facilitatiL?.map((par,i1)=>(

                  <li key={i1} className='flex space-x-1.5'>
                    <input className='' type="checkbox" name="" id="" />
                    <p>{par} ({camera?.facilitatiCam?.nrFacilitatiL[i1]})</p>
                  </li>
                ))}
                
              </ul>
            ))}
          </div>

          <div className='border-b pb-3 border-b-button/30'>
            <p className='text-white mb-2'>Politica de anulare</p>
            {roomSidebar.map((camera,i)=>(
              <ul key={i} className='space-y-2'>
                {camera?.politicaAnulare?.politica?.map((par,i1)=>(

                  <li key={i1} className='flex space-x-1.5'>
                    <input className='' type="checkbox" name="" id="" />
                    <p>{par} ({camera?.politicaAnulare?.nrPolitica[i1]})</p>
                  </li>
                ))}
                
              </ul>
            ))}
          </div>
        </div>

        <div className='mt-4'>
          <button className='w-full rounded-lg py-1.5 cursor-pointer bg-button'>Aplica filtrele</button>
        </div>

        
      </div>
    </div>
  )
}

export default RoomSideBar1
