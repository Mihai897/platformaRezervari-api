import React from 'react'
import { BiSolidDislike, BiSolidLike } from 'react-icons/bi'
import { GoArrowLeft } from 'react-icons/go'
import { MdInfoOutline } from 'react-icons/md'
import { Link, useOutletContext } from 'react-router-dom'

const ArticoleProblemaPlata = () => {
  const {title} = useOutletContext()
  return (
    <div className='flex-1 bg-button1 px-5 py-4 rounded-lg shadow-lg border border-button/10'>
      <Link to="/centrul-ajutor" className='flex items-center text-button space-x-2 '>
        <GoArrowLeft className='mt-0.5'/>
        <p className=''>Inapoi la centrul de ajutor</p>
      </Link>
      <div className='mt-2 border-b pb-4 border-b-button/40'>
        <p className='font-medium text-[20px]'>{title}?</p>
        <p className='text-gray-300'>Daca intampini erori sau plata nu afost procesata, urmeaza pasii de mai jos. <br/> Echipa noastra este aici sa te ajute.</p>
        
      </div>
      <p className='font-medium mt-4'>Pasi de urmat</p>
      <ul className='text-gray-300 list-disc py-4 ml-8 space-y-4 marker:text-button'>
        <li><span className='text-white'>Verifica detaliile platii</span><p>Asigura-te ca datele cardului sunt corecte, ca fondurile sunt suficiente si ca metodea de plata este activa.</p></li>
        <li><span className='text-white'>Incearca din nou plata</span><p>Reincarca pagina si incearca din nou. Daca problema persista, incearca o alta metoda de plata.</p></li>
        <li><span className='text-white'>Verifica e-mailul</span><p>Daca plata a fost procesata, vei primi un e-mail de confirmare. <br/>Verifica si folderul de spam.</p></li>
        <li><span className='text-white'>Contacteaza suportul nostru</span><p>Daca problema continua, echipa noastra te poate ajuta sa finalizezi plata sau sa rezolvi eroarea.</p></li>

        

      </ul>
      <div className='flex items-center space-x-4 mt-4 py-4 border-t border-t-button/40'>
        <MdInfoOutline className='shrink-0 text-[23px] mt-0.5 text-button'/>
        <p className='font-medium'> Informatii importante</p>
      </div>
      <ul className='text-gray-300 list-disc  ml-8  pb-6 space-y-4 marker:text-button'>
        <li>Nu efectua plata de mai multe ori.</li>
        <li>Daca ti s-a retras suma din cont, dar nu ai primit confirmarea, contacteaza-ne.</li>
        <li>Tranzactiile pot dura cateva minute pentru a fi procesate.</li>
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

export default ArticoleProblemaPlata
