import React from 'react'
import { GoArrowLeft } from 'react-icons/go'
import { Link } from 'react-router-dom'

const GhidIntrebariPlati = () => {
  return (
    <div className='flex-1 bg-button1 px-5 py-4 rounded-lg shadow-lg border border-button/10'>
      <Link to="/centrul-ajutor" className='flex items-center text-button space-x-2 '>
        <GoArrowLeft className='mt-0.5'/>
        <p className=''>Inapoi la centrul de ajutor</p>
      </Link>

      
      <p className='text-gray-300 my-4'>Am pregatit aceasta sectiune pentru a-ti oferi claritate si incredere atunci cand efectuezi plati pe platforma noastra. Daca nu gasesti raspunsul pe care il cauti, contacteaza-ne oricand.</p>
      
      <div className='border-t py-6 border-t-button/50'>
        <p className='font-medium text-[20px]'>1. Ce metode de plata sunt acceptate?</p>
        
        <ul className='text-gray-300  mt-2'>
          <li>Acceptam principalele metode de plata online, inclusiv carduri bancare (Visa, Mastercard) si alte optiuni disponibile in functie de locatie.</li>
          <li>In timpul procesului de rezervare vei vedea toate metodele disponibile pentru hotelul ales.</li>
          
        </ul>
      </div>

      <div className='border-t py-6 border-t-button/50'>
        <p className='font-medium text-[20px]'>2. Este sigur sa platesc online?</p>
        
        <ul className='text-gray-300  mt-2 '>
          <li>Da, toate tranzactiile sunt securizate folosind tehnologii moderne de criptare (SSL).</li>
          <li>Nu stocam datele cardului tau pe platforma, iar platile sunt procesate prin parteneri certificati, conform standardelor internationale de securitate.</li>
          
        </ul>
        
      </div>


      <div className='border-t py-6 border-t-button/50'>
        <p className='font-medium text-[20px]'>3. Cand sunt taxati banii pentru rezervare?</p>
        
        <ul className='text-gray-300 mt-2'>
          <li>In majoritatea cazurilor, plata este procesata imediat dupa confirmarea rezervarii.</li>
          <li>Totusi, unele unitati de cazare permit plata la locatie sau rezervari fara plata imediata..</li>
          <li>Informatia este specificata clar inainte de finalizarea rezervarii.</li>
          
        </ul>
        
      </div>

      <div className='border-t py-6 border-t-button/50'>
        <p className='font-medium text-[20px]'>4. Pot plati la hotel?</p>
        
        <ul className='text-gray-300  mt-2 '>
          <li>Depinde de politica hotelului selectat. Unele unitati ofera optiunea de plata la locatie, in timp ce altele necesita plata online in avans.</li>
          <li>Vei putea vedea optiunea disponibila in pagina de rezervare, inainte de confirmare.</li>
          
          
        </ul>
        
      </div>

      <div className='border-t py-6 border-t-button/50'>
        <p className='font-medium text-[20px]'>5. Ce fac daca plata a fost respinsa?</p>
        
        <ul className='text-gray-300  mt-2 '>
          <li>Verifica daca datele cardului sunt introduse corect si daca ai suficinete fonduri disponibile.</li>
          <li>Daca problema persista, incearca o alta metoda de plata sau contacteaza banca ta pentru mai multe detalii.</li>
          <li>Daca eroarea continua, te rugam sa contactezi echipa noastra de suport.</li>
          
        </ul>
        
      </div>

      <div className='border-t py-6 border-t-button/50'>
        <p className='font-medium text-[20px]'>6. Pot primi o factura pentru plata?</p>
        
        <ul className='text-gray-300  mt-2 '>
          <li>Da, dupa finalizarea rezervarii vei primi automat un email de confirmare care include detaliile platii.</li>
          <li>Pentru facturi in format PDF sau informatii suplimentare, acceseaza sectiunea "Rezervarile mele" sau contacteaza suportul nostru.</li>
          <li></li>
          
        </ul>
        
      </div>


      <div className='border-t py-6 border-t-button/50'>
        <p className='font-medium text-[20px]'>7. Pot salva datele cardului pentru plati viitoare?</p>
        
        <ul className='text-gray-300  mt-2 '>
          <li>Da, poti salva cardul in contul tau pentru a face plati mai rapide si mai usor in viitor.</li>
          <li>Datele cardului sunt stocate in siguranta si nu sunt accesibile altor utilizatori.</li>
          <li></li>
          
        </ul>
        
      </div>

      <div className='border-t py-6 border-t-button/50'>
        <p className='font-medium text-[20px]'>8. Ce se intampla in caz de anulare?</p>
        
        <ul className='text-gray-300  mt-2 '>
          <li>Rambursarea depinde de politica de anulare a unitatii de cazare si de tipul tarifului ales.</li>
          <li>Daca anularea este gratuita, suma va fi returnata in contul tau in cateva zile lucratoare, in functie de banca emitenta si metoda de plata utilizata.</li>
          <li>Pentru mai multe detalii, consulta Politica de anulare sau contacteaza suportul.</li>
          
        </ul>
        
      </div>
    </div>
  )
}

export default GhidIntrebariPlati
