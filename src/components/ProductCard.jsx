import InputQuantity from "./InputQuantity";
import { useOutletContext } from "react-router-dom";
import { useState } from "react";
import PropTypes from "prop-types";
import styles from "./Productcard.module.css";

function ProductCard({ product }) {
  const [itemCount, setItemCount] = useState("0");
  const [cartCount, setCartCount] = useOutletContext();

  function addToCart(e) {
    e.preventDefault();
    let copyCartCount = [...cartCount];

    for (let index = 0; index < itemCount; index++) {
      copyCartCount.push(product.id);
    }
    setItemCount("0");
    setCartCount(copyCartCount);
    console.log("Adding to cart", product.id, itemCount);
  }

  return (
    <div className={styles.card}>
      <div className={styles.description}>
        <p>{product.title}</p>
        <p>${product.price}</p>
        <p>{product.category}</p>
        <p>{product.description}</p>
      </div>
      <img src={product.image} alt={product.title} className={styles.image}/>

      <form action="" method="post" className={styles.form}>
        <InputQuantity
          itemCount={itemCount}
          setItemCount={setItemCount}
        ></InputQuantity>
        <button onClick={addToCart}>Add to Cart</button>
      </form>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.object,
};

export default ProductCard;
