import { Link, useParams } from "react-router-dom";
import DropdownMenu from "./DropdownMenu";
import "./styles.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import useFilters from "../../utils/useFilters";
import formatDateToCustomFormat from "../../utils/dateConvert";
import { decodeToken } from "react-jwt";

const Navbar = () => {
  const { user } = useSelector((state) => state?.auth);
  const [userLogged, setUserLogged] = useState({
    name: "",
  });
  const [show, setShow] = useState(false);
  const { filters } = useFilters();
  const params = useParams();
  const id = params && params.id;

  const parseToken = async () => {
    const myDecodedToken = user.token ? await decodeToken(user.token) : null;
    if (myDecodedToken) {
      setUserLogged((prev) => ({
        ...prev,
        name: myDecodedToken.name,
      }));
    } else {
      setUserLogged((prev) => ({
        ...prev,
        name: null,
      }));
    }
  };

  useEffect(() => {
    parseToken(user.token);
  }, [user.token]);

  return (
    <>
      <div className="nav-air">
        <div className="logo-air">
          <Link to="/">
            <img src="Logo.png" alt="" />
          </Link>
        </div>
        {!show ? (
          <div
            className="search-air"
            onClick={() => (!id ? setShow(true) : setShow(false))}
          >
            <div>{filters.location ? filters.location : "Anywhere"}</div>
            <div className="light-color">|</div>
            <div>
              {filters.checkInDate || filters.checkOutDate
                ? `${formatDateToCustomFormat(
                    filters.checkInDate
                  )} - ${formatDateToCustomFormat(filters.checkOutDate)}`
                : "Any Week"}
            </div>
            <div className="light-color">|</div>
            <div className="light-color">
              {filters.guests ? filters.guests : "Addguests"}
            </div>
            <img src="icons/button-search.png" alt="search-button" />
          </div>
        ) : null}
        <SearchBar show={show} setShow={setShow} className="custom-modal" />
        <div className="air-right">
          <div className="air-home">Airbnb your home</div>
          <div className="air-world">
            <img src="/icons/world.png" alt="world" />
          </div>
          <div className="dropdown-air">
            <DropdownMenu className="dropdown-air">
              <img src="/icons/hamburguer.png" alt="" />
              {userLogged.name ? (
                <span className="logged-user">
                  {userLogged.name.substring(0, 1)}
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
