import React from 'react';
import { Link } from 'react-router-dom'
const Nav = () => {
  return (
  <nav>
    <Link to='/'>Guest List</Link>
    <Link to='/addressbook'>Address Book</Link>
  </nav>);
};

export default Nav;
