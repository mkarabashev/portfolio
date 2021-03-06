import React, { Component } from 'react';
import { Tabs } from 'material-ui';
import hexToHsl from 'hex-to-hsl';

import { makeNavTab } from '../../HOC';
import './Navigation.css';

const tabProps = [
  {
    name: 'home'
  },
  {
    name: 'projects'
  },
  {
    name: 'skills',
    isFromBottomTwo: true
  },
  {
    name: 'contacts',
    isFromBottomTwo: true
  }
];

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = { active: 'home' };
    this.root = document.getElementById('root');
    this.handleSetActive = this.handleSetActive.bind(this);
  }

  handleSetActive(to) {
    const { innerHeight, pageYOffset } = window;
    const isAtBottom = (innerHeight + pageYOffset) >= this.root.offsetHeight

    if (isAtBottom) this.setState({ active: 'contacts'});
    else this.setState({ active: to });
  }

  render() {
    const { backgroundColor } = this.props;
    const [ , , luminosity ] = hexToHsl(backgroundColor);
    const color = luminosity > 70 ? 'black' : 'white';

    const tabsWithCb = tabProps.map(tab => ({ ...tab, cb: this.handleSetActive }));
    const navTabs = tabsWithCb.map(tab => makeNavTab(tab));

    return (
      <navigation style={{ backgroundColor, color }} id="navigation">
        <Tabs
          value={this.state.active}
          className="tabs"
          inkBarStyle={{ backgroundColor: color }}
          children={navTabs}
        />
      </navigation>
    );
  }
}

export default Navigation;
