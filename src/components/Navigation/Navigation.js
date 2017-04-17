import React, { Component } from 'react';
import fork from '../fork';
import NavDefault from '../NavDefault';
import Menu from '../Menu';

const NavType = fork(NavDefault, Menu)();

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 1080,
      selected: 1
    };
  }

  componentDidMount() {
    const { checkScreenSize } = this;
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize());
  }

  componentWillUnmount() {
    window.removeEventListener('resize');
  }

  checkScreenSize() {
    this.setState({
      width: document.innerWidth
    });
  }

  handleSelect(eventKey) {
    this.setState({
      selected: eventKey
    });
  }

  render() {
    const { width } = this.state;

    return (
      <NavType condition={width} selected={this.state.selected} onSelect={handleSelect}/>
    );
  }
}

export default Navigation;
