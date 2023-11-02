import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./redux/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import ListProperties from "./components/List/ListProperties";
import Categories from "./components/CategoriesNav/Categories";
import { FiltersProvider } from "./context/FilterContext";
import PropertyDetail from "./components/PropertyDetail/PropertyDetail";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import Profile from "./components/Perfil/Profile";
import ProfileEdit from "./components/Perfil/ProfileEdit";
import ProfileDetail from "./components/Perfil/ProfileDetail";

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
  {
    path: "/profile",
    element: <Home />,
    children: [
      {
        path: "/profile",
        element: <Profile />,
        children: [
          {
            path: "/profile/detail",
            element: <ProfileDetail />,
          },
          {
            path: "/profile/edit",
            element: <ProfileEdit />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PrimeReactProvider>
        <FiltersProvider>
          <RouterProvider router={home} />
        </FiltersProvider>
      </PrimeReactProvider>
    </Provider>
  </React.StrictMode>
);
