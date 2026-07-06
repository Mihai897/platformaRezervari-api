import React from 'react'
import { FaEnvelopeOpen } from "react-icons/fa";
import about from './about.json';
import AboutList from './AboutList';
import About1 from './About1';
import about1 from './about1.json'
import principii from './principiile.json'
import PrincipiileList from './PrincipiileList';
const About = () => {
  const createAboutList = (component)=>{
    return <AboutList 
      id={component.id}
      key={component.id}
      icon ={component.icon}
      titlu ={component.titlu}
      info ={component.info}
      bg = {component.bg}
    />
  }

  const createAbout1List = (component)=>{
    return <About1 
      id={component.id}
      key={component.id}
      icon={component.icon}
      nr={component.nr}
      text={component.text}
    />
  }
  
  const createPrincipiileList = (component) =>{
    return <PrincipiileList 
      id ={component.id}
      key ={component.id}
      icon = {component.icon}
      nume = {component.nume}
      info={component.info}
    />
  }
   
  return (
    <div className='max-w-screen-2xl mx-auto px-15 max-modf:px-10 max-modf1:px-8 max-modf8:px-3 pt-4 '>
      
      <div className='flex justify-center '>
        <div className='w-[50%]  max-modf2:w-[80%] text-center space-y-3'>
          <p className='text-[34px]'>Experiente memorabile, <span className='text-button'>oriunde in lume</span></p>
          <p className='text-[16px] text-gray-300'>Descopera platforma noastra de rezervari si modul in care iti simplificam experienta de a gasi si rezerva cazarea ideala.</p>
        </div>
      </div>

      <ul className='pt-10 pb-4 grid md:grid-cols-4 grid-cols-1 gap-3 items-stretch'>
        
        {about && about.map(createAboutList)}

      
      </ul>

      <div className='py-4 '>
        <p className=' text-[28px] '>Misiunea Noastra:</p>
        <p className='text-[28px]'>Calatorii fara griji, rezervari fara stres</p>
        <div className='indent-10 columns-2 max-md:columns-1 gap-10  mt-4  rounded-2xl'>
          <p>Calatoriile incep cu o alegere, iar noi ne asiguram ca aceasta alegere este simpla, inspirata si lipsita de compromisuri. Platforma noastra este conceputa pentru a transforma procesul de rezervare intr-o experienta fluida, in care fiecare pas este clar, rapid si adaptat nevoilor tale.</p>
          <p>Ne concentram pe calitate si transparenta, oferindu-ti acces la descrieri detaliate, imagini relevante si recenzii verificate, astfel incat sa poti lua decizii informate, fara incertitudini.</p>
          <p>Intr-o lume in care optiunile sunt numeroase, diferenta o face modul in care sunt prezentate si organizate. De accea, am creat un sistem intuitiv care iti permite sa descoperi, sa compari si sa alegi cu usurinta dintre mii de unitati de cazare, fara sa pierzi timp sau energie.</p>
          <p>Fiecare proprietate listate pe platforma este selectata cu atentie pentru a respecta standarde ridicate de calitate si transparenta. Punem accent pe informatii reale, descrieri detaliate si imagini relevante, astfel incat tu sa stii exact la ce sa te astepti inainte de a face o rezervare.</p>
          <p>Procesul de rezervare este optimizat pentru eficienta maxima. In doar cativa pasi simpli, poti finaliza totul fara complicatii, beneficiind in acelasi timp de un nivel ridicat de scuritate si protectie a datelor.</p>
          <p>Stim ca flexibilitatea este esentiala atunci cand planurile se pot schimba. De aceea, oferim optiuni variate de anulare si modificare, acolo unde este posibil, pentru ca tu sa ai linistea necesara in orice situatie.</p>
          <p >Pe langa functionalitate, ne concentram si pe valoare. Platforma noastra iti ofera acces la oferte exclusive, reduceri actualizate constant si oportunitati reale de a economisi, fara a face compromisuri in ceea ce priveste calitatea experientei. </p>
          <p>Un alt element esential este increderea. Recenziile verificate de la alti utilizatori iti ofera o perspectiva autentica asupra fiecarei locatii, ajutandu-te sa iei decizii informate si sigure.</p>
          <p>In spatele platformei se afla o echipa dedicata care lucreaza constant pentru a imbunatati experienta utilizatorilor. Suportul nostru este disponibil si pregatit sa raspunda prompt si eficient oricarei intrebari sau situatii neprevazute.</p>
          <p>Credem ca tehnologia trebuie sa simplifice, nu sa complice. De aceea, fiecare functionalitate este gandita pentru a fi usor de folosit, indiferent de experienta ta digitala, oferindu-ti o interfata moderna si accesibila.</p>
          <p>Indiferent daca planifici o vacanta relaxant, o escapada spontana sau o calatorie de afaceri, platforma noastra este partenerul de incredere care te ajuta sa gesesti solutia potrivita, rapid si eficient.</p>
          <p>In final, scopul nostru este simplu: sa iti oferim o experienta completa, sigura si placuta, in care fiecare detaliu este gandit pentru confortul tau. Pentru ca fiecare calatorie merita sa iceapa fara stres si cu incredere.</p>
        </div>
      </div>

      

      <div className='py-4'>
        <p className='text-[24px]'>Statistici Platforma</p>

        <ul className='grid grid-cols-4 max-modf1:grid-cols-2 max-modf8:grid-cols-1 gap-8  max-modf:gap-3 items-stretch py-4'>
          {
            about1 && about1.map(createAbout1List)
          }
        </ul>
      </div>

      <div>
        <p className='text-[24px]'>Principiile care ne ghideaza</p>

        <ul className='grid grid-cols-4 max-modf8:grid-cols-1 max-modf:gap-5 gap-10 max-modf1:grid-cols-2 items-stretch pt-4'>
          {principii && principii.map(createPrincipiileList)}
        </ul>
      </div>

    </div>
  )
}

export default About
