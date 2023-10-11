import Login from '../../components/Login';
import Signup from '../../components/Signup';
import Dropdown from "react-bootstrap/Dropdown";
import "./styles.css";

// eslint-disable-next-line react/prop-types
function DropDownMenu({ children }) {
  return (
    <Dropdown id="dropdown-basic-button">
      <Dropdown.Toggle variant={null} id="dropdown-basic">
        {children}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item><Login /></Dropdown.Item>
        <Dropdown.Item><Signup /></Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item href="#/action-1">Messages</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Notifications</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Trips</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Wish Lists</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item href="#/action-3">AirBnB your home</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Account</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item href="#/action-3">AirBnB your home</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Account</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropDownMenu;
