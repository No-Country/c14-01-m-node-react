import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import ListProperties from "./components/List/ListProperties";
import Categories from "./components/CategoriesNav/Categories";
import { FiltersProvider } from "./context/FilterContext";
import PropertyDetail from "./components/PropertyDetail/PropertyDetail";
import Navbar from "./components/NavBar/Navbar";

const home = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: (
          <>
            <Categories />
            <ListProperties />
          </>
        ),
      },
    ],
  },
  {
    path: "/filter/:id",
    element: <Home />,
    children: [
      {
        path: "/filter/:id",
        element: <PropertyDetail />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <FiltersProvider>
    <RouterProvider router={home} />
  </FiltersProvider>
);
