import React from 'react'
import { GoArrowLeft } from 'react-icons/go'
import { MdInfoOutline } from 'react-icons/md'
import { Link } from 'react-router-dom'

const GhidModificareRezervare = () => {
  return (
    <div className='flex-1 bg-button1 px-5 py-4 rounded-lg shadow-lg border border-button/10'>
      <Link to="/centrul-ajutor" className='flex items-center text-button space-x-2 '>
        <GoArrowLeft className='mt-0.5'/>
        <p className=''>Inapoi la centrul de ajutor</p>
      </Link>

      <p className='mt-4 text-gray-300'>In functi de politica unitatii de cazare si tipul tarifului ales, este posibil sa poti modifica anumite detalii ale rezervarii tale. Unele modificari pot fi gratuite, in timp ce altele pot implica costuri suplimentare..</p>
      <p className='text-gray-300 mb-4'>Verifica intotdeauna conditiile rezervarii inainte de a efectua modificarile.</p>
      
      <div className='border-t py-6 border-t-button/50'>
        <p className='font-medium text-[20px]'>1. Acceseaza rezervarea ta</p>
        <p className='text-gray-300'>Pentru a modifica o rezervare, trebuie mai intai sa o gasesti in contul tau.</p>
        <ul className='text-gray-300 list-disc mt-2 ml-8 marker:text-button'>
          <li>Intra in contul tau.</li>
          <li>Mergi in sectiunea "Rezervarile mele".</li>
          <li>Selecteaza rezervarea pe care doresti sa o modfici.</li>
        </ul>
      </div>

      <div className='border-t py-6 border-t-button/50'>
        <p className='font-medium text-[20px]'>2. Verifica ce poate fi modificat</p>
        <p className='text-gray-300'>Nu toate rezervarile pot fi modificate. In pagina rezervarii, vei vedea ce elemente pot fi schimbate.</p>
        <p className='text-gray-300'>Cele mai frecvente modficari disponibile sunt:</p>
        <ul className='text-gray-300 list-disc mt-2 ml-8 marker:text-button'>
          <li>Datele sejurului: Check-in / Check-out</li>
          <li>Numarul de personae: Adulti / Copii</li>
          <li>Tipul camerei</li>
          <li>Servicii suplimentare: Mic dejun, parcare, etc</li>
          
        </ul>

        <div className='flex  space-x-3 px-5 py-2.5 bg-button/20 rounded-2xl w-[90%] max-modf6:w-full mt-4'>
            <MdInfoOutline className='shrink-0 text-[23px] mt-0.5 text-button'/>
            <p className='text-gray-300'><span className='text-button'>Important:</span> Tarifele nerambursabile au optiuni de modificare limitate sau deloc.<br></br> Verifica termenii si conditiile rezervarii tale.</p>
          </div>
        
      </div>


      <div className='border-t py-6 border-t-button/50'>
        <p className='font-medium text-[20px]'>3. Modifica detaliile dorite</p>
        <p className='text-gray-300'>Dupa ce ai deschis rezervarea, apasa butonul "Modifica rezervarea".</p>
        <ul className='text-gray-300 list-disc mt-2 ml-8 marker:text-button'>
          <li>Selecteaza noua data de check-in si check-out (daca este cazul).</li>
          <li>Modifica numarul de personae sau tipul camerei.</li>
          <li>Adauga sau elimina servicii suplimentare, daca este disponibil.</li>
          <li>Apasa "Continua" pentru a vedea noile optiuni si eventualele diferente de pret.</li>
          
        </ul>
        
        <div className='flex  space-x-3 px-5 py-2.5 bg-button/20 rounded-2xl w-[90%] max-modf6:w-full mt-4'>
            <MdInfoOutline className='shrink-0 text-[23px] mt-0.5 text-button'/>
            <p className='text-gray-300'><span className='text-button'>Nota:</span> Daca exista o diferenta de pret, aceasta va fi afisata inainte de confirmarea modificarii. Poti avea de plata sau poti primi un credit in functie de caz.</p>
          </div>
      </div>

      <div className='border-t py-6 border-t-button/50'>
        <p className='font-medium text-[20px]'>4. Confirma modificarea</p>
        <p className='text-gray-300'>Verifica toate noile detalii si, daca sunt corecte, apasa "Confirma modificarea".</p>
        <ul className='text-gray-300 list-disc mt-2 ml-8 marker:text-button'>
          <li>Vei primi imediat un email de confirmare cu noile detalii ale rezervarii tale.</li>
          <li>Anularea rezervarii initiale si emiterea celei noi se fac automat.</li>
          <li>Plata suplimentara (daca este cazul) se proceseaza securizat.</li>
          
        </ul>

        
        
      </div>

      <div className='border-t py-6 border-t-button/50'>
        <p className='font-medium text-[20px]'>5. Cand nu poti modifica o rezervare?</p>
        <p className='text-gray-300'>In urmatoarele situatii, rezervarea nu poate fi modificata online:</p>
        <ul className='text-gray-300 list-disc mt-2 ml-8 marker:text-button'>
          <li>Tariful este nerambursabil si nu permite modificar;</li>
          <li>Rezervarea a fost facuta printr-o agentie terta;</li>
          <li>Modificarea se solicita dupa data limita de modificare stabilita de hotel.</li>
          
        </ul>

        <div className='flex  space-x-3 px-5 py-2.5 bg-button/20 rounded-2xl w-[90%] max-modf6:w-full mt-4'>
          <MdInfoOutline className='shrink-0 text-[23px] mt-0.5 text-button'/>
          <p className='text-button'>In aceste cazuri, te rugam sa ne contactezi si echipa noastra te va ajuta cu solutii alternative.</p>
        </div>
        
      </div>
    </div>
  )
}

export default GhidModificareRezervare
