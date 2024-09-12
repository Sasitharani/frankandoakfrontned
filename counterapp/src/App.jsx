import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './common/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
       <Header />
      <h1>Check</h1>
      
    </>
  )
}

export default App
