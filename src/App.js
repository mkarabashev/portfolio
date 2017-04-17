import React, { Component } from 'react';
import { Link, Element } from 'react-scroll';
import classnames from 'classnames';
import Navbar from './components/Navbar';
import ContentBox from './components/ContentBox';
import AnimatedBg from './components/AnimatedBg/AnimatedBg';
import Transition from './components/Transition/Transition';
import './App.css';

class App extends Component {
  render() {
    return (
      <AnimatedBg defaultColor="#03A9F4">
        <ContentBox>
          <Navbar className="navigation">
            <ul>
              <li><Link className={classnames(this.isActive === 1 && 'active')} onSetActive={console.log('samth')} to="home">Home</Link></li>
              <li><Link activeClass="active" to="projects" spy>Projects</Link></li>
              <li><Link activeClass="active" to="skills" spy>Skills</Link></li>
              <li><Link activeClass="active" to="contacts" spy>Contacts</Link></li>
            </ul>
          </Navbar>
        </ContentBox>
        <Element name="home" className="space" />
        <hr />
        <Transition eventKey={0} height={'400px'} from="#03A9F4" to="#fff" position="1" />
        <hr />
        <Element name="projects" className="space" />
        <hr />
        <Transition eventKey={1} height={'400px'} from="#fff" to="#03A9F4" />
        <hr />
        <Element name="skills" className="space" />
      </AnimatedBg>
    );
  }
}

export default App;
