import { createContext, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./component/dashboard/Dashboard.jsx";
import Home from "./component/home/Home.jsx";
import Statistic from "./component/statistic/Statistic.jsx";
import Errorpage from "./component/errorPage/Errorpage.jsx";
import ProductDetails from "./component/productDetails/ProductDetails.jsx";
import { HelmetProvider } from "react-helmet-async";
import Help from "./component/help/Help.jsx";

export const AssestContext = createContext();

export const AssestProvider = ({ children }) => {
  const [cartData, setCartData] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const [user, setuser] = useState();
  const addToCart = (item) => setCartData(item);
  const addToWishlist = (item) => setWishlist(item);
  return (
    <AssestContext.Provider
      value={{
        cartData,
        setCartData,
        wishlist,
        setWishlist,
        addToCart,
        addToWishlist,
        user,
        setuser,
      }}
    >
      {children}
    </AssestContext.Provider>
  );
};
const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Errorpage />,
    children: [
      {
        path: "/",
        loader: () => fetch("../product.json"),
        element: <Home />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/statistic",
        loader: () => fetch("../product.json"),
        element: <Statistic />,
      },
      {
        path: "/details/:id",
        loader: () => fetch("../product.json"),
        element: <ProductDetails />,
      },
      {
        path: "/help",
        element: <Help />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AssestProvider>
      <HelmetProvider>
        <RouterProvider router={route} />
      </HelmetProvider>
    </AssestProvider>
  </StrictMode>
);
