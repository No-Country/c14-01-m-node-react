import { useSelector } from "react-redux";
import Login from "../../components/Login";
import Signup from "../../components/Signup";
import Logout from "../Logout";
import Dropdown from "react-bootstrap/Dropdown";
import "./styles.css";
import Tickets from "../Tickets";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function DropDownMenu({ children }) {
  const { user } = useSelector((state) => state?.auth);

  return (
    <Dropdown id="dropdown-basic-button">
      <Dropdown.Toggle variant={null} id="dropdown-basic">
        {children}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {(user.token && user.token !== "undefined") || user.token ? (
          <Dropdown.Item>
            <Logout />
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
        <Dropdown.Item>
          <Tickets />
        </Dropdown.Item>
        <Dropdown.Item href="#/action-1">Messages</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Notifications</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Trips</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Wish Lists</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item href="#/action-3">AirBnB your home</Dropdown.Item>
        {(user.token && user.token !== "undefined") || user.token ? (
          <Dropdown.Item href="/profile/detail">Account</Dropdown.Item>
        ) : null}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropDownMenu;
