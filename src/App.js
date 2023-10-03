import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import "./App.css"
import Sec1 from './components/Sec1'
import Sec3 from './components/Sec3'
import About from './components/About'
import Sec4 from './components/Sec4'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import Header from './components/Header'
import Contact from './components/Contact'


function App() {
  return (
    <BrowserRouter>
        <Header/>
        <Sec1/>
        <About/>
        <Sec3/>
        <Sec4/>
        <Contact/>
        <FAQ/>
        <Footer/>
    </BrowserRouter>
  )
}

export default App
