import "./styles.css";
import { FaUser } from "react-icons/fa";
import { HiClipboardCheck } from "react-icons/hi";
import { BiUserCircle } from "react-icons/bi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const BottomNav = () => {
  const { user } = useSelector((state) => state?.auth);

  return (
    <div className="bottom-nav">
      <div className="bottom-subnav">
        <Link to="/">
          <div className="logo-bottom">
            <img src="/airlogo.png" alt="logo" />
          </div>
        </Link>
        <HiClipboardCheck className="bottom-icon" />
        <Link to="/profile/detail">
          {user.token ? <FaUser className="bottom-icon" /> : null}
        </Link>
        {!user.token ? <BiUserCircle className="bottom-icon" /> : null}
      </div>
    </div>
  );
};

export default BottomNav;
