import React from 'react'
import descopera from './descopera.json'
import DescoperaList from './DescoperaList'
const Descopera = () => {
  const createDescoperaList = (component)=>{
    return <DescoperaList 
      id = {component.id}
      key = {component.id}
      img = {component.img}
      nume = {component.nume}
      info = {component.info}
      button = {component.button}
    />
  }
  return (
    <div className='max-w-screen-2xl mx-auto px-15 max-modf:px-10 max-modf1:px-8 max-modf8:px-3  py-15'>
      <ul className='grid grid-cols-2 gap-3 max-modf1:grid-cols-1'>
        {descopera && descopera.map(createDescoperaList)}
      </ul>
    </div>
  )
}

export default Descopera
