import React from 'react'

const GhidButtonLists = (props) => {
  return (
    <div className='text-center'>
      <button className='bg-button1 w-full rounded-t-sm border border-transparent active:border-button py-1.5'>{props.text}</button>
    </div>
  )
}

export default GhidButtonLists
