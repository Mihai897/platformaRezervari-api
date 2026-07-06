import React from 'react'
import { Bs1CircleFill, Bs2CircleFill, Bs3CircleFill, Bs4CircleFill } from "react-icons/bs";
import { Bs1Circle, Bs2Circle, Bs3Circle, Bs4Circle } from "react-icons/bs";
import { GoCheckCircleFill } from "react-icons/go";
const ForgotTop = ({isVerEm,isVerId, isCreare, isConfirmare}) => {
  return (
    <div className='grid grid-cols-4 max-modf:w-[95%] w-[75%] max-modf1:grid-cols-2 text-[14px] mt-4'>


      <div className='flex space-x-3  '>
        {isVerId || isCreare ||isConfirmare ? <GoCheckCircleFill size={22} className='mt-0.5 text-green-600 ' /> : <Bs1CircleFill size={22} className='mt-0.5 text-button ' />}
        <div className='space-y-2 w-full'>
          <div className={`relative w-full   border-t ${isVerEm? "border-t-button": "border-t-green-600"} mt-3 `}>
          
            <div className='absolute  left-0 -top-3'>
              <p className='bg-background pr-2.5'>Verifica emailul</p>
              
            </div>
            
            
          </div>
          <p className='text-gray-400'>Introdu emailul contului tau</p>
        </div>
      </div>

      
      <div className='flex space-x-3  '>
        {  isConfirmare || isCreare? <GoCheckCircleFill size={22} className='mt-0.5 text-green-600' />: isVerId?<Bs2CircleFill size={22} className='mt-0.5 text-button' />: <Bs2Circle size={22} className='mt-0.5 text-gray-400' />}
        <div className='space-y-2 w-full'>
          <div className={`relative w-full   border-t ${isVerId?"border-t-button": isCreare|| isConfirmare ? "border-t-green-600": "border-t-gray-400"} mt-3 `}>
          
            <div className='absolute  left-0 -top-3'>
              <p className='bg-background pr-2.5'>Verifica identitatea</p>
              
            </div>
            
            
          </div>
          <p className='text-gray-400'>Primiti codul de verificare</p>
        </div>
      </div>

      
      <div className='flex space-x-3  '>
        {
          isConfirmare? <GoCheckCircleFill size={22} className='mt-0.5 text-green-600' />: isCreare ? <Bs3CircleFill size={22} className='mt-0.5 text-button' />: <Bs3Circle size={22} className='mt-0.5 text-gray-400' />
        }
        <div className='space-y-2 w-full'>
          <div className={`relative w-full   border-t ${isCreare? "border-t-button": isConfirmare?"border-t-green-600": "border-t-gray-400"} mt-3 `}>
          
            <div className='absolute  left-0 -top-3'>
              <p className='bg-background pr-2.5'>Creeaza parola noua</p>
              
            </div>
            
            
          </div>
          <p className='text-gray-400'>Alege o parola sigura</p>
        </div>
      </div>

      
      <div className='flex space-x-3  '>
        {isConfirmare ? <GoCheckCircleFill size={22} className='mt-0.5 text-green-600' />:<Bs4Circle size={22} className='mt-0.5 text-gray-400' />}

        <div className='space-y-2 w-full'>
          <div className={`relative w-full   border-t ${isConfirmare?"border-t-green-600": "border-t-gray-400"} mt-3 `}>
          
            <div className='absolute  left-0 -top-3'>
              <p className='bg-background pr-2.5'>Confirmare</p>
              
            </div>
            
            
          </div>
          <p className='text-gray-400'>Parola a fost resetata</p>
        </div>
        
        
      </div>

      

    </div>
  )
}

export default ForgotTop
