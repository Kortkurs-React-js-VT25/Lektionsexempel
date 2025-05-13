import { createBrowserRouter } from "react-router-dom";

import Products from "../pages/Products";
import ProductInfo from "../pages/ProductInfo";
import ErrorPage from "../pages/ErrorPage";
import LoadComponent from "../pages/LoadComponent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Products />,
  },
  {
    path: "/product/:name", // :name blir som en placeholder som ersätts av ett produktnamn senare
    element: <ProductInfo />,
  },
  {
    path: "/load",
    element: <LoadComponent />,
  },
  { path: "*", element: <ErrorPage /> },
]);
export default router;
