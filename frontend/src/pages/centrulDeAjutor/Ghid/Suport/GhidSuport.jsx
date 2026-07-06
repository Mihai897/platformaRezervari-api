import React from 'react'
import { GoArrowLeft } from 'react-icons/go'
import { MdInfoOutline } from 'react-icons/md'
import { Link } from 'react-router-dom'

const GhidSuport = () => {
  return (
    <div className='flex-1 bg-button1 px-5 py-4 rounded-lg shadow-lg border border-button/10'>
      <Link to="/centrul-ajutor" className='flex items-center text-button space-x-2 '>
        <GoArrowLeft className='mt-0.5'/>
        <p className=''>Inapoi la centrul de ajutor</p>
      </Link>

      
      
      <div className='border-t mt-4 py-6 border-t-button/50'>
        <p className='font-medium text-[20px]'>1. Cum ne poti contacta</p>
        <p className='text-gray-300'>Oferim mai multe metode de contact pentru a-ti raspunde rapid si eficient:</p>
        <ul className='text-gray-300 list-disc mt-2 ml-8 marker:text-button'>
          <li>Email: <span className='text-button'> suport@numesite.ro</span></li>
          <li>Telefon: <span className='text-button'>+40 123 456 789</span></li>
          <li>Formular de contact disponibil in platforma</li>
        </ul>
        <p className='text-gray-300 mt-4'> Iti recomandam sa incluzi cat mai multe detalii despre problema intampinata, pentru a putea primi un raspuns cat mai rapid.</p>
      </div>

      <div className='border-t py-6 border-t-button/50'>
        <p className='font-medium text-[20px]'>2. Program de suport</p>
        <p className='text-gray-300'>Echipa noastra de suport este disponibila pentru a te ajuta in urmatorul program:</p>
        <ul className='text-gray-300 list-disc mt-2 ml-8 marker:text-button'>
          <li>Luni - Vineri: 08:00 - 22:00</li>
          <li>sambata - Duminica: 10:00 - 18:00</li>
          
        </ul>
        <p className='text-gray-300'>Pentru solicitari urgente, iti recomandam sa ne contactezi telefonic.</p>
      </div>


      <div className='border-t py-6 border-t-button/50'>
        <p className='font-medium text-[20px]'>3. Cu ce te putem ajuta</p>
        <p className='text-gray-300'>Suntem aici pentru a te sprijini in orice situatie. Iata cum te putem ajuta: </p>
        <ul className='text-gray-300 list-disc mt-2 ml-8 marker:text-button'>
          <li>Probleme legate de rezervari.</li>
          <li>Intrebari despre plati sau facturi.</li>
          <li>Modificarea sau anularea unei rezervari.</li>
          <li>Probleme tehnice in aplicatie.</li>
          <li>Gestionarea contului tau.</li>
          
        </ul>
        
      </div>

      <div className='border-t py-6 border-t-button/50'>
        <p className='font-medium text-[20px]'>4. Timp de raspuns</p>
        <p>Ne straduim sa raspundem tuturor solicitarilor in cel mai scurt timp posibil:</p>
        <ul className='text-gray-300 list-disc mt-2 ml-8 marker:text-button'>
          <li>Email: in general in 24 de ore</li>
          <li>Telefon: raspuns imediat in timpul programului</li>
          
          
        </ul>
        
      </div>

      <div className='border-t py-6 border-t-button/50'>
        <p className='font-medium text-[20px]'>5. Recomandari utile</p>
        <p className='text-gray-300'>Inainte de a contacta suportul, iti recomandam sa verifici sectiunea "Centrul de ajutor", unde poti gasi raspunsuri rapide la cele mai comune intrebari.</p>
        <p className='text-gray-300'>Acest lucru te poate ajuta sa economisesti timp si sa gasesti solutia imediat.</p>
        
      </div>
    </div>
  )
}

export default GhidSuport
