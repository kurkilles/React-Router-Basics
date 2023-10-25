import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import Root from "./pages/Root";
import ErrorPage from "./pages/Error";
import ProductDetailPage from "./pages/ProductDetails";


const router = createBrowserRouter([
  {
    path: '/', element: <Root />, children: [
      { path: '/', element: <HomePage /> },
      { path: '/products', element: <ProductsPage /> },
      { path: '/products/:productId', element: <ProductDetailPage /> }
    ], errorElement: <ErrorPage />
  },
])

function App() {
  return <RouterProvider router={router} />;
}

export default App;
