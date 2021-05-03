import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router";
import * as sessionActions from '../../store/session';

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const history = useHistory()
  const [showMenu, setShowMenu] = useState(false);
  
  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };
  
  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);
  
    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = async(e) => {
    e.preventDefault();
    await dispatch(sessionActions.logout());
    history.push('/')
  };

  return (
    <>
      <button onClick={openMenu}>
        <i className="fas fa-user-circle" />
      </button>
      {showMenu && (
        <div className="profile-dropdown-container">
          <ul className="profile-dropdown">
            <li> UserName: {user.username}</li>
            <li>Password: {user.email}</li>
            <li>
              <button onClick={logout}>Log Out</button>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export default ProfileButton;