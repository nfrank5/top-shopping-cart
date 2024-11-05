import App from "../App";
import HomePage from "../pages/HomePage";
import ShopPage from "../pages/ShopPage";
import ErrorPage from "../pages/ErrorPage";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "shoppage", element: <ShopPage /> },
    ],
    errorElement: <ErrorPage />,
  },
  {
    path: "shop",
    element: <ShopPage />,
  },
];

export default routes;