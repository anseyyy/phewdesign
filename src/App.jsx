import React from 'react';
import { BrowserRouter, Routes ,Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Navbar from './pages/Navbar'
import Footer from './pages/Footer'
function App() {
  return (
    
    <div>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
        <Footer />
      </BrowserRouter>



    </div>
  )
}

export default App
