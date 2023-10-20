import { Link } from "react-router-dom";
import DropdownMenu from "./DropdownMenu";
import "./styles.css";
import { useSelector } from "react-redux";
import { useContext } from "react";
import { FiltersContext } from "../../context/FilterContext";

const Navbar = () => {
  const { isAuthenticated } = useSelector((state) => state?.auth);
  const { userLogged } = useContext(FiltersContext);
  console.log("userLogged", userLogged, "is Authenticated", isAuthenticated);
  return (
    <>
      <div className="nav-air">
        <div className="logo-air">
          <Link to="/">
            <img src="Logo.png" alt="" />
          </Link>
        </div>
        <div className="search-air">
          <div>Anywhere</div>
          <div className="light-color">|</div>
          <div>Any Week</div>
          <div className="light-color">|</div>
          <div className="light-color">Addguests</div>

          <img src="icons/button-search.png" alt="search-button" />
        </div>
        <div className="air-right">
          <div className="air-home">Airbnb your home</div>
          <div className="air-world">
            <img src="/icons/world.png" alt="world" />
          </div>
          <div className="dropdown-air">
            <DropdownMenu className="dropdown-air">
              <img src="/icons/hamburguer.png" alt="" />
              {isAuthenticated && userLogged ? (
                <span className="logged-user">
                  {userLogged.substring(0, 1)}
                </span>
              ) : (
                <img src="/icons/profile.png" alt="" />
              )}
            </DropdownMenu>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
