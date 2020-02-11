import React from 'react';
import {NavLink} from 'react-router-dom';

import Greetings from '../containers/Greetings';
import Logout from '../containers/Logout';

export default function Navbar() {
  return (
    <header className="navbar">
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/new">New Poll</NavLink>
          </li>
          <li>
            <NavLink to="/leaderboard">Leader Board</NavLink>
          </li>
        </ul>
      </nav>
      <Greetings />
      <Logout />
    </header>
  );
}