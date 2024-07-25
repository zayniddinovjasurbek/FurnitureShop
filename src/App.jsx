import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Route, Routes } from 'react-router-dom'
import Cart from './pages/cart/Cart'
import Contact from './pages/contact/Contact'
import Home from './pages/home/Home'
import Blog from './pages/blog/Blog'


function App() {


  return (
    <div className='app'>
      <Header/>
      <main>  
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/blog' element={<Blog/>}/>
        </Routes>
      </main>
      <Footer/>
    </div>
  )
}

export default App
