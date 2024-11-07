import App from "../App";
import HomePage from "../pages/HomePage";
import ShopPage from "../pages/ShopPage";
import ErrorPage from "../pages/ErrorPage";
import CheckoutPage from "../pages/CheckoutPage";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "shoppage", element: <ShopPage /> },
      { path: "checkout", element: <CheckoutPage /> },
    ],
    errorElement: <ErrorPage />,
  },
];

export default routes;