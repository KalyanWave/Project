import React from 'react'
import Navbar from './components/Navbar'
import {BrowserRouter , Route , Routes} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Products from './components/Products'
import Contact from './components/Contact'
import Cart from './components/Cart'
import Footer from './components/Footer'
import Error from './components/Error'
import Prodetails from './components/Prodetails'
import Billone from './components/Billone'


const App = () => {
  return (
      <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Products' element={<Products/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='*' element={<Error/>}/>
        <Route path='/Prodetails/:id' element={<Prodetails/>}/>
        <Route path='/billone/:name' element={<Billone/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>    
  )
}

export default App

