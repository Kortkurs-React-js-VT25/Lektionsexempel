import "./Products.css";
import { useState, useEffect } from "react";
import { useGetProductsQuery } from "../api/apiSlice";

import Header from "../components/Header/Header";
import Product from "../components/Product/Product";

function Products() {
  const { data, isLoading, isSuccess, isError } = useGetProductsQuery();

  // Ett exempel nedan på hur det kan se ut när man gör api-anrop i ens komponent och behöver hantera laddningtillstånd samt felhantering

  // const [products, setProducts] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [isError, setIsError] = useState(false);

  // useEffect(() => {
  //   async function getProducts() {
  //     setIsLoading(true);
  //     try {
  //       const response = await fetch("https://dummyjson.com/products");
  //       const data = await response.json();
  //       console.log(data);
  //       setIsLoading(false);

  //       if (response.ok) {
  //         setProducts(data.products);
  //       } else {
  //         setIsError(true)
  //       }

  //     } catch (error) {
  //       setIsError(true);
  //       setIsLoading(false);
  //     }
  //   }

  //   getProducts();
  // }, []);

  const productComponents = data?.products.map((product) => {
    return (
      <Product
        title={product.title}
        brand={product.brand}
        price={product.price}
        image={product.thumbnail}
        id={product.id}
        key={product.id}
      />
    );
  });

  return (
    <section>
      <Header />
      {isLoading ? (
        <h3>Laddar produkter...</h3>
      ) : (
        <section className="products">{productComponents}</section>
      )}
    </section>
  );
}

export default Products;
