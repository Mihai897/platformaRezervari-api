import React from 'react'
import { GoArrowLeft } from 'react-icons/go'
import { MdInfoOutline } from 'react-icons/md'
import { Link, useOutletContext } from 'react-router-dom'
import { BiSolidLike } from "react-icons/bi";
import { BiSolidDislike } from "react-icons/bi";
const ArticoleAnulareRezervare = () => {
  const {title} = useOutletContext()
  return (
    <div className='flex-1 bg-button1 px-5 py-4 rounded-lg shadow-lg border border-button/10'>
      <Link to="/centrul-ajutor" className='flex items-center text-button space-x-2 '>
        <GoArrowLeft className='mt-0.5'/>
        <p className=''>Inapoi la centrul de ajutor</p>
      </Link>
      <div className='mt-2 border-b pb-4 border-b-button/40'>
        <p className='font-medium text-[20px]'>{title}?</p>
        <p className='text-gray-300'>Afla pasii necesari pentru a anula o rezervare si informatiile importante legate de rambursari.</p>
        
      </div>
      <p className='font-medium mt-4'>Pasii pentru anularea unei rezervari</p>
      <ul className='text-gray-300 list-disc py-4 ml-8 space-y-4 marker:text-button'>
        <li><span className='text-white'>Acceseaza contul tau</span><p>Conecteaza-ta in contul tau.</p></li>

        <li><span className='text-white'>Mergi la "Rezervarile mele":</span><p>Din meniul principal, selecteaza sectiunea "Rezervarile mele".</p></li>

        <li><span className='text-white'>Selecteaza rezervarea pe care vrei sa o anulezi</span><p>Alege rezervarea pentru care doresti anularea.</p></li>

        <li><span className='text-white'>Apasa pe "Anuleaza rezervarea"</span><p>Vei gasi butonul de anulare in detaliile rezervarii.</p></li>

        <li><span className='text-white'>Confirma anularea</span><p>Confirma anularea in fereastra de confirmare.</p></li>

      </ul>
      <div className='flex items-center space-x-4 mt-4 py-4 border-t border-t-button/40'>
        <MdInfoOutline className='shrink-0 text-[23px] mt-0.5 text-button'/>
        <p className='font-medium'> Informatii importante</p>
      </div>
      <ul className='text-gray-300 list-disc  ml-8  pb-6 space-y-4 marker:text-button'>
        <li>Anularea gratuita este disponibila in functie de politica hotelului si de tipul rezervarii.</li>
        <li>Rambursarea se face automat in contul folosit la plata, in termne de 3-7 zile lucratoare.</li>
        <li>Daca rezervarea nu poate fi anulata online, te rugam sa contactezi echipa noastra de suport.</li>
      </ul>

      <div className='py-4 border-t border-t-button/40'>
        <p>A fost acest articol util?</p>
        <div className='flex modf8:space-x-2 max-modf8:flex-col max-modf8:space-y-3'>
          <button className='flex items-center border mt-4 px-3 py-1.5 rounded-lg space-x-3 border-button/40 cursor-pointer'><BiSolidLike className='text-button shrink-0'/><p className='text-gray-300'>Da,mi-a fost util</p></button>
          <button className='flex items-center border mt-4 px-3 py-1.5 rounded-lg space-x-3 border-button/40 cursor-pointer'><BiSolidDislike className='text-button shrink-0'/><p className='text-gray-300'>Nu, nu mi-a fost util</p></button>
        </div>
      </div>
    </div>
  )
}

export default ArticoleAnulareRezervare
