import React from 'react';
import { Link } from 'react-scroll';
import Navbar from '../Navbar';

const NavDefault = () => (
  <Navbar className="navigation">
    <ul>
      <li><Link activeClass="active" to="home" spy>Home</Link></li>
      <li><Link activeClass="active" to="projects" spy>Projects</Link></li>
      <li><Link activeClass="active" to="skills" spy>Skills</Link></li>
      <li><Link activeClass="active" to="contacts" spy>Contacts</Link></li>
    </ul>
  </Navbar>
);

export default NavDefault;
