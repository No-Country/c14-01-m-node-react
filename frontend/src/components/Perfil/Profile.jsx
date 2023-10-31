import { useCallback, useEffect, useState } from "react";
import { decodeToken } from "react-jwt";
import { useDispatch, useSelector } from "react-redux";
import "./style.css";
import { getUsers } from "../../redux/actions/userActions";
import { Outlet } from "react-router-dom";

function Profile() {
  const { user } = useSelector((state) => state?.auth);
  const [token, setToken] = useState({
    email: "",
  });
  const parseToken = async () => {
    const myDecodedToken = user.token ? await decodeToken(user.token) : null;
    console.log(myDecodedToken);
    if (myDecodedToken) {
      setToken((prev) => ({
        ...prev,
        email: myDecodedToken.email,
      }));
    }
  };

  useEffect(() => {
    parseToken(user.token);
  }, [user.token]);

  const dispatch = useDispatch();

  const getProfile = useCallback(() => {
    dispatch(getUsers(token?.email));
  });

  getProfile();

  return (
    <div className="profile-container-sup">
      <Outlet />
    </div>
  );
}

export default Profile;
