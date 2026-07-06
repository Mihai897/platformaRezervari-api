import React from 'react'
import { BiSolidDislike, BiSolidLike } from 'react-icons/bi'
import { GoArrowLeft } from 'react-icons/go'
import { MdInfoOutline } from 'react-icons/md'
import { Link, useOutletContext } from 'react-router-dom'

const ArticoleMetodaPlata = () => {
  const {title} = useOutletContext()
  return (
    <div className='flex-1 bg-button1 px-5 py-4 rounded-lg shadow-lg border border-button/10'>
      <Link to="/centrul-ajutor" className='flex items-center text-button space-x-2 '>
        <GoArrowLeft className='mt-0.5'/>
        <p className=''>Inapoi la centrul de ajutor</p>
      </Link>
      <div className='mt-2 border-b pb-4 border-b-button/40'>
        <p className='font-medium text-[20px]'>{title}?</p>
        <p className='text-gray-300'>Ne dorim sa iti oferim flexibilitate si siguranta cand vine vorba de plati. De aceea, acceptam mai multe metode de plata pentru a-ti face experienta cat mai simpla si convenabila.</p>
        
      </div>
      <p className='font-medium mt-4'>Metode de plata acceptate</p>
      <ul className='text-gray-300 list-disc py-4 ml-8 space-y-4 marker:text-button'>
        <li><span className='text-white'>Card bancar</span><p>Acceptam toate cardurile majore: Visa, Mastercard. Plata securizata prin procesatorii nostri autorizati.</p></li>
        <li><span className='text-white'>Plati rapide</span><p>Poti plati rapid si in siguranta folosind Apple Pay sau Google Pay.</p></li>
        <li><span className='text-white'>PayPal</span><p>Alege PayPal pentru o plata rapida si securizata, fara a introduce datele cardului.</p></li>
        <li><span className='text-white'>Transfer bancar</span><p>Disponibil pentru anumte rezervari. Detaliile contului bancar vor fi furnizate la finalizarea rezervarii.</p></li>
        <li><span className='text-white'>Plata la proprietate</span><p>In unele cazuri, poti alege optiunea de a plati direct la proprietate (disponibila doar pentru anumite locatii).</p></li>

        

      </ul>
      <div className='flex items-center space-x-4 mt-4 py-4 border-t border-t-button/40'>
        <MdInfoOutline className='shrink-0 text-[23px] mt-0.5 text-button'/>
        <p className='font-medium'> Informatii importante</p>
      </div>
      <ul className='text-gray-300 list-disc  ml-8  pb-6 space-y-4 marker:text-button'>
        <li>Toate platile sunt procesate in siguranta.</li>
        <li>Este posibil ca unele metode de plata sa nu fie disponibile pentru anumite rezervari sau locatii.</li>
        <li>Daca ai probleme cu plata, te rugam sa contactezi echipa noastra de suport.</li>
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

export default ArticoleMetodaPlata
