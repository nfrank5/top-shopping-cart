import ProductCard from "../components/ProductCard";
import { useOutletContext } from "react-router-dom";


function ShopPage() {
  const [cartCount, setCartCount, products, error, loading] = useOutletContext();

  
  return (
    <>
      <h1 className="shoppage">Shop Page</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <ProductCard product={product}></ProductCard>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ShopPage;
