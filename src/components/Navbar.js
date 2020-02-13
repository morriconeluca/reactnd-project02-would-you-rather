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
            <NavLink exact
              to="/"
              activeClassName="navlink-active"
            >Home</NavLink>
          </li>
          <li>
            <NavLink exact
              to="/new"
              activeClassName="navlink-active"
            >New Poll</NavLink>
          </li>
          <li>
            <NavLink exact
              to="/leaderboard"
              activeClassName="navlink-active"
            >Leader Board</NavLink>
          </li>
        </ul>
        <Greetings />
        <Logout />
      </nav>
    </header>
  );
}