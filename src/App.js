import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

// components
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import ProductDetails from "./components/ProductDetails";
import Error from "./components/Error";
import Snackbar from "./components/Snackbar";

const App = () => {
  return (
    <Provider store={appStore}>
      <div>
        <Header />
        <Snackbar/>
        {/* <ProductList /> */}
        <Outlet />
      </div>
    </Provider>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <ProductList /> },
      { path: "/cart", element: <Cart /> },
      { path: "/products/:id", element: <ProductDetails /> },
    ],
    errorElement: <Error/>
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router}/>);
