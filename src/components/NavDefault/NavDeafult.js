import React from 'react';
import { Link } from 'react-scroll';
import classnames from 'classnames';
import Navbar from '../Navbar';

const NavDefault = ({ onSelect, selected }) => (
  <Navbar className="navigation">
    <ul>
      <li><Link to="home" className={classnames(selected === 1 && 'active')} onClick={onSelect(1)}>Home</Link></li>
      <li><Link to="projects" className={classnames(selected === 2 && 'active')} onClick={onSelect(2)}>Projects</Link></li>
      <li><Link to="skills" className={classnames(selected === 3 && 'active')} onClick={onSelect(3)}>Skills</Link></li>
      <li><Link to="contacts" className={classnames(selected === 4 && 'active')} onClick={onSelect(4)}>Contacts</Link></li>
    </ul>
  </Navbar>
);

export default NavDefault;
