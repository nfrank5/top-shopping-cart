
import { useState } from 'react';

function CheckoutProductCard({ product, quantity }) {

  return (<>
    <p>Title: {product.title}</p>
    <p>Price: ${product.price}</p>
    <p>Quantity: {quantity}</p>
    <p>Total: {product.price * quantity}</p>
    <img src={product.image} alt={product.title} />

  </>);
}

export default CheckoutProductCard;
