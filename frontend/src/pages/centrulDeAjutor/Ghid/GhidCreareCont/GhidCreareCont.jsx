import React from 'react'
import { GoArrowLeft } from 'react-icons/go'
import { MdInfoOutline } from 'react-icons/md'
import { Link } from 'react-router-dom'

const GhidCreareCont = () => {
  return (
    <div className='flex-1 bg-button1 px-5 py-4 rounded-lg shadow-lg border border-button/10'>
      <Link to="/centrul-ajutor" className='flex items-center text-button space-x-2 '>
        <GoArrowLeft className='mt-0.5'/>
        <p className=''>Inapoi la centrul de ajutor</p>
      </Link>

      
      <p className='text-gray-300 my-4'>Urmareste pasii de mai jos pentru a-ti crea contul personal. <br/> Procesul dureaza doar cateva minute.</p>
      
      <div className='border-t py-6 border-t-button/50'>
        <p className='font-medium text-[20px]'>1. Acceseaza pagina de inregistrare</p>
        <p className='text-gray-300'>Ai mai multe optiuni pentru a incepe crearea contului:</p>
        <ul className='text-gray-300 list-disc mt-2 ml-8 marker:text-button'>
          <li>Apasa pe butonul "Contul meu" din coltul din dreapta sus al paginii.</li>
          <li>In pagina de autentificare, apasa pe "Creeaza cont".</li>
          <li>Poti folosi si optiunea "Inregistreaza-te" din meniul principal.</li>
        </ul>
      </div>

      <div className='border-t py-6 border-t-button/50'>
        <p className='font-medium text-[20px]'>2. Completeaza formularul de inregistrare</p>
        <p className='text-gray-300'>Completeaza campurile obligatorii din formular cu informatiile tale:</p>
        <ul className='text-gray-300 list-disc mt-2 ml-8 marker:text-button'>
          <li><span className='text-white'>Nume complet</span> - Introdu numele si prenumele tau.</li>
          <li><span className='text-white'>Adresa de email</span> - Foloseste o adresa de email valida.</li>
          <li><span className='text-white'>Parola</span> - Alege o parola sigura (minimum 8 caractere, cu litere mari, mici, cifre si simboluri).</li>
          <li><span className='text-white'>Confirma parola</span> - Introdu din nou parola pentru a te asigura ca este corect.</li>
          
        </ul>
        
      </div>


      <div className='border-t py-6 border-t-button/50'>
        <p className='font-medium text-[20px]'>3. Accepta termenii si conditiile</p>
        <p className='text-gray-300'>Bifeaza casuta de confirmare pentru a accepta Termenii si Conditiile si Politica de Confidentialitate..</p>
       <div className='flex  space-x-3 px-5 py-2.5 bg-button/20 rounded-2xl w-[90%] max-modf6:w-full mt-4'>
          <input type="checkbox" />
          <p className='text-gray-300'>Am citit si sunt de acord cu <span className='text-button underline'>Termenii si Conditiile</span> si <span className='text-button underline'>Politica de Confidentialitate.</span></p>
        </div>
        
      </div>

      <div className='border-t py-6 border-t-button/50'>
        <p className='font-medium text-[20px]'>4. Finalizeaza crearea contului</p>
        <p className='text-gray-300'>Apasa pe butonul "Creaza cont". Vei primi un email de confirmare pentru a activa contul.</p>
        <div className='flex  space-x-3 px-5 py-2.5 bg-button/20 rounded-2xl w-[90%] max-modf6:w-full mt-4'>
            <MdInfoOutline className='shrink-0 text-[23px] mt-0.5 text-button'/>
            <p className='text-gray-300'><span className='text-button'>Important:</span> Contul nostru nu va fi activ pana cand nu confirmi adresa de email.</p>
          </div>
        
      </div>

      <div className='border-t py-6 border-t-button/50'>
        <p className='font-medium text-[20px]'>5. Conecteaza-te si bucura-te de benefii</p>
        <p className='text-gray-300'>Dupa confirmarea emailului, te poti conecta in contul tau folosind adresa de email si parola. <br/> Odata autentificat, vei avea acces la toate avantajele:</p>
        <ul className='text-gray-300 list-disc mt-2 ml-8 marker:text-button'>
          <li>Salvezi rezervarile si le gestionezi usor</li>
          <li>Primesti oferte exclusive pentru membri</li>
          <li>Salvezi hotelurile preferate</li>
          <li>Accesezi istoricul rezervarilor</li>
          <li>Primesti puncte in programul de fidelitate</li>
        </ul>
        <div className='flex  space-x-3 px-5 py-2.5 bg-button/20 rounded-2xl w-[90%] max-modf6:w-full mt-4'>
            <MdInfoOutline className='shrink-0 text-[23px] mt-0.5 text-button'/>
            <p className='text-gray-300'><span className='text-button'>Sfat:</span> Completeaza-ti profilul dupa crearea contului pentru o  experienta personalizata. <br/> Poti adauga date de contact, preferinte si informatii despre calatorii.</p>
          </div>
        
      </div>
    </div>
  )
}

export default GhidCreareCont
