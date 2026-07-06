import React from 'react'
import bg from '../assets/background/bga.png'
import { Link } from 'react-router-dom'
import cumFunctioneaza from './cumFunctioneaza.json'
import CumFunctioneazaList from './CumFunctioneazaList'
const CumFunctioneaza = () => {

  const createCumFunctioneazaList = (component)=>{
    return <CumFunctioneazaList 
      id = {component.id}
      key = {component.id}
      nr = {component.nr}
      nume = {component.nume}
      info = {component.info}
    />
  }
  return (
    <div className=' py-4  '>
      
      <div className='flex justify-center max-w-screen-2xl mx-auto px-15 max-modf:px-10 max-modf1:px-8 max-modf8:px-3'>
        <div className='text-center space-y-3  md:w-[50%]  '>
          <p className='text-[34px] leading-10'>Rezervari in doar cativa pasi, descopera <span className='text-button'>cum functioneaza</span>.</p>
          <p className='text-[14px] text-gray-300 pb-4 px-15'>Vezi cat de simplu este sa gasesti si sa rezervi cazarea perfecta pentru vacanta ta de vis, in doar trei pasi simpli.</p>
        </div>
      </div>

      <div className='pt-4 max-w-screen-2xl mx-auto px-15 max-modf:px-10 max-modf1:px-8 max-modf8:px-3'>

        <p className='text-center text-[24px]'>Urmeaza acesti pasi simpli pentru a incepe calatoria perfceta</p>

        <ul className='grid grid-cols-1 md:grid-cols-3 gap-8 pt-6 items-stretch'>

          

          {cumFunctioneaza && cumFunctioneaza.map(createCumFunctioneazaList)}

          
        </ul>
      </div>
      
      <div className='mt-4 max-w-screen-2xl mx-auto px-15 max-modf:px-10 max-modf1:px-8 max-modf8:px-3'>
        <p className='text-[24px]'>Cum functioneaza procesul in detaliu.</p>
        <div className='indent-10 columns-2 max-modf2:columns-1 gap-10 mt-4'>
          <p>Planificarea unei calatorii ar trebui sa fie o experienta placuta, nu o sursa de stres. De aceea, am construit un sistem de rezervare care elimina pasii inutili si iti ofera acces rapid la cele mai relevante optiuni de cazarem intr-un mod clar si usor de inteles.</p>
          <p>Totul incepe cu o simpla cautare. Introduci destinatia dorita, perioada si preferintele tale, iar platforma iti afiseaza instant rezultatele disponibile. Fara timpi de asteptare, fara procese complicate, doar informatii relevenate, organizate eeficient.</p>
          <p>Rezultatele sunt prezentate intr-un mod intuitiv, astfel incat sa poti compara rapid diferitele optiuni. Fiecare unitate de cazare vine insotita de dealii esentiale, imagini reale si descrieri complete, oferindu-ti o imagine clara asupra experientei pe care o vei avea.</p>
          <p>Pentru a economisi timp, poti utiliza filtre care iti permit sa restrangi rezultatele in functie de buget, facilitati, locatie sau evaluarile altor utilizatori. Astfel, gasesti mult mai rapid optiunile care corespund exact cerintelor tale.</p>
          <p>Dupa ce ai ales cazarea ideala, procesul de rezervare este simplificat la maximum. Nu sunt necesare etape complicate, totul este optimizat pentru a finaliza rezervarea in doar cateva momente.</p>
          <p>Confirmarea rezervarii se face instant, iar toate detaliile sunt disponibile imediat dupa finalizarea. Vei avea acces la informatii clare despre locatie, check-in, facilitati si orice alt aspect important pentru sederea ta.</p>
          <p>Flexibilitatea este un element esential in experienta noastra. In functie de unitatea de cazare aleasa, ai posibilitatea de a modifica sau anula rezervarea, oferindu-ti siguranta in cazul in care planurile tale se schimba.</p>
          <p>In cazul in care intampini dificultati sau ai intrebari, echipa noastra de suport este disponibila pentru a-ti oferi asistenta rapida si eficienta. Scopul nostru este sa iti oferim un proces de rezervare care nu doar functioneaza bine, ci care iti ofera si liniste, siguranta si control total asupra alegerilor tare.</p>
        </div>
      </div>

      <div className=' py-7 mt-8 bg-button1 border-y border-y-button/15'>
        <div className='flex flex-col items-center max-w-screen-2xl max-modf8:px-3 mx-auto px-15 max-modf:px-10 max-modf1:px-8 '>
          <p className='text-[22px] text-center'>Esti gata sa iti planifici urmatoarea vacanta?</p>
          <div className='py-4'>
            <Link className='bg-button px-4 py-2 rounded-xl'>Incepe Cautarea</Link>
          </div>
        </div>
      </div>
      

    </div>
  )
}

export default CumFunctioneaza
