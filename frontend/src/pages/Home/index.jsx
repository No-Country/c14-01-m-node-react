import { Outlet } from "react-router-dom";
import Navbar from "../../components/NavBar/Navbar";
import BottomNav from "../../components/BottomNav/BottomNav";
import "./styles.css";

export default function Home() {
  return (
    <>
      <Navbar />
      <Outlet />
      <div className="bottom">
        <BottomNav />
      </div>
    </>
  );
}
