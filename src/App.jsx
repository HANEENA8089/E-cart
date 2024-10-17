
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Route, Routes, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Wishlist from './pages/Wishlist'
import Cart from './pages/Cart'
import View from './pages/View'

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/wishlist' element={<Wishlist/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/view/:id' element={<View/>}/>
        <Route path='/*' element={<Navigate/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
