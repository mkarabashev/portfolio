import React from 'react';
import { Tab } from 'material-ui';
import { Link, scroller } from 'react-scroll';

import capitalFirstLetter from '../../utils/capitalFirstLetter';

const makeNavTab = ({ isFromBottomTwo, name, cb }) => {
  const title = capitalFirstLetter(name);
  const scrollLink = (
    <Link
      children={[ title ]}
      onSetActive={cb}
      onClick={() => isFromBottomTwo && cb('skills')}
      to={name}
      spy
    />
  );

  return (
    <Tab
      onClick={() => isFromBottomTwo && cb('skills')}
      onActive={() => scroller.scrollTo(name)}
      value={name}
      label={scrollLink}
    />
  );
}

export default makeNavTab;

/*
<Tab
  onActive={() => scroller.scrollTo('home')}
  value="home"
  label={<Link to="home" onSetActive={this.handleSetActive} spy>Home</Link>}
/>

<Tab
  onClick={() => this.handleSetActive('projects')}
  onActive={() => scroller.scrollTo('projects')}
  value="projects"
  label={<Link onClick={() => this.handleSetActive('projects')} to="projects" spy onSetActive={this.handleSetActive}>Projects</Link>} />
*/
