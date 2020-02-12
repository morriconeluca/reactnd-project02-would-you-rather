import React from 'react';
import {NavLink} from 'react-router-dom';

import Greetings from '../containers/Greetings';
import Logout from '../containers/Logout';

export default function Navbar() {
  return (
    <header className="navbar">
      <nav className="container centralize">
        <ul className="centralize">
          <li>
            <NavLink
              to="/"
              activeClassName="active-navlink"
            >Home</NavLink>
          </li>
          <li>
            <NavLink
              to="/new"
              activeClassName="active-navlink"
            >New Poll</NavLink>
          </li>
          <li>
            <NavLink
              to="/leaderboard"
              activeClassName="active-navlink"
            >Leader Board</NavLink>
          </li>
        </ul>
        <Greetings />
        <Logout />
      </nav>
    </header>
  );
}