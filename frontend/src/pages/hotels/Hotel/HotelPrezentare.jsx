import React from 'react'
import { useOutletContext } from 'react-router-dom'

const HotelPrezentare = () => {
  const {hotel} = useOutletContext();
  return (
    
    <div className=' max-w-screen-2xl mx-auto px-15 max-modf:px-10 max-modf1:px-8 max-modf8:px-3'>
      <div className=' bg-button1 border border-button/40 rounded-b-xl px-4 py-4 '>
        <div className='flex modf1:space-x-15 max-modf:space-x-10 modf1:items-center max-modf1:flex-col max-modf1:space-x-0 max-modf:space-y-4'>
          <div className='flex-2'>
            <p className='text-[24px] font-medium'>Despre proprietate</p>
            <p className='text-gray-400 mt-4'>{hotel?.descriere}</p>
            <div className='grid grid-cols-3 max-modf6:grid-cols-2 gap-3 mt-3 max-modf:grid-cols-1'>
              <div className='border px-3 py-3 border-button/30 rounded-lg'>
                <p className='text-gray-400'>Email</p>
                <p className='wrap-break-word'>{hotel.email_hotel}</p>
              </div>
              <div className='border px-3 py-3 border-button/30 rounded-lg'>
                <p className='text-gray-400'>Telefon</p>
                <p>{hotel.telefon_hotel}</p>
              </div>
              <div className='border px-3 py-3 border-button/30 rounded-lg'>
                <p className='text-gray-400'>Site</p>
                <p className='wrap-break-word'>{hotel.site_hotel}</p>
              </div>
            </div>
          </div>
          <div className='flex-1'>
            <ul className='bg-button/40 px-10 py-4 rounded-lg space-y-3 list-disc modf:ml-4 max-modf1:columns-2 max-modf2:columns-1 marker:text-button'>
              <li>Oras: {hotel.oras}</li>
              <li>Judet: {hotel.judet}</li>
              <li>Cod postal: {hotel.cod_postal}</li>
              <li>Check-in: {hotel.ora_check_in}</li>
              <li>Check-out: {hotel.ora_check_out}</li>
              <li>Receptie: {hotel.program_receptie}</li>
              <li className='flex space-x-3'><p>Limbi vorbite:</p> <ul className='flex space-x-3'>{hotel.limbi_vorbite.map((limb,i)=><li key={i}>{limb}</li>)}</ul></li>

            </ul>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default HotelPrezentare
