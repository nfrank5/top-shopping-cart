import InputQuantity from "./InputQuantity";
import useProductData from "../hooks/useProductData";



function ProductCard() {

  const { products, error, loading } = useProductData();
  if (loading) return <p>Loading...</p>;
  if (error) return <p>A network error was encountered</p>;


  function addToCart(e){
    e.preventDefault();
    console.log("Adding to cart")
  }
  
  return (<>
    <p>{products.title}</p>
    <p>${products.price}</p>
    <p>{products.category}</p>
    <p>{products.description}</p>     
    <img src={products.image} alt={products.title} />
   
    <form action="" method="post">
      <InputQuantity></InputQuantity>
      <button onClick={addToCart}>Add to Cart</button>
    </form>
  </>);
}

export default ProductCard;
