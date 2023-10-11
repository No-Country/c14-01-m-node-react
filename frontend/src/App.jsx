import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Categories from "./components/CategoriesNav/Categories";
import Navbar from "./components/NavBar/Navbar";
import ListCategories from "./components/Filters/ListCategories";
import ListPropertys from "./components/List/ListPropertys";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Navbar />}>
            <Route
              path="/"
              element={
                <>
                  <Categories />
                  <ListPropertys />
                </>
              }
            />

            <Route path="/filters/:category" element={<ListCategories />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
