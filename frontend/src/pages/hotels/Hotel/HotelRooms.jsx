import React from 'react'
import { Outlet, useParams } from 'react-router-dom';
import HotelRoomsList from './HotelRoomsList';

const HotelRooms = () => {
  const {roomSlug} = useParams();
  return (
    <div className=''>
     
        
      {/*lista camere*/}
      {
        !roomSlug &&<HotelRoomsList />
      }

      <Outlet/>
      
    </div>
  )
}

export default HotelRooms
