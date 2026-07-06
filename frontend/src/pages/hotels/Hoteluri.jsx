import React from 'react'
import HoteluriList from './HoteluriList'

import { useState } from 'react'
import { useEffect } from 'react'
const Hoteluri = ({hotels}) => {
  
  return (
    <ul className='space-y-8 mt-4'>
      {
        hotels.map((component)=>(
          <HoteluriList hotel={component} />
        ))
      }
      
    </ul>
  )
}

export default Hoteluri
