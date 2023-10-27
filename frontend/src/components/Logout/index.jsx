import { useCallback } from "react";
import styles from "./logout.module.css";
import { useDispatch } from "react-redux";
import { logOut } from "../../redux/actions/authActions";

export default function Logout() {
  const dispatch = useDispatch();

  const fetchLogOut = useCallback(() => {
    dispatch(logOut());
  });

  const handleClick = () => {
    fetchLogOut();
  };

  return (
    <button className={styles.button} onClick={handleClick}>
      Log out
    </button>
  );
}
