import { Outlet } from "react-router-dom";
import Navbar from "../../components/NavBar/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
