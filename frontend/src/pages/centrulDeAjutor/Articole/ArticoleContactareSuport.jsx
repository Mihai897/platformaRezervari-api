import React from 'react'
import { BiSolidDislike, BiSolidLike } from 'react-icons/bi'
import { GoArrowLeft } from 'react-icons/go'
import { MdInfoOutline } from 'react-icons/md'
import { Link, useOutletContext } from 'react-router-dom'

const ArticoleContactareSuport = () => {
  const {title} = useOutletContext()
  return (
    <div className='flex-1 bg-button1 px-5 py-4 rounded-lg shadow-lg border border-button/10'>
      <Link to="/centrul-ajutor" className='flex items-center text-button space-x-2 '>
        <GoArrowLeft className='mt-0.5'/>
        <p className=''>Inapoi la centrul de ajutor</p>
      </Link>
      <div className='mt-2 border-b pb-4 border-b-button/40'>
        <p className='font-medium text-[20px]'>{title}?</p>
        <p className='text-gray-300'>Echipa noastra de suport este aici pentru a te ajuta cu orice intrebare sau proble. <br/> Ne poti contacta prin oricare dintre metodele de mai jos.</p>
        
      </div>
      <p className='font-medium mt-4'>Metode de contact</p>
      <ul className='text-gray-300 list-disc py-4 ml-8 space-y-4 marker:text-button'>
        <li><span className='text-white'>Chat live</span><p>Cea mai rapida metoda de contact.<br/> Disponibil 24/7 si pe site.</p></li>
        <li><span className='text-white'>Email</span><p>Ne poti scrie oricand la adresa: <span className='text-button'>suport@numesite.ro</span></p></li>
        <li><span className='text-white'>Telefon</span><p>Suna-ne pentru asistenta telefonica.<br/>Luni - Duminica: 08:00 - 22:00: <span className='text-button'>+40 123 456 789</span></p></li>
        <li><span className='text-white'>Formular de contact</span><p>Completeaza formularul si iti vom raspunde in cel mai scurt timp.</p></li>

        

      </ul>
      <div className='flex items-center space-x-4 mt-4 py-4 border-t border-t-button/40'>
        <MdInfoOutline className='shrink-0 text-[23px] mt-0.5 text-button'/>
        <p className='font-medium'> Timp de raspuns estimat</p>
      </div>
      <ul className='text-gray-300 list-disc  ml-8  pb-6 space-y-4 marker:text-button'>
        <li>Chat live: raspuns imediat.</li>
        <li>Email: in maximul 24 de ore.</li>
        <li>Telefon: raspuns imediat in timpul programului de lucru.</li>
        <li>Formular de contact: in maximum 24 de ore.</li>
      </ul>

      <div className='py-4 border-t border-t-button/40'>
        <p>A fost acest articol util?</p>
        <div className='flex  modf8:space-x-2 max-modf8:flex-col max-modf8:space-y-3'>
          <button className='flex items-center border mt-4 px-3 py-1.5 rounded-lg space-x-3 border-button/40 cursor-pointer'><BiSolidLike className='text-button shrink-0'/><p className='text-gray-300'>Da,mi-a fost util</p></button>
          <button className='flex items-center border mt-4 px-3 py-1.5 rounded-lg space-x-3 border-button/40 cursor-pointer'><BiSolidDislike className='text-button shrink-0'/><p className='text-gray-300'>Nu, nu mi-a fost util</p></button>
        </div>
      </div>
    </div>
  )
}

export default ArticoleContactareSuport
