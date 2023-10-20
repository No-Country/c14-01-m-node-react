import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Login from '../../components/Login';
import Signup from '../../components/Signup';
import Logout from '../Logout';
import Dropdown from "react-bootstrap/Dropdown";
import "./styles.css";

// eslint-disable-next-line react/prop-types
function DropDownMenu({ children }) {
  const [token, setToken] = useState(JSON.parse(localStorage.getItem('auth_token')));

  const handleLogout = () => {
    setToken(null)
  };

  const { isAuthenticated } = useSelector((state) => state?.auth);

  return (
    <Dropdown id="dropdown-basic-button">
      <Dropdown.Toggle variant={null} id="dropdown-basic">
        {children}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {(token || isAuthenticated) ? <Dropdown.Item><Logout handleLogout={handleLogout} /></Dropdown.Item> :
          <><Dropdown.Item><Login /></Dropdown.Item>
            <Dropdown.Item><Signup /></Dropdown.Item></>}
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
