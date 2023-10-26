import { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Login from "../../components/Login";
import Signup from "../../components/Signup";
import Logout from "../Logout";
import Dropdown from "react-bootstrap/Dropdown";
import { decodeToken } from "react-jwt";
import "./styles.css";
import getTokenToUser from "../../utils/getTokenToUser";
import { FiltersContext } from "../../context/FilterContext";
import Tickets from "../Tickets";

// eslint-disable-next-line react/prop-types
function DropDownMenu({ children }) {
  const [token, setToken] = useState([], () => {
    const localData = localStorage.getItem('auth_token');
    return localData ? JSON.parse(localData) : [];
  });

  const { user } = useSelector((state) => state?.auth);

  const { setUserLogged } = useContext(FiltersContext);

  useEffect(() => {
    const authToken = localStorage.getItem("auth_token");
    try {
      setToken(JSON.parse(authToken));
    } catch (error) {
      console.error("Error al analizar el token:", error);
    }
  }, [user.token]);

  const handleLogout = () => {
    setToken(null);
    setUserLogged(null);
  };

  const myDecodedToken = token ? decodeToken(token) : null;

  getTokenToUser.save(myDecodedToken);
  myDecodedToken ? setUserLogged(myDecodedToken.name) : null;

  return (
    <Dropdown id="dropdown-basic-button">
      <Dropdown.Toggle variant={null} id="dropdown-basic">
        {children}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {(token && token !== "undefined") || user.token ? (
          <Dropdown.Item>
            <Logout handleLogout={handleLogout} />
          </Dropdown.Item>
        ) : (
          <>
            <Dropdown.Item>
              <Login />
            </Dropdown.Item>
            <Dropdown.Item>
              <Signup />
            </Dropdown.Item>
          </>
        )}
        <Dropdown.Divider />
        <Dropdown.Item><Tickets /></Dropdown.Item>
        <Dropdown.Item href="#/action-1">Messages</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Notifications</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Trips</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Wish Lists</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item href="#/action-3">AirBnB your home</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Account</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropDownMenu;
