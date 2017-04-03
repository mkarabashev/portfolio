import React from 'react';
import fork from '../fork';
import NavDefault from '../NavDefault';
import Menu from '../Menu';

const Navigation = fork(NavDefault, Menu)();

export default Navigation;
