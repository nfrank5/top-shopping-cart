import { useOutletContext, useNavigate } from "react-router-dom";
import CheckoutProductCard from "../components/CheckoutProductCard";

function CheckoutPage() {
  const navigate = useNavigate();
  const [cartCount, setCartCount, products, error, loading] =
    useOutletContext();

  function finishPurchase(e) {
    e.preventDefault();
    alert(`Finishing Purchase! You Paid ${totalToPay.toFixed(2)}`)
    setCartCount([]);
    console.log("Finishing Purchase!");
    navigate("/");
  }

  function calculateItemsQuantity() {
    let finalCheck = {};
    for (const num of cartCount) {
      finalCheck[num] = finalCheck[num] ? finalCheck[num] + 1 : 1;
    }
    return finalCheck;
  }

  function calculateTotalPerItem() {
    const quantityPerItem = calculateItemsQuantity();
    const productsIds = Object.keys(quantityPerItem);
    const totals = productsIds.map((productId) => {
      const quantity = quantityPerItem[parseInt(productId)];
      const product = products.find((p) => p.id === parseInt(productId)); 
      return { product, quantity }
    });
    return totals;
  }

  const totalsPerItem = calculateTotalPerItem()
  const totalToPay = totalsPerItem.reduce((acum, current) =>{
    return acum + (current.product.price * current.quantity)
  },0)

  return (
    <>
      <h1 className="checkout">Checkout Page</h1>
      <h2>Total to pay: {totalToPay.toFixed(2)}</h2>
      <h3>Details</h3>
      <ul>
        {totalsPerItem.map((item) => (
          <li key={item.product.id}>
            <CheckoutProductCard
              product={item.product}
              quantity={item.quantity}
            ></CheckoutProductCard>
          </li>
        ))}
      </ul>
      <form action="" method="post">
        <button onClick={finishPurchase}>Finish purchase</button>
      </form>
    </>
  );
}

export default CheckoutPage;
