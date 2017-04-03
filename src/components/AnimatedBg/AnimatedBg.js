import React, { Component } from 'react';
import Transition from '../Transition/Transition';
import ContentBox from '../ContentBox';

class AnimatedBg extends Component {
  constructor(props) {
    super(props);
    this.handleTransition = this.handleTransition.bind(this);
    this.colors = [];
    this.keyNum = 0;

    this.state = {
      backgroundColor: this.props.defaultColor
    };
  }

  componentWillMount() {
    this.findTransitionsNum();
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.backgroundColor === nextState.backgroundColor) return false;
    return true;
  }

  handleTransition(eventKey, color, activity) {
    this.colors[eventKey] = { color, activity };

    if (this.colors.length === this.keyNum) {
      const colorArr = this.colors.reverse();
      this.colors = [];

      for (let i = 0; i < this.keyNum; i++) {
        const { color, activity } = colorArr[i];
        if (activity !== 'pre' || i + 1 === this.keyNum) return this.setState ({
          backgroundColor: color
        });
      }
    }
  }

  findTransitionsNum() {
    React.Children.forEach(this.props.children, child => {
      if (child.type === Transition) this.keyNum += 1;
    });
  }

  childrenWithTransition() {
    const { handleTransition, state: { backgroundColor } } = this;
    return React.Children.map(this.props.children, child => {
      if (child.type === Transition) {
        return React.cloneElement(child, { handleTransition })
      }

      if (child.type === ContentBox) {
        return React.cloneElement(child, { backgroundColor })
      }

      return child;
    });
  }

  render() {
    const { backgroundColor } = this.state;

    return (
      <div style={{ backgroundColor }}>
        { this.childrenWithTransition() }
      </div>
    );
  }
}

export default AnimatedBg;
