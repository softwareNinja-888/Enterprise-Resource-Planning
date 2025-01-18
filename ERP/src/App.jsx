import { useState } from 'react'

import { Header } from './components/content/Header'
import { Hero } from './components/content/Hero'
import { Footer } from './components/content/Footer'

function App() {

  return (
    <>
      <div className="bg-white">
        <Header/>
        <Hero/>
        <Footer/>
      </div>
    </>
  )
}


export default App
