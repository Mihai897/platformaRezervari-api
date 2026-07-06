import React from 'react'
import { GoArrowLeft } from 'react-icons/go'
import { MdInfoOutline } from 'react-icons/md'
import { Link } from 'react-router-dom'

const GhidPoliticaAnulare = () => {
  return (
    <div className='flex-1 bg-button1 px-5 py-4 rounded-lg shadow-lg border border-button/10'>
      <Link to="/centrul-ajutor" className='flex items-center text-button space-x-2 '>
        <GoArrowLeft className='mt-0.5'/>
        <p className=''>Inapoi la centrul de ajutor</p>
      </Link>

      <p className='mt-4 text-gray-300'>Ne dorim ca experienta ta sa fie cat mai flexibile si corecta.</p>
      <p className='text-gray-300 mb-4'>De aceea, fiecare rezervare poate fi anulata in functie de tipul tarifului ales si de politica stabilita de unitatea de cazare.</p>
      
      <div className='border-t py-6 border-t-button/50'>
        <p className='font-medium text-[20px]'>1. Tipuri de tarife si conditiile de anulare</p>
        <p className='text-gray-300'>Unitatile de cazare ofera diferite tipuri de tarife, fiecare cu propriile conditii de anulare:</p>
        <ul className='text-gray-300 list-disc mt-2 ml-8 marker:text-button'>
          <li><span className='text-button'>Tarif flexibil:</span> Anulare gratuita cu pana la 24 sau 48 de ore inainte de data check-in-ului (in functie de proprietate)</li>
          <li><span className='text-button'>Tarif semi-flexibil:</span>Anulare gratuita cu pana la 7 zile inainte de data check-in-ului. Dupa aceasta perioada se poate percepe o taxa.</li>
          <li><span className='text-button'>Tarif nerambursabil:</span>Rezervarea nu poate fi anulata sau modificata. Plata efectuata nu se returneaza.</li>
        </ul>
      </div>

      <div className='border-t py-6 border-t-button/50'>
        <p className='font-medium text-[20px]'>2. Cum anulezi o rezervare</p>
        <p className='text-gray-300'>Poti anula o rezervare in doar cativa pasi simpli:</p>
        <ul className='text-gray-300 list-disc mt-2 ml-8 marker:text-button'>
          <li>Acceseaza contul tau si mergi in sectiunea "Rezervarile mele".</li>
          <li>Selecteaza rezervarea pe care doresti sa o anulezi.</li>
          <li>Verifica politica de anulare aplicabila rezervarii tale.</li>
          <li>Apasa butonul "Anuleaza rezervarea" si urmeaza pasii indicati.</li>
          <li>Vei primi un email de confirmare a anularii si, daca este cazul, detaliil rambursarii.</li>
        </ul>
        <div className='flex  space-x-3 px-5 py-2.5 bg-button/20 rounded-2xl w-[90%] max-modf6:w-full mt-4'>
          <MdInfoOutline className='shrink-0 text-[23px] mt-0.5 text-button'/>
          <p className='text-gray-300'><span className='text-button'>Important:</span> Butonul de anulare este disponibil doar daca rezervarea ta respecta conditiile stabilite de unitatea de cazare si termenul limita de anulare nu a fost depasit.</p>
        </div>
      </div>


      <div className='border-t py-6 border-t-button/50'>
        <p className='font-medium text-[20px]'>3. Rambursarea banilor</p>
        <p className='text-gray-300'>Daca rezervarea ta este eligibila pentru rambursare, aceasta se va procesa automat in termen de 3 pana la 14 zile lucratoare, in functie de metoda de plata utilizata.</p>
        <ul className='text-gray-300 list-disc mt-2 ml-8 marker:text-button'>
          <li>Rambursarea se face in aceeasi metoda de plata folosita la rezervare.</li>
          <li>Timpul de procesare poate varia in functie de banca sau furnizorul de plata.</li>
          <li>Vei primi un email de confirmare imediat ce rambursarea a fost efectuata.</li>
          
        </ul>
        <div className='flex  space-x-3 px-5 py-2.5 bg-button/20 rounded-2xl w-[90%] max-modf6:w-full mt-4'>
          <MdInfoOutline className='shrink-0 text-[23px] mt-0.5 text-button'/>
          <p className='text-gray-300'><span className='text-button'>Nota:</span> Daca plata a fost efectuata printr-un car de debit/credit, este posibil ca suma sa apara in extrasul tau dupa cateva zile, in functie de banca emitenta.</p>
        </div>
      </div>

      <div className='border-t py-6 border-t-button/50'>
        <p className='font-medium text-[20px]'>4. Situatii speciale</p>
        
        <ul className='text-gray-300 list-disc mt-2 ml-8 marker:text-button'>
          <li><span className='text-white'>Neanuntarea: </span>Daca nu te prezinti la hotel si nu anunti in avans, rezervarea este considerata "nanuntare" si nu se va efectua nicio rambursare.</li>
          <li><span className='text-white'>Modificarea rezervarii: </span>Daca doresti sa modifici datele sau detaliile rezervarii, te rugam sa verifici mai intai daca tariful ales permite modificari.</li>
          <li><span className='text-white'>Forta majora: </span>In cazul exceptionale (ex. dezastre naturale, restrictii de calatorie), te rugam sa contactezi echipa noastra de <Link className='text-button' to="/contact">suport</Link> pentru asistenta.</li>
          
        </ul>
        
      </div>
    </div>
  )
}

export default GhidPoliticaAnulare
