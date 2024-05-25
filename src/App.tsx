import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import BaseLayout from "./layout/base-layout";
import Women from "./pages/women";
import Kids from "./pages/kids";
import Mens from "./pages/mens";

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
      path: "/men",
      element: (
        <BaseLayout>
          <Mens />
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
