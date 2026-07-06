import React from 'react'

const CumFunctioneazaList = (props) => {
  return (
    <li key={props.id} className='flex bg-button1/70 border border-button/15 px-4 py-4 rounded-xl h-full'>
              
      <div className='pr-3'><p className=' rounded-full px-1.5 py-0.75 text-button border border-button'>{props.nr}</p></div>
      <div className='flex flex-col flex-1'>
        <p className='font-medium'>{props.nume}</p>
        <p className='text-[14px] mt-4 text-gray-300 '>{props.info}</p>
      </div>
    </li>
  )
}

export default CumFunctioneazaList
