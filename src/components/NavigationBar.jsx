import reactLogo from '../assets/react.svg'
import { Link } from "react-router-dom";

function NavigationBar({cartCount, setCartCount}){
  return (
    <div>
    <a href="https://react.dev" target="_blank">
      <img src={reactLogo} className="logo react" alt="React logo" />
    </a>
    <h2>React Shopping Cart</h2> 
    <button><Link to="/">Home Page</Link></button>
    <button><Link to="shoppage">Shop Page</Link></button>
    <p>Items currently in the cart {cartCount.length} <button><Link to="checkout">Checkout</Link></button></p>

  </div>
  )
}

export default NavigationBar;