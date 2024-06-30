import React from 'react'
import './App.css'
import Home from './page/home/Home'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import { Route, Routes } from 'react-router-dom'
import AppMenu from './components/App_menu/AppMenu'
import Catalogs from './page/catalog/Catalogs'
import Podpisku from './components/podpisku/Podpisku'
import ProductPage from './components/ProductPage/ProductPage'
import Product from './page/Product/Product'
import ACompany from './page/ACompany/ACompany'
import Delivery from './page/Delivery/Delivery'

const App = () => {
  return (
    <div className='max-w-[100%] w-full mx-auto relative'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/catalog' element={<Catalogs />} />
        <Route path='/product/:id' element={<ProductPage />} />
        <Route path='/products' element={<Product />} />
        <Route path='/acompany' element={<ACompany />} />
        <Route path='/delivery' element={<Delivery />} />
      </Routes>
      <Podpisku />
      <Footer />
      <div className='fixed z-50 bottom-0 w-full bg-white shadow md:relative md:shadow-none 2xl:hidden xl:hidden lg:hidden md:hidden sm:hidden block'>
        <AppMenu />
      </div>
    </div>
  )
}

export default App
