import { useSelector } from "react-redux";
import { FaUserCircle, FaBirthdayCake } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

import formatDateToCustomFormat from "../../utils/dateConvert";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function ProfileDetail() {
  const { user } = useSelector((state) => state?.user);
  return (
    <div className="profile-container-plus">
      <div className="profile-container">
        <div className="profile-right">
          <div className="profile-name">
            <span className="profile-letter">
              {user && user.first_name.slice(0, 1).toUpperCase()}
            </span>
          </div>
        </div>
        <div className="profile-left">
          <h1>Your Profile</h1>
          <div className="profile-info">
            <div className="profile-icons-div">
              <div>
                <FaUserCircle className="profile-icons" />
              </div>
              <div>{`Name: ${user && user.first_name}  ${
                user && user.last_name
              }`}</div>
            </div>
            <div>
              <FaBirthdayCake className="profile-icons" />{" "}
              {`Birthday: ${user && formatDateToCustomFormat(user.birthday)} `}
            </div>
            <div>
              <IoLocationSharp className="profile-icons" />
              {`Country: ${user && user.location}`}
            </div>
          </div>
        </div>
      </div>

      <Link to="/profile/edit">
        <Button className="button-profile">Edit</Button>
      </Link>
    </div>
  );
}

export default ProfileDetail;
