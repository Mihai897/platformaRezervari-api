
import { Outlet } from 'react-router-dom'
import background1 from '../src/assets/background/bga.png'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer'
import ScrollToTop from './ScrollToTop'
import { useState } from 'react'

function App() {
  const [visibleConnect,setVisibleConnect] = useState(true);
  
  return (
    <div className='min-h-screen min-w-0 bg-background text-white'>
        <ScrollToTop />
        <Navbar visibleConnect={visibleConnect} setVisibleConnect={setVisibleConnect}/>
        <main className='min-w-0'>
          <Outlet context={{visibleConnect,setVisibleConnect}}/>
        </main>
        <Footer />
    </div>
  )
}

export default App
