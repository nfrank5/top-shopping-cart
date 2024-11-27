import { useState } from 'react'
import useProductData from "./hooks/useProductData";
import NavigationBar from './components/NavigationBar'
import Footer from './components/Footer'

import { Outlet } from "react-router-dom";

import './App.css'

function App() {
  const [cartCount, setCartCount] = useState([])
  const { products, error, loading } = useProductData();

  console.log({cartCount, setCartCount, error, loading, products})
  if (error!=null){
    return (
      <>
        <NavigationBar cartCount={cartCount.length} ></NavigationBar>
        <p>Error loading {error}</p>
        <Footer></Footer>
      </>
    )
  }
  if(loading){
    return (
      <>
        <NavigationBar cartCount={cartCount.length} ></NavigationBar>
        <p>Please Wait, Loading!</p>
        <Footer></Footer>
      </>
    )
  }

  if(products!=null){
    return (
      <>
        <NavigationBar cartCount={cartCount.length} ></NavigationBar>
        <Outlet context={[cartCount, setCartCount, products]} />
        <Footer></Footer>
      </>
    )
  }
}

export default App
