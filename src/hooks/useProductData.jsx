import { useState, useEffect } from "react";

const useProductData = () => {
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://fakestoreapi.com/products", { mode: "cors" })
      
            if (response.status >= 400) {
              throw new Error("server error");
            }
            const data = await response.json();
            setProducts(data);
          } catch (err) { 
            setError(err.message);
          } finally {
            setLoading(false);
          }
        }
        fetchData();
      }, [])

  return { products, error, loading };
};


export default useProductData;