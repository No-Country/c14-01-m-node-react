import "./styles.css";
import { FaUser, FaBriefcase } from "react-icons/fa";
import { HiClipboardCheck } from "react-icons/hi";

const BottomNav = () => {
  return (
    <div className="bottom-nav">
      <div className="bottom-subnav">
        <div className="logo-bottom">
          <img src="/airlogo.png" alt="logo" />
        </div>
        <HiClipboardCheck className="bottom-icon" />
        <FaUser className="bottom-icon" />
      </div>
    </div>
  );
};

export default BottomNav;
