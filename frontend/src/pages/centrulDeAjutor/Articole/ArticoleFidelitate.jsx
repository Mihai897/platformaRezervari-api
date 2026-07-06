import React from 'react'
import { BiSolidDislike, BiSolidLike } from 'react-icons/bi'
import { GoArrowLeft } from 'react-icons/go'
import { MdInfoOutline } from 'react-icons/md'
import { Link, useOutletContext } from 'react-router-dom'

const ArticoleFidelitate = () => {
  const {title} = useOutletContext()
  return (
    <div className='flex-1 bg-button1 px-5 py-4 rounded-lg shadow-lg border border-button/10'>
      <Link to="/centrul-ajutor" className='flex items-center text-button space-x-2 '>
        <GoArrowLeft className='mt-0.5'/>
        <p className=''>Inapoi la centrul de ajutor</p>
      </Link>
      <div className='mt-2 border-b pb-4 border-b-button/40'>
        <p className='font-medium text-[20px]'>{title}?</p>
        <p className='text-gray-300'>Programul de fidelitate Numesite Rewards este modul nostru de a-ti multumi ca alegi sa calatoresti cu noi. Cu fiecare rezervare, castigi puncte pe care le poti folosi pentru reduceri si beneficii exclusive.</p>
        
      </div>
      <p className='font-medium mt-4'>Cum functioneaza?</p>
      <ul className='text-gray-300 list-disc py-4 ml-8 space-y-4 marker:text-button'>
        <li><span className='text-white'>Rezerva</span><p>Efectueaza o rezervare pe platforma noastra.</p></li>
        <li><span className='text-white'>Castiga puncte</span><p>Primesti puncte pentru fiecare rezervare finalizata.</p></li>
        <li><span className='text-white'>Acumuleaza</span><p>Cu cat rezervi mai mult, cu atat cstigi mai multe puncte.</p></li>
        <li><span className='text-white'>Foloseste</span><p>Transforma punctele in reduceri la rezervarile viitoare.</p></li>
        <li><span className='text-white'>Bucura-te</span><p>Profita de beneficii exclusive si oferte speciale.</p></li>

      </ul>
      <p className='font-medium mt-4 pt-4 border-t border-t-button/40'>Beneficiile tale</p>
      <ul className='text-gray-300 list-disc py-4 ml-8 space-y-4 marker:text-button'>
        <li><span className='text-white'>Reduceri exclusive</span><p>Foloseste punctele pentru a obtine reduceri la rezervarile tale.</p></li>
        <li><span className='text-white'>Prioritate la suport</span><p>Membrii au acces prioritar la echipa noastra de suport.</p></li>
        <li><span className='text-white'>Oferte speciale</span><p>Primesti acces la promotii si oferte dedicate doar membrilor.</p></li>
        <li><span className='text-white'>Surprize si cadouri</span><p>Din cand in cand, te bucuri de bonusuri si cadouri speciale.</p></li>

      </ul>
      <div className='flex items-center space-x-4 mt-4 py-4 border-t border-t-button/40'>
        <MdInfoOutline className='shrink-0 text-[23px] mt-0.5 text-button'/>
        <p className='font-medium'> Cum acumulezi puncte?</p>
      </div>
      <ul className='text-gray-300 list-disc  ml-8  pb-6 space-y-4 marker:text-button'>
        <li>Fiecare 1 RON cheltuit = 1 punct</li>
        <li>Punctele se acorda dupa finalizarea rezervarii si expirarea perioadei de anulare.</li>
        <li>Poti castiga puncte bonus in timpul campaniilor speciale.</li>
      </ul>
      <div className='flex items-center space-x-4 mt-4 py-4 border-t border-t-button/40'>
        <MdInfoOutline className='shrink-0 text-[23px] mt-0.5 text-button'/>
        <p className='font-medium'> Informatii importante</p>
      </div>
      <ul className='text-gray-300 list-disc  ml-8  pb-6 space-y-4 marker:text-button'>
        <li>Punctele nu pot fi transferate si nu pot fi preschimbate in ban.</li>
        <li>Punctele au o valabilitate de 24 de luni de la data acumularii.</li>
        <li>Termenii si conditiile complete ale programului sunt disponibili <Link className='text-button'>aici</Link>.</li>
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

export default ArticoleFidelitate
