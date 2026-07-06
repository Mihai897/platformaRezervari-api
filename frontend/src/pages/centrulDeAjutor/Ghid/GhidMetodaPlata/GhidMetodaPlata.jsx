import React from 'react'
import { GoArrowLeft } from 'react-icons/go'
import { MdInfoOutline } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { SiMastercard } from "react-icons/si";
import { RiVisaLine } from "react-icons/ri";

const GhidMetodaPlata = () => {
  return (
    <div className='flex-1 bg-button1 px-5 py-4 rounded-lg shadow-lg border border-button/10'>
      <Link to="/centrul-ajutor" className='flex items-center text-button space-x-2 '>
        <GoArrowLeft className='mt-0.5'/>
        <p className=''>Inapoi la centrul de ajutor</p>
      </Link>

      <p className='text-gray-300 mt-4'>Iti oferim mai multe metode de plata sigure si rapide, pentru ca tu sa alegi varianta care ti se potriveste cel mai bine.</p>
      <p className='text-gray-300 mb-4'>Toate platile sunt procesate in siguranta prin partenerii nostri autorizati.</p>

      <div className='border-t py-6 border-t-button/50'>
        <p className='font-medium text-[20px]'>1. Card bancar (Visa, Mastercard)</p>
        <div className='flex items-center max-modf2:flex-col max-modf2:items-start mt-2 max-modf2:space-y-3 modf2:space-x-6'>
          <div className='px-10 py-5 rounded-lg border max-modf2:mx-auto  border-button space-x-2 flex bg-button/10 text-[45px]'>
            <RiVisaLine className=' text-gray-300 shrink-0'/>
            <SiMastercard className='shrink-0 text-red-300'/>
          </div>
          <div className='text-gray-300'>
            <p>Plata cu cardul este cea mai rapida si securizata metoda disponibila pe platforma noastra.</p>
            <ul className='text-gray-300 list-disc mt-2 ml-8 marker:text-button'>
              <li>Acceptam toate cardurile Visa si Mastercard.</li>
              <li>Plata se proceseaza instant.</li>
              <li>Nu se percep comisioane suplimentare.</li>
              <li>Datele cardului tau sunt protejate.</li>
            </ul>
          </div>
        </div>

        <div className='flex space-x-3 px-5 py-2.5 bg-button/20 rounded-2xl w-[80%] max-modf6:w-full mt-4'>
          <MdInfoOutline className='shrink-0 text-[23px] mt-0.5 text-button'/>
          <p className='text-gray-300'><span className='text-button'>Important:</span> Asigura-te ca datele cardului sunt introduse corect. Dupa finalizarea platii, vei primi un email de confirmare.</p>
        </div>
      </div>

      
      <div className='border-t py-6 border-t-button/50'>
        <p className='font-medium text-[20px]'>2. PayPal</p>
        <div >
          <div className='text-gray-300'>
            <p>Plateste rapid si in siguranta folosind contul tau PayPal.</p>
            <ul className='text-gray-300 list-disc mt-2 ml-8 marker:text-button'>
              <li>Nu este nevoie sa introduci datele cardului.</li>
              <li>Plata este procesata in doar cateva secunde.</li>
              <li>Redirectionarea catre PayPal se face intr-un mediu securizat.</li>
              
            </ul>
          </div>
        </div>

        <div className='flex  space-x-3 px-5 py-2.5 bg-button/20 rounded-2xl w-[80%] max-modf6:w-full mt-4'>
          <MdInfoOutline className='shrink-0 text-[23px] mt-0.5 text-button'/>
          <p className='text-gray-300'><span className='text-button'>Important:</span> Trebuie sa fii autentificat in contul tau PayPal pentru a finaliza plata.</p>
        </div>
      </div>


      <div className='border-t py-6 border-t-button/50'>
        <p className='font-medium text-[20px]'>3. Apple Pay</p>
        <div >
          <div className='text-gray-300'>
            <p>Disponibil pentru utilizatorii dispozitivelor Apple.</p>
            <ul className='text-gray-300 list-disc mt-2 ml-8 marker:text-button'>
              <li>Plata rapida cu Face ID, Touch ID sau cod de acces.</li>
              <li>Informatiile tale de plata nu sunt stocate pe dispozitiv.</li>
              <li>Acceotat in aplicatiile compatibile.</li>
              
            </ul>
          </div>
        </div>

        <div className='flex  space-x-3 px-5 py-2.5 bg-button/20 rounded-2xl w-[80%] max-modf6:w-full mt-4'>
          <MdInfoOutline className='shrink-0 text-[23px] mt-0.5 text-button'/>
          <p className='text-gray-300'><span className='text-button'>Important:</span> Asigura-te ca dispozitivul tau este compatibil si ca ai activat Apple Pay.</p>
        </div>
      </div>


      <div className='border-t py-6 border-t-button/50'>
        <p className='font-medium text-[20px]'>4. Google Pay</p>
        <div >
          <div className='text-gray-300'>
            <p>O metoda rapida si sigura pentru utilizatorii Android.</p>
            <ul className='text-gray-300 list-disc mt-2 ml-8 marker:text-button'>
              <li>Plata cu amprenta, cod PIN sau model de deblocare.</li>
              <li>Datele cardului sunt protejate si nu sunt partajate cu comerciantii.</li>
              <li>Acceptat pe Chrome si in aplicatiile compatibile.</li>
              
            </ul>
          </div>
        </div>

        <div className='flex  space-x-3 px-5 py-2.5 bg-button/20 rounded-2xl w-[80%] max-modf6:w-full mt-4'>
          <MdInfoOutline className='shrink-0 text-[23px] mt-0.5 text-button'/>
          <p className='text-gray-300'><span className='text-button'>Important:</span> Asigura-te ca ai un cont Google activ si ca ai adaugat un card.</p>
        </div>
      </div>


      <div className='border-t py-6 border-t-button/50'>
        <p className='font-medium text-[20px]'>5. Transfer bancar</p>
        <div >
          <div className='text-gray-300'>
            <p>Disponibil pentru rezervari mai mari sau la cererea utilizatorului.</p>
            <ul className='text-gray-300 list-disc mt-2 ml-8 marker:text-button'>
              <li>Vei primi detaliile contului nostru bancar dupa confirmarea rezervarii.</li>
              <li>Plata trebuie efectuata in termen de 48 de ore pentru a confirma rezervarea.</li>
              <li>Dupa verificarea platii, rezervarea ta va fi confirmata..</li>
              
            </ul>
          </div>
        </div>

        <div className='flex  space-x-3 px-5 py-2.5 bg-button/20 rounded-2xl w-[80%] max-modf6:w-full mt-4'>
          <MdInfoOutline className='shrink-0 text-[23px] mt-0.5 text-button'/>
          <p className='text-gray-300'><span className='text-button'>Important:</span> Te rugam sa mentionezi numarul rezervarii in detaliile transferului.</p>
        </div>
      </div>
      
      <div className='border-t py-6 border-t-button/50'>
        <p className='font-medium text-[20px]'>Informatii importante</p>
        <ul className='text-gray-300 list-disc mt-2 ml-8 marker:text-button'>
          <li>Toate tranzactiile sunt procesate in lei (RON).</li>
          <li>Este posibil ca banca ta sa aplice un comision de conversie valutara.</li>
          <li>Daca intampini probleme de plata, contacteaza echipa noastra de suport.</li>
          <li>Nu stocam datele carduli tau. Securitatea informatiilor tale este prioritatea noastra.</li>
        </ul>
      </div>

    </div>
  )
}

export default GhidMetodaPlata
