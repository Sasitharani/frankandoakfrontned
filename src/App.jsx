import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './common/Header'
import { Routes, Route } from 'react-router-dom';
import Center from './common/center'
import Test from './Test'
import Row2n3 from './common/Row2n3'
import SSlider from './common/SSlider'
import DataForSlider from './common/dataForSlider'
import Seclastrow from './common/Seclastrow'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Header />

     <Routes>
        <Route path="/this-just-in" element={<div>This Just IN</div>} />
        <Route path="/men" element={<div>Men</div>} />
        <Route path="/women" element={<div>Women</div>} />
        <Route path="/our-story" element={<div>Our Story</div>} />
        <Route path="/search" element={<div>Search</div>} />
        <Route path="/account" element={<div>Account</div>} />
        <Route path="/favorites" element={<div>Favorites</div>} />
        <Route path="/cart" element={<div>Cart</div>} />
        <Route path="/test" element={<Test />} />
      </Routes>

      <Center />
      <Row2n3 />
      <SSlider />
      <Seclastrow />
    </>
  )
}

export default App
