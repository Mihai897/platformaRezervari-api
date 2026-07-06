import React from 'react'
import { GoArrowLeft } from 'react-icons/go'
import { Link } from 'react-router-dom'

const GhidSecuritate = () => {
  return (
    <div className='flex-1 bg-button1 px-5 py-4 rounded-lg shadow-lg border border-button/10'>
      <Link to="/centrul-ajutor" className='flex items-center text-button space-x-2 '>
        <GoArrowLeft className='mt-0.5'/>
        <p className=''>Inapoi la centrul de ajutor</p>
      </Link>

      <p className='mt-4 text-gray-300'>Aceasta pagina iti explica modul in care colectam, folosim si protajam datele tale personale atunci cand utilizezi platforma noastra.</p>
      
      
      <div className='border-t mt-4 py-6 border-t-button/50'>
        <p className='font-medium text-[20px]'>1. Protectia datelor tale</p>
        <p className='text-gray-300'>Folosim tehnologii moderne de securitate pentru a proteja datele tale impotriva accesului neautorizat, modificarii sau divulgarii:</p>
        <ul className='text-gray-300 list-disc mt-2 ml-8 marker:text-button'>
          <li>Toate informatiile sunt criptate in timpul transmisiei.</li>
          <li>Datele tale sunt stocate in siguranta pe servere securizate.</li>
          
        </ul>
      </div>

      <div className='border-t py-6 border-t-button/50'>
        <p className='font-medium text-[20px]'>2. Ce informatii colectam?</p>
        <p className='text-gray-300'>Colectam doar informatiile necesare pentru a-ti oferi cele mai bune servicii:</p>
        <ul className='text-gray-300 list-disc mt-2 ml-8 marker:text-button'>
          <li>Date personale: nume, email, numar de telefon</li>
          <li>Detalii de plata: procesate securizat prin parteneri autorizati ( nu stocam datele cardului).</li>
          <li>Informatii despre rezervari si preferinte.</li>
          
        </ul>
        
      </div>


      <div className='border-t py-6 border-t-button/50'>
        <p className='font-medium text-[20px]'>3. Cum folosim informatiile tale?</p>
        <p className='text-gray-300'>Utilizam datele tale exclusiv pentru:</p>
        <ul className='text-gray-300 list-disc mt-2 ml-8 marker:text-button'>
          <li>Procesarea rezervarilor si comunicarea cu tine.</li>
          <li>Imbunatatirea experientei pe platforma noastra.</li>
          <li>Trimiterea notificarilor importante despre cont si rezervari.</li>
          
        </ul>
        <p className='text-gray-300 mt-4'>Nu vindem si nu inchiriam datele tale personale catre terti.</p>
        
      </div>

      <div className='border-t py-6 border-t-button/50'>
        <p className='font-medium text-[20px]'>4. Cookie-uri</p>
        
        <ul className='text-gray-300  mt-2' >
          <li>Folosim cookie-uri pentru a personaliza continutul si pentru a analiza traficul.</li>
          <li>Poti gestiona preferintele cookie din setarile browserului tau.</li>
          <li>Afla mai multe in <Link className='text-button'>Politica de cookie-uri.</Link></li>
          
        </ul>
        
      </div>

      <div className='border-t py-6 border-t-button/50'>
        <p className='font-medium text-[20px]'>5. Confidentialitatea copiilor</p>
        
        <ul className='text-gray-300  mt-2 '>
          <li>Platforma noastra nu este destinata persoanelor sub 16 ani.</li>
          <li>Nu colectam intentionat date personale de la minori.</li>
          
          
        </ul>
        
      </div>

      <div className='border-t py-6 border-t-button/50'>
        <p className='font-medium text-[20px]'>6. Drepturile tale</p>
        <p className='mt-4 text-gray-300'>Ai dreptul sa:</p>
        <ul className='text-gray-300 list-disc mt-2 ml-8 marker:text-button'>
          <li>Accesezi, modifici sau stergi datele tale personale.</li>
          <li>Te opui prelucrarii datelor in scopuri de marketing.</li>
          <li>Soliciti o copie a datelor tale.</li>
          
        </ul>
        <p className='mt-4'>Pentru orice solicitare, ne poti contacta la <span className='text-button'>support@numesite.ro</span></p>
      </div>

      <div className='border-t py-6 border-t-button/50'>
        <p className='font-medium text-[20px]'>7. Parteneri de incredere</p>
        
        <ul className='text-gray-300  mt-2'>
          <li>Colaboram doar cu parteneri care respecta standarde stricte de securitate si confidentialitate.</li>
          <li>Acestia ne ajuta sa iti oferim servicii sigure si de calitate.</li>
          
          
        </ul>
        
      </div>

      <div className='border-t py-6 border-t-button/50'>
        <p className='font-medium text-[20px]'>8. Actualizari ale politicii</p>
        
        <ul className='text-gray-300  mt-2 '>
          <li>Politica noastra de confidentialitate poate fi actualizata periodic.</li>
          <li>Te incurajam sa revizuiesti aceasta pagina pentru a fi mereu la curent cu modificarile.</li>
          
          
        </ul>
        
      </div>
    </div>
  )
}

export default GhidSecuritate
