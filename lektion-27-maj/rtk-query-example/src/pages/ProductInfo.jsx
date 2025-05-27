import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useGetProductByIdQuery } from "../api/apiSlice";

function ProductInfo() {
  const params = useParams();
  const { data, isError, isLoading } = useGetProductByIdQuery(params.id);
  // const [product, setProduct] = useState();

  // useEffect(() => {
  //     function filterProduct(products) {
  //         const filteredProduct = products.filter((product) => {
  //             if (product.title === params.name) return product;
  //         });

  //         console.log(filteredProduct);
  //         setProduct(filteredProduct[0]);
  //     }

  //     async function getProducts() {
  //         const response = await fetch('https://dummyjson.com/products');
  //         const data = await response.json();
  //         filterProduct(data.products);
  //       }

  //       getProducts();
  // }, []);

  return (
    <>
      {data ? ( // ternary operator
        <section>
          <img src={data.images[0]} />
          <h2>{data.title}</h2>
          <p>{data.description}</p>
          <p>Pris: {data.price}</p>
        </section>
      ) : (
        <h2>Ingen produkt vald</h2>
      )}
    </>
  );
}

export default ProductInfo;
