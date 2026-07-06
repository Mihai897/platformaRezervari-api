import React from 'react'
import { BiSolidDislike, BiSolidLike } from 'react-icons/bi'
import { GoArrowLeft } from 'react-icons/go'
import { MdInfoOutline } from 'react-icons/md'
import { Link, useOutletContext } from 'react-router-dom'

const ArticoleDate = () => {
  const {title} = useOutletContext()
  return (
    <div className='flex-1 bg-button1 px-5 py-4 rounded-lg shadow-lg border border-button/10'>
      <Link to="/centrul-ajutor" className='flex items-center text-button space-x-2 '>
        <GoArrowLeft className='mt-0.5'/>
        <p className=''>Inapoi la centrul de ajutor</p>
      </Link>
      <div className='mt-2 border-b pb-4 border-b-button/40'>
        <p className='font-medium text-[20px]'>{title}?</p>
        <p className='text-gray-300'>Iti poti actualiza oricand informatiile personale din contul tau. <br/> Urmeaza pasii de mai jos pentru a face modificarile necesare. </p>
        
      </div>
      <p className='font-medium mt-4'>Pasi pentru modificarea datelor personale</p>
      <ul className='text-gray-300 list-disc py-4 ml-8 space-y-4 marker:text-button'>
        <li><span className='text-white'>Intra in contul tau</span><p> Acceseaza platforma si conecteaza-te in contul tau folosind emailul si parola.</p></li>
        <li><span className='text-white'>Acceseaza sectiunea "Date personale"</span><p> Din meniul contului tau, selecteazacoptiunea "Date personale".</p></li>
        <li><span className='text-white'>Editeaza informatiile</span><p>Actualizeaza informatiile pe care doresti sa le modifici: nume, email, numar de telefon, adresa.</p></li>
        <li><span className='text-white'>Salveaza modificarile</span><p>Dupa ce ai facut modificarile dorite, apasa butonul "Salveaza modificarile".</p></li>

      </ul>
      <div className='flex items-center space-x-4 mt-4 py-4 border-t border-t-button/40'>
        <MdInfoOutline className='shrink-0 text-[23px] mt-0.5 text-button'/>
        <p className='font-medium'> Informatii importante</p>
      </div>
      <ul className='text-gray-300 list-disc  ml-8  pb-6 space-y-4 marker:text-button'>
        <li>Unele informatii (cum ar fi emailul) pot necesita confirmare inainte de a fi actualizate.</li>
        <li>Datele tale sunt in siguranta si nu vor fi partajate cu terti.</li>
        <li>Daca intampini probleme, echipe noastra de suport te poate ajuta.</li>
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

export default ArticoleDate
