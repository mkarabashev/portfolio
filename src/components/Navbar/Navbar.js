import React from 'react';
import classnames from 'classnames';
import './styles.css';

const Navbar = ({ className, ...otherProps}) => (
  <div {...otherProps} className={classnames(className, 'navbar')}/>
);

export default Navbar;
