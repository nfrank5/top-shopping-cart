import ProductCard from "../components/ProductCard"
import useProductData from "../hooks/useProductData";


function ShopPage() {

  const { products, error, loading } = useProductData();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>A network error was encountered</p>;
  
  return (<>
    <h1 className="shoppage">Shop Page</h1>
    <ul>
      {products.map((product) => (
        <li key={product.id}><ProductCard product={product} ></ProductCard></li>
      ))}
    </ul>
    
  </>);

}

export default ShopPage;
