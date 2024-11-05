import { useState } from 'react'
import NavigationBar from './components/NavigationBar'
import Footer from './components/Footer'

import { Outlet } from "react-router-dom";

import './App.css'

function App() {
  const [cartCount, setCartCount] = useState(0)

  return (
    <>
      <NavigationBar cartCount={cartCount}></NavigationBar>
      <Outlet />
      <Footer></Footer>
    </>
  )
}

export default App
