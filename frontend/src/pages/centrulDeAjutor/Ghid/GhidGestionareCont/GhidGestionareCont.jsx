import React from 'react'
import { GoArrowLeft } from 'react-icons/go'
import { MdInfoOutline } from 'react-icons/md'
import { Link } from 'react-router-dom'

const GhidGestionareCont = () => {
  return (
    <div className='flex-1 bg-button1 px-5 py-4 rounded-lg shadow-lg border border-button/10'>
      <Link to="/centrul-ajutor" className='flex items-center text-button space-x-2 '>
        <GoArrowLeft className='mt-0.5'/>
        <p className=''>Inapoi la centrul de ajutor</p>
      </Link>

      <p className='mt-4 text-gray-300'>Din sectiunea "Contul meu" ai control asupra informatiilor si setarilor talee.</p>
      <p className='text-gray-300 mb-4'>Urmareste pasii de mai jos pentru a gestiona contul rapid si in siguranta.</p>
      
      <div className='border-t py-6 border-t-button/50'>
        <p className='font-medium text-[20px]'>1. Acceseaza contul tau</p>
        <p className='text-gray-300'>Pentru a gestiona contul, autentifica-te pe platforma noastra si da click pe "Contul-meu" din coltul din dreapta sus.</p>
        <div className='flex  space-x-3 px-5 py-2.5 bg-button/20 rounded-2xl w-[90%] max-modf6:w-full mt-4'>
          <MdInfoOutline className='shrink-0 text-[23px] mt-0.5 text-button'/>
          <p className='text-gray-300'><span className='text-button'>Sfat:</span> Aici vei gasi toate optiunile pentru setarile contului tau, rezervari, plati si preferinte.</p>
        </div>
      </div>

      <div className='border-t py-6 border-t-button/50'>
        <p className='font-medium text-[20px]'>2. Actualizeaza datele personale</p>
        <p className='text-gray-300'>Pentru a modifica informatiile tale personale:</p>
        <ul className='text-gray-300 list-disc mt-2 ml-8 marker:text-button'>
          <li>Mergi la "Date personale" din meniul contului.</li>
          <li>Modifica numele, emailul, numarul de telefon sau adresa.</li>
          <li>Apasa "Salveaza modificarile".</li>
          
        </ul>
        
        <div className='flex  space-x-3 px-5 py-2.5 bg-button/20 rounded-2xl w-[90%] max-modf6:w-full mt-4'>
          <MdInfoOutline className='shrink-0 text-[23px] mt-0.5 text-button'/>
          <p className='text-gray-300'><span className='text-button'>Nota:</span> Unele informatii (ex. emailul) pot necesita confirmarea prin email pentru a fi actualizate.</p>
        </div>
      </div>


      <div className='border-t py-6 border-t-button/50'>
        <p className='font-medium text-[20px]'>3. Schimba parola</p>
        <p className='text-gray-300'>Pentru a-ti mentine contul in siguranta, schimba parola periodic.</p>
        <ul className='text-gray-300 list-disc mt-2 ml-8 marker:text-button'>
          <li>Acceseaza "Securitate".</li>
          <li>Introdu parola curenta.</li>
          <li>Alege o parola noua (minim 8 caractere, cu litere, cifre si simboluri).</li>
          <li>Apasa pe "Salveaza" si confirma noua parola.</li>
          
        </ul>

        <div className='flex  space-x-3 px-5 py-2.5 bg-button/20 rounded-2xl w-[90%] max-modf6:w-full mt-4'>
          <MdInfoOutline className='shrink-0 text-[23px] mt-0.5 text-button'/>
          <p className='text-gray-300'><span className='text-button'>Sfat:</span> Evita parolele usor de ghicit si nu le partaja cu alte persoane.</p>
        </div>
        
      </div>

      <div className='border-t py-6 border-t-button/50'>
        <p className='font-medium text-[20px]'>4. Gestioneaza metodele de plata</p>
        <p className='text-gray-300'>Alege cum doresti sa fii notificat despre rezervarile si contul tau.</p>
        <ul className='text-gray-300 list-disc mt-2 ml-8 marker:text-button'>
          <li>Mergi la "Metode de plata".</li>
          <li>Adauga un card nou sau editeaza unul existent..</li>
          <li>Seteaza cardul preferat pentru plati rapide.</li>
          
        </ul>

        <div className='flex  space-x-3 px-5 py-2.5 bg-button/20 rounded-2xl w-[90%] max-modf6:w-full mt-4'>
          <MdInfoOutline className='shrink-0 text-[23px] mt-0.5 text-button'/>
          <p className='text-gray-300'><span className='text-button'>Important:</span> Cardurile sunt salvate in siguranta si nu sunt partajate cu terti.</p>
        </div>
        
      </div>

      <div className='border-t py-6 border-t-button/50'>
        <p className='font-medium text-[20px]'>5. Configureaza notificarile</p>
        <p className='text-gray-300'>Alege cum doresti sa fii notificat despre rezervari si contul tau.</p>
        <ul className='text-gray-300 list-disc mt-2 ml-8 marker:text-button'>
          <li>Acceseaza "Notificari".</li>
          <li>Alege preferintele pentru email si SMS.</li>
          <li>Salveaza setarile tale.</li>
          
        </ul>
        <div className='flex  space-x-3 px-5 py-2.5 bg-button/20 rounded-2xl w-[90%] max-modf6:w-full mt-4'>
            <MdInfoOutline className='shrink-0 text-[23px] mt-0.5 text-button'/>
            <p className='text-gray-300'><span className='text-button'>Sfat:</span> Poti dezactiva oricand notificarile pe care nu doresti sa le primesti.</p>
          </div>
        
      </div>

      <div className='border-t py-6 border-t-button/50'>
        <p className='font-medium text-[20px]'>6. Sterge contul (optional)</p>
        <p className='text-gray-300'>Daca nu mai doresti sa folosesti platforma noastra, poti solicita stergerea contului.</p>
        <ul className='text-gray-300 list-disc mt-2 ml-8 marker:text-button'>
          <li>Acceseaza "Securitatea".</li>
          <li>Da click pe "Solicita stergerae contului".</li>
          <li>Confirma solicitarea din emailul primit.</li>
          
        </ul>
        
      </div>
    </div>
  )
}

export default GhidGestionareCont
