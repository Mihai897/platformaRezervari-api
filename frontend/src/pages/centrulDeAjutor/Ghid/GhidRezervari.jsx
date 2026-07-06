import React from 'react'
import { GoArrowLeft } from "react-icons/go";
import { MdInfoOutline } from "react-icons/md";

import { Link, useNavigate } from 'react-router-dom';

const GhidRezervari = () => {
  
  return (
    <div className='flex-1 bg-button1 px-5 py-4 rounded-lg shadow-lg border border-button/10'>
        <Link to="/centrul-ajutor" className='flex items-center text-button space-x-2 '>
          <GoArrowLeft className='mt-0.5'/>
          <p className=''>Inapoi la centrul de ajutor</p>
        </Link>
      
      <div className='mt-4 space-y-4 border-b border-b-button/50 pb-6'>
        <p className='font-medium text-[20px]'>1. Cauta destinatia dorita</p>
        <p className='text-gray-300'>In bara de cautare de pe pagina principala, introdu numele orasului, regiunii sau hotelului dorit. Poti folosi sugestiile automate pentru a gasi mai rapid locatia potrivita.</p>

        <div className='flex items-center space-x-3 px-5 py-2.5 bg-button/20 rounded-2xl w-[80%] max-modf6:w-full'>
          <MdInfoOutline className='text-[23px] shrink-0 mt-0.5 text-button'/>
          <p className='text-gray-300'><span className='text-button'>Sfat:</span> Fii cat mai specific in cautare pentru a obtine rezultate relevante</p>
        </div>
        <p className='text-gray-300'>Dupa introducerea destinatiei, selecteaza datele de check-in si check-out, precum si numarul de persoane.</p>
      </div>




      <div className='mt-4  border-b border-b-button/50 pb-6'>
        <p className='font-medium text-[20px]'>2. Alege unitatea de cazare</p>

        <p className='text-gray-300 mt-4'>Dupa efectuarea cautarii, vei vedea o lista de rezultate disponibile. Poti filtra hotelurile in functie de:</p>

        <ul className='text-gray-300 list-disc ml-8 marker:text-button mt-2'>
          <li>Pret</li>
          <li>Rating</li>
          <li>Facilitati</li>
          <li>Tipul unitatii</li>
        </ul>

        <p className='text-gray-300 mt-4'>Apasa pe un hotel pentru a vedea mai multe detalii, imagini, facilitati si recenzii de la alti utilizatori.</p>
      </div>




      <div className='mt-4  border-b border-b-button/50 pb-6'>
        <p className='font-medium text-[20px]'>3. Completeaza detaliile rezervarii.</p>
        <p className='text-gray-300 mt-4'>Dupa ce ai ales hotelul, apasa pe butonul "Rezerva". Va trebui sa completezi urmatoarele informatii:</p>
        <ul className='text-gray-300 list-disc ml-8 marker:text-button mt-2 columns-2'>
          <li>Nume si prenume</li>
          <li>Adresa de email</li>
          <li>Numar de telefon</li>
          <li>Tara de rezidenta</li>
          <li>Orice cerinte speciale (optional)</li>
        </ul>
        <div className='flex items-center space-x-3 px-5 py-2.5 bg-button/20 rounded-2xl w-[80%] max-modf6:w-full mt-4'>
          <MdInfoOutline className='text-[23px] shrink-0 mt-0.5 text-button'/>
          <p className='text-gray-300'><span className='text-button'>Important: </span> Verifica atent toate detaliile inainte de a continua catra plata.</p>
        </div>
      </div>



      <div className='mt-4 border-b border-b-button/50 pb-6'>
        <p className='font-medium text-[20px]'>4. Efectueaza plata</p>
        <p className='text-gray-300 mt-4'>Selecteaza metoda de plata dorita si introdu datele necesare.</p>

        <p className='text-gray-300'>Platforma noastra foloseste sisteme de plata securizate, astfel incat informatiile tale sunt protejate.</p>
        <p className='mt-4'>Metode de plata disponibile:</p>
        <ul className='list-disc ml-8 mt-2 marker:text-button text-gray-300'>
          <li>Card bancar</li>
          <li>PayPal</li>
          <li>Apple Pay</li>
          <li>Google Pay</li>
          <li>Transfer bancar</li>
        </ul>
      </div>




      <div className='mt-4  pb-3'>
        <p className='font-medium text-[20px]'>5. Confirmarea rezervarii</p>
        <p className='mt-4 text-gray-300'>Dupa finalizarea platii, rezervarea ta va fi procesata automat.</p>
        <p className='text-gray-300'>Vei primi un email de confirmare care contine toate detaliile rezervarii tale, inclusiv:</p>
        <ul className='text-gray-300 list-disc mt-2 ml-8 marker:text-button'>
          <li>Numele hotelului</li>
          <li>Datele sejurului</li>
          <li>Numarul de confirmare</li>
          <li>Detaliile camerei</li>
          <li>Politica de anulare</li>
        </ul>

        <div className='flex  space-x-3 px-5 py-2.5 bg-button/20 rounded-2xl w-[80%] max-modf6:w-full mt-4'>
          <MdInfoOutline className='shrink-0 text-[23px] mt-0.5 text-button'/>
          <p className='text-gray-300'><span className='text-button'>Bine de stiut:</span> Poti accesa oricand rezervarea din contul tau, in sectiunea "Rezervarile mele". De acolo o poti vizualiza sau anula (daca este permis).</p>
        </div>
      </div>

      
      
    </div>
  )
}

export default GhidRezervari
