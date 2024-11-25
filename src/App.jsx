import { useState } from 'react'
import useProductData from "./hooks/useProductData";
import NavigationBar from './components/NavigationBar'
import Footer from './components/Footer'

import { Outlet } from "react-router-dom";

import './App.css'

function App() {
  const [cartCount, setCartCount] = useState([])
  const { products, error, loading } = useProductData();

  return (
    <>
      <NavigationBar cartCount={cartCount.length} ></NavigationBar>
      <Outlet context={[cartCount, setCartCount, products, error, loading ]} />
      <Footer></Footer>
    </>
  )
}

export default App
