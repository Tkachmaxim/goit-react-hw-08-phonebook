import { NavLink } from 'react-router-dom';
import React from 'react';
import s from './Navigation.module.css';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLogedIn);
  return (
    <nav>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? `${s.activeLink}` : `${s.link}`
        }
      >
        Main
      </NavLink>
      {isLoggedIn && (
        <NavLink
          to="/contacts"
          className={({ isActive }) =>
            isActive ? `${s.activeLink}` : `${s.link}`
          }
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export { Navigation };
