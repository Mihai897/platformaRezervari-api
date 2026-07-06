import React from 'react'
import beneficii from './beneficii.json'
import BeneficiiList from './BeneficiiList'
const Beneficii = () => {

  const createBeneficiiList = (component)=>{
  return <BeneficiiList 
    id = {component.id}
    key = {component.id}
    img = {component.img}
    nume = {component.nume}
    info = {component.info}
    button = {component.button}
    link = {component.link}
  />
  }
  return (
    <div className='max-w-screen-2xl mx-auto px-15 max-modf:px-10 max-modf1:px-8 max-modf8:px-3  py-15'>
      <ul className='grid grid-cols-2 gap-3 max-modf1:grid-cols-1'>
        {beneficii && beneficii.map(createBeneficiiList)}
      </ul>
    </div>
  )
}

export default Beneficii
