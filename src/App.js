import React, { Component } from 'react';
import { AnimatedBg, Transition } from 'scroll-background';
import { Element } from 'react-scroll';
import Navigation from './components/Navigation';
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
          <Element name="home" className="space" />
          <Transition height={'400px'} from="#03A9F4" to="#FFCA28">test</Transition>
          <Element name="skills" className="space" />
          <Transition height={'400px'} from="#FFCA28" to="#f9fbe7" />
          <Element name="projects" className="space" />
        </AnimatedBg>
        <Element name="contacts" style={{ height: "400px", backgroundColor: "#333" }} />
      </div>
    );
  }
}

export default App;
