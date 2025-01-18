import { useState } from 'react'

import { Header } from './components/content/Header'
import { Hero } from './components/content/Hero'
import { Footer } from './components/content/Footer'
import { Services } from './components/content/Services'


function App() {

  return (
    <>
      <div className="bg-white flex flex-col">
        <Header/>
        <Hero/>
        <Services/>
        <Footer/>
      </div>
    </>
  )
}


export default App
