import React, { useCallback } from 'react';
import styles from './logout.module.css';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/actions/authActions';

export default function Logout(props) {
  const { handleLogout } = props;

  const dispatch = useDispatch();

  const fetchLogOut = useCallback(() => {
    dispatch(logOut());
  });

  const handleClick = () => {
    fetchLogOut();
    handleLogout(null)
  };

  return (
    <button className={styles.button} onClick={handleClick}>
      Log out
    </button>
  )
};
