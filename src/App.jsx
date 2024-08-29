import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UsersList from './components/Users/UsersList'
import ProductsList from './components/Users/ProductsList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <h1> VITE + react + Redux toolkit</h1>
      <UsersList/>
      <ProductsList/>
    </>
  )
}

export default App
