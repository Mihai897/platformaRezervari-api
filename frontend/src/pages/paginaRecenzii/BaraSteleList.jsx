import React from 'react'

const BaraSteleList = ({props}) => {

  
  return (
    <li className='text-gray-300 flex px-3 items-center space-x-2.5'> 
      <div className='flex space-x-2 '>
        <p>{props.nrStele}</p>
        <p>stele</p>
      </div>

      <div className='w-50 max-modf1:w-full bg-transparent border border-button/30 h-3 mt-0.5   rounded-full
      '>

      <div className='bg-button h-3   rounded-full' style={{width: `${props.procent}%`}}>
        </div>    

      </div>

      <div className='flex max-modf1:w-40 space-x-2'>
        <p>{props.procent}%</p>
        <p>({props.nrRecenzii})</p>
      </div>
    </li>
  )
}

export default BaraSteleList
