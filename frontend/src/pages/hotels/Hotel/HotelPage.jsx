import React from 'react'
import { Link, Outlet, useMatches, useParams } from 'react-router-dom'

import NavbarHotelPage from './NavbarHotelPage';
import { useState } from 'react';
import { useEffect } from 'react';
const HotelPage = () => {
  const [hotel, setHotel] = useState([]);
  const {slug} = useParams();
  useEffect(()=>{
    fetch(`http://localhost:5000/api/hotels/${slug}`)
    .then(res=>res.json())
    .then(data=>setHotel(data))
    .catch(err=>console.error(err));
  },[slug])
  const matches = useMatches();
  const showNavbar = matches.length <= 3;
  
  
  return (
    
    <div>
      
      {hotel && showNavbar && <NavbarHotelPage hotel={hotel} />}
      <Outlet context={{ hotel }}/>
    </div>
  )
}

export default HotelPage
