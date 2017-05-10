import React, { Component } from 'react';
import { AnimatedBg, Transition } from 'scroll-background';
import { Element } from 'react-scroll';

import Navigation from './components/Navigation';
import Home from './components/Home';
import Projects from './components/Projects';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleColor = this.handleColor.bind(this);
    this.state = {
      backgroundColor: 'transparent'
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleColor)
    window.addEventListener('resize', this.handleColor)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll');
    window.removeEventListener('resize');
  }

  handleColor() {
    this.setState({
      backgroundColor: this.node.state.backgroundColor
    });
  }

  render () {
    const { backgroundColor } = this.state;

    return (
      <div id="content">
        <AnimatedBg ref={node => this.node = node}>
          <Navigation backgroundColor={backgroundColor} />
          <Home />
          <Transition style={{marginTop: '-50px'}} height='225px' from="#03A9F4" to="#7E57C2" position={0.8}>
            <Element name="Projects" id="projects" style={{padding: 50}} />
          </Transition>
          <Projects />
          <Transition height={'300px'} from="#7E57C2" to="#f9fbe7" />
          <Element name="skills" className="space" />
        </AnimatedBg>
        <Element name="contacts" style={{ height: "400px", backgroundColor: "#333" }} />
      </div>
    );
  }
}

export default App;
