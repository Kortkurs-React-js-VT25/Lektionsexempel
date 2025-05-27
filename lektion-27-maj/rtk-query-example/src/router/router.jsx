import { createBrowserRouter } from "react-router-dom";

import Products from "../pages/Products";
import ProductInfo from "../pages/ProductInfo";
import Order from "../pages/Order";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Products />,
  },
  {
    path: "/produkt/:id", //Dynamisk url där :id ersätts med något ex. 1
    element: <ProductInfo />,
  },
  {
    path: "/cart",
    element: <Order />,
  },
]);

export default router;
