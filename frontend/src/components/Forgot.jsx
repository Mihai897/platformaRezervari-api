import React, { useEffect } from 'react'
import { replace, useLocation, useNavigate, useSearchParams } from 'react-router-dom'

import ForgotTop from './ForgotTop';
import ForgotEmail from './ForgotEmail';
import ForgotIdentitate from './ForgotIdentitate';
import ForgotCreare from './ForgotCreare';
import ForgotConfirmare from './ForgotConfirmare';
const Forgot = () => {
  const [searchParams,setSearchParams] = useSearchParams();
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(()=>{
    if(!searchParams.get("step")) {
      setSearchParams({step:1}, {replace: true});
    }
  },[searchParams, setSearchParams])
  const step = Number(searchParams.get("step"))||1;
  const isVerEm = step === 1;
  const isVerId = step === 2;
  const isCreare = step === 3;
  const isConfirmare = step === 4;
  
  return (
    <div className='bg-background text-white py-4 min-h-screen flex flex-col justify-center items-center'>
      <div className='text-center'>
        <p className='text-[24px]'>Ai uitat parola?</p>
        <p className='text-[14px] text-gray-400'>Urmareste pasii de mai jos pentru a-ti recupera contul.</p>
      </div>

      <ForgotTop isVerEm={isVerEm} isVerId={isVerId} isCreare={isCreare} isConfirmare={isConfirmare}/>

      <div className='bg-button1 w-[75%] max-modf:w-[95%] mt-4  px-3 py-4 rounded-lg border flex flex-col border-button/30'>
        {isVerEm &&<ForgotEmail setSearchParams={setSearchParams}/>}
        {isVerId && <ForgotIdentitate setSearchParams={setSearchParams}/>}
        {isCreare && <ForgotCreare setSearchParams={setSearchParams}/>}
        {isConfirmare &&<ForgotConfirmare />}
        
        
      </div>
    </div>
  )
}

export default Forgot
