import React, { Component } from 'react';
import { Tabs, Tab } from 'material-ui';
import { Link, scroller } from 'react-scroll';

import hslToHex from 'hsl-to-hex';
import hexToHsl from 'hex-to-hsl';
import './Navigation.css';

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
    const [ hue, saturation, luminosity ] = hexToHsl(backgroundColor);
    const color = luminosity > 70 ? hslToHex(hue, saturation, 5) : 'white' ;

    return (
      <navigation style={{ backgroundColor, color }} id="navigation">
        <Tabs
          value={this.state.active}
          className="tabs"
          inkBarStyle={{ backgroundColor: color }}
        >
          <Tab onActive={() => scroller.scrollTo('home')} value="home" label={<Link to="home" spy onSetActive={this.handleSetActive}>Home</Link>} />
          <Tab onActive={() => scroller.scrollTo('skills')} value="skills" label={<Link to="skills" spy onSetActive={this.handleSetActive}>Skills</Link>} />
          <Tab onClick={() => this.handleSetActive('projects')} onActive={() => scroller.scrollTo('projects')} value="projects" label={<Link onClick={() => this.handleSetActive('projects')} to="projects" spy onSetActive={this.handleSetActive}>Projects</Link>} />
          <Tab onClick={() => this.handleSetActive('projects')} onActive={() => scroller.scrollTo('contacts')} value="contacts" label={<Link onClick={() => this.handleSetActive('projects')} to="contacts" spy onSetActive={this.handleSetActive}>Contacts</Link>} />
        </Tabs>
      </navigation>
    );
  }
}

export default Navigation;
