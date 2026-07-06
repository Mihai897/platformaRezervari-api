import React from 'react'
import { GoHome, GoShieldCheck } from "react-icons/go";
import { FaArrowRight, FaCheckCircle, FaHome } from "react-icons/fa";
import { CiHome, CiMail } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';


const ForgotConfirmare = () => {
  const navigate = useNavigate();
  
  return (
    <div>
      <div className="flex justify-center">
        <div className='border px-3 py-3 rounded-lg border-button/30 w-110'>

          <div className='flex mx-auto  flex-col items-center w-[80%] max-modf8:w-full  '>
            <div className='bg-button/4 border border-button/60  relative px-3 py-3 rounded-full shadow-[0_0px_10px] shadow-button'>
              <GoShieldCheck className='text-button' size={33}/>
              <div className='absolute right-0 bg-white rounded-full   bottom-0  text-green-600 '>
                <FaCheckCircle  />
              </div>
            </div>
            <p className='text-[19px] font-medium mt-1.5'>Parola a fost resetata cu succes!</p>
            <p className='text-[14px] text-center text-gray-400'>Poti acum sa te autentici cu noua ta parola si sa te bucuri de toate avantajele contului tau:</p>

            <div className='border border-button/30 rounded-lg w-full mt-3 px-3 py-1.5  flex items-center space-x-2 bg-background/50'>
              <div>
                <CiMail className='text-button' size={21}/>
              </div>
              <div className='text-[14px] text-gray-400'>
                <p>Email</p>
                <p>exemplu@email.com</p>
              </div>
            </div>

            <div className='mt-3 w-full relative '>
              <button onClick={()=>navigate("/login")} className='w-full bg-button px-3 py-1.5 rounded-lg hover:bg-button/60 transition-all duration-300 ease-in-out cursor-pointer'>
                <p>Autentifica-te acum</p>
              </button>
              <FaArrowRight className='absolute right-1.5 top-1/2 -translate-y-1/2 '/>
            </div>

            <button onClick={()=>navigate("/")} className='mt-3 border border-button/30 w-full px-3 py-1.5 rounded-lg cursor-pointer flex items-center justify-center space-x-3 hover:bg-button/19 transition-all duration-300 ease-in-out'>
              <GoHome className='text-button' size={19}/>
              <p>Inapoi la pagina principala</p>
            </button>
          </div>
          



        </div>
      </div>
    </div>
  )
}

export default ForgotConfirmare
