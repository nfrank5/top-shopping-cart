import { useState } from 'react'
import NavigationBar from './components/NavigationBar'
import Footer from './components/Footer'
import ShopPage from './pages/ShopPage'
import HomePage from './pages/HomePage'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavigationBar></NavigationBar>
      <HomePage></HomePage>
      <ShopPage></ShopPage>
      
      <Footer></Footer>
    </>
  )
}

export default App
