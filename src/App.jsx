import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
//page
import Home from './page/Home'
import ProductDetails from './page/ProductDetails'
//components
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product/:id' element={<ProductDetails />} />

        </Routes>
        <Sidebar />
        <Footer />
      </Router>
    </div>
  )
}

export default App