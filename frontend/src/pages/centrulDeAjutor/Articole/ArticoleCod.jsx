import React from 'react'
import { BiSolidDislike, BiSolidLike } from 'react-icons/bi'
import { GoArrowLeft } from 'react-icons/go'
import { MdInfoOutline } from 'react-icons/md'
import { Link, useOutletContext } from 'react-router-dom'

const ArticoleCod = () => {
  const {title} = useOutletContext()
  return (
    <div className='flex-1 bg-button1 px-5 py-4 rounded-lg shadow-lg border border-button/10'>
      <Link to="/centrul-ajutor" className='flex items-center text-button space-x-2 '>
        <GoArrowLeft className='mt-0.5'/>
        <p className=''>Inapoi la centrul de ajutor</p>
      </Link>
      <div className='mt-2 border-b pb-4 border-b-button/40'>
        <p className='font-medium text-[20px]'>{title}?</p>
        <p className='text-gray-300'>Codurile de reducere te ajuta sa obtii cele mai bune preturi la rezervarile tale. <br/>Urmeaza pasii de mai jos pentru a aplica un cod de reducere.</p>
        
      </div>
      <p className='font-medium mt-4'>Pasi pentru aplicarea unui cod de reducere</p>
      <ul className='text-gray-300 list-disc py-4 ml-8 space-y-4 marker:text-button'>
        <li><span className='text-white'>Alege hotelul si datele sejurului</span><p>Cauta hotelul dori, selecteaza datele si numarul de oaspeti, apoi apasa pe butonul "Cauta".</p></li>
        <li><span className='text-white'>Mergi la pagina de finalizare a rezervarii</span><p>Verifica detaliile rezervarii si apasa pe butonul "Continua".</p></li>
        <li><span className='text-white'>Introdu codul de redeucere</span><p>In sectiunea "Cod de reducere", introdu codul primit si apasa pe butonul "Aplica".</p></li>
        <li><span className='text-white'>Verifica reducerea</span><p>Daca codul este valid, reducerea va fi aplicata automat la totalul comenzii.</p></li>
        <li><span className='text-white'>Finalizeaza rezervarea</span><p>Continua procesul de rezervare si finalizeaza plata.</p></li>

        

      </ul>
      <div className='flex items-center space-x-4 mt-4 py-4 border-t border-t-button/40'>
        <MdInfoOutline className='shrink-0 text-[23px] mt-0.5 text-button'/>
        <p className='font-medium'> Informatii importante</p>
      </div>
      <ul className='text-gray-300 list-disc  ml-8  pb-6 space-y-4 marker:text-button'>
        <li>Codul de reducere poate fi folosit doar inainte de finalizarea platii.</li>
        <li>Fiecare cod are termeni si conditii specifice (perioada de valabilitate, valoare minima, hoteluri eligibile).</li>
        <li>Un singur cod poate fi aplicat pentru o rezervare.</li>
        <li>Daca ai nalamuriri, contacteaza echipa noastra de suport.</li>
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

export default ArticoleCod
