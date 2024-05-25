import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import BaseLayout from "./layout/base-layout";
import Women from "./pages/women";
import Kids from "./pages/kids";
import ProductItems from "./pages/product-items";
import { pageMetadata } from "./lib/data";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <BaseLayout>
          <Home />
        </BaseLayout>
      ),
    },
    {
      path: "/women",
      element: <Women />,
    },
    {
      path: "/kids",
      element: <Kids />,
    },
    {
      path: "/men/shirts",
      element: (
        <BaseLayout>
          <ProductItems metadata={pageMetadata[1]} />
        </BaseLayout>
      ),
    },
    {
      path: "/men/t-shirts",
      element: (
        <BaseLayout>
          <ProductItems metadata={pageMetadata[2]} />
        </BaseLayout>
      ),
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
