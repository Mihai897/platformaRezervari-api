import React from 'react'
import { Link } from 'react-router-dom'

const CautariPopulareList = (props) => {
  return (
    <div className='flex shrink-0 pb-3'>
      <button className='bg-button1/70 border-button border px-4 py-1.5 mt-1 ml-4 rounded-xl cursor-pointer'>{props.text}</button>
    </div>
  )
}

export default CautariPopulareList
