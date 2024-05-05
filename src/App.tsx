import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Header from "./components/header";
import Footer from "./components/footer";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
  ]);

  return (
    <>
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}

export default App;
