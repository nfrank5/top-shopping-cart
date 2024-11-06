import InputQuantity from "./InputQuantity";

function ProductCard({ product }) {



  function addToCart(e){
    e.preventDefault();
    console.log("Adding to cart")
  }
  
  return (<>
    <p>{product.title}</p>
    <p>${product.price}</p>
    <p>{product.category}</p>
    <p>{product.description}</p>     
    <img src={product.image} alt={product.title} />
   
    <form action="" method="post">
      <InputQuantity></InputQuantity>
      <button onClick={addToCart}>Add to Cart</button>
    </form>
  </>);
}

export default ProductCard;
