import React from 'react'
import { CiMail } from "react-icons/ci";
import { CiLock } from "react-icons/ci";
import { FaInstagram, FaRegEye, FaX, FaXTwitter } from "react-icons/fa6";
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
const Login = () => {
  const navigate = useNavigate();
  return (
    <div className='bg-background text-white py-4 px-3 min-h-screen flex justify-center items-center'>
      
      
      <div className='bg-button1 modf:w-95 px-3 py-4 rounded-lg border  border-button/30'>
        <div className='text-center'>
          <p className='font-medium text-[19px]'>Autentificare</p>
          <p className='text-gray-400  text-[14px]'>Acceseaza-ti contul pentru a gestiona rezervarile tale</p>
        </div>

        <div className='text-[14px]'>
          <div className='py-1'>
            <p>Adresa de email</p>
            <div className='relative '>
              <input className=' outline-0 w-full border px-8 py-1.5 rounded-lg border-button/40 mt-1' type="password" name="" id="" placeholder='Introdu adresa de email'/>
              <CiMail className='absolute top-1/2 mt-0.5 -translate-y-1/2 text-gray-400  ml-2' size={18}/>
            </div>
          </div>

          
          <div className='py-1'>
            <p>Parola</p>
            <div className='relative '>
              <input className=' outline-0 w-full border px-8 py-1.5 rounded-lg border-button/40 mt-1' type="text" name="" id="" placeholder='Introdu parola'/>
              <CiLock className='absolute top-1/2 mt-0.5 -translate-y-1/2 text-gray-400  ml-2' size={18}/>
              <FaRegEye className='absolute top-1/2 right-0 mt-0.5 -translate-y-1/2 text-gray-400 cursor-pointer mr-2' size={18}/>
            </div>
          </div>

          <div className='py-1 flex flex-col'>
            <div className='flex items-center justify-between mt-1.5'>
              <div className='flex space-x-1.5'>
                <input type="checkbox" name="" id="" />
                <p>Tine-ma minte</p>
              </div>
              <Link to={"/forgot"} className='hover:text-button duration-300 transition-all ease-in-out'>Ai uitat parola?</Link>
            </div>
            <button onClick={()=>navigate("/")} className='cursor-pointer bg-button py-2 rounded-lg mt-2.5'> 
              Conecteaza-te
            </button>
          </div>

          <div className='mt-1.5'>
            <p className='text-gray-400'>Nu ai cont? <Link to={"/register"} className='text-button font-medium'>Creeaza unul.</Link></p>
          </div>

          <div className='relative border-t mt-4 border-t-button/30'>
            <span className='absolute bg-button1 left-1/2 -translate-x-1/2 -top-3.5 px-3 max-modf8:text-[12.5px] text-gray-400'>sau continua cu</span>
          </div>

          <div className='mt-4 max-modf8:grid-cols-1 grid grid-cols-2 gap-3'>
            <button onClick={()=>navigate("/admin")} className='flex items-center space-x-2 border px-3 py-1.5 rounded-lg border-button/30 cursor-pointer hover:bg-button/70 transition-all duration-300 ease-in-out'>
              <FcGoogle className='text-[19px]'/>
              <p>Google</p>
            </button>

            <button className='flex items-center space-x-2 border px-3 py-1.5 rounded-lg border-button/30 cursor-pointer hover:bg-button/70 transition-all duration-300 ease-in-out'>
              <FaFacebook className='text-[19px] text-blue-700'/>
              <p>Facebook</p>
            </button>
            <button className='flex items-center space-x-2 border px-3 py-1.5 rounded-lg border-button/30 cursor-pointer hover:bg-button/70 transition-all duration-300 ease-in-out'>
              <FaXTwitter className='text-[19px] text-white'/>
              <p>Twitter</p>
            </button>
            <button className='flex items-center space-x-2 border px-3 py-1.5 rounded-lg border-button/30 cursor-pointer hover:bg-button/70 transition-all duration-300 ease-in-out'>
              <FaInstagram className='text-[19px] text-pink-500'/>
              <p>Instagram</p>
            </button>
          </div>

          


        </div>
      </div>
      
    </div>
  )
}

export default Login
