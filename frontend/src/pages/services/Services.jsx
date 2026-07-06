import React from 'react'
import ServicesList from './ServicesList'
import services from './services.json'
import { Link } from 'react-router-dom';
const Services = () => {
  const createServicesList = (component) =>{
    return <ServicesList 
      id = {component.id}
      key = {component.id}
      icon = {component.icon}
      name = {component.name}
      info = {component.info}
    />
  }
  return (
    <div className='text-white'>

      <div className='max-w-screen-2xl mx-auto px-15 max-modf:px-10 max-modf1:px-8 py-4 max-modf8:px-3'>
        <div className='flex justify-center'>
          <div className='text-center w-[50%] max-modf2:w-[80%]'>
            <p className='text-[34px]'>Serviciile oferite de platforma</p>
            <p className='text-gray-300  mt-4'>Platforma noastra ofera un set complet de servicii dedicate rezervarilor de cazare, menite sa simplifice procesul de cautare, comparare si selectare a celor mai potrivite optiuni..</p>
          </div>
        </div>

        <ul className='grid grid-cols-4 gap-4 max-modf1:grid-cols-2 max-modf8:grid-cols-1 items-stretch pt-8 pb-4'>
          {services && services.map(createServicesList)}
        </ul>

        <div>
          <p className='text-[24px] pb-4'>Cum functioneaza serviciile noastre</p>
          <div className='indent-10'>
            <p>Planificarea unei calatorii poate deveni rapid coplesitoare atunci cand trebuie sa compari zeci de optiuni, preturi si platforme. De aceea, am creat o solutie completa care iti simplifica fiecar pas, de la cautare pana la rezervare.</p>
            <p>
              Platforma noastra iti ofera acces la o gama variata de cazari, atent selectate, astfel incat sa gasesti rapid optiunea potrivita pentru stilul si bugetul tau. Fie ca iti doresti un hotel confortabil, un apartament modern sau o experienta autentica intr-o pensiune, ai toate optiunile intr-un singur loc, usor de comparat.
            </p>
            <p>Cu ajutorul sistemului de cautare avansata, poti filtra rezultatele in functie de criterii relevante pentru tine: pret, locatie, facilitati, tipul de cazare sau recenziile altor utilizatori. Astfel, economisesti timp si iei decizii mai rapide fara compromisuri.</p>
            <p>Procesul de rezervare este gandit pentru viteza si simplitate. In doar cativa pasi, poti finaliza rezervarea si primi confirmarea instant, fara proceduri complicate sau costuri ascunse. Totul este transparent, astfel incat sa stii exact pentru ce platesti. In plus, ai acces constant la oferte speciale si reduceri exclusive, actualizate in timp real.</p>
            <p>Pentru a te ajuta sa faci alegerea potrivita, iti punem la dispozitie recenzii reale de la utilizatori verificati, impreuna cu informatii detaliate si fotografii relevante pentru fiecare proprietate. Astfel poti rezerva cu incredere, stiind exact la ce sa te astepti. Siguranta este o prioritate pentru noi.</p>
            <p>Toate tranzactiile sunt protejate prin sisteme moderne de securitate, iar datele tale sunt gestionate in conditii de confidentialitate deplina. Iar daca ai nevoie de ajutor in orice moment, echipa noastra de suport este disponibila pentru a-ti raspunde cat mai rapid si eficient.</p>
            
          </div>
        </div>
      </div>

      <div className=' py-10 mt-4 border-y border-y-button/15 bg-button1/50'>
        <div className='max-w-screen-2xl mx-auto px-15 max-modf:px-10 max-modf1:px-8 max-modf8:px-3 text-center space-y-3'>
          <p>Esti gata sa iti gasesti cazarea ideala?</p>
          <p className='mb-8'>Creeaza un cont gratuit si incepe sa rezervi in cateva minute.</p>
          <Link to="/centrul-ajutor" className='bg-button px-4 py-1.5 rounded-lg'>Creeaza Cont Nou</Link>
        </div>
      </div>
    </div>
  )
}

export default Services
