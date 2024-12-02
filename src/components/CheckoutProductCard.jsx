import styles from "./Productcard.module.css";
import PropTypes from 'prop-types';


function CheckoutProductCard({ product, quantity }) {

  return (<div className={styles.card}>
    <div className={styles.description}>
      <p>Title: {product.title}</p>
      <p>Price: ${product.price}</p>
      <p>Quantity: {quantity}</p>
      <p>Total: {product.price * quantity}</p>
    </div>

  
    <img src={product.image} alt={product.title} className={styles.image}/>

  </div>);
}

CheckoutProductCard.propTypes = {
  product: PropTypes.object,
  quantity: PropTypes.number,
};

export default CheckoutProductCard;
