import InputQuantity from "./InputQuantity";
import { useOutletContext } from "react-router-dom";
import { useState } from 'react';

function ProductCard({ product }) {

  const [itemCount, setItemCount] = useState(0)
  const [cartCount, setCartCount, products, error, loading ] = useOutletContext();

  function addToCart(e){
    e.preventDefault();
    let copyCartCount = [...cartCount];

    for (let index = 0; index < itemCount; index++) {
      copyCartCount.push(product.id);
    }
    setItemCount(0);
    setCartCount(copyCartCount)
    console.log("Adding to cart", product.id, itemCount)
  }
  
  return (<>
    <p>{product.title}</p>
    <p>${product.price}</p>
    <p>{product.category}</p>
    <p>{product.description}</p>     
    <img src={product.image} alt={product.title} />
   
    <form action="" method="post">
      <InputQuantity itemCount={itemCount} setItemCount={setItemCount}></InputQuantity>
      <button onClick={addToCart}>Add to Cart</button>
    </form>
  </>);
}

export default ProductCard;
